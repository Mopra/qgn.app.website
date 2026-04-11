import { Code, Download, Github, MessageSquare, Star } from "lucide-react";
import Link from "next/link";
import { Nav } from "@/app/components/FeatureLayout";
import { DownloadButton } from "@/app/components/DownloadPopup";
import { SmartDownloadHero } from "@/app/components/SmartDownload";

const DOWNLOAD_URL = "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe";
const GITHUB_URL = "https://github.com/Mopra/qgn.app";

/* ── GitHub API helpers ── */

interface GitHubAsset {
  download_count: number;
}

interface GitHubRelease {
  tag_name: string;
  name: string;
  published_at: string;
  draft: boolean;
  assets: GitHubAsset[];
}

async function getReleasesData(): Promise<{ downloads: number; latestVersion: string | null; latestDate: string | null }> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Mopra/qgn.app/releases?per_page=50",
      {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return { downloads: 0, latestVersion: null, latestDate: null };

    const releases: GitHubRelease[] = await res.json();
    const published = releases.filter((r) => !r.draft);

    const downloads = published.reduce(
      (sum, r) => sum + r.assets.reduce((a, asset) => a + asset.download_count, 0),
      0
    );

    const latest = published[0] ?? null;

    return {
      downloads,
      latestVersion: latest?.name || latest?.tag_name || null,
      latestDate: latest?.published_at || null,
    };
  } catch {
    return { downloads: 0, latestVersion: null, latestDate: null };
  }
}

/* Static logo for nav etc. */
function LogoMark({ className = "w-8 h-8", color = "#AF226B" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className}>
      <circle cx="200.131" cy="199.857" r="57.3104" transform="rotate(-30 200.131 199.857)" fill={color} />
      <rect x="248.358" y="254.733" width="93.1294" height="28.6552" rx="14.3276" transform="rotate(60 248.358 254.733)" fill={color} />
      <rect x="130.156" y="50" width="93.1294" height="28.6552" rx="14.3276" transform="rotate(60 130.156 50)" fill={color} />
      <rect x="300.893" y="219.439" width="71.638" height="14.3276" rx="7.1638" transform="rotate(15 300.893 219.439)" fill={color} />
      <rect x="32.7581" y="147.593" width="71.638" height="14.3276" rx="7.1638" transform="rotate(15 32.7581 147.593)" fill={color} />
    </svg>
  );
}

