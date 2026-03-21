import { Download, Github, Star } from "lucide-react";
import Image from "next/image";

const DOWNLOAD_URL = "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe";

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


function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center">
      <a href="/" className="flex items-center gap-3 text-foreground">
        <Image src="/logo/Logo Transparent BG.png" alt="Quick Gen" width={32} height={32} className="w-8 h-8" />
        <span className="font-bold tracking-tight">Quick Gen</span>
      </a>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Mopra/qgn.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group/star flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
        >
          <Github className="w-5 h-5" />
          <Star className="w-3.5 h-3.5 transition-colors group-hover/star:fill-yellow-400 group-hover/star:text-yellow-400" />
        </a>
        <a
          href={DOWNLOAD_URL}
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-pink text-white font-bold text-sm rounded-full hover:bg-pink-light transition-all hover:scale-105"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24">
      {/* Content */}
      <div className="relative max-w-6xl">
        <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
          Ctrl+Q &mdash; that&apos;s it
        </p>

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

        <div className="flex flex-wrap items-center gap-5 mt-12">
          <a
            href={DOWNLOAD_URL}
            className="group inline-flex items-center gap-3 px-8 py-5 bg-pink text-white font-black text-lg rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_80px_rgba(175,34,107,0.25)]"
          >
            <Download className="w-5 h-5" />
            Download for Windows
          </a>
          <span className="text-dim text-sm">
            Free &middot; 85 MB &middot; No account needed
          </span>
        </div>
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
    "Choose a plan",
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
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-20 text-center">
          Them vs. <span className="text-pink">us.</span>
        </h2>

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
  const features = [
    {
      label: "Clipboard-first",
      text: "Every capture is on your clipboard before you can blink. PNG, JPG, WebP, base64. Paste anywhere.",
    },
    {
      label: "Floating previews",
      text: "Screenshots appear as always-on-top cards. Pin them. Stack them. Reference while you build.",
    },
    {
      label: "Annotation",
      text: "Arrows, text, highlights, drawings. Mark up screenshots without leaving the app.",
    },
    {
      label: "Screen recording",
      text: "Ctrl+Shift+Q. Record any region with mic input. Bug reports in 10 seconds.",
    },
    {
      label: "Auto-save",
      text: "Every capture saved to your folder. Or not. Your call.",
    },
    {
      label: "System tray",
      text: "Invisible until you need it. No window to manage. No dock icon to ignore.",
    },
  ];

  return (
    <section className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-20">
          The full
          <br />
          <span className="text-pink">toolkit.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {features.map((f) => (
            <div key={f.label} className="border-t border-border pt-6">
              <h3 className="text-xl font-black tracking-tight mb-2">
                {f.label}
              </h3>
              <p className="text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
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

        <a
          href={DOWNLOAD_URL}
          className="group inline-flex items-center gap-3 mt-10 px-10 py-6 bg-pink text-white font-black text-xl rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_100px_rgba(175,34,107,0.3)]"
        >
          <Download className="w-6 h-6" />
          Download for Windows
        </a>
        <p className="mt-5 text-dim text-sm">
          Free &middot; Windows 10+ &middot; No account &middot; No cloud &middot; Just a damn good tool
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-dim w-full">
      <span>&copy; {new Date().getFullYear()} Quick Gen</span>
      <a
        href="https://github.com/Mopra/qgn.app"
        className="text-muted hover:text-foreground transition-colors"
      >
        GitHub
      </a>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="noise">
      <Nav />
      <Hero />
      <Marquee />
      <TheFlow />
      <Versus />
      <Features />
      <Manifesto />
      <FinalCTA />
      <Footer />
    </div>
  );
}
