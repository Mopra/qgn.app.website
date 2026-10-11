import { ImageResponse } from "next/og";

export const alt = "QGN: Ctrl+Q, straight to the clipboard";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview: a dotted screen with a region being taken, and its size.
export default function Image() {
  const dots = [];
  for (let y = 0; y < 630; y += 30) for (let x = 0; x < 1200; x += 30) dots.push([x + 15, y + 15]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#000", display: "flex", position: "relative" }}>
        {dots.map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: 3, height: 3, background: "#1d1d21" }} />
        ))}
        <div style={{ position: "absolute", left: 640, top: 150, width: 440, height: 300, border: "2px solid #e0338a", display: "flex" }}>
          <div style={{ position: "absolute", top: -40, left: -2, background: "#e0338a", color: "#fff", fontSize: 22, padding: "2px 10px", borderRadius: 4 }}>
            880 × 600
          </div>
        </div>
        <div style={{ position: "absolute", left: 90, top: 200, display: "flex", flexDirection: "column", color: "#e8e9ed" }}>
          <div style={{ fontSize: 72 }}>qgn</div>
          <div style={{ fontSize: 32, color: "#6b6f78", marginTop: 20, maxWidth: 480, lineHeight: 1.35 }}>
            {"Screenshots for Windows. Ctrl+Q, drag, it's on your clipboard."}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