function Hero({ downloads, latestVersion }: { downloads: number; latestVersion: string | null }) {
  const downloadLabel = downloads > 0
    ? downloads >= 1000
      ? `${(downloads / 1000).toFixed(1).replace(/\.0$/, "")}k downloads`
      : `${downloads.toLocaleString()} downloads`
    : null;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24">
      {/* Content */}
      <div className="relative max-w-6xl">
        {/* Top line with changelog teaser */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase">
            Ctrl+Q &mdash; that&apos;s it
          </p>
          {latestVersion && (
            <Link
              href="/changelog"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border border-pink/30 text-pink hover:bg-pink/10 transition-colors"
            >
              {latestVersion} just shipped &rarr;
            </Link>
          )}
        </div>

        <h1 className="text-[clamp(3rem,9vw,8rem)] font-black leading-[0.88] tracking-[-0.05em]">
          Screenshot
          <br />
          tools are
          <br />
          <span className="text-pink">broken.</span>
        </h1>

        <p className="max-w-lg text-lg md:text-xl text-muted mt-8 leading-relaxed">
          They want your email. They want a subscription. They want to upload
          your screen to their cloud. For a <em>screenshot</em>.
          <br /><br />
          We made something that just works.
        </p>

        <SmartDownloadHero
          downloadButton={
            <div className="flex flex-wrap items-center gap-5 mt-12">
              <DownloadButton
                className="group inline-flex items-center gap-3 px-8 py-5 bg-pink text-white font-black text-lg rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_80px_rgba(175,34,107,0.25)]"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </DownloadButton>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-4 border border-border text-foreground font-bold text-base rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03]"
              >
                <Code className="w-5 h-5 text-muted group-hover:text-pink transition-colors" />
                View Source
              </a>
              <span className="text-dim text-sm">
                Free &middot; Open source &middot; &lt;100 MB{downloadLabel ? ` \u00b7 ${downloadLabel}` : " \u00b7 No account"}
              </span>
            </div>
          }
        />
      </div>

      {/* Keyboard visual at bottom */}
      <div className="flex items-center gap-3 mt-auto mb-12 pt-24">
        <kbd className="key-animate px-5 py-3 bg-[#111] border border-border rounded-xl text-lg font-bold font-mono shadow-[0_4px_0_#1a1a1a]">
          Ctrl
        </kbd>
        <span className="text-dim text-2xl font-light">+</span>
        <kbd className="key-animate-delay px-5 py-3 bg-[#111] border border-border rounded-xl text-lg font-bold font-mono shadow-[0_4px_0_#1a1a1a]">
          Q
        </kbd>
        <span className="text-dim mx-2">&rarr;</span>
        <span className="text-muted text-sm">clipboard. done. move on.</span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "OPEN SOURCE",
    "NO CLOUD UPLOADS",
    "NO ACCOUNT",
    "NO SUBSCRIPTION",
    "NO TELEMETRY",
    "NO BULLSHIT",
  ];
  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-8 text-sm font-black tracking-widest text-dim">
            {item} <span className="text-pink ml-8">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TheFlow() {
  return (
    <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto">
      <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-24">
        Three keystrokes.
        <br />
        <span className="text-pink">Zero friction.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
        {/* Step 1 */}
        <div className="relative border-b md:border-b-0 md:border-r border-border p-8 md:p-12 group">
          <span className="giant-number block mb-6 group-hover:[-webkit-text-stroke-color:#AF226B] transition-all">1</span>
          <h3 className="text-2xl font-black tracking-tight mb-3">Hotkey</h3>
          <p className="text-muted leading-relaxed">
            Ctrl+Q. Fullscreen overlay drops. Your cursor becomes a crosshair. No menus. No windows. Just the screen.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative border-b md:border-b-0 md:border-r border-border p-8 md:p-12 group">
          <span className="giant-number block mb-6 group-hover:[-webkit-text-stroke-color:#AF226B] transition-all">2</span>
          <h3 className="text-2xl font-black tracking-tight mb-3">Select</h3>
          <p className="text-muted leading-relaxed">
            Click. Drag. Release. Pixel-precise region capture. The entire interaction takes under a second.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative p-8 md:p-12 group">
          <span className="giant-number block mb-6 group-hover:[-webkit-text-stroke-color:#AF226B] transition-all">3</span>
          <h3 className="text-2xl font-black tracking-tight mb-3">Done</h3>
          <p className="text-muted leading-relaxed">
            On your clipboard. Floating preview on screen. Paste it wherever. Pin it. Annotate it. Or just move on.
          </p>
        </div>
      </div>
    </section>
  );
}

