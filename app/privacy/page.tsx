import { Doc, meta } from "@/app/site";

export const metadata = meta(
  "/privacy",
  "QGN privacy: the app collects nothing, the website uses Google Analytics",
  "QGN, the screenshot tool, collects no data and only talks to GitHub to check for updates. This website uses Google Analytics 4. Here is exactly what each one does.",
);

export default function Page() {
  return (
    <Doc
      crumbs={[{ label: "privacy" }]}
      title="The app collects nothing. The website counts visits."
      lede="Last updated 11 October 2026. Two different things live under the name QGN: the app on your computer and this website. They are handled differently, so they are described separately."
    >
      <h2>the app</h2>
      <p>
        QGN does not collect, store or send any personal data. There is no account, no cloud storage, no analytics, no
        crash reporter and no advertising code. Your captures never leave your computer unless you paste or send them
        somewhere yourself.
      </p>
      <ul>
        <li>
          <b>Captures</b> go to your clipboard. If you turn on auto-save, they are also written to a folder you choose
          (Pictures\qgn by default).
        </li>
        <li>
          <b>Pinned cards and recent captures</b> are kept in the app&apos;s data folder on your machine, so they
          survive a restart. Switching recent captures off deletes what is stored.
        </li>
        <li>
          <b>Settings</b> are a local file. Not synced, not backed up anywhere.
        </li>
      </ul>
      <p>
        The app makes one kind of network request: it asks GitHub&apos;s public releases for a newer version, every four
        hours and shortly after your computer wakes. If there is one, it downloads it from GitHub. GitHub sees that
        request like any web request (your IP address, for one). It contains nothing about you or your captures.
        GitHub&apos;s own privacy statement covers what they do with it.
      </p>
      <p>
        You don&apos;t have to trust this page. The app is open source under the MIT license, and every line is at{" "}
        <a href="https://github.com/Mopra/qgn.app">github.com/Mopra/qgn.app</a>.
      </p>

      <h2>this website</h2>
      <p>
        qgn.app uses <b>Google Analytics 4</b> to see how many people visit, which pages they land on, and where they
        came from. Google collects things like pages viewed, the referring site, rough location, device and browser,
        and sets cookies to do it.
      </p>
      <p>
        On top of page views the site sends one event of its own: <b>download</b>, when you click a link to the
        installer or a release on GitHub. It records which link and which page you were on. That is how I find out
        which pages lead to people actually trying QGN.
      </p>
      <p>
        The capture demo at the top of the home page runs entirely in your browser. The image it makes goes to your
        clipboard and nowhere else.
      </p>
      <p>
        To opt out, use an ad or tracker blocker, or{" "}
        <a href="https://tools.google.com/dlpage/gaoptout">Google&apos;s opt-out add-on</a>. The site works the same
        either way. Google&apos;s use of the data is covered by{" "}
        <a href="https://policies.google.com/privacy">Google&apos;s privacy policy</a>.
      </p>

      <h2>children</h2>
      <p>The app collects no data from anyone, children included.</p>

      <h2>changes</h2>
      <p>If any of this changes, this page and the date at the top change with it.</p>

      <h2>questions</h2>
      <p>
        Open an issue on <a href="https://github.com/Mopra/qgn.app/issues">GitHub</a>.
      </p>
    </Doc>
  );
}
