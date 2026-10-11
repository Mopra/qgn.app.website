import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/alternatives/lightshot",
  "Lightshot alternative for Windows, open source and local: QGN",
  "QGN is a free, open source Lightshot alternative for Windows. Just as quick: one key, drag, done. No upload button, no public links, plus window capture, recording and a real editor.",
);

const qa: [string, string][] = [
  [
    "Is QGN as simple as Lightshot?",
    "Yes. Press Ctrl+Q, drag, release, and the capture is on your clipboard. There is nothing to confirm and no toolbar to dismiss. The editor is there when you open it, not before.",
  ],
  [
    "Does QGN upload screenshots like Lightshot's prnt.sc?",
    "No. QGN has no upload feature and no server to upload to. Captures go to your clipboard, and to a folder if you turn on auto-save.",
  ],
  [
    "Is QGN free like Lightshot?",
    "Yes, and it is also open source under the MIT license. There is no paid tier.",
  ],
  [
    "Does QGN run on Mac?",
    "No. Lightshot has a Mac version, QGN is Windows 10 and 11 only.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "lightshot" }]}
      title="A Lightshot alternative that never uploads."
      lede="Lightshot got one thing very right: press a key, drag, done. QGN keeps that, drops the upload button, and adds what Lightshot never did."
      ld={faqLd(qa)}
    >
      <p>
        Lightshot is popular for a good reason. It is fast and it stays out of the way. If that is all you need and you
        never touch the upload button, keep it.
      </p>
      <p>
        The trouble is that button. Upload a capture and it gets a short public link on prnt.sc. Anyone with the link
        can open it, and those links are short enough that people have made a hobby of guessing them. That is a bad
        place for a screenshot of a dashboard, an invoice or a chat.
      </p>
      <p>
        QGN has no upload feature at all. There is nothing to click by mistake, because there is nowhere for the image
        to go except your clipboard and, if you want, a folder on your disk.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["Lightshot", "QGN"]}
        rows={[
          ["capture", "region, by hotkey", "region, window, or full display"],
          ["to clipboard", "after you confirm", "the moment you release"],
          ["editor", "pen, line, arrow, box, marker, text", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["backgrounds and frames", "no", "gradients, wallpapers, browser and window frames"],
          ["screen recording", "no", "yes, with mic and system audio, MP4 to GIF"],
          ["cloud upload", "yes, public prnt.sc links", "none"],
          ["source", "closed", "open, MIT"],
          ["price", "free", "free"],
          ["platforms", "Windows, Mac", "Windows only"],
        ]}
      />

      <h2>what you gain</h2>
      <ul>
        <li>
          <b>Window capture.</b> Hover a window, it gets outlined and named. Click it and you get exactly that window, no
          sloppy edges. Edges snap while you drag, too.
        </li>
        <li>
          <b>Floating cards.</b> Each capture sits in the corner for a moment. Drag it straight into Slack or an email,
          pin it, copy it again. See <Link href="/features/floating-previews">floating previews</Link>.
        </li>
        <li>
          <b>An editor that keeps your marks editable.</b> Place an arrow, move it later. Redact with a solid block
          that can&apos;t be peeled back. See <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>
          <b>Recording.</b> <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records a region. Trim it, add zooms from
          your own clicks, export a GIF for the pull request. See <Link href="/features/screen-recording">screen recording</Link>.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Sharing by link. If you want a URL to paste, Lightshot gives you one and QGN does not.</li>
        <li>A Mac version. QGN is Windows only.</li>
        <li>
          A small download. QGN is an Electron app, about 85 MB. Lightshot is far smaller.
        </li>
        <li>&quot;Search similar images on Google&quot;. QGN has nothing like it.</li>
      </ul>

      <h2>switching</h2>
      <p>
        Lightshot takes <kbd>PrtSc</kbd>. QGN uses <kbd>ctrl</kbd>+<kbd>q</kbd>, so both can run side by side while you
        decide. Any hotkey can be rebound in QGN&apos;s settings.
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
