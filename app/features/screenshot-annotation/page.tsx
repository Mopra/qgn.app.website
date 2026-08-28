import type { Metadata } from "next";
import Link from "next/link";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";
import { MarkupVignette, VignetteCaption } from "@/app/components/vignettes";

export const metadata: Metadata = {
  title: "Screenshot Annotation Tool — Arrows, Callouts, Redaction — Quick Gen",
  description:
    "Annotate screenshots with arrows, text, shapes, numbered callouts, freehand drawing and a redaction tool that actually holds. Every mark stays editable after you place it. Keyboard-shortcut driven, free and open source.",
  keywords: [
    "screenshot annotation",
    "annotate screenshot",
    "screenshot markup",
    "draw on screenshot",
    "screenshot editor",
    "blur screenshot",
    "redact screenshot",
    "pixelate screenshot",
    "screenshot arrows",
    "editable annotations",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/screenshot-annotation" },
  openGraph: {
    title: "Screenshot Annotation Tool — Quick Gen",
    description:
      "Arrows, text, shapes, callouts and redaction, every mark editable after you place it. Keyboard-driven markup inside Studio.",
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
      <section className="relative flex flex-col justify-center px-6 md:px-10 pt-8 pb-16">
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
            redaction tool for sensitive info. Every tool has a single-key
            shortcut, and every mark stays editable after you place it. It lives
            in Markup mode inside{" "}
            <Link
              href="/features/studio"
              className="text-pink hover:text-pink-light transition-colors"
            >
              Studio
            </Link>
            , so it works on recordings as well as screenshots.
          </p>
        </div>
      </section>

      {/* Vignette */}
      <section className="px-6 md:px-10 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <MarkupVignette />
          <VignetteCaption label="Annotate &middot; redact &middot; edit">
            An arrow is drawn, callouts number themselves, an address is
            redacted, then the arrow is picked back up with the pointer, moved
            and recoloured.
          </VignetteCaption>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
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
                <h3 className="text-lg font-black">Redaction</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Drag over sensitive information to cover it. Solid block is the
                default and the safest; pixelate comes in fine, medium and heavy.
                Pixelation samples what is already painted underneath rather than
                the original image, so stacking a blur over a black box cannot
                put the hidden text back on screen.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  V
                </kbd>
                <h3 className="text-lg font-black">Pointer</h3>
              </div>
              <p className="text-muted leading-relaxed">
                For when you want to look without drawing, and for picking marks
                back up. Click a mark to select it, drag to move it, drag a
                handle to resize it, recolour it from the row below, or delete it
                with Del.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  P
                </kbd>
                <h3 className="text-lg font-black">Cursor stamp</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Captures come through without the operating system cursor, which
                is usually what you want and occasionally not. Stamp one back in
                wherever it needs to be.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-3 mb-2">
                <kbd className="px-2.5 py-1 bg-[#111] border border-border rounded-lg text-sm font-mono font-bold">
                  R
                </kbd>
                <h3 className="text-lg font-black">Crop</h3>
              </div>
              <p className="text-muted leading-relaxed">
                Arms a rect over the whole image and cuts nothing until you say
                so. Drag the sides or corners, watch the live pixel readout, then
                Apply. Thirds guides and a dimmed surround show what you are
                keeping, and it is undoable like everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editable marks */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
            Nothing is
            <br />
            <span className="text-pink">final until you save.</span>
          </h2>
          <p className="max-w-2xl text-lg text-muted leading-relaxed mb-16">
            Most annotation tools bake a mark into the image the moment you let
            go of the mouse, which means fixing the second of five arrows costs
            you the other three. Here every mark is an object until you save.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Pick a mark back up</h3>
              <p className="text-muted leading-relaxed">
                Press V, click the mark, and move it, resize it by its handles,
                recolour it, or delete it. Double-click a text label to fix a
                typo instead of redrawing it.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Stored in source pixels</h3>
              <p className="text-muted leading-relaxed">
                Marks live in the original image&apos;s coordinates, so they stay
                exactly where you put them through a crop, an aspect ratio
                change, a window resize, or an export at a different scale.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Six colours and a palette</h3>
              <p className="text-muted leading-relaxed">
                Six defaults that stand out on any background, plus your own
                saved solids and gradients. Stroke comes in three widths, and
                sizes are a fraction of the source, so a mark on a 4K capture
                matches one on 720p.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">One undo stack</h3>
              <p className="text-muted leading-relaxed">
                Ctrl+Z and Ctrl+Y step through annotations and crops together,
                so there is no separate history to reason about. Ctrl+C copies
                the result, Ctrl+S saves it, Ctrl+V pastes an image in to start
                from.
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
