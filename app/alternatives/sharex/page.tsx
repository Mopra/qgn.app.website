import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/alternatives/sharex",
  "ShareX alternative for Windows with fewer settings: QGN",
  "QGN is a free, open source ShareX alternative for Windows. One hotkey to the clipboard, a clean editor and screen recording, without the hundreds of settings and upload destinations.",
);

const qa: [string, string][] = [
  [
    "Is QGN as powerful as ShareX?",
    "No, and it is not trying to be. ShareX has scrolling capture, OCR, workflows and dozens of upload destinations. QGN does capture, recording, a few good editing tools and nothing else.",
  ],
  [
    "Are both free and open source?",
    "Yes. ShareX is GPL-3.0. QGN is MIT. Neither has a paid tier.",
  ],
  [
    "Can QGN upload to Imgur, S3 or a custom server like ShareX?",
    "No. QGN has no upload feature. Captures go to your clipboard, and to a folder if you turn on auto-save.",
  ],
  [
    "Can I run QGN next to ShareX?",
    "Yes. QGN uses Ctrl+Q and Ctrl+Shift+Q, which ShareX does not take by default, and both hotkeys can be rebound.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "sharex" }]}
      title="A ShareX alternative for people who just want the screenshot."
      lede="ShareX can do almost anything. That is its strength and its cost. QGN does a handful of things, with almost nothing to configure."
      ld={faqLd(qa)}
    >
      <p>
        ShareX is one of the best pieces of free software on Windows. It has been in active development for well over a
        decade, it is open source under GPL-3.0, and version 21.0.0 shipped in July 2026. If you live in its workflows,
        with after-capture tasks that watermark, upload and shorten a link in one go, nothing here will replace that.
        Keep it.
      </p>
      <p>
        But plenty of people install ShareX, open the settings once, see the tree of capture modes, tasks, destinations
        and hotkeys, and close it again. They wanted a screenshot on the clipboard. QGN is for them.
      </p>
      <p>
        QGN has one hotkey for stills and one for recordings. Release the mouse and the picture is on your clipboard. A
        small card shows it in the corner. That is the whole default flow. There is no destination to pick, because
        there is no destination at all.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["ShareX", "QGN"]}
        rows={[
          ["capture", "region, window, monitor, full screen, scrolling, auto capture", "region, window, or full display"],
          ["to clipboard", "yes, as an after-capture task", "always, the moment you release"],
          ["editor", "yes, with many tools", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["screen recording", "yes, video and GIF", "yes, with mic and system audio, MP4, WebM, GIF, WebP"],
          ["OCR, scrolling capture", "yes", "no"],
          ["upload destinations", "a long list, plus custom uploaders", "none"],
          ["settings", "hundreds", "a short page"],
          ["source", "open, GPL-3.0", "open, MIT"],
          ["price", "free", "free"],
          ["platforms", "Windows", "Windows"],
        ]}
      />

      <h2>what you gain</h2>
      <ul>
        <li>
          <b>Nothing to set up.</b> Install, press <kbd>ctrl</kbd>+<kbd>q</kbd>, drag. The defaults are the product.
        </li>
        <li>
          <b>Floating cards.</b> Each capture waits in the corner. Drag it into Slack, pin it so it survives a reboot,
          copy it again. The last twelve stay in the tray menu. See{" "}
          <Link href="/features/floating-previews">floating previews</Link>.
        </li>
        <li>
          <b>A calmer editor.</b> Studio has two modes. Markup draws on the pixels. Compose frames the capture on a
          background for a README or a tweet. Every mark stays editable. See <Link href="/features/studio">Studio</Link>.
        </li>
        <li>
          <b>Recordings that look edited.</b> Trim, then let QGN make zoom keyframes from where you clicked. Export
          MP4 or WebM faster than real time, or a GIF for the pull request. See{" "}
          <Link href="/features/screen-recording">screen recording</Link>.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Uploading. No Imgur, no S3, no custom uploader, no short links.</li>
        <li>Scrolling capture and OCR. ShareX has both. QGN has neither.</li>
        <li>Automation. ShareX can chain tasks after every capture. QGN copies, and optionally saves to a folder.</li>
        <li>Size. QGN is an Electron app, and the installer is about 85 MB.</li>
        <li>Age. ShareX has years of edge cases behind it. QGN is younger and still at 0.1.x.</li>
      </ul>

      <h2>who should switch</h2>
      <p>
        If you use ShareX for region to clipboard and the odd arrow, QGN does that with less in the way. If you use
        ShareX as a pipeline, stay. Try both: they can run side by side, since QGN&apos;s hotkeys are{" "}
        <kbd>ctrl</kbd>+<kbd>q</kbd> and <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd>, and both can be rebound.
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
