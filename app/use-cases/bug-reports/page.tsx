import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedUseCases,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Screenshot Tool for Bug Reports — Quick Gen",
  description:
    "File better bug reports in seconds. Capture the issue, annotate with arrows and callouts, record a video reproduction, paste into your issue tracker. Free and open source.",
  keywords: [
    "screenshot for bug reports",
    "bug report screenshot tool",
    "screenshot for issue tracker",
    "bug report screen recording",
    "annotate bug screenshot",
    "JIRA screenshot tool",
    "GitHub issues screenshot",
    "Quick Gen",
  ],
  alternates: { canonical: "/use-cases/bug-reports" },
  openGraph: {
    title: "Screenshot Tool for Bug Reports — Quick Gen",
    description:
      "File better bug reports. Capture, annotate, record reproductions, paste into your tracker. Seconds, not minutes.",
    url: "https://qgn.app/use-cases/bug-reports",
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

export default function BugReportsPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Use Cases" },
        { label: "For Bug Reports" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            For Bug Reports
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Better bug reports
            <br />
            <span className="text-pink">in 10 seconds.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            A screenshot is worth a thousand words in a bug report. A
            screenshot with annotations is worth even more. A screen recording
            with narration? That&apos;s the bug report that actually gets fixed.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            From bug to ticket
            <br />
            <span className="text-pink">in three steps.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-pink font-mono font-bold text-sm">01</span>
              <h3 className="text-xl font-black mt-2 mb-3">Capture</h3>
              <p className="text-muted leading-relaxed">
                Press Ctrl+Q and select the area showing the bug. For visual
                issues, a screenshot is instant. For behavioral bugs, press
                Ctrl+Shift+Q to record a video reproduction with your narration.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">02</span>
              <h3 className="text-xl font-black mt-2 mb-3">Annotate</h3>
              <p className="text-muted leading-relaxed">
                Open the annotation editor. Circle the broken element with a
                shape. Add an arrow pointing to the incorrect value. Use
                numbered callouts to label steps. Blur any sensitive data.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">03</span>
              <h3 className="text-xl font-black mt-2 mb-3">Paste</h3>
              <p className="text-muted leading-relaxed">
                The annotated screenshot is on your clipboard. Paste directly
                into GitHub Issues, Jira, Linear, Notion, Slack — anywhere that
                accepts images. No file upload step, no link sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Why visual bug reports
            <br />
            <span className="text-pink">get fixed faster.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No ambiguity</h3>
              <p className="text-muted leading-relaxed">
                &quot;The button is misaligned&quot; could mean anything.
                A screenshot with an arrow pointing at the exact pixel removes
                all guesswork. The developer sees exactly what you see.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Numbered callouts for steps
              </h3>
              <p className="text-muted leading-relaxed">
                Use Quick Gen&apos;s callout tool to place numbered markers on
                the screenshot. &quot;Click 1, then 2, observe 3&quot; is
                clearer than a paragraph of reproduction steps.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Video reproductions</h3>
              <p className="text-muted leading-relaxed">
                Some bugs only show up in motion — hover states, animations,
                race conditions. Record a screen region with narration to show
                the exact sequence of events that triggers the issue.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Redact before sharing
              </h3>
              <p className="text-muted leading-relaxed">
                Bug reports often show internal data, user emails, or API
                responses. Use the blur tool to redact sensitive information
                before pasting into a shared channel or public issue tracker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedUseCases current="/use-cases/bug-reports" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
