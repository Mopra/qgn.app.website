import Link from "next/link";
import Capture from "./capture";
import { INSTALLER, LATEST, REPO, installs, latest } from "./release";
import { Brand, Foot } from "./site";

// Rebuild at most once an hour, so the latest release and the count stay fresh
// without asking GitHub on every visit.
export const revalidate = 3600;

// Below this many installs the count would undersell the project, so it stays hidden.
const SHOW_INSTALLS_FROM = 1000;

export default async function Home() {
  const [n, last] = await Promise.all([installs(), latest()]);
  return (
    <>
      <Capture>
        <Brand />
        <div className="say">
          <h1>
            Screenshots for Windows.
            <br />
            <em>Ctrl+Q</em>, drag, it&apos;s on your clipboard.
          </h1>
        </div>
        <p className="needs">free · open source · no account</p>
        <nav className="corner">
          <a href={REPO}>source</a>
          {n >= SHOW_INSTALLS_FROM && <span>{n.toLocaleString("en-US")} installs</span>}
          <a className="get" href={INSTALLER}>
            download for windows
          </a>
        </nav>
      </Capture>

      <main className="page">
        <section className="row2">
          <h2>what</h2>
          <div>
            <p>
              <b>QGN</b>{" "}is a screenshot and screen recording tool for Windows 10 and 11. It sits in the tray. You press a
              key, you drag, and the picture is on your clipboard before the overlay has finished closing. No window to
              manage, no save dialog, no editor you didn&apos;t ask for.
            </p>
            <p>
              When you do want an editor, there is a good one. Arrows, text, redaction, crops that stay editable, and
              frames and backgrounds for the screenshots that go in a README or a tweet.
            </p>
          </div>
        </section>

        <section className="row2">
          <h2>keys</h2>
          <div>
            <dl className="keys">
              <dt><kbd>ctrl</kbd>+<kbd>q</kbd></dt>
              <dd>drag a region. release, and it&apos;s copied.</dd>
              <dt>click</dt>
              <dd>a whole window, exactly its edges.</dd>
              <dt><kbd>alt</kbd> on release</dt>
              <dd>adjust the selection before it&apos;s taken.</dd>
              <dt><kbd>space</kbd></dt>
              <dd>the whole display.</dd>
              <dt><kbd>shift</kbd></dt>
              <dd>a square.</dd>
              <dt><kbd>ctrl</kbd> while dragging</dt>
              <dd>ignore the window edges it snaps to.</dd>
              <dt><kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>q</kbd></dt>
              <dd>record a region, with your mic and system audio.</dd>
            </dl>
            <p>All of them can be rebound.</p>
          </div>
        </section>

        <section className="row2">
          <h2>agents</h2>
          <div>
            <p>
              A screenshot is the fastest way to show a coding agent what is wrong. <kbd>ctrl</kbd>+<kbd>q</kbd>, drag
              over the broken thing, paste into Claude Code, Codex or a chat. No file to save, no path to type, nothing
              left on your desktop.
            </p>
          </div>
        </section>

        <section className="row2">
          <h2>after</h2>
          <div>
            <p>
              Every capture lands on a small card in the corner. Drag it into Slack, an email or an editor. Pin it so it
              stays, even across a reboot. Re-copy it. The last twelve stay in the tray menu, so a card you dismissed
              is not gone.
            </p>
            <p>
              Open one in <Link href="/features/studio">Studio</Link>. <b>Markup</b>{" "}draws on the pixels: arrows,
              shapes, text, numbered callouts, redaction that can&apos;t be undone by the reader, a crop. Every mark stays
              editable after you place it. <b>Compose</b> puts the capture on a gradient or wallpaper, in a browser or
              window frame, with padding and a shadow, at the aspect ratio you need.
            </p>
            <p>
              Recordings get the same tools, plus a trim, zoom keyframes made from your own clicks, and export to MP4,
              WebM, GIF or animated WebP. MP4 and WebM encode faster than real time.
            </p>
          </div>
        </section>

        <section className="row2">
          <h2>won&apos;t</h2>
          <div>
            <p>
              No account. No cloud. No subscription. No upload button you might hit by mistake, and no link to your
              screen sitting on someone else&apos;s server.
            </p>
            <p>
              The app talks to one server: GitHub, to see if there is a new version. It has no analytics. The source is{" "}
              <a href={REPO}>right here</a> if you would rather check than trust me.
            </p>
          </div>
        </section>

        <section className="row2">
          <h2>inside</h2>
          <div>
            <p>
              Yes, it&apos;s Electron, so the installer is about 85 MB. Inside: vanilla JavaScript, one{" "}
              <code>main.js</code>, plain HTML for each window. No framework, no build step for the UI. Sharp for
              images, WebCodecs for video. MIT licensed.
            </p>
          </div>
        </section>

        {last && (
          <section className="row2 latest">
            <h2>latest</h2>
            <div>
              <p>
                <span className="v">{last.version}</span> · {last.date}
                {last.headline && (
                  <>
                    <br />
                    <b>{last.headline}</b>
                  </>
                )}
              </p>
              <p>
                <Link href="/changelog">every release</Link>, written up properly. It updates itself.
              </p>
            </div>
          </section>
        )}

        <section className="row2">
          <h2>vs</h2>
          <div>
            <ul className="list">
              <li>
                <Link href="/features/snipping-tool-alternative">Snipping Tool</Link> is built in and fine. QGN adds window
                snapping, cards you can drag out, and a real editor.
              </li>
              <li>
                <Link href="/alternatives/sharex">ShareX</Link> does everything. QGN does less, on purpose, with fewer
                settings.
              </li>
              <li>
                <Link href="/alternatives/greenshot">Greenshot</Link> is the old favourite. QGN adds recording and
                frames.
              </li>
              <li>
                <Link href="/alternatives/lightshot">Lightshot</Link> is as quick, but closed, with an upload button.
              </li>
              <li>
                <Link href="/alternatives/snagit">Snagit</Link> is the pro tool, and it costs money every year.
              </li>
              <li>
                <Link href="/alternatives/cleanshot-x">CleanShot X</Link>{" "}is the one Mac people love. It doesn&apos;t
                run on Windows. This is my answer to that.
              </li>
            </ul>
          </div>
        </section>

        <section className="row2" id="install">
          <h2>install</h2>
          <div>
            <ol className="steps">
              <li>
                Download <a href={INSTALLER}>QGN-Setup.exe</a> from the <a href={LATEST}>latest release</a>.
              </li>
              <li>
                It isn&apos;t code signed yet. If SmartScreen stops you, choose <b>More info</b>, then <b>Run anyway</b>.
              </li>
              <li>
                Press <kbd>ctrl</kbd>+<kbd>q</kbd>.
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Foot />
    </>
  );
}
