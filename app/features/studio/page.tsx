import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/studio",
  "QGN Studio: one editor for screenshots and screen recordings",
  "Studio is QGN's editor for stills and clips. Markup draws on the pixels, Compose frames the capture on a background. Editable marks, crop, redaction, zoom keyframes and export. Free for Windows.",
);

const qa: [string, string][] = [
  [
    "What is the difference between Markup and Compose?",
    "Markup works on the capture itself and saves back over the original. Compose puts the capture on a background with a frame, padding and shadow, and saves a new file. Every annotation tool works in both.",
  ],
  [
    "Can I edit an arrow after I drew it?",
    "Yes. Pick the pointer with V, click the mark, then move it, resize it, recolour it or delete it. Double-click a text label to fix a typo.",
  ],
  [
    "Can I open an image that QGN did not capture?",
    "Yes. The tray menu can open Studio on whatever image is on your clipboard.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "studio" }]}
      title="One editor. Stills and clips. Two modes."
      lede="Studio is where a capture goes when the clipboard is not enough. Markup to point at things. Compose to make it presentable. Same tools on screenshots and recordings."
      ld={faqLd(qa)}
    >
      <p>
        QGN used to have a separate annotation editor and a separate video studio. Two windows, two sets of tools, and
        your framing lost whenever you moved between them. Since 0.1.16 there is one Studio. Open any capture from its
        preview card and you are in it.
      </p>

      <h2>two modes</h2>
      <Compare
        cols={["markup", "compose"]}
        rows={[
          ["for", "pointing at things", "presenting things"],
          ["works on", "the pixels themselves", "the capture on a canvas"],
          ["saves", "back over the original", "a new file"],
          ["annotation tools", "all of them", "all of them"],
          ["background, frame, shadow", "no", "yes"],
        ]}
      />
      <p>Switching modes keeps your framing. A round trip does not throw away the background you set up.</p>

      <h2>markup</h2>
      <ul>
        <li>Freehand, arrows, rectangle, ellipse, diamond and line.</li>
        <li>Text in three sizes. Numbered callouts that count themselves.</li>
        <li>
          Redaction as a solid block or pixelate. Solid is the default and cannot be recovered. More in{" "}
          <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>A cursor stamp, since captures are taken without the pointer and you may want one where it matters.</li>
        <li>Crop that stays adjustable until you apply it, and can be undone after.</li>
        <li>
          Six colours, and a single key per tool: <kbd>V</kbd> <kbd>D</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>T</kbd>{" "}
          <kbd>X</kbd> <kbd>C</kbd> <kbd>P</kbd> <kbd>R</kbd>.
        </li>
      </ul>

      <h2>compose</h2>
      <ul>
        <li>Backgrounds: ten gradients, six wallpapers, solid colours, or your own image.</li>
        <li>Saved palettes for the gradients and colours you keep coming back to.</li>
        <li>Frames: none, a plain window, or browser chrome with an address bar.</li>
        <li>Padding, corner rounding and shadow depth.</li>
        <li>Aspect ratio: auto, 16:9, 4:3, 1:1, 9:16 or 3:2.</li>
      </ul>
      <p>
        More on that in <Link href="/features/screenshot-mockup-tool">mockups</Link>.
      </p>

      <h2>clips</h2>
      <p>
        Open a recording and Studio adds a timeline. Trim with in and out points. Zoom keyframes are generated from
        where you clicked while recording, or placed by hand with easing and a focus point. An optional styled cursor
        with click ripples sits on top. Export to MP4, WebM, GIF or animated WebP, with a size estimate first. See{" "}
        <Link href="/features/screen-recording">screen recording</Link>.
      </p>

      <h2>the details that matter</h2>
      <ul>
        <li>
          <b>Marks stay editable.</b> Select one with the pointer, move it, resize it, recolour it, delete it. Fixing
          one mark does not mean undoing everything after it.
        </li>
        <li>
          <b>Marks live in image pixels.</b> They stay put when you crop, change the aspect ratio, resize the window or
          export at another scale.
        </li>
        <li>
          <b>One undo stack.</b> <kbd>ctrl</kbd>+<kbd>z</kbd> and <kbd>ctrl</kbd>+<kbd>y</kbd> cover marks and crops
          alike.
        </li>
        <li>
          <b>Zoom and pan.</b> <kbd>ctrl</kbd> and the wheel zooms about the cursor, the wheel pans, middle drag pans,{" "}
          <kbd>ctrl</kbd>+<kbd>0</kbd> fits again. A 4K capture deserves to be seen at 100%.
        </li>
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
