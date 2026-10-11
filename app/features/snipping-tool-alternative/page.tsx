import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/snipping-tool-alternative",
  "Snipping Tool alternative for Windows 10 and 11, free: QGN",
  "QGN is a free, open source alternative to the Snipping Tool on Windows 10 and 11. Ctrl+Q to the clipboard, click to capture a window, floating previews, an editor with editable marks and frames, and screen recording.",
);

const qa: [string, string][] = [
  [
    "Is QGN better than the Snipping Tool?",
    "It depends on what you need. The Snipping Tool is built in, small and good enough for plenty of people. QGN adds window snapping, floating cards you can drag out, marks that stay editable, backgrounds and frames, and recordings with zoom and GIF export.",
  ],
  [
    "Does QGN work on Windows 10?",
    "Yes. QGN runs on Windows 10 and 11. On Windows 10 the Snipping Tool has no video recording, and QGN does.",
  ],
  [
    "Can I keep Win+Shift+S?",
    "Yes. QGN uses Ctrl+Q and Ctrl+Shift+Q, so the Snipping Tool shortcuts keep working. QGN's hotkeys can be rebound.",
  ],
  [
    "Is QGN free?",
    "Yes. Free and open source under the MIT license, with no account and no subscription.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "vs" }, { label: "snipping tool" }]}
      title="A Snipping Tool alternative for when built in isn't quite enough."
      lede="The Snipping Tool is fine. It's free, it's already there, and on Windows 11 it even records. QGN is for the moment you want a bit more."
      ld={faqLd(qa)}
    >
      <p>
        Let&apos;s be fair to it first. On Windows 11 the Snipping Tool does rectangle, freeform, window and full screen
        snips, and video snips with <kbd>win</kbd>+<kbd>shift</kbd>+<kbd>r</kbd>. It has a pen, a highlighter, shapes,
        a crop, and text actions that can pull text out of a snip or redact it. It saves to your Screenshots folder by
        itself. For a lot of people that is the end of the search.
      </p>
      <p>
        On Windows 10 it is thinner: pen, highlighter and eraser, no video, and you save by hand.
      </p>
      <p>
        QGN starts where it stops. Press <kbd>ctrl</kbd>+<kbd>q</kbd>, drag, release, and the capture is on your
        clipboard before the overlay closes. Then it sits on a card in the corner, so you can drag it straight into a chat
        or an email, and the editor is one click away.
      </p>

      <h2>side by side</h2>
      <Compare
        cols={["Snipping Tool (Windows 11)", "QGN"]}
        rows={[
          ["capture", "rectangle, freeform, window, full screen", "region, window, or full display"],
          ["window capture", "a separate mode", "hover any window and click it, edges snap while you drag"],
          ["after capture", "a notification, then the app", "a floating card: drag out, pin, copy again"],
          ["recent captures", "your Screenshots folder", "the last twelve in the tray menu, plus auto-save if you want it"],
          ["editor", "pen, highlighter, shapes, crop", "arrows, shapes, text, callouts, redaction, crop, all editable later"],
          ["backgrounds and frames", "no", "gradients, wallpapers, browser and window frames"],
          ["screen recording", "yes, rectangle, edit in Clipchamp", "yes, mic and system audio, trim, zoom on clicks"],
          ["recording export", "video", "MP4, WebM, GIF, animated WebP"],
          ["text extraction", "yes", "no"],
          ["price", "built in", "free, MIT"],
        ]}
      />

      <h2>what you gain</h2>
      <ul>
        <li>
          <b>Instant by default.</b> Release and it is copied. Hold <kbd>alt</kbd> as you release to adjust the
          selection first, with handles and arrow keys.
        </li>
        <li>
          <b>Window snapping that tells you what it will do.</b> Hover a window and it is outlined and named, with its
          size. Click and you get exactly that window.
        </li>
        <li>
          <b>A pixel loupe.</b> A magnifier follows the cursor with live coordinates and colour, for when the edge has to
          be exact.
        </li>
        <li>
          <b>Marks you can still change.</b> Place an arrow, click it later, move it. Redaction is a solid block by
          default, so it can&apos;t be undone by the reader. See <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>
          <b>Screenshots that look finished.</b> Compose puts the capture on a gradient or in a browser frame. See{" "}
          <Link href="/features/screenshot-mockup-tool">mockups</Link>.
        </li>
        <li>
          <b>GIFs without another app.</b> Record, trim, add zooms from your clicks, export a GIF or WebP for the pull
          request. See <Link href="/features/screen-recording">screen recording</Link>.
        </li>
      </ul>

      <h2>what you give up</h2>
      <ul>
        <li>Being built in. The Snipping Tool is already installed and updated by Windows. QGN is one more app.</li>
        <li>Text extraction. The Snipping Tool can read text out of a snip. QGN can&apos;t.</li>
        <li>Freeform snips. QGN captures rectangles, windows and displays only.</li>
        <li>Size and signing. QGN is Electron, about 85 MB, and not code signed yet, so SmartScreen warns once.</li>
      </ul>

      <h2>using both</h2>
      <p>
        Nothing to uninstall. The Snipping Tool keeps <kbd>win</kbd>+<kbd>shift</kbd>+<kbd>s</kbd>, QGN takes{" "}
        <kbd>ctrl</kbd>+<kbd>q</kbd>. Use each for what it is good at, and see which one you reach for after a week.
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
