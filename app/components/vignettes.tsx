import { Vignette } from "@/app/components/Vignette";

/* ─────────────────────────── Shared pieces ─────────────────────────── */

/** The stand-in capture: a light dashboard that reads as a real screenshot.
 *  `accent` varies the colour so a stack of captures looks like a stack of
 *  different captures rather than the same one three times. */
function Shot({ mail, accent }: { mail?: boolean; accent?: string }) {
  const style: React.CSSProperties & Record<string, string> = accent
    ? { "--shot-accent": accent }
    : {};

  return (
    <div className="vg-shot" style={style}>
      <div className="vg-shot-top">
        <span className="vg-shot-logo" />
        <u />
        <s />
      </div>
      <div className="vg-shot-body">
        <div className="vg-shot-nav">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="vg-shot-main">
          <div className="vg-shot-h" />
          <div className="vg-shot-line" />
          <div className="vg-shot-line short" />
          {mail && (
            <div className="vg-shot-mail">
              ops@northwind-labs.io
              <i className="mk-redact" />
            </div>
          )}
          <div className="vg-shot-chart">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

function Cursor({ className }: { className: string }) {
  return (
    <svg className={`vg-cursor ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 2 L4 18.5 L8.6 14.2 L11.4 20.8 L14.2 19.6 L11.4 13.2 L17.5 12.9 Z"
        fill="#fff"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth="1"
      />
    </svg>
  );
}

function CodeWindow({ className }: { className: string }) {
  return (
    <div className={`vg-win vg-win-dark ${className}`}>
      <div className="vg-win-bar">
        <b />
        <b />
        <b />
      </div>
      <div className="vg-code">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

const GRADIENT_SWATCHES = [
  "linear-gradient(135deg,#4f46e5,#9333ea)",
  "linear-gradient(135deg,#ff6a88,#ff99ac)",
  "linear-gradient(135deg,#2193b0,#6dd5ed)",
  "linear-gradient(135deg,#56ccf2,#2f80ed)",
  "linear-gradient(135deg,#ff9966,#ff5e62)",
  "linear-gradient(135deg,#0f2027,#2c5364)",
];

const MARK_COLORS = ["#6366F1", "#0F172A", "#FFFFFF", "#10B981", "#F43F5E", "#F59E0B"];

const STUDIO_TOOLS = ["V", "D", "A", "S", "T", "X", "C", "P", "R"];

function ToolRail({ activeClass }: { activeClass?: string }) {
  return (
    <div className="st-rail">
      <div className={`st-tool-active ${activeClass ?? ""}`} />
      {STUDIO_TOOLS.map((t) => (
        <div key={t} className="st-tool">
          {t}
        </div>
      ))}
    </div>
  );
}

/** Caption under a vignette: a mono label and a line of plain description. */
export function VignetteCaption({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <p className="vg-caption">
      <b>{label}</b>
      <span>{children}</span>
    </p>
  );
}

/* ═══════════════════════════ 1 · Capture flow ═══════════════════════════ */

export function CaptureFlowVignette() {
  return (
    <Vignette
      cycle="8s"
      freeze={0.34}
      className="cf"
      label="Pressing Ctrl+Q dims the screen, a region is dragged out with a live pixel readout, and the capture lands on the clipboard with a floating preview card."
    >
      <div className="vg-desk" />
      <CodeWindow className="cf-win-a" />
      <div className="vg-win vg-win-light cf-win-b">
        <Shot />
      </div>
      <div className="vg-taskbar">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="cf-sel">
        <div className="cf-dims vg-pill">
          <span>184 &times; 118</span>
          <span>326 &times; 210</span>
          <span>412 &times; 268</span>
        </div>
      </div>

      <div className="cf-keys">
        <span className="vg-kbd">Ctrl</span>
        <span>+</span>
        <span className="vg-kbd">Q</span>
      </div>

      <Cursor className="cf-cursor" />
      <div className="vg-flash cf-flash" />

      <div className="vg-toast cf-toast">
        <span className="tick" />
        Copied to clipboard
      </div>
    </Vignette>
  );
}

/* ═════════════════════════ 2 · Studio: Compose ══════════════════════════ */

export function ComposeVignette() {
  return (
    <Vignette
      cycle="11s"
      freeze={0.5}
      className="cp"
      label="In Studio's Compose mode a bare screenshot gains a gradient background, a browser frame, padding, rounded corners and a drop shadow, then saves as a new file."
    >
      <div className="st">
        <div className="st-header">
          <span className="st-title">
            Studio <em>&middot; Mockup</em>
          </span>
          <div className="st-seg">
            <span>Markup</span>
            <span className="on">Compose</span>
          </div>
          <span className="st-save cp-save">Save as new</span>
        </div>

        <div className="st-body">
          <ToolRail />

          <div className="st-canvas">
            <div className="cp-stage">
              <div className="cp-bg cp-bg-1" />
              <div className="cp-bg cp-bg-2" />
              <div className="cp-frame">
                <div className="cp-frame-bar">
                  <b />
                  <b />
                  <b />
                  <u />
                </div>
                <div className="cp-shot-wrap">
                  <Shot />
                </div>
              </div>
            </div>
            <div className="vg-toast cp-toast">
              <span className="tick" />
              Saved as new
            </div>
          </div>

          <div className="st-side">
            <div>
              <p className="st-label">Background</p>
              <div className="st-seg" style={{ marginTop: "0.8cqw" }}>
                <span className="on">Gradient</span>
                <span>Wallpaper</span>
              </div>
            </div>
            <div className="st-row">
              {GRADIENT_SWATCHES.map((g, i) => (
                <span
                  key={g}
                  className={`st-swatch ring ${i === 0 ? "cp-sw-1" : ""} ${i === 3 ? "cp-sw-2" : ""}`}
                  style={{ background: g }}
                />
              ))}
            </div>
            <div>
              <p className="st-label">Frame</p>
              <div className="st-seg" style={{ marginTop: "0.8cqw" }}>
                <span>Window</span>
                <span className="on">Browser</span>
              </div>
            </div>
            <div>
              <p className="st-label">Padding</p>
              <div className="st-slider cp-pad" style={{ marginTop: "1.2cqw" }}>
                <i />
              </div>
            </div>
            <div>
              <p className="st-label">Rounding</p>
              <div className="st-slider cp-round" style={{ marginTop: "1.2cqw" }}>
                <i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Vignette>
  );
}

/* ═════════════════════════ 3 · Studio: Markup ═══════════════════════════ */

export function MarkupVignette() {
  return (
    <Vignette
      cycle="12s"
      freeze={0.72}
      className="mk"
      label="In Studio's Markup mode an arrow is drawn onto a screenshot, numbered callouts are placed, an email address is redacted, then the arrow is selected with the pointer, moved and recoloured."
    >
      <div className="st">
        <div className="st-header">
          <span className="st-title">
            Studio <em>&middot; Mockup</em>
          </span>
          <div className="st-seg">
            <span className="on">Markup</span>
            <span>Compose</span>
          </div>
          <span className="st-save">Save</span>
        </div>

        <div className="st-body">
          <ToolRail activeClass="mk-active" />

          <div className="st-canvas">
            <div className="mk-canvas-shot">
              <Shot mail />

              <div className="mk-arrow-group">
                <svg className="mk-arrow" viewBox="0 0 160 100" aria-hidden="true">
                  <path d="M 30 26 Q 62 30 89 53" />
                  <polygon className="mk-arrow-head" points="98,61 84.3,58.4 93.5,47.8" />
                </svg>
              </div>

              <b className="mk-callout">1</b>
              <b className="mk-callout">2</b>
              <b className="mk-callout">3</b>

              <div className="mk-handles">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          <div className="st-side">
            <div>
              <p className="st-label">Colour</p>
              <div className="st-row" style={{ marginTop: "1cqw" }}>
                {MARK_COLORS.map((c, i) => (
                  <span
                    key={c}
                    className={`st-swatch ring ${i === 4 ? "mk-sw-a" : ""} ${i === 0 ? "mk-sw-b" : ""}`}
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="st-label">Redact</p>
              <div className="st-seg" style={{ marginTop: "0.8cqw" }}>
                <span className="on">Block</span>
                <span>Pixel</span>
              </div>
            </div>
            <div>
              <p className="st-label">History</p>
              <div className="st-row" style={{ marginTop: "1cqw" }}>
                <span className="st-tool mk-undo">&#8630;</span>
                <span className="st-tool">&#8631;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Vignette>
  );
}

/* ══════════════════════ 4 · Snap to window + loupe ══════════════════════ */

export function SnapWindowVignette() {
  return (
    <Vignette
      cycle="13s"
      freeze={0.35}
      className="sn"
      label="Hovering a window outlines exactly what would be captured, a pixel loupe follows the cursor with a live colour and coordinate readout, and holding Alt settles the selection so its edges can be dragged before capturing."
    >
      <div className="vg-desk" />
      <CodeWindow className="sn-win-a" />
      <div className="vg-win vg-win-light sn-win-b">
        <Shot />
      </div>
      <CodeWindow className="sn-win-c" />
      <div className="vg-taskbar">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="sn-hint sn-hint-a">
        <div className="sn-hint-label">
          <b>main.js &middot; Code</b>
          <span>612 &times; 430 &middot; Click to capture this window</span>
        </div>
      </div>
      <div className="sn-hint sn-hint-b">
        <div className="sn-hint-label">
          <b>Analytics &middot; Chrome</b>
          <span>742 &times; 468 &middot; Click to capture this window</span>
        </div>
      </div>

      <div className="sn-sel">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="sn-loupe">
        <div className="sn-loupe-px">
          <span className="sn-loupe-block" />
          <span className="sn-loupe-block" />
          <span className="sn-loupe-block" />
          <span className="sn-loupe-grid" />
          <span className="sn-loupe-x" />
        </div>
        <div className="sn-loupe-read">
          <b />
          <span>
            <em>418, 262</em>
            <em>604, 318</em>
            <em>962, 404</em>
          </span>
        </div>
      </div>

      <div className="sn-bar">
        <span className="size">742 &times; 468</span>
        <span className="hint">Enter to confirm</span>
        <span className="go">Capture</span>
      </div>

      <Cursor className="sn-cursor" />
      <div className="vg-flash sn-flash" />
    </Vignette>
  );
}

/* ══════════════════════ 5 · Record, zoom, export ════════════════════════ */

export function RecordVignette() {
  return (
    <Vignette
      cycle="14s"
      freeze={0.86}
      className="rc-vg"
      label="A three second countdown starts a region recording with a pulsing red border and a mic level meter. Clicks during the take become zoom keyframes on the Studio timeline, the clip is trimmed, and the MP4 renders several times faster than real time."
    >
      <div className="rc">
        <div className="rc-stage">
          <div className="vg-desk" />
          <div className="vg-win vg-win-light rc-shot">
            <Shot />
          </div>
          <CodeWindow className="rc-shot-b" />

          <div className="rc-region" />

          <i className="rc-click" />
          <i className="rc-click" />
          <i className="rc-click" />

          <div className="rc-count">
            <span>3</span>
            <span>2</span>
            <span>1</span>
          </div>

          <div className="rc-ctrl">
            <span className="rc-dot" />
            <span className="rc-time">
              <span>0:03</span>
              <span>0:07</span>
              <span>0:12</span>
            </span>
            <span className="rc-mic">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span className="rc-ctrl-btn" />
            <span className="rc-ctrl-btn stop" />
          </div>
        </div>

        <div className="rc-panel">
          <div className="rc-panel-inner">
            <div className="rc-meta">
              <b>Auto zoom-ins from your clicks</b>
              <i>Trim 0:02 &ndash; 0:09</i>
            </div>
            <div className="rc-track">
              <i className="rc-key" />
              <i className="rc-key" />
              <i className="rc-key" />
              <div className="rc-trim l">
                <i />
              </div>
              <div className="rc-trim r">
                <i />
              </div>
              <div className="rc-head" />
            </div>
            <div className="rc-export">
              <div className="st-seg">
                <span className="on">MP4</span>
                <span>WebM</span>
                <span>GIF</span>
                <span>WebP</span>
              </div>
              <div className="rc-bar">
                <i />
              </div>
              <span className="rc-note">
                <span>Rendering 3.4&times; real time</span>
                <span>Done &middot; 4.2 MB</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Vignette>
  );
}

/* ═══════════════════ 6 · Floating previews and recents ══════════════════ */

export function PreviewsVignette() {
  return (
    <Vignette
      cycle="11s"
      freeze={0.88}
      className="fp"
      label="Captures stack up as always-on-top preview cards. One is pinned so it survives the timeout that clears the others, and the tray's recent captures list puts an expired one back on screen."
    >
      <div className="vg-desk" />
      <CodeWindow className="cf-win-a" />
      <div className="vg-taskbar">
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="fp-card fp-3">
        <div className="fp-card-img">
          <Shot accent="#f59e0b" />
        </div>
        <div className="fp-card-row">
          <span className="fp-pin" />
          <i />
          <i />
        </div>
      </div>

      <div className="fp-card fp-2">
        <div className="fp-card-img">
          <Shot accent="#10b981" />
        </div>
        <div className="fp-card-row">
          <span className="fp-pin" />
          <i />
          <i />
        </div>
      </div>

      <div className="fp-card fp-1">
        <div className="fp-card-img">
          <Shot />
        </div>
        <div className="fp-card-row">
          <span className="fp-pin" />
          <i />
          <i />
        </div>
      </div>

      <div className="fp-tray">
        <p className="fp-tray-label">Recent captures</p>
        <div className="fp-tray-row">
          <b />
          14:02:11
        </div>
        <div className="fp-tray-row">
          <b />
          13:58:40
        </div>
        <div className="fp-tray-row">
          <b />
          13:51:07
        </div>
      </div>

      <div className="fp-card fp-restored">
        <div className="fp-card-img">
          <Shot accent="#f59e0b" />
        </div>
        <div className="fp-card-row">
          <span className="fp-pin" />
          <i />
          <i />
        </div>
      </div>

      <Cursor className="fp-cursor" />
    </Vignette>
  );
}
