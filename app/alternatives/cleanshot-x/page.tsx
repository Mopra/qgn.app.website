import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/alternatives/cleanshot-x",
  "CleanShot X for Windows? The closest thing is QGN, free",
  "CleanShot X is Mac only, with no Windows version planned. QGN is a free, open source CleanShot alternative for Windows: instant capture, floating previews, backgrounds and frames, and screen recording.",
);

const qa: [string, string][] = [
  [
    "Is there a CleanShot X for Windows?",
    "No. CleanShot's own FAQ says there is no Windows version and no plans to release one. It requires macOS 13 or newer.",
  ],
  [
    "What is the closest CleanShot X alternative on Windows?",
    "QGN was built for that gap: one hotkey to the clipboard, a floating preview card after every capture, an editor with backgrounds and frames, and screen recording with zooms. It is free and open source.",
  ],
  [
    "Does QGN have a cloud like CleanShot Cloud?",
    "No. QGN has no cloud and no upload feature. Captures stay on your machine.",
  ],
  [
    "How much does CleanShot X cost compared to QGN?",
    "CleanShot X Basic is $35 once, with a year of updates and optional renewals at $19 a year. CleanShot Pro is $10 per user per month, billed yearly. QGN is free.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "cleanshot x" }]}
      title="CleanShot X doesn't run on Windows. This does."
      lede="If you moved from a Mac to a Windows machine and miss CleanShot X, start here."
      ld={faqLd(qa)}
    >
      <p>
        CleanShot X is the screenshot tool Mac people talk about. Capture, a little preview in the corner, a quick
        annotate, a nice background, a recording when you need one. It is very good.
      </p>
      <p>
        It is also Mac only. It needs macOS 13 or newer, and CleanShot&apos;s FAQ says plainly that there is no Windows
        version and no plans for one. So people search for &quot;CleanShot X for Windows&quot; and find a list of tools
        that each do a third of it.
      </p>
      <p>
        QGN covers most of that flow on Windows 10 and 11. It is not a clone and it does not look like one. But the
        shape is the same: press a key, drag, the capture is on your clipboard and on a card in the corner, and the
        editor is one click away.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["CleanShot X", "QGN"]}
        rows={[
          ["platforms", "macOS 13 and newer", "Windows 10 and 11"],
          ["capture", "region, window, full screen, scrolling", "region, window, or full display"],
          ["preview after capture", "overlay in the corner", "a floating card: drag out, pin, copy again"],
          ["editor", "annotate, blur, highlight, crop", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["backgrounds", "yes", "gradients, wallpapers, browser and window frames"],
          ["screen recording", "yes, video and GIF", "yes, with mic and system audio, MP4, WebM, GIF, WebP"],
          ["text grab (OCR)", "yes", "no"],
          ["cloud sharing", "CleanShot Cloud", "none"],
          ["source", "closed", "open, MIT"],
          ["price", "$35 once, or Pro at $10 a month", "free"],
        ]}
      />

      <h2>what carries over</h2>
      <ul>
        <li>
          <b>The corner card.</b> Every capture appears on a small card. Drag it into Slack, Figma or an email. Pin it and
          it stays, even across a reboot. The last twelve are in the tray menu. See{" "}
          <Link href="/features/floating-previews">floating previews</Link>.
        </li>
        <li>
          <b>The pretty screenshot.</b> Compose frames a capture on a gradient or wallpaper, in a browser or window
          frame, with padding, rounding, shadow and a fixed aspect ratio. See{" "}
          <Link href="/features/screenshot-mockup-tool">mockups</Link>.
        </li>
        <li>
          <b>Annotation that stays editable.</b> Arrows, shapes, text, numbered callouts, redaction and crop, every mark
          movable after you place it. See <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>
          <b>Recordings with zoom.</b> Record a region with mic and system audio, trim it, and let QGN make zoom
          keyframes from your clicks. Export MP4, WebM, GIF or animated WebP. See{" "}
          <Link href="/features/screen-recording">screen recording</Link>.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Scrolling capture and OCR. CleanShot X has both. QGN has neither.</li>
        <li>Cloud links. CleanShot Cloud gives you a URL to share. QGN uploads nothing.</li>
        <li>Mac polish. CleanShot X is native and small. QGN is Electron, about 85 MB.</li>
        <li>A company behind it. QGN is a one-person open source project, still at 0.1.x.</li>
        <li>Code signing. QGN isn&apos;t signed yet, so SmartScreen warns on first install.</li>
      </ul>

      <h2>the keys</h2>
      <p>
        <kbd>ctrl</kbd>+<kbd>q</kbd> captures. Click a window to take exactly that window. <kbd>space</kbd> takes the
        whole display. <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records. All of them can be rebound.
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
