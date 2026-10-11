"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Cards, ToastPill, type Shot, type Toast } from "./cards";

// The hero is a small copy of QGN's capture overlay. Drag a region and it is
// cut out of the page and put on your clipboard as a real PNG, then shown on a
// floating preview card, as the app does with your screen. Click for the whole hero,
// Ctrl+Q dims it the way the hotkey does, Space takes all of it.
//
// The page is drawn twice: the browser draws the HTML, and paint() draws the
// same dots and text onto a canvas, which is what a capture cuts from.

type Rect = { x: number; y: number; w: number; h: number };

const GAP = 24;

export default function Capture({ children }: { children: React.ReactNode }) {
  const hero = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sel, setSel] = useState<Rect | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [armed, setArmed] = useState(false);
  const [flash, setFlash] = useState<Rect | null>(null);
  const [shots, setShots] = useState<Shot[]>([]);
  const [toast, setToast] = useState<Toast | null>(null);
  const ids = useRef(0);
  // A phone or tablet: no demo, the page scrolls as normal. Read with an
  // explicit server value, so the first paint matches the server HTML.
  const touch = useSyncExternalStore(
    () => () => {},
    () => matchMedia("(pointer: coarse)").matches,
    () => false,
  );
  const drag = useRef<{ x: number; y: number; id: number } | null>(null);

  // The dots: dim everywhere, brighter near the cursor, like the loupe.
  useEffect(() => {
    const c = canvas.current!;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const draw = () => {
      const dpr = devicePixelRatio || 1;
      const { width, height } = c.getBoundingClientRect();
      if (c.width !== Math.round(width * dpr)) {
        c.width = Math.round(width * dpr);
        c.height = Math.round(height * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      dots(ctx, width, height, cursor);
    };
    raf = requestAnimationFrame(draw);
    const onResize = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", onResize); };
  }, [cursor]);


  const local = (e: React.PointerEvent) => {
    const r = hero.current!.getBoundingClientRect();
    return { x: Math.max(0, Math.min(r.width, e.clientX - r.left)), y: Math.max(0, Math.min(r.height, e.clientY - r.top)) };
  };

  const onDown = (e: React.PointerEvent) => {
    if (touch || e.button !== 0 || (e.target as HTMLElement).closest("a,button")) return;
    e.preventDefault();
    hero.current!.setPointerCapture(e.pointerId);
    const p = local(e);
    drag.current = { ...p, id: e.pointerId };
    setSel({ x: p.x, y: p.y, w: 0, h: 0 });
  };

  const onMove = (e: React.PointerEvent) => {
    if (touch) return;
    const p = local(e);
    setCursor(p);
    const d = drag.current;
    if (!d) return;
    setSel({ x: Math.min(d.x, p.x), y: Math.min(d.y, p.y), w: Math.abs(p.x - d.x), h: Math.abs(p.y - d.y) });
  };

  const onUp = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    const p = local(e);
    let r = { x: Math.min(d.x, p.x), y: Math.min(d.y, p.y), w: Math.abs(p.x - d.x), h: Math.abs(p.y - d.y) };
    // A click is not a region: in the app it takes the window under the cursor,
    // and here the window is the hero.
    if (r.w < 6 || r.h < 6) {
      const b = hero.current!.getBoundingClientRect();
      r = { x: 0, y: 0, w: b.width, h: b.height };
    }
    take(r);
  };

  // Cut the region out of a fresh painting of the hero and put it on the
  // clipboard. The clipboard write starts synchronously, inside the gesture,
  // with the image still to come, which is what browsers ask for.
  function take(r: Rect) {
    setSel(null);
    setArmed(false);
    setFlash(r);
    setTimeout(() => setFlash(null), 350);
    const dpr = devicePixelRatio || 1;
    const out = document.createElement("canvas");
    out.width = Math.round(r.w * dpr);
    out.height = Math.round(r.h * dpr);
    const ctx = out.getContext("2d")!;
    ctx.scale(dpr, dpr);
    ctx.translate(-r.x, -r.y);
    ctx.fillStyle = "#000";
    ctx.fillRect(r.x, r.y, r.w, r.h);
    const box = hero.current!.getBoundingClientRect();
    dots(ctx, box.width, box.height, null);
    text(ctx, hero.current!, box);
    const png = new Promise<Blob>((ok, fail) => out.toBlob((b) => (b ? ok(b) : fail(new Error("no image"))), "image/png"));
    let write: Promise<void>;
    try {
      write = navigator.clipboard.write([new ClipboardItem({ "image/png": png })]);
    } catch (err) {
      write = Promise.reject(err);
    }
    Promise.allSettled([png, write]).then(([b, w]) => {
      if (b.status !== "fulfilled") return;
      // At most four cards, as a screen would hold; the oldest goes first.
      const shot = { id: ++ids.current, url: URL.createObjectURL(b.value), blob: b.value, w: out.width, h: out.height };
      setShots((old) => {
        old.slice(0, -3).forEach((o) => URL.revokeObjectURL(o.url));
        return [...old.slice(-3), shot];
      });
      say(w.status === "fulfilled" ? "Copied to clipboard" : null);
    });
  }

  // The app's toast. A browser that refuses image writes gets told how else.
  function say(text: string | null) {
    const id = ++ids.current;
    setToast(text ? { id, text } : { id, text: "This browser won't copy images. Drag the card out instead.", error: true });
    setTimeout(() => setToast((t) => (t?.id === id ? null : t)), 3100);
  }

  const copy = (s: Shot) => {
    navigator.clipboard
      .write([new ClipboardItem({ "image/png": s.blob })])
      .then(() => say("Copied to clipboard"), () => say(null));
  };

  const close = (id: number) =>
    setShots((old) => {
      old.filter((o) => o.id === id).forEach((o) => URL.revokeObjectURL(o.url));
      return old.filter((o) => o.id !== id);
    });

  // Ctrl+Q anywhere on the page: back to the top, dimmed and waiting.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && !e.shiftKey && !e.altKey && e.key.toLowerCase() === "q") {
        e.preventDefault();
        scrollTo({ top: 0, behavior: "smooth" });
        setArmed(true);
      } else if (e.key === "Escape") {
        setArmed(false);
        setSel(null);
        drag.current = null;
      } else if (e.key === " " && armed) {
        e.preventDefault();
        const r = hero.current!.getBoundingClientRect();
        take({ x: 0, y: 0, w: r.width, h: r.height });
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  });

  return (
    <section
      className="hero"
      ref={hero}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={() => setCursor(null)}
      style={touch ? { cursor: "auto" } : undefined}
    >
      <canvas className="scene" ref={canvas} aria-hidden="true" />
      {armed && !sel && <div className="dim" style={{ background: "rgba(0,0,0,.55)" }} />}
      {children}
      <p className="try say" aria-live="polite">
        {touch ? (
          <>a windows app. the demo up here wants a mouse.</>
        ) : armed ? (
          <>drag a region. <kbd>space</kbd> for all of it. <kbd>esc</kbd> to cancel.</>
        ) : (
          <>
            try it here: <b>drag</b> a region, <b>click</b> for all of it, or press <kbd>ctrl</kbd>+<kbd>q</kbd>
          </>
        )}
      </p>
      {sel && sel.w + sel.h > 0 && (
        <div className="sel" style={{ left: sel.x, top: sel.y, width: sel.w, height: sel.h }}>
          <span>
            {Math.round(sel.w * (devicePixelRatio || 1))} × {Math.round(sel.h * (devicePixelRatio || 1))}
          </span>
        </div>
      )}
      {cursor && !sel && !touch && (
        <div className="loupe" style={{ left: cursor.x, top: cursor.y }}>
          {Math.round(cursor.x)}, {Math.round(cursor.y)}
        </div>
      )}
      {flash && <div className="flash" style={{ left: flash.x, top: flash.y, width: flash.w, height: flash.h }} />}
      <Cards shots={shots} onClose={close} onCopy={copy} />
      <ToastPill toast={toast} />
    </section>
  );
}

