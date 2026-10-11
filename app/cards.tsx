"use client";

import { useEffect, useState } from "react";

// The app's floating preview cards (preview.html) and its glass toast
// (toast-copied.html), rebuilt for the page: same size, border, shadow,
// buttons, countdown bar and spring, stacked upward from the bottom right.

export type Shot = { id: number; url: string; blob: Blob; w: number; h: number };
export type Toast = { id: number; text: string; error?: boolean };

// From main.js: cards are 260 wide, the image 80 to 200 high, 8 apart, 20 from
// the screen edge, and they go after 10 seconds unless pinned or hovered.
const CARD_WIDTH = 260;
const MIN_IMG_H = 80;
const MAX_IMG_H = 200;
const GAP = 8;
const MARGIN = 20;
const DISMISS_S = 10;

export function cardHeight(s: Shot) {
  return Math.max(MIN_IMG_H, Math.min(MAX_IMG_H, Math.round((CARD_WIDTH * s.h) / s.w))) + 2;
}

export function Cards({ shots, onClose, onCopy }: { shots: Shot[]; onClose: (id: number) => void; onCopy: (s: Shot) => void }) {
  // The newest card sits at the bottom, the older ones above it.
  let offset = 0;
  const placed = [...shots].reverse().map((s) => {
    const bottom = MARGIN + offset;
    offset += cardHeight(s) + GAP;
    return { s, bottom };
  });
  return (
    <>
      {placed.map(({ s, bottom }) => (
        <Card key={s.id} shot={s} bottom={bottom} onClose={() => onClose(s.id)} onCopy={() => onCopy(s)} />
      ))}
    </>
  );
}

function Card({ shot, bottom, onClose, onCopy }: { shot: Shot; bottom: number; onClose: () => void; onCopy: () => void }) {
  const [shown, setShown] = useState(false);
  const [going, setGoing] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const dismiss = () => {
    if (going) return;
    setGoing(true);
    setTimeout(onClose, 250);
  };

  return (
    <div
      className={`qcard${shown ? " visible" : ""}${going ? " dismissing" : ""}`}
      style={{ bottom, height: cardHeight(shot) }}
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="qcard-in">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="thumb" src={shot.url} alt="Your capture of this page" draggable />
        {!pinned && (
          <div className="progress">
            <div className="fill" style={{ animationDuration: `${DISMISS_S}s` }} onAnimationEnd={dismiss} />
          </div>
        )}
        <button className={`qb${pinned ? " pinned" : ""}`} style={{ left: 6 }} title="Pin" aria-label="Pin" onClick={() => setPinned(!pinned)}>
          <svg viewBox="0 0 640 640" width="14" height="14" fill="white" opacity="0.85"><path d={PIN} /></svg>
        </button>
        <a className="qb" style={{ left: 40 }} title="Annotate" aria-label="Annotate" href="/features/screenshot-annotation">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"><path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
        </a>
        <a className="qb" style={{ left: 74 }} title="Open in Studio" aria-label="Open in Studio" href="/features/studio">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.6" /><path d="M21 15l-5-5L5 21" /></svg>
        </a>
        <button className="qb" style={{ left: 108 }} title="Copy to clipboard" aria-label="Copy to clipboard" onClick={onCopy}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
        </button>
        <button className="qb" style={{ right: 6 }} title="Close" aria-label="Close" onClick={dismiss}>
          <svg viewBox="0 0 640 640" width="14" height="14" fill="white" opacity="0.85"><path d={X} /></svg>
        </button>
      </div>
    </div>
  );
}

// The glass pill the app shows at the bottom centre of the screen.
export function ToastPill({ toast }: { toast: Toast | null }) {
  if (!toast) return null;
  return (
    <div className="qtoast-wrap" role="status" aria-live="polite">
      <div key={toast.id} className={`qtoast${toast.error ? " error" : ""}`}>
        {toast.text}
      </div>
    </div>
  );
}

// Font Awesome Free 7.2.0 icons, as the app ships them (assets/icons).
// https://fontawesome.com License: https://fontawesome.com/license/free
const PIN =
  "M160 96C160 78.3 174.3 64 192 64L448 64C465.7 64 480 78.3 480 96C480 113.7 465.7 128 448 128L418.5 128L428.8 262.1C465.9 283.3 494.6 318.5 507 361.8L510.8 375.2C513.6 384.9 511.6 395.2 505.6 403.3C499.6 411.4 490 416 480 416L160 416C150 416 140.5 411.3 134.5 403.3C128.5 395.3 126.5 384.9 129.3 375.2L133 361.8C145.4 318.5 174 283.3 211.2 262.1L221.5 128L192 128C174.3 128 160 113.7 160 96zM288 464L352 464L352 576C352 593.7 337.7 608 320 608C302.3 608 288 593.7 288 576L288 464z";
const X =
  "M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z";
