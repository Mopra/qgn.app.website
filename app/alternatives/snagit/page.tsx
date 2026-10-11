import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/alternatives/snagit",
  "Free Snagit alternative for Windows, open source: QGN",
  "QGN is a free, open source Snagit alternative for Windows. Region and window capture, an editor, frames and screen recording, with no subscription and no account.",
);

const qa: [string, string][] = [
  [
    "How much does Snagit cost?",
    "Snagit is sold as an annual subscription. TechSmith lists Snagit Individual at about $39 a year, with team, business and education plans on top. QGN is free.",
  ],
  [
    "Is QGN a full replacement for Snagit?",
    "For capture, annotation, framing and short recordings, for many people, yes. Snagit has scrolling capture, text grabbing (OCR), webcam in recordings, templates and a Mac version. QGN has none of those.",
  ],
  [
    "Does QGN need an account?",
    "No. There is no account, no licence key and no sign-in. Install it and press Ctrl+Q.",
  ],
  [
    "Is QGN on Mac?",
    "No. Snagit runs on Windows and macOS. QGN is Windows 10 and 11 only.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "snagit" }]}
      title="A free Snagit alternative for Windows."
      lede="Snagit is the professional screenshot tool, and it is priced like one, every year. QGN covers the everyday part of it for nothing."
      ld={faqLd(qa)}
    >
      <p>
        Snagit by TechSmith is a serious product. It captures regions, windows and scrolling pages, grabs text out of
        images, records video with your webcam, and has a big editor with templates and stamps. It runs on Windows 10
        and 11 and on macOS. If your job is writing training material all day, it may well be worth the money.
      </p>
      <p>
        The money is the thing. Snagit is now an annual subscription: Snagit Individual is listed at about $39 a year,
        per user, and it is non-transferable. That is fine for a company. It is a lot for someone who mostly wants an
        arrow on a screenshot and the odd screen recording.
      </p>
      <p>
        QGN is free and MIT licensed. No trial, no licence key, no account. Most days you press{" "}
        <kbd>ctrl</kbd>+<kbd>q</kbd>, drag, and paste. On the days you need more, the editor is one click away.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["Snagit", "QGN"]}
        rows={[
          ["capture", "region, window, full screen, scrolling", "region, window, or full display"],
          ["editor", "large, with stamps and templates", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["backgrounds and frames", "borders, shadows, effects", "gradients, wallpapers, browser and window frames"],
          ["screen recording", "yes, with webcam", "yes, with mic and system audio, no webcam"],
          ["recording export", "MP4, GIF", "MP4, WebM, GIF, animated WebP"],
          ["text grab (OCR)", "yes", "no"],
          ["account", "TechSmith account for the licence", "none"],
          ["source", "closed", "open, MIT"],
          ["price", "about $39 a year, per user", "free"],
          ["platforms", "Windows, Mac", "Windows only"],
        ]}
      />

      <h2>what you gain</h2>
      <ul>
        <li>
          <b>No bill.</b> Not this year, not next year. MIT licensed, so nobody can take it away either.
        </li>
        <li>
          <b>Speed.</b> Release the mouse and the capture is on your clipboard before the overlay closes. Instant is the
          default. Hold <kbd>alt</kbd> as you release if you want to adjust first.
        </li>
        <li>
          <b>The polished-screenshot part.</b> Compose puts a capture on a gradient or wallpaper, in a browser or
          window frame, at the aspect ratio you need. See <Link href="/features/screenshot-mockup-tool">mockups</Link>.
        </li>
        <li>
          <b>Recordings that look edited.</b> Trim, then let QGN make zoom keyframes from your own clicks. MP4 and WebM
          encode faster than real time. See <Link href="/features/screen-recording">screen recording</Link>.
        </li>
        <li>
          <b>Nothing leaves your machine.</b> The app talks to one server, GitHub, to check for updates. It has no
          analytics.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Scrolling capture. Snagit can stitch a long page. QGN captures what is on screen.</li>
        <li>Text grabbing. Snagit can pull text out of a capture. QGN cannot.</li>
        <li>Webcam. Snagit can put your face in a recording. QGN records screen and audio only.</li>
        <li>Templates, stamps and step guides. Snagit&apos;s editor is much bigger.</li>
        <li>A Mac version, support from a company, and years of polish. QGN is one person&apos;s project at 0.1.x.</li>
      </ul>

      <h2>who should switch</h2>
      <p>
        If your Snagit renewal is coming up and you mostly capture, annotate and paste, try QGN for a week first. If you
        build documentation with scrolling captures and templates every day, Snagit earns its price and you should keep
        it.
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