function dots(ctx: CanvasRenderingContext2D, w: number, h: number, near: { x: number; y: number } | null) {
  for (let y = GAP / 2; y < h; y += GAP) {
    for (let x = GAP / 2; x < w; x += GAP) {
      let a = 0.13;
      if (near) {
        const d = Math.hypot(x - near.x, y - near.y);
        if (d < 140) a += (1 - d / 140) * 0.5;
      }
      ctx.fillStyle = a > 0.14 ? `rgba(224,51,138,${a})` : `rgba(232,233,237,${a})`;
      ctx.fillRect(x - 1, y - 1, 2, 2);
    }
  }
}

// Draw every line of visible text in the hero where the browser put it, in the
// font and colour it has, so a capture looks like what you aimed at.
function text(ctx: CanvasRenderingContext2D, root: HTMLElement, box: DOMRect) {
  const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  for (let n = walk.nextNode(); n; n = walk.nextNode()) {
    const s = n.textContent ?? "";
    if (!s.trim() || !n.parentElement) continue;
    const st = getComputedStyle(n.parentElement);
    if (st.visibility === "hidden" || st.display === "none" || n.parentElement.closest(".qcard,.qtoast-wrap,.sel,.loupe")) continue;
    ctx.font = `${st.fontWeight} ${st.fontSize} ${st.fontFamily}`;
    ctx.fillStyle = st.color;
    if ("letterSpacing" in ctx) (ctx as unknown as { letterSpacing: string }).letterSpacing = st.letterSpacing === "normal" ? "0px" : st.letterSpacing;
    ctx.textBaseline = "alphabetic";
    // One rect per line the text node wraps onto: draw it word by word, so a
    // wrapped heading lands on the right lines too.
    const words = s.split(/(\s+)/);
    let i = 0;
    for (const w of words) {
      const start = i;
      i += w.length;
      if (!w.trim()) continue;
      range.setStart(n, start);
      range.setEnd(n, i);
      const r = range.getBoundingClientRect();
      if (!r.width) continue;
      const m = ctx.measureText(w);
      const asc = m.fontBoundingBoxAscent ?? r.height * 0.8;
      const desc = m.fontBoundingBoxDescent ?? r.height * 0.2;
      ctx.fillText(w, r.left - box.left, r.top - box.top + (r.height - asc - desc) / 2 + asc);
    }
  }
}
