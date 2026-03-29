import type { Metadata } from "next";
import { Github, Code } from "lucide-react";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Open Source Screenshot Tool for Windows — MIT Licensed — Quick Gen",
  description:
    "Quick Gen is a fully open-source screenshot tool for Windows, licensed under MIT. View the source code, fork it, modify it, distribute it. No hidden code, no telemetry, no proprietary components.",
  keywords: [
    "open source screenshot tool",
    "MIT license screenshot",
    "free open source screen capture",
    "open source Windows screenshot",
    "screenshot tool source code",
    "FOSS screenshot tool",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/open-source-screenshot-tool" },
  openGraph: {
    title: "Open Source Screenshot Tool for Windows — Quick Gen",
    description:
      "Fully open-source, MIT-licensed screenshot tool. Read every line. Fork it. No telemetry, no hidden code.",
    url: "https://qgn.app/features/open-source-screenshot-tool",
    images: [
      {
        url: "/logo/Logo Black BG.png",
        width: 1200,
        height: 630,
        alt: "Quick Gen — Screenshot tool for Windows",
      },
    ],
  },
};

export default function OpenSourcePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Open Source" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Open Source
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Read every line.
            <br />
            <span className="text-pink">We have nothing to hide.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Quick Gen is fully open source under the MIT license. The entire
            codebase — the desktop app and this website — is on GitHub. Fork it,
            modify it, learn from it, build something better.
          </p>
        </div>
      </section>

      {/* Repos */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            The source code
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://github.com/Mopra/qgn.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-3xl p-8 md:p-10 hover:border-pink/30 transition-colors group"
            >
              <Github className="w-8 h-8 mb-4 text-muted group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-black mb-2">
                qgn.app
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                The desktop application. Electron, Sharp, vanilla JavaScript.
                All the capture logic, annotation editor, preview cards, screen
                recording, and system tray integration.
              </p>
              <span className="text-pink text-sm font-bold">
                View on GitHub &rarr;
              </span>
            </a>
            <a
              href="https://github.com/Mopra/qgn.app.website"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-3xl p-8 md:p-10 hover:border-pink/30 transition-colors group"
            >
              <Code className="w-8 h-8 mb-4 text-muted group-hover:text-foreground transition-colors" />
              <h3 className="text-xl font-black mb-2">
                qgn.app.website
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                This website. Next.js, React, Tailwind CSS, TypeScript. The
                landing page, feature pages, and everything you&apos;re looking
                at right now.
              </p>
              <span className="text-pink text-sm font-bold">
                View on GitHub &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* What open source means */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            What MIT license
            <br />
            <span className="text-pink">means for you.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Use it freely</h3>
              <p className="text-muted leading-relaxed">
                Use Quick Gen for personal or commercial purposes. No usage
                restrictions, no license keys, no activation. Download it, use
                it, done.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Modify it</h3>
              <p className="text-muted leading-relaxed">
                Want to change something? Fork the repo, make your changes, and
                build your own version. Add features, remove features, make it
                yours.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Distribute it</h3>
              <p className="text-muted leading-relaxed">
                Share Quick Gen or your modified version with anyone. Include it
                in your team&apos;s toolkit, bundle it, or publish your own
                fork. The MIT license allows it.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Audit it</h3>
              <p className="text-muted leading-relaxed">
                Every line of code is public. No hidden telemetry, no analytics
                beacons, no network calls you can&apos;t see. Verify for
                yourself that the app does exactly what it says.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No telemetry */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Zero telemetry.
            <br />
            <span className="text-pink">Verify it yourself.</span>
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Quick Gen makes no network requests except to check for updates
              from GitHub Releases. No analytics, no crash reporting, no usage
              tracking. Your screenshots never leave your machine.
            </p>
            <p>
              This isn&apos;t just a promise — it&apos;s a verifiable fact. The
              entire codebase is public. Search for &quot;fetch&quot;,
              &quot;http&quot;, or &quot;analytics&quot; in the source. The only
              outbound call is the update check, and you can disable that too.
            </p>
            <p>
              We believe tools should do their job and get out of the way.
              Screenshot tools shouldn&apos;t know your name, your email, or
              what you&apos;re capturing.
            </p>
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Contribute
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Found a bug? Want to add a feature? Contributions are welcome. The
              codebase is straightforward — vanilla JavaScript, no framework
              overhead, clean separation between windows.
            </p>
            <p>
              Check out the{" "}
              <a
                href="https://github.com/Mopra/qgn.app/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:underline"
              >
                contributing guidelines
              </a>{" "}
              to get started.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/open-source-screenshot-tool" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
