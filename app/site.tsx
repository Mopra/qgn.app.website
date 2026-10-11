import type { Metadata } from "next";
import Link from "next/link";
import { INSTALLER, LATEST, REPO } from "./release";

export const SITE = "https://qgn.app";

// The QGN mark: a lens with two shutter blades.
export function Mark() {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <circle cx="200.131" cy="199.857" r="57.3104" transform="rotate(-30 200.131 199.857)" fill="currentColor" />
      <rect x="248.358" y="254.733" width="93.1294" height="28.6552" rx="14.3276" transform="rotate(60 248.358 254.733)" fill="currentColor" />
      <rect x="130.156" y="50" width="93.1294" height="28.6552" rx="14.3276" transform="rotate(60 130.156 50)" fill="currentColor" />
      <rect x="300.893" y="219.439" width="71.638" height="14.3276" rx="7.1638" transform="rotate(15 300.893 219.439)" fill="currentColor" />
      <rect x="32.7581" y="147.593" width="71.638" height="14.3276" rx="7.1638" transform="rotate(15 32.7581 147.593)" fill="currentColor" />
    </svg>
  );
}

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="QGN home">
      <span style={{ color: "var(--pink)", display: "flex" }}>
        <Mark />
      </span>
      qgn
    </Link>
  );
}

// Every page's metadata the same way: one title, one description, its own URL.
export function meta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "QGN", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const PAGES = {
  features: [
    ["/features/screenshot-tool", "screenshot tool"],
    ["/features/screen-recording", "screen recording"],
    ["/features/studio", "studio"],
    ["/features/screenshot-annotation", "annotation"],
    ["/features/screenshot-mockup-tool", "mockups"],
    ["/features/floating-previews", "floating previews"],
    ["/features/open-source-screenshot-tool", "open source"],
  ],
  vs: [
    ["/features/snipping-tool-alternative", "snipping tool"],
    ["/alternatives/sharex", "sharex"],
    ["/alternatives/greenshot", "greenshot"],
    ["/alternatives/lightshot", "lightshot"],
    ["/alternatives/snagit", "snagit"],
    ["/alternatives/cleanshot-x", "cleanshot x"],
  ],
  for: [
    ["/use-cases/developers", "developers"],
    ["/use-cases/bug-reports", "bug reports"],
    ["/use-cases/documentation", "documentation"],
    ["/use-cases/designers", "designers"],
  ],
  more: [
    ["/changelog", "changelog"],
    ["/faq", "faq"],
    ["/privacy", "privacy"],
    ["/terms", "terms"],
  ],
} as const;

export function Top() {
  return (
    <header className="top">
      <Brand />
      <nav>
        <Link href="/changelog" className="hide">changelog</Link>
        <a href={REPO}>source</a>
        <a className="get" href={INSTALLER}>download</a>
      </nav>
    </header>
  );
}

export function Foot() {
  return (
    <footer className="foot">
      {(Object.keys(PAGES) as (keyof typeof PAGES)[]).map((k) => (
        <div className="group" key={k}>
          <span>{k}</span>
          <div className="links">
            {PAGES[k].map(([href, label]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
      ))}
      <div className="group">
        <span>made by</span>
        <div className="links">
          <span>
            Morten, <a href="https://x.com/pradslabs">@pradslabs</a>. MIT licensed.{" "}
            <a href="https://github.com/Mopra/qgn.app.website">this site&apos;s source</a>.
          </span>
        </div>
      </div>
    </footer>
  );
}

// The download line every subpage ends on.
export function Cta() {
  return (
    <div className="cta">
      <a className="get" href={INSTALLER}>download QGN-Setup.exe</a>
      <span>windows 10 and 11 · about 85 MB · free, MIT</span>
      <a href={LATEST}>release notes</a>
    </div>
  );
}

type Crumb = { href?: string; label: string };

// A subpage: header, title, lede, the prose, the download line, the footer.
export function Doc({
  crumbs,
  title,
  lede,
  children,
  ld,
}: {
  crumbs?: Crumb[];
  title: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
  ld?: object;
}) {
  return (
    <>
      <Top />
      <main className="doc">
        {crumbs && (
          <p className="crumb">
            <Link href="/">qgn</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                {" / "}
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </span>
            ))}
          </p>
        )}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        <div className="prose">{children}</div>
        <Cta />
      </main>
      <Foot />
      {ld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
    </>
  );
}

// A comparison table. The QGN column is the last one and reads brighter.
export function Compare({ cols, rows }: { cols: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            {cols.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {cells.map((c, i) => (
                <td key={i} className={i === cells.length - 1 ? "q" : undefined}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Questions and answers, rendered and handed to search engines as FAQPage.
export function faqLd(qa: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
