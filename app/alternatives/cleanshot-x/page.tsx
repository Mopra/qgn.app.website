import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedAlternatives,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "CleanShot X Alternative for Windows — Quick Gen",
  description:
    "CleanShot X is Mac-only. Quick Gen brings the same fast, polished screenshot experience to Windows — floating previews, annotation, screen recording, clipboard-first. Free and open source.",
  keywords: [
    "CleanShot X alternative",
    "CleanShot X for Windows",
    "CleanShot alternative Windows",
    "Windows alternative to CleanShot",
    "screenshot tool like CleanShot",
    "CleanShot X vs Quick Gen",
    "floating screenshot Windows",
  ],
  alternates: { canonical: "/alternatives/cleanshot-x" },
  openGraph: {
    title: "CleanShot X Alternative for Windows — Quick Gen",
    description:
      "CleanShot X is Mac-only. Quick Gen brings that same polished experience to Windows. Free and open source.",
    url: "https://qgn.app/alternatives/cleanshot-x",
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

export default function CleanShotAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Alternatives" },
        { label: "CleanShot X Alternative" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            CleanShot X Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            CleanShot X,
            <br />
            <span className="text-pink">but for Windows.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            CleanShot X set the standard for polished screenshot tools on Mac —
            floating previews, quick annotation, clean workflow. Quick Gen
            brings that same philosophy to Windows. And it&apos;s free.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Side by side
          </h2>

          <div className="border border-border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border text-sm font-bold">
              <div className="p-5 text-dim">Feature</div>
              <div className="p-5 text-dim border-l border-border">
                CleanShot X
              </div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Platform", "Mac only", "Windows"],
              ["Floating previews", "Yes", "Yes — pin, stack, resize"],
              ["Clipboard-first", "Yes", "Yes"],
              ["Annotation", "Yes", "Yes — arrows, shapes, text, callouts, blur"],
              ["Screen recording", "Yes", "Yes — with mic, MP4/WebM"],
              ["Cloud upload", "CleanShot Cloud (paid)", "None — local only"],
              ["Scrolling capture", "Yes", "Not yet"],
              ["OCR", "Yes", "Not yet"],
              ["Open source", "No", "Yes (MIT)"],
              ["Price", "$29 one-time or $8/mo", "Free"],
              ["Account required", "License key", "None"],
            ].map(([feature, cleanshot, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {cleanshot}
                </div>
                <div className="p-4 text-foreground border-l border-border">
                  {qgn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            The CleanShot experience
            <br />
            <span className="text-pink">on Windows.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                The feature that made CleanShot X famous — captures that float
                on your screen for quick reference. Quick Gen has the same
                concept: always-on-top preview cards that you can pin, stack,
                drag, and resize.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Instant clipboard</h3>
              <p className="text-muted leading-relaxed">
                Like CleanShot X, every capture goes straight to your clipboard.
                No extra steps, no file dialogs. Capture, paste, done.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Quick annotation</h3>
              <p className="text-muted leading-relaxed">
                Open the annotation editor from any preview card. Add arrows,
                text, shapes, numbered callouts, or blur sensitive areas. The
                keyboard-driven workflow is fast enough to use in the middle of a
                conversation.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Free and open source
              </h3>
              <p className="text-muted leading-relaxed">
                CleanShot X costs $29 one-time or $8/month for the cloud plan.
                Quick Gen is completely free under the MIT license. No trial
                periods, no feature gates, no subscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            What Quick Gen doesn&apos;t have yet
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              CleanShot X has scrolling capture and OCR text recognition. Quick
              Gen doesn&apos;t have those features yet. If those are essential
              to your workflow, CleanShot X (on Mac) is still the more complete
              tool.
            </p>
            <p>
              But if you&apos;re on Windows and want the core CleanShot
              experience — fast capture, floating previews, quick annotation,
              and clean design — Quick Gen delivers that for free.
            </p>
          </div>
        </div>
      </section>

      <RelatedAlternatives current="/alternatives/cleanshot-x" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
