import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/use-cases/documentation",
  "Screenshot tool for documentation on Windows: QGN",
  "A free screenshot tool for documentation and tutorials on Windows. Exact window captures, numbered callouts, consistent frames and backgrounds, auto-save to a folder. Open source, no account.",
);

const qa: [string, string][] = [
  [
    "What is a good screenshot tool for documentation on Windows?",
    "One that gives you clean, consistent captures quickly: exact window edges, numbered callouts for steps, redaction, and the same framing on every image. QGN does all of that, free and open source. If you need scrolling capture or scripted screenshots, Snagit or ShareX cover those and QGN does not.",
  ],
  [
    "Can QGN keep every screenshot the same size?",
    "Window capture takes a window at its exact size, so resize the window once and every capture matches. In Compose you can fix an aspect ratio, padding and background, and save gradients and colours to reuse.",
  ],
  [
    "Can QGN save every capture to a folder automatically?",
    "Yes. Turn on auto-save in Settings and every capture is written to a folder with a timestamp, Pictures\\qgn by default.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "for" }, { label: "documentation" }]}
      title="Screenshots for documentation, without the busywork."
      lede="Docs need dozens of screenshots that look like they belong together. QGN makes each one quick, and makes them match."
      ld={faqLd(qa)}
    >
      <p>
        Writing docs means taking the same kind of screenshot over and over: a window, a dialog, a setting, with a
        number on the step and the private bits hidden. The capture should take a second. The consistency should come
        for free. Here is how that works in QGN.
      </p>

      <h2>what docs need, and how</h2>
      <Compare
        cols={["in QGN"]}
        rows={[
          ["clean edges", "click a window, get exactly that window. Edges snap while you drag a region."],
          ["the same size every time", "resize the window once, then window capture matches it on every shot"],
          ["numbered steps", "callouts that count up by themselves (c)"],
          ["pointing at things", "arrows (a), boxes and ellipses (s), text in three sizes (t)"],
          ["hiding data", "solid block redaction that replaces the pixels (x), or pixelate"],
          ["a cursor where you want it", "captures are cursor-free; stamp one in on purpose (p)"],
          ["consistent framing", "Compose: background, padding, corners, shadow, fixed aspect ratio"],
          ["a folder of images", "auto-save writes every capture with a timestamp"],
          ["short how-to clips", "record a region, trim, zoom on clicks, export GIF or MP4"],
        ]}
      />

      <h2>a page of steps, start to finish</h2>
      <ol>
        <li>Turn on auto-save in Settings and point it at your docs&apos; image folder.</li>
        <li>
          Size the app you are documenting once. For each step, <kbd>ctrl</kbd>+<kbd>q</kbd> and click its window.
        </li>
        <li>
          Need a dialog or a panel only? Drag over it. Hold <kbd>alt</kbd> as you release if you want to nudge the edges
          with the arrow keys first, then <kbd>enter</kbd>.
        </li>
        <li>
          Open a capture in Studio from its card. Add callouts with <kbd>c</kbd>, an arrow with <kbd>a</kbd>, redact with{" "}
          <kbd>x</kbd>. Every mark stays editable, so a wrong number is a click, not a redo.
        </li>
        <li>
          For the hero image at the top of the page, switch to Compose: a gradient or wallpaper, a window or browser
          frame, padding and a shadow. Save the gradient, and the next page gets the same look.
        </li>
      </ol>

      <h2>clips beat paragraphs</h2>
      <p>
        Some steps are easier to show than to write. <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records a region.
        Studio makes zoom keyframes from your clicks, so a small button is readable in the export, and an optional
        styled cursor shows a ripple on each click. Export GIF or animated WebP for docs that only take images, MP4 or
        WebM where video plays. More in <Link href="/features/screen-recording">screen recording</Link>.
      </p>

      <h2>what it doesn&apos;t do</h2>
      <ul>
        <li>No scrolling capture. A page longer than the screen needs several shots.</li>
        <li>No automation. You can&apos;t script QGN to retake every screenshot after a UI change.</li>
        <li>No templates or step-by-step document export. It makes images; your docs tool does the rest.</li>
        <li>Windows only.</li>
      </ul>
      <p>
        If those matter more than speed and price, Snagit has them. See{" "}
        <Link href="/alternatives/snagit">QGN and Snagit</Link> for an honest comparison.
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
