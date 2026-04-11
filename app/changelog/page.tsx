import type { Metadata } from "next";
import { Nav, Breadcrumbs, FeatureFooter } from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Changelog — Quick Gen Release History",
  description:
    "See what's new in Quick Gen. Full release history with every change, improvement, and bug fix. Automatically updated from GitHub releases.",
  keywords: [
    "Quick Gen changelog",
    "Quick Gen updates",
    "Quick Gen release history",
    "QGN changelog",
    "Quick Gen version history",
  ],
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog — Quick Gen",
    description:
      "Full release history for Quick Gen. Every change, improvement, and bug fix.",
    url: "https://qgn.app/changelog",
    images: [
      {
        url: "/logo/Logo%20Black%20BG.png",
        width: 1200,
        height: 630,
        alt: "Quick Gen — Screenshot tool for Windows",
      },
    ],
  },
};

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
  prerelease: boolean;
  draft: boolean;
}

async function getReleases(): Promise<GitHubRelease[]> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Mopra/qgn.app/releases?per_page=50",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 }, // revalidate every hour
      }
    );

    if (!res.ok) return [];

    const releases: GitHubRelease[] = await res.json();
    return releases.filter((r) => !r.draft);
  } catch {
    return [];
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function sanitizeHtml(html: string): string {
  // Strip all HTML tags except safe ones
  const ALLOWED_TAGS = /^(a|b|strong|i|em|code|pre|br|p|h[1-6]|ul|ol|li|blockquote|hr|span|div)$/i;
  return html.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (match, tag) => {
    if (ALLOWED_TAGS.test(tag)) {
      // Strip event handlers and javascript: URLs from allowed tags
      return match
        .replace(/\s+on\w+\s*=\s*["'][^"']*["']/gi, "")
        .replace(/\s+on\w+\s*=\s*\S+/gi, "")
        .replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');
    }
    return ""; // strip disallowed tags entirely
  });
}

function parseMarkdown(body: string): string {
  if (!body) return "";

  // Convert markdown to simple HTML
  const html = body
    // Headers
    .replace(/^### (.+)$/gm, '<h4 class="text-base font-bold mt-6 mb-2">$1</h4>')
    .replace(/^## (.+)$/gm, '<h3 class="text-lg font-bold mt-6 mb-2">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-[#111] border border-border rounded text-sm font-mono">$1</code>')
    // List items
    .replace(/^[*-] (.+)$/gm, '<li class="ml-4 pl-2 mb-1">$1</li>')
    // Wrap consecutive li elements in ul
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="list-disc mb-4">$1</ul>')
    // Paragraphs (lines that aren't already HTML)
    .replace(/^(?!<[hul]|<li)(.+)$/gm, '<p class="mb-3">$1</p>')
    // Line breaks
    .replace(/\n\n/g, "");

  return sanitizeHtml(html);
}

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Changelog" }
      ]} />

      <section className="relative flex flex-col justify-center px-6 md:px-10 pt-8 pb-16">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Changelog
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            What&apos;s new in
            <br />
            <span className="text-pink">Quick Gen.</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted leading-relaxed">
            Every release, automatically pulled from{" "}
            <a
              href="https://github.com/Mopra/qgn.app/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink hover:underline"
            >
              GitHub Releases
            </a>
            . This page updates itself.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-3xl mx-auto">
          {releases.length === 0 ? (
            <div className="border border-border rounded-2xl p-8 text-center">
              <p className="text-muted">
                No releases found. Check back soon or view releases directly on{" "}
                <a
                  href="https://github.com/Mopra/qgn.app/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-0">
              {releases.map((release, i) => (
                <div
                  key={release.tag_name}
                  className="relative border-l-2 border-border pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-[-7px] top-1 w-3 h-3 rounded-full ${
                      i === 0 ? "bg-pink" : "bg-border"
                    }`}
                  />

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-black tracking-tight">
                      {release.name || release.tag_name}
                    </h2>
                    {release.prerelease && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full border border-pink/30 text-pink">
                        Pre-release
                      </span>
                    )}
                    {i === 0 && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-pink text-white">
                        Latest
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-dim mb-4">
                    <time dateTime={release.published_at}>
                      {formatDate(release.published_at)}
                    </time>
                    {" · "}
                    <a
                      href={release.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                    >
                      {release.tag_name}
                    </a>
                  </p>

                  {release.body ? (
                    <div
                      className="text-muted leading-relaxed prose-sm"
                      dangerouslySetInnerHTML={{
                        __html: parseMarkdown(release.body),
                      }}
                    />
                  ) : (
                    <p className="text-dim text-sm italic">
                      No release notes for this version.
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <FeatureFooter />
    </div>
  );
}
