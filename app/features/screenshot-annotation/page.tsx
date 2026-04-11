import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Screenshot Annotation Tool — Arrows, Shapes, Blur — Quick Gen",
  description:
    "Annotate screenshots with arrows, text, shapes, numbered callouts, freehand drawing, and a blur tool for redaction. Keyboard-shortcut driven. Free and open source.",
  keywords: [
    "screenshot annotation",
    "annotate screenshot",
    "screenshot markup",
    "draw on screenshot",
    "screenshot editor",
    "blur screenshot",
    "redact screenshot",
    "screenshot arrows",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/screenshot-annotation" },
  openGraph: {
    title: "Screenshot Annotation Tool — Quick Gen",
    description:
      "Mark up screenshots with arrows, text, shapes, callouts, and blur. Keyboard-driven annotation editor.",
    url: "https://qgn.app/features/screenshot-annotation",
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

export default function AnnotationPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Annotation Editor" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Annotation Editor
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Mark up screenshots
            <br />
            <span className="text-pink">without leaving the app.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Arrows, shapes, text, numbered callouts, freehand drawing, and a
            blur tool for sensitive info. Every tool has a single-key shortcut.
            Annotate, copy to clipboard, paste — all in one flow.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Every tool you need,
            <br />
            <span className="text-pink">one key away.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  D
                </kbd>
                <h3 className="text-lg font-black">Freehand drawing</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Draw anything directly on your screenshot. Circle something
                important, underline text, sketch an arrow by hand. Three stroke
                widths available.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  A
                </kbd>
                <h3 className="text-lg font-black">Arrows</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Point at exactly what matters. Click the start point, drag to
                the end. Clean, straight arrows that make your point immediately
                clear.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  S
                </kbd>
                <h3 className="text-lg font-black">Shapes</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Rectangles, ellipses, diamonds, and lines. Outline a region,
                highlight a section, or frame an important element. All shapes
                are stroke-only so they don&apos;t obscure content.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  T
                </kbd>
                <h3 className="text-lg font-black">Text labels</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Click anywhere to add a text label. Type your note, pick a
                color, done. Useful for adding context, naming elements, or
                writing step numbers.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  C
                </kbd>
                <h3 className="text-lg font-black">Numbered callouts</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Auto-incrementing numbered markers. Click to place callout 1, 2,
                3, and so on. Perfect for step-by-step instructions, labeling
                UI elements, or referencing specific areas.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  X
                </kbd>
                <h3 className="text-lg font-black">Redaction / blur</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Drag over sensitive information to blur it out. Personal data,
                API keys, email addresses — blur them before sharing. The
                original pixels are destroyed, not just hidden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Colors, strokes,
            <br />
            <span className="text-pink">and full undo.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-black mb-3">Six colors</h3>
              <p className="text-muted leading-relaxed">
                Pick from six predefined colors that stand out on any
                background. Switch colors between annotations to keep things
                organized.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black mb-3">Three stroke widths</h3>
              <p className="text-muted leading-relaxed">
                Thin for subtle markups, medium for normal use, thick for
                emphasis. Each tool respects the current stroke width setting.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black mb-3">Ctrl+Z to undo</h3>
              <p className="text-muted leading-relaxed">
                Made a mistake? Undo it. The full annotation history is
                preserved so you can step back through every change you made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/screenshot-annotation" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
