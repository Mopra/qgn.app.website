import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/alternatives/greenshot",
  "Greenshot alternative for Windows with screen recording: QGN",
  "QGN is a free, open source Greenshot alternative for Windows 10 and 11. The same quick region capture, plus screen recording, floating previews, and frames and backgrounds for your screenshots.",
);

const qa: [string, string][] = [
  [
    "Is Greenshot still maintained?",
    "Yes. Greenshot 1.3.323 came out in October 2026, and newer 1.4 builds are being published as pre-releases. It is a living project.",
  ],
  [
    "Does Greenshot record the screen?",
    "No. Greenshot takes screenshots only. QGN records a region with Ctrl+Shift+Q, with microphone and system audio.",
  ],
  [
    "Are both free and open source?",
    "Yes. Greenshot is GPL-3.0. QGN is MIT.",
  ],
  [
    "Can QGN send a capture to Office or print it like Greenshot?",
    "No. QGN copies to the clipboard and can auto-save to a folder. From there you paste or drag it wherever you want.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "greenshot" }]}
      title="A Greenshot alternative that also records."
      lede="Greenshot has been the quiet favourite on Windows for years. QGN keeps the speed and adds the things Greenshot never set out to do."
      ld={faqLd(qa)}
    >
      <p>
        Greenshot is good software. It is free, open source under GPL-3.0, and still maintained: 1.3.323 shipped in
        October 2026. It captures a region, a window or the full screen, lets you annotate, highlight and obfuscate, and
        then sends the result to a file, the printer, the clipboard, an email or an Office program.
      </p>
      <p>
        What it does not do is record. And its editor is from a time when a screenshot went into a document, not onto
        a gradient in a launch tweet. Those are the two gaps QGN was built around.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["Greenshot", "QGN"]}
        rows={[
          ["capture", "region, window, full screen", "region, window, or full display"],
          ["to clipboard", "one of several destinations", "always, the moment you release"],
          ["editor", "annotate, highlight, obfuscate", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["backgrounds and frames", "no", "gradients, wallpapers, browser and window frames"],
          ["screen recording", "no", "yes, with mic and system audio, MP4, WebM, GIF, WebP"],
          ["preview after capture", "a destination menu", "a floating card you can drag out or pin"],
          ["export destinations", "file, print, email, Office, upload plugins", "clipboard, and a folder if you want"],
          ["source", "open, GPL-3.0", "open, MIT"],
          ["price", "free", "free"],
          ["platforms", "Windows", "Windows"],
        ]}
      />

      <h2>what you gain</h2>
      <ul>
        <li>
          <b>Recording.</b> <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records a region. Pause and resume, mic and
          system audio, an optional countdown. Then trim it and add zooms made from your own clicks. See{" "}
          <Link href="/features/screen-recording">screen recording</Link>.
        </li>
        <li>
          <b>Frames and backgrounds.</b> Compose puts a capture on a gradient or wallpaper, inside a browser or window
          frame, with padding and a shadow. See <Link href="/features/screenshot-mockup-tool">mockups</Link>.
        </li>
        <li>
          <b>Marks you can still change.</b> Click an arrow you placed ten minutes ago, move it, recolour it. Redaction
          is a solid block by default, so the reader can&apos;t undo it. See{" "}
          <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>
          <b>Window snapping.</b> Hover a window and QGN outlines and names it. Click to take exactly that window. Edges
          snap while you drag.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Destinations. Greenshot can print, email or open a capture in Office directly. QGN gives you the clipboard.</li>
        <li>Plugins and uploads. Greenshot has upload plugins. QGN uploads nothing, anywhere.</li>
        <li>Size. Greenshot is small. QGN is an Electron app, and the installer is about 85 MB.</li>
        <li>Maturity. Greenshot has years of releases behind it. QGN is still at 0.1.x.</li>
      </ul>

      <h2>switching</h2>
      <p>
        Greenshot sits on <kbd>PrtSc</kbd>. QGN uses <kbd>ctrl</kbd>+<kbd>q</kbd>, so you can keep both for a week and
        see which one your fingers reach for. Any QGN hotkey can be rebound in its settings.
      </p>

      <h2>questions</h2>
      {qa.map(([q, a]) => (
        <p key={q}>
          <b>{q}</b>
          <br />
          {a}
        </p>
      ))}
    </Doc>
  );
}
