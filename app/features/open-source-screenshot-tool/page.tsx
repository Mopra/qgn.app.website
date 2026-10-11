import Link from "next/link";
import { Compare, Doc, faqLd, meta } from "@/app/site";
import { REPO } from "@/app/release";

export const metadata = meta(
  "/features/open-source-screenshot-tool",
  "QGN: open source screenshot tool for Windows, MIT licensed",
  "QGN is an open source screenshot and screen recording tool for Windows under the MIT license. Electron, vanilla JavaScript, one main.js. Read the code, build it yourself, send a pull request.",
);

const qa: [string, string][] = [
  [
    "What license is QGN under?",
    "MIT. Use it, change it, ship it in something else. Keep the copyright notice.",
  ],
  [
    "Does the app phone home?",
    "It checks GitHub for updates. That is the only network request it makes. There are no analytics in the app.",
  ],
  [
    "Why Electron?",
    "Because it let one person ship a capture overlay, an editor and a video encoder in plain JavaScript and HTML. The cost is size: the installer is about 85 MB.",
  ],
  [
    "Can I build QGN myself?",
    "Yes. Clone the repo, run npm install and npm start. npm run build produces the Windows installer.",
  ],
];

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "features" }, { label: "open source" }]}
      title="Open source, and small enough to actually read."
      lede="QGN is MIT licensed. The whole app is one main.js and a handful of HTML files. No framework, no transpiler. You can read what it does with your screen in an afternoon."
      ld={faqLd(qa)}
    >
      <p>
        A screenshot tool sees everything on your screen. Passwords, private messages, the customer record you have open.
        &quot;Trust us&quot; is a weak answer for software in that position. Source you can read is a better one.
      </p>
      <p>
        So here it is: <a href={REPO}>github.com/Mopra/qgn.app</a>. MIT licensed. Every release is built by GitHub Actions from that
        repo and published on its releases page, with the notes taken straight from <code>CHANGELOG.md</code>.
      </p>

      <h2>what it talks to</h2>
      <p>
        One server: GitHub, to check for a new version every few hours and when the machine wakes up. No analytics, no
        crash reporting service, no account, no upload feature. Captures go to your clipboard and, if you turn on
        auto-save, to a folder you choose.
      </p>

      <h2>the stack</h2>
      <Compare
        cols={["what"]}
        rows={[
          ["shell", "Electron"],
          ["ui", "vanilla HTML, CSS and JavaScript. each window is one self contained HTML file"],
          ["main process", "one main.js, plus small pure modules in lib/ that are unit tested"],
          ["images", "Sharp"],
          ["video", "WebCodecs, muxed by two vendored container writers for MP4 and WebM"],
          ["window edges", "a small PowerShell helper for snap to window"],
          ["installer", "electron-builder, NSIS"],
          ["updates", "electron-updater, from GitHub releases"],
        ]}
      />
      <p>
        Yes, it is Electron, so the installer is about 85 MB. That is the honest cost. In return there is no build step for
        the UI and nothing between you and the code but a text editor.
      </p>

      <h2>build it yourself</h2>
      <pre>{`git clone https://github.com/Mopra/qgn.app.git
cd qgn.app
npm install
npm start        # run it
npm run build    # make the Windows installer in dist/`}</pre>
      <p>You need Node.js 18 or later, and Windows to build the installer.</p>

      <h2>tests</h2>
      <ul>
        <li>
          <code>npm run check</code>: syntax, inline scripts in the HTML, unit tests for lib/, and a boot of the main
          process. Needs no display, runs on every push.
        </li>
        <li>
          <code>npm run smoke</code>: boots a hidden Studio window and drives it end to end, including a real encoded
          export.
        </li>
        <li>
          <code>npm run smoke:overlay</code>: boots the capture overlay and drives a real selection with synthetic mouse
          and key events.
        </li>
      </ul>

      <h2>contributing</h2>
      <p>
        Fixes, performance work, new annotation tools and documentation are all welcome. Read{" "}
        <a href={`${REPO}/blob/main/CONTRIBUTING.md`}>CONTRIBUTING.md</a> first. The short version: vanilla JavaScript,
        keep it simple, run the checks, and add a line to the changelog if the change is visible.
      </p>

      <h2>compared</h2>
      <p>
        <Link href="/alternatives/sharex">ShareX</Link> and <Link href="/alternatives/greenshot">Greenshot</Link> are
        open source too, and both are good. QGN is the smaller one with an opinion: clipboard first, one hotkey, a
        modern editor. <Link href="/alternatives/lightshot">Lightshot</Link> and{" "}
        <Link href="/alternatives/snagit">Snagit</Link> are closed source.
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
