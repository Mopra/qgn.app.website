import Link from "next/link";
import { Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/use-cases/bug-reports",
  "Screenshots and recordings for bug reports on Windows: QGN",
  "Make bug reports people can act on: numbered steps on a screenshot, redaction that can't be undone, and a trimmed screen recording that zooms in on your clicks. Free and open source for Windows.",
);

const qa: [string, string][] = [
  [
    "How do I record a bug with QGN?",
    "Press Ctrl+Shift+Q, drag over the area, and reproduce the bug. Microphone and system audio can be on or off. Stop, trim it in Studio, and export MP4 or GIF.",
  ],
  [
    "How do I hide personal data in a bug screenshot?",
    "Use the redaction tool in Studio. The default is a solid block that replaces the pixels, so nobody can recover what was under it. Pixelate is there too.",
  ],
  [
    "Does QGN upload my bug reports anywhere?",
    "No. Everything stays on your machine until you paste or attach it yourself.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "for" }, { label: "bug reports" }]}
      title="Bug reports people can act on."
      lede="&quot;It's broken&quot; gets a reply asking what you mean. A screenshot with numbered steps, or a short clip, gets the bug fixed."
      ld={faqLd(qa)}
    >
      <p>
        A good bug report shows three things: what you did, what you expected, what happened. QGN makes the showing part
        fast, and it keeps the private bits out of the ticket.
      </p>

      <h2>a screenshot with steps</h2>
      <ol>
        <li>
          <kbd>ctrl</kbd>+<kbd>q</kbd> and drag over the broken part, or click the window to take all of it.
        </li>
        <li>
          Open it in Studio from the card in the corner. Press <kbd>c</kbd> for numbered callouts and click 1, 2, 3 on
          the steps. Press <kbd>a</kbd> for an arrow at the thing that is wrong.
        </li>
        <li>
          Press <kbd>x</kbd> and drag over emails, names or tokens. The default is a solid block that replaces the
          pixels. Nobody can unblur it.
        </li>
        <li>
          <kbd>ctrl</kbd>+<kbd>c</kbd> copies the result. Paste it into the ticket.
        </li>
      </ol>
      <p>
        Every mark stays editable. Click it with the pointer (<kbd>v</kbd>) to move it, resize it or delete it.{" "}
        <kbd>ctrl</kbd>+<kbd>z</kbd> undoes anything, crops included.
      </p>

      <h2>a clip of the bug happening</h2>
      <ol>
        <li>
          <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> and drag over the area. An optional 3, 2, 1 countdown gives you
          a moment to get ready.
        </li>
        <li>Reproduce the bug. Narrate with the microphone if it helps. Pause if you need to set something up.</li>
        <li>
          In Studio, set the trim with <kbd>i</kbd> and <kbd>o</kbd>. QGN makes zoom keyframes from your clicks, so the viewer sees what you
          clicked, not a tiny cursor in a big frame.
        </li>
        <li>
          Export MP4 for a ticket, or GIF where only images play inline. Studio estimates the file size before you
          export.
        </li>
      </ol>
      <p>
        More in <Link href="/features/screen-recording">screen recording</Link>.
      </p>

      <h2>small things that help</h2>
      <ul>
        <li>
          <b>Window capture</b> gives you exact edges, and the window in front, not the one behind it.
        </li>
        <li>
          <b>The cursor stamp.</b> Captures are taken without the cursor. Drop one in where it matters, on purpose.
        </li>
        <li>
          <b>Recent captures.</b> The last twelve stay in the tray menu. Closed the card and now the ticket wants it?
          It is still there.
        </li>
        <li>
          <b>Auto-save</b> to a folder, if you want a trail of every capture with a timestamp.
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
