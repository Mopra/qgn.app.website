import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Snipping Tool Alternative for Windows — Quick Gen",
  description:
    "A faster, more powerful alternative to Windows Snipping Tool. Global hotkey capture, clipboard-first workflow, floating previews, annotation, screen recording. Free and open source.",
  keywords: [
    "snipping tool alternative",
    "Windows snipping tool replacement",
    "better than snipping tool",
    "screenshot tool Windows",
    "snip and sketch alternative",
    "screen snip tool",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/snipping-tool-alternative" },
  openGraph: {
    title: "Snipping Tool Alternative for Windows — Quick Gen",
    description:
      "A faster, more powerful alternative to Windows Snipping Tool. Hotkey capture, floating previews, annotation, screen recording.",
    url: "https://qgn.app/features/snipping-tool-alternative",
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

export default function SnippingToolAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Snipping Tool Alternative" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Snipping Tool Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            A better
            <br />
            <span className="text-pink">Snipping Tool.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Windows Snipping Tool gets the basics right, but stops there. Quick
            Gen starts where Snipping Tool ends — global hotkeys, instant
            clipboard, floating previews, a full annotation editor, and screen
            recording built in.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Side by side
          </h2>

          <div className="border border-border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border text-sm font-bold">
              <div className="p-5 text-dim">Feature</div>
              <div className="p-5 text-dim border-l border-border">
                Snipping Tool
              </div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Global hotkey", "Win+Shift+S", "Ctrl+Q (customizable)"],
              ["Clipboard copy", "Yes", "Yes — instant, multiple formats"],
              ["Region selection", "Yes", "Yes — with live dimensions"],
              ["Floating previews", "No", "Yes — pin, stack, resize"],
              ["Annotation", "Basic", "Full — arrows, shapes, text, callouts, blur"],
              ["Screen recording", "Yes (Win 11)", "Yes — with mic, MP4/WebM"],
              ["Multi-monitor", "Limited", "Seamless across displays"],
              ["Custom hotkeys", "No", "Yes — fully rebindable"],
              ["Auto-save", "Manual save", "Automatic with timestamps"],
              ["Open source", "No", "MIT license"],
              ["Cloud/account", "Microsoft account", "None required"],
            ].map(([feature, snipping, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {snipping}
                </div>
                <div className="p-4 text-foreground border-l border-border">
                  {qgn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why switch */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Why developers
            <br />
            <span className="text-pink">switch from Snipping Tool.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Speed</h3>
              <p className="text-muted leading-relaxed">
                Snipping Tool opens a window, then you select a mode, then you
                draw your selection. Quick Gen skips all of that — one hotkey
                and you&apos;re selecting. The screenshot is on your clipboard
                before Snipping Tool finishes opening.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                Snipping Tool saves to a file or opens in its editor. Quick Gen
                shows a floating preview card that stays on top of your windows.
                You can reference it, annotate it, or just glance at it while
                you work.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Better annotation
              </h3>
              <p className="text-muted leading-relaxed">
                Snipping Tool offers a pen and highlighter. Quick Gen gives you
                arrows, shapes, text, numbered callouts, freehand drawing, and a
                blur tool — all accessible via single-key shortcuts.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No account</h3>
              <p className="text-muted leading-relaxed">
                The latest Snipping Tool versions push you toward OneDrive
                integration and Microsoft account sign-in. Quick Gen has no
                account, no cloud, no sign-in prompts. Just a local tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/snipping-tool-alternative" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
