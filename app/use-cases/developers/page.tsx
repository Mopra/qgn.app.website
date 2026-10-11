import Link from "next/link";
import { Doc, faqLd, meta } from "@/app/site";

export const metadata = meta(
  "/use-cases/developers",
  "Screenshot tool for developers on Windows: QGN",
  "QGN is a free, open source screenshot tool for developers on Windows. Ctrl+Q to the clipboard, paste into a PR, an issue or a coding agent. GIFs for pull requests, base64 for HTML, no account.",
);

const qa: [string, string][] = [
  [
    "Can QGN copy a screenshot as base64?",
    "Yes. Set the copy format to base64 data URI in Settings, and every capture lands on the clipboard as a data: URI you can paste into HTML, CSS or a test fixture.",
  ],
  [
    "Can I make a GIF for a pull request?",
    "Yes. Record a region with Ctrl+Shift+Q, trim it in Studio, and export GIF, animated WebP, MP4 or WebM. Studio shows the output size before you export.",
  ],
  [
    "Is the source available?",
    "Yes, MIT licensed on GitHub. Electron, vanilla JavaScript, one main.js. Pull requests are welcome.",
  ],
];

const CLONE = `git clone https://github.com/Mopra/qgn.app.git
cd qgn.app
npm install
npm start`;

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "for" }, { label: "developers" }]}
      title="A screenshot tool that gets out of your editor's way."
      lede="You live in an editor, a terminal and a browser. A screenshot should cost one key and zero windows. That is what QGN is for."
      ld={faqLd(qa)}
    >
      <p>
        Most of a developer&apos;s screenshots go one place: pasted somewhere else, ten seconds later. A pull request.
        An issue. A Slack thread. A chat with a coding agent that takes images. QGN is built around that. Press{" "}
        <kbd>ctrl</kbd>+<kbd>q</kbd>, drag, and the image is on your clipboard before the overlay closes. No save
        dialog, no editor popping up, no file to clean up later.
      </p>

      <h2>the loop</h2>
      <ol>
        <li>
          <kbd>ctrl</kbd>+<kbd>q</kbd> from anywhere. Your editor keeps focus until you press it.
        </li>
        <li>Drag a region, or click a window to get exactly that window.</li>
        <li>
          <kbd>ctrl</kbd>+<kbd>v</kbd> into the PR, the issue or the chat. GitHub takes pasted images directly.
        </li>
      </ol>

      <h2>things that matter when you code</h2>
      <ul>
        <li>
          <b>Window capture.</b> Hover a terminal or a browser and it is outlined and named with its size. Click it.
          You get its exact edges, no wallpaper creeping in.
        </li>
        <li>
          <b>Pixel loupe.</b> A magnifier follows the cursor with live coordinates and the colour under it. Handy when
          a layout is off by two pixels and you want to know which two.
        </li>
        <li>
          <b>Sizes as you drag.</b> Width and height show while you select. Hold <kbd>shift</kbd> for a square, or{" "}
          <kbd>alt</kbd> as you release to nudge the edges with the arrow keys before it is taken.
        </li>
        <li>
          <b>Copy formats.</b> PNG by default. JPG or WebP with a quality slider when size matters. A base64 data URI
          when you are pasting into code.
        </li>
        <li>
          <b>Redaction that sticks.</b> Tokens and emails get a solid block, not a blur someone can undo. See{" "}
          <Link href="/features/screenshot-annotation">annotation</Link>.
        </li>
        <li>
          <b>GIFs for pull requests.</b> <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd> records a region. Trim it, let
          Studio zoom in on your clicks, export a GIF or MP4. See{" "}
          <Link href="/features/screen-recording">screen recording</Link>.
        </li>
        <li>
          <b>Already copied something?</b> The tray menu opens whatever image is on your clipboard in Studio, so a
          screenshot from anywhere gets the same tools.
        </li>
      </ul>

      <h2>what it is made of</h2>
      <p>
        Electron, vanilla JavaScript, plain HTML for each window. The main process is one <code>main.js</code>. No
        framework, no UI build step. Sharp for images, WebCodecs for video. MIT licensed, and the source is on{" "}
        <a href="https://github.com/Mopra/qgn.app">GitHub</a>, so if something bugs you, you can read why.
      </p>
      <pre>{CLONE}</pre>

      <h2>what it doesn&apos;t do</h2>
      <ul>
        <li>No upload to a link. If you want a URL, paste into a GitHub comment and let GitHub host it.</li>
        <li>No scrolling capture of long pages.</li>
        <li>No command line or scripting API for automated screenshots.</li>
        <li>No Mac or Linux build.</li>
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
