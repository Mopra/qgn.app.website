import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedUseCases,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Screenshot Tool for Developers — Quick Gen",
  description:
    "A screenshot tool built for developer workflows. Hotkey capture, clipboard-first, floating previews for reference, annotation for code reviews, screen recording for demos. Free and open source.",
  keywords: [
    "screenshot tool for developers",
    "developer screenshot tool",
    "screenshot tool for coding",
    "programmer screenshot tool",
    "screenshot for code review",
    "developer screen capture",
    "Quick Gen",
  ],
  alternates: { canonical: "/use-cases/developers" },
  openGraph: {
    title: "Screenshot Tool for Developers — Quick Gen",
    description:
      "Built for developer workflows. Hotkey capture, clipboard-first, floating previews, annotation for code reviews.",
    url: "https://qgn.app/use-cases/developers",
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

export default function DevelopersPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Use Cases" },
        { label: "For Developers" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            For Developers
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Screenshot tool
            <br />
            <span className="text-pink">built for devs.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            You&apos;re deep in a debugging session. You need a screenshot for a
            PR comment. Ctrl+Q, select, paste. You never leave your editor. No
            window switching, no file management, no upload waiting.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Your daily workflow,
            <br />
            <span className="text-pink">accelerated.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">PR and code reviews</h3>
              <p className="text-muted leading-relaxed">
                Capture a UI state, annotate the issue with arrows and callout
                numbers, paste into a GitHub comment. Reviewers see exactly what
                you mean instead of reading a paragraph of description.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Debugging with floating refs
              </h3>
              <p className="text-muted leading-relaxed">
                Capture an error message or a stack trace and pin it as a
                floating preview. It stays on top of your editor while you dig
                through the code. No more switching between windows to re-read
                the error.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Base64 for embedding
              </h3>
              <p className="text-muted leading-relaxed">
                Set the output format to base64 Data URI and your screenshot
                goes to clipboard as an embeddable string. Paste directly into
                markdown, HTML, or CSS without saving a file.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Redact before sharing
              </h3>
              <p className="text-muted leading-relaxed">
                Capture a screen that shows API keys, tokens, or personal data?
                Open the annotation editor and blur the sensitive parts before
                pasting into a public channel or issue tracker.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Quick demos</h3>
              <p className="text-muted leading-relaxed">
                Need to show a colleague how a feature works? Ctrl+Shift+Q to
                record a screen region with your mic. Export as MP4 and drop it
                in Slack. Ten seconds from hotkey to posted.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Keyboard-first</h3>
              <p className="text-muted leading-relaxed">
                No mouse-first UI. Global hotkey to capture, single-key
                shortcuts for every annotation tool. The entire workflow stays
                on your keyboard, just like your editor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Why developers prefer local tools
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Cloud screenshot tools upload your screen to third-party servers.
              That means your codebase, your terminal output, your env files,
              and your internal dashboards could end up on someone else&apos;s
              infrastructure.
            </p>
            <p>
              Quick Gen never makes a network request (except for update
              checks). Your screenshots stay on your machine. The code is
              open source so you can verify that yourself.
            </p>
          </div>
        </div>
      </section>

      <RelatedUseCases current="/use-cases/developers" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
