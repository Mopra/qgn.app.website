import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/screenshot-tool",
  "QGN: a free screenshot tool for Windows that copies on release",
  "QGN is a free, open source screenshot tool for Windows 10 and 11. Ctrl+Q, drag, and the capture is on your clipboard. Window capture, edge snapping, a pixel loupe and full screen with Space.",
);

const qa: [string, string][] = [
  [
    "How do I take a screenshot with QGN?",
    "Press Ctrl+Q, drag over the part of the screen you want, and let go. The capture is on your clipboard. Paste it anywhere with Ctrl+V.",
  ],
  [
    "Can QGN capture a single window?",
    "Yes. After Ctrl+Q, hover a window and it is outlined and named with its size. Click it and you get exactly that window.",
  ],
  [
    "Can I change the hotkey?",
    "Yes. Both the capture and the recording hotkey can be rebound in Settings, with conflict detection and a reset.",
  ],
  [
    "Does QGN work with several monitors?",
    "Yes. It works across every connected display, and Space on the overlay takes a whole display.",
  ],
  [
    "What format does the clipboard get?",
    "PNG by default. You can switch to JPG, WebP or a base64 data URI, with adjustable quality for JPG and WebP.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "screenshot tool" }]}
      title="A screenshot tool that is done when you let go."
      lede="Ctrl+Q, drag, release. The capture is on your clipboard before the overlay has finished closing. That is the whole tool, until you want more."
      ld={faqLd(qa)}
    >
      <p>
        Most screenshot tools make you finish a ritual. Select, then a toolbar, then copy or save, then close the
        thing. QGN skips all of it. The moment you release the mouse, the picture is on the clipboard. You paste it and
        get on with your day.
      </p>
      <p>
        It runs in the tray. There is no main window to keep open. Launching it again does not start a second copy, it
        just starts a capture.
      </p>

      <h2>the keys</h2>
      <Compare
        cols={["does"]}
        rows={[
          ["ctrl+q", "start a capture. drag a region, release, copied."],
          ["click", "capture the window under the cursor, exactly its edges."],
          ["space", "capture the whole display."],
          ["shift", "constrain the selection to a square."],
          ["ctrl while dragging", "ignore the window edges the selection snaps to."],
          ["alt on release", "keep the selection open to adjust it first."],
          ["esc", "cancel."],
        ]}
      />

      <h2>aiming</h2>
      <ul>
        <li>
          <b>Window capture.</b> Hover a window and it gets outlined, named and measured. Click and you get that window,
          not the desktop around it. Overlapping windows name the one actually in front.
        </li>
        <li>
          <b>Edge snapping.</b> While you drag, the selection snaps to the edges of nearby windows. Hold{" "}
          <kbd>ctrl</kbd> when you want a free hand.
        </li>
        <li>
          <b>Pixel loupe.</b> A magnifier follows the cursor with a live coordinate and colour readout. For the times
          the edge you want is one pixel wide.
        </li>
        <li>
          <b>Live size.</b> Width and height in pixels as you drag.
        </li>
      </ul>

      <h2>adjusting, when you want to</h2>
      <p>
        Instant is the default because instant is the point. When one capture needs care, hold <kbd>alt</kbd> as you
        release. The selection stays up with handles. Drag the edges or corners, drag the middle to move it, nudge it
        with the arrow keys, then confirm with <kbd>enter</kbd> or a double click.
      </p>
      <p>
        If you would rather always adjust, flip it in Settings. Then <kbd>alt</kbd> on release means capture instantly.
      </p>

      <h2>after the capture</h2>
      <p>
        A small card shows the capture in the corner. Drag it into Slack or an email, pin it, copy it again, or open it
        in Studio. The last twelve captures stay in the tray menu. More on{" "}
        <Link href="/features/floating-previews">floating previews</Link>.
      </p>
      <p>
        Turn on auto-save and every capture is also written to a folder with a timestamp. Off by default, because the
        clipboard is usually where it needs to go.
      </p>
      <p>
        Need arrows, a blurred password or a crop? Open it in <Link href="/features/studio">Studio</Link>. Need it to
        look good in a README? <Link href="/features/screenshot-mockup-tool">Compose</Link> puts it on a background.
      </p>

      <h2>what it is not</h2>
      <ul>
        <li>Not a scrolling capture tool. It takes what is on screen.</li>
        <li>Not a sharing service. There is no upload and no link.</li>
        <li>Not on Mac or Linux. Windows 10 and 11 only.</li>
      </ul>

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
