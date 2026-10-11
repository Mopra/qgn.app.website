import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/features/screenshot-annotation",
  "QGN: annotate screenshots on Windows with arrows, text and redaction",
  "Add arrows, boxes, text, numbered callouts and real redaction to screenshots on Windows. Every mark stays editable after you place it. QGN is free and open source.",
);

const qa: [string, string][] = [
  [
    "Is pixelate redaction safe?",
    "Solid block is the safe choice and the default: the pixels underneath are replaced and cannot be recovered. Pixelate looks softer but hides less. Since 0.1.17 a pixelate block sampled over a solid one samples what is painted, not the original, so stacking them no longer brings content back.",
  ],
  [
    "Can I annotate an image I already have?",
    "Yes. Copy it, then open Studio on the clipboard image from the tray menu.",
  ],
  [
    "Can I annotate a screen recording?",
    "Yes. Every annotation tool works on clips as well as stills.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "annotation" }]}
      title="Annotate a screenshot, then change your mind."
      lede="Arrows, boxes, text, numbered callouts and redaction that actually hides. Every mark stays a mark: select it later and move it, resize it, recolour it."
      ld={faqLd(qa)}
    >
      <p>
        Most quick annotation tools burn each stroke into the image the moment you let go. Misplace an arrow and the fix
        is undo, undo, undo, and redraw everything you did after it. In QGN, press <kbd>V</kbd>, click the arrow, drag
        it where it belongs.
      </p>

      <h2>the tools</h2>
      <Compare
        cols={["key", "does"]}
        rows={[
          ["pointer", "V", "select a mark to move, resize, recolour or delete it"],
          ["draw", "D", "freehand"],
          ["arrow", "A", "an arrow"],
          ["shapes", "S", "rectangle, ellipse, diamond, line"],
          ["text", "T", "three sizes. double click to edit again"],
          ["redact", "X", "solid block or pixelate"],
          ["callout", "C", "numbered markers that count up"],
          ["cursor", "P", "stamp a mouse pointer where it helps"],
          ["crop", "R", "an adjustable crop, applied when you say"],
        ]}
      />
      <p>Six colours. Undo and redo across everything, crops included.</p>

      <h2>redaction you can trust</h2>
      <p>
        A blurred password that can be un-blurred is worse than none, because you think it is safe. QGN defaults to a
        solid block. The pixels underneath are replaced in the saved image. Nothing to peel back.
      </p>
      <p>
        Pixelate is there when you want it to look softer. Use it for faces and noise, not for secrets. And if you stack
        pixelate over solid, it samples what is painted, not the original. That was a real bug before 0.1.17, and the
        changelog says so plainly.
      </p>

      <h2>where the marks live</h2>
      <p>
        Marks are stored in the image&apos;s own pixels, not the window&apos;s. Crop, change the aspect ratio, resize the
        Studio window or export at another scale, and every arrow stays pointing at the same thing. Stroke widths and text
        sizes scale with the image, so a mark on a 4K capture looks the same weight as one on a laptop screenshot.
      </p>

      <h2>crop that waits</h2>
      <p>
        Press <kbd>R</kbd> and a crop rect covers the whole image. Drag a side or corner, drag inside to move it, watch
        the pixel size. Nothing is cut until you hit Apply, <kbd>enter</kbd> or double click. Thirds guides show the
        framing. Undo it later if you change your mind.
      </p>

      <h2>where it fits</h2>
      <p>
        Annotation is part of <Link href="/features/studio">Studio</Link>. Open any capture from its preview card, or
        open whatever image is on your clipboard from the tray. In Markup mode it saves back over the capture. In
        Compose mode you can also frame it, see <Link href="/features/screenshot-mockup-tool">mockups</Link>. Writing up
        a bug? See <Link href="/use-cases/bug-reports">bug reports</Link>.
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
