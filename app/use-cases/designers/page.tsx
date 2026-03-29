import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedUseCases,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Screenshot Tool for Designers — Quick Gen",
  description:
    "Capture design references, pin them to your screen, annotate feedback with precision. Floating previews for visual comparison, pixel dimensions for accuracy. Free and open source.",
  keywords: [
    "screenshot tool for designers",
    "design screenshot tool",
    "screenshot for design feedback",
    "UI screenshot tool",
    "screenshot reference tool",
    "pin screenshot to screen",
    "design comparison tool",
    "Quick Gen",
  ],
  alternates: { canonical: "/use-cases/designers" },
  openGraph: {
    title: "Screenshot Tool for Designers — Quick Gen",
    description:
      "Pin design references to your screen, annotate feedback, compare before/after. Floating previews for visual workflows.",
    url: "https://qgn.app/use-cases/designers",
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

export default function DesignersPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Use Cases" },
        { label: "For Designers" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            For Designers
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Your screen is
            <br />
            <span className="text-pink">your mood board.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Capture inspiration, pin references to your screen, compare designs
            side by side, annotate feedback with precision. Quick Gen turns
            your desktop into a visual workspace.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Built for
            <br />
            <span className="text-pink">visual workflows.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Pin references to your screen
              </h3>
              <p className="text-muted leading-relaxed">
                Capture a design spec, a client&apos;s mockup, or an
                inspiration screenshot and pin it as a floating card. It stays
                on top of Figma, Sketch, or your browser while you work — no
                tab switching.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Before and after comparison
              </h3>
              <p className="text-muted leading-relaxed">
                Take a screenshot before your change, pin it. Make the change.
                Take another screenshot. Now you have both floating on your
                screen for a direct visual comparison.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Annotate design feedback
              </h3>
              <p className="text-muted leading-relaxed">
                Capture the current UI, open the annotation editor, and mark
                exactly what needs to change. Arrows point to specific elements,
                text labels describe the fix, callout numbers order the
                priorities.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Pixel dimensions</h3>
              <p className="text-muted leading-relaxed">
                The selection overlay shows real-time pixel dimensions as you
                drag. Useful for verifying element sizes, spacing, or checking
                if an implementation matches the spec.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Drag and resize previews
              </h3>
              <p className="text-muted leading-relaxed">
                Move pinned previews anywhere on your screen and resize them.
                Arrange your reference material exactly where you need it —
                alongside your canvas, above your toolbars, or on a second
                monitor.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Record design walkthroughs
              </h3>
              <p className="text-muted leading-relaxed">
                Walk through a prototype or interaction flow with a screen
                recording. Narrate your feedback over the recording, send the
                MP4 to the team. Faster than writing a review document.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Fast enough to not break your flow
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Designers are visual thinkers. Switching to a screenshot app,
              saving a file, opening an editor, and sharing a link kills the
              creative flow. Quick Gen collapses all of that into a hotkey and
              a paste.
            </p>
            <p>
              The floating previews are the key. Instead of screenshots
              disappearing into a folder, they stay visible on your screen as
              reference material. Your captures become part of your workspace.
            </p>
          </div>
        </div>
      </section>

      <RelatedUseCases current="/use-cases/designers" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