function Versus() {
  const theirs = [
    "Sign up with email",
    "Choose a plan ($63/yr for Snagit)",
    "Download 400 MB",
    "Create a project",
    "Take a screenshot",
    "Wait for cloud upload",
    "Get a sharing link",
    "Paste the link",
  ];

  const ours = ["Ctrl+Q", "Select region", "Paste"];

  return (
    <section className="px-6 md:px-10 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6 text-center">
          Them vs. <span className="text-pink">us.</span>
        </h2>
        <p className="text-muted text-center mb-20 max-w-lg mx-auto">
          Snagit charges $63/year. ShareX needs a PhD to configure. Lightshot uploads everything to their servers. There&apos;s a simpler way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Theirs */}
          <div className="border border-border rounded-3xl p-8 md:p-10">
            <p className="text-sm font-bold text-dim uppercase tracking-widest mb-8">
              The other guys
            </p>
            <ol className="space-y-4">
              {theirs.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-muted">
                  <span className="text-dim font-mono text-sm mt-0.5 min-w-[1.5rem]">
                    {i + 1}.
                  </span>
                  <span className="line-through decoration-dim/50">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Ours */}
          <div className="border border-pink/30 rounded-3xl p-8 md:p-10 bg-gradient-to-b from-pink/[0.04] to-transparent">
            <p className="text-sm font-bold text-pink uppercase tracking-widest mb-8">
              Quick Gen
            </p>
            <ol className="space-y-4">
              {ours.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-pink font-mono text-sm mt-0.5 min-w-[1.5rem]">
                    {i + 1}.
                  </span>
                  <span className="font-bold">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-dim text-sm">
                That&apos;s it. That&apos;s the whole product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const coreFeatures = [
    {
      label: "Clipboard-first",
      text: "Every capture lands on your clipboard instantly. PNG, JPG, WebP, or base64 Data URI \u2014 pick your format, paste anywhere.",
    },
    {
      label: "Floating previews",
      text: "Screenshots appear as always-on-top cards. Pin them, stack them, drag them around, resize them. They survive restarts too.",
    },
    {
      label: "Full annotation editor",
      text: "Arrows, shapes, text, freehand drawing, numbered callouts, and a redaction tool for sensitive info. Six colors, three stroke widths, full undo. All keyboard-shortcut driven.",
    },
    {
      label: "Screen recording",
      text: "Ctrl+Shift+Q. Select any region. Toggle mic input, pick your audio device. Export as MP4 or WebM. Bug reports in 10 seconds.",
    },
    {
      label: "Multi-monitor support",
      text: "Works seamlessly across multiple displays. The overlay appears on whichever screen your cursor is on. No extra setup.",
    },
    {
      label: "Customizable hotkeys",
      text: "Rebind capture and recording hotkeys to whatever works for your workflow. Your shortcuts, your rules.",
    },
  ];

  const moreFeatures = [
    {
      label: "Auto-save",
      text: "Every capture saved to a folder of your choice with organized timestamps. Or clipboard-only. Your call.",
    },
    {
      label: "System tray",
      text: "Lives quietly in your tray. No window to manage. No dock icon to ignore. Invisible until you need it.",
    },
    {
      label: "Auto-updates",
      text: "Checks for updates in the background. One-click install when a new version drops. Or it updates silently on quit.",
    },
    {
      label: "Pixel dimensions",
      text: "See exact pixel dimensions of your selection in real-time as you drag. Precision when you need it.",
    },
    {
      label: "Pin & restore",
      text: "Pinned previews persist across app restarts. Close the app, reboot, your pinned captures are still there.",
    },
    {
      label: "Lightweight",
      text: "Under 100 MB installed. Vanilla JS under the hood \u2014 no framework bloat. Starts with your system and stays out of your way.",
    },
  ];

  return (
    <section id="features" className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-20">
          The full
          <br />
          <span className="text-pink">toolkit.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {coreFeatures.map((f) => (
            <div key={f.label} className="border-t border-border pt-6">
              <h3 className="text-xl font-black tracking-tight mb-2">
                {f.label}
              </h3>
              <p className="text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-sm font-bold text-dim uppercase tracking-widest mb-12">
            And everything else
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {moreFeatures.map((f) => (
              <div key={f.label}>
                <h4 className="text-base font-black tracking-tight mb-1.5">
                  {f.label}
                </h4>
                <p className="text-muted text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Shortcuts() {
  const shortcuts = [
    { keys: "Ctrl+Q", action: "Capture screenshot" },
    { keys: "Ctrl+Shift+Q", action: "Start screen recording" },
    { keys: "D", action: "Draw tool" },
    { keys: "A", action: "Arrow tool" },
    { keys: "S", action: "Shape tool" },
    { keys: "T", action: "Text tool" },
    { keys: "X", action: "Redact / blur" },
    { keys: "C", action: "Callout numbers" },
    { keys: "Ctrl+Z", action: "Undo" },
    { keys: "Esc", action: "Cancel" },
  ];

  return (
    <section className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
          Keyboard-driven.
          <br />
          <span className="text-pink">Mouse optional.</span>
        </h2>
        <p className="text-muted text-lg mb-16 max-w-lg">
          Every annotation tool has a single-key shortcut. No toolbar hunting, no right-click menus. Just press and go.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {shortcuts.map((s) => (
            <div
              key={s.keys}
              className="border border-border rounded-2xl p-5 hover:border-pink/30 transition-colors group"
            >
              <kbd className="block text-lg font-mono font-bold text-foreground group-hover:text-pink transition-colors mb-2">
                {s.keys}
              </kbd>
              <span className="text-muted text-sm">{s.action}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
          Fully <span className="text-pink">open source.</span>
        </h2>
        <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          QGN is MIT-licensed. Read every line. Fork it. Improve it. Build something better.
          No hidden code, no proprietary blobs, no server calls you can&apos;t inspect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 border border-border rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03] font-bold text-lg"
          >
            <Github className="w-5 h-5" />
            View App Source
          </a>
          <a
            href="https://github.com/Mopra/qgn.app.website"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 border border-border rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03] font-bold text-lg"
          >
            <Code className="w-5 h-5" />
            View Website Source
          </a>
        </div>
        <p className="mt-8 text-dim text-sm">
          MIT License &middot; Free to use, modify, and distribute
        </p>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="px-6 md:px-10 py-40 text-center relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink/10 rounded-full blur-[150px] pointer-events-none" />

      <p className="relative text-[clamp(2rem,5vw,4rem)] md:text-[clamp(2.5rem,5vw,5rem)] font-black tracking-[-0.04em] leading-[1.1] max-w-4xl mx-auto">
        We don&apos;t want your data.
        <br />
        We don&apos;t want your email.
        <br />
        We don&apos;t want a <span className="text-pink">monthly fee.</span>
        <br />
        <br />
        <span className="text-muted">We just want you to take faster screenshots.</span>
      </p>
    </section>
  );
}

function StayConnected() {
  return (
    <section className="px-6 md:px-10 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-sm font-bold text-dim uppercase tracking-widest mb-10">
          Stay in the loop
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border rounded-2xl hover:border-yellow-500/40 transition-all hover:scale-[1.03] hover:bg-yellow-500/[0.04]"
          >
            <Star className="w-5 h-5 text-muted group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-colors" />
            <span className="font-bold">Star on GitHub</span>
          </a>
          <a
            href={`${GITHUB_URL}/discussions`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03] hover:bg-pink/[0.04]"
          >
            <MessageSquare className="w-5 h-5 text-muted group-hover:text-pink transition-colors" />
            <span className="font-bold">Join the Discussion</span>
          </a>
          <a
            href="https://x.com/m_prads"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-4 border border-border rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03] hover:bg-pink/[0.04]"
          >
            <svg className="w-5 h-5 text-muted group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="font-bold">Follow on X</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <LogoMark className="w-16 h-16 mx-auto mb-10 opacity-30" />

        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
          Go build something.
          <br />
          <span className="text-pink">We&apos;ll handle the screenshots.</span>
        </h2>

        <DownloadButton
          className="group inline-flex items-center gap-3 mt-10 px-10 py-6 bg-pink text-white font-black text-xl rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_100px_rgba(175,34,107,0.3)]"
        >
          <Download className="w-6 h-6" />
          Download for Windows
        </DownloadButton>
        <p className="mt-5 text-dim text-sm">
          Free &middot; Open source &middot; Windows 10+ &middot; No account &middot; No cloud
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Top row: nav links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <Link href="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
            <Link href="/faq" className="text-muted hover:text-foreground transition-colors">FAQ</Link>
            <Link href="/changelog" className="text-muted hover:text-foreground transition-colors">Changelog</Link>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a>
          </div>
          <div className="flex items-center gap-x-5 text-sm">
            <Link href="/privacy" className="text-dim hover:text-muted transition-colors">Privacy</Link>
            <Link href="/terms" className="text-dim hover:text-muted transition-colors">Terms</Link>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/m_prads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-foreground transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-dim">
          &copy; {new Date().getFullYear()} Quick Gen &middot; MIT License
        </div>
      </div>
    </footer>
  );
}

export default async function Home() {
  const { downloads, latestVersion } = await getReleasesData();

  return (
    <div className="noise">
      <Nav />
      <main>
        <Hero downloads={downloads} latestVersion={latestVersion} />
        <Marquee />
        <TheFlow />
        <Versus />
        <Features />
        <Shortcuts />
        <OpenSource />
        <Manifesto />
        <StayConnected />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
