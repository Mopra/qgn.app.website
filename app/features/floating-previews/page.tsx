import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Floating Screenshot Previews — Pin, Stack, Reference — Quick Gen",
  description:
    "Screenshots appear as always-on-top floating cards. Pin them to your screen, stack them for reference, drag and resize them. Pinned cards persist across restarts.",
  keywords: [
    "floating screenshot",
    "screenshot preview",
    "pin screenshot",
    "always on top screenshot",
    "screenshot reference",
    "screenshot overlay",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/floating-previews" },
  openGraph: {
    title: "Floating Screenshot Previews — Quick Gen",
    description:
      "Screenshots appear as always-on-top cards. Pin, stack, drag, resize. Pinned captures persist across restarts.",
    url: "https://qgn.app/features/floating-previews",
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

export default function FloatingPreviewsPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Floating Previews" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Floating Previews
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Screenshots that
            <br />
            <span className="text-pink">stay on screen.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Every capture appears as a floating, always-on-top preview card. Pin
            it to your screen for reference. Stack multiple captures. Drag them
            around. Resize them. They stay visible on top of all your other
            windows.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Your visual
            <br />
            <span className="text-pink">clipboard.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Always-on-top</h3>
              <p className="text-muted leading-relaxed">
                Preview cards float above all other windows. They stay visible
                while you work in other apps — perfect for referencing a design,
                a spec, or an error message while you code.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Pin to persist</h3>
              <p className="text-muted leading-relaxed">
                Click the pin icon to keep a preview card permanently. Pinned
                cards survive app restarts and system reboots. Your reference
                material stays put until you dismiss it.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Drag and resize</h3>
              <p className="text-muted leading-relaxed">
                Move preview cards anywhere on your screen by dragging. Resize
                them to be as large or small as you need. They remember their
                position and size.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Stack multiple</h3>
              <p className="text-muted leading-relaxed">
                Take several screenshots and they stack neatly in the corner.
                Each one is its own card that you can move, pin, or dismiss
                independently.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Auto-dismiss timer</h3>
              <p className="text-muted leading-relaxed">
                Unpinned previews fade away after a configurable timer so they
                don&apos;t clutter your screen. Only pinned cards stick around
                permanently.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Quick actions</h3>
              <p className="text-muted leading-relaxed">
                From any preview card you can copy to clipboard again, open the
                annotation editor, pin or unpin, or close. Everything is one
                click away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            How people use it
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Design reference</strong> —
              capture a mockup or spec, pin it next to your editor, and build
              pixel-by-pixel without switching windows.
            </p>
            <p>
              <strong className="text-foreground">
                Comparing before and after
              </strong>{" "}
              — take a screenshot before your change, pin it. Make the change.
              Take another screenshot. Compare them side by side.
            </p>
            <p>
              <strong className="text-foreground">Error messages</strong> — when
              a build fails or an error pops up, capture it and pin the preview.
              Keep it visible while you debug without hunting through logs.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/floating-previews" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
