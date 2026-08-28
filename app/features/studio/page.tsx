import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";
import {
  ComposeVignette,
  MarkupVignette,
  VignetteCaption,
} from "@/app/components/vignettes";

export const metadata: Metadata = {
  title: "Studio — One Screenshot and Video Editor for Windows — Quick Gen",
  description:
    "Quick Gen's Studio edits screenshots and screen recordings in one window. Markup mode annotates and redacts the pixels; Compose mode frames a capture on a gradient background. Free and open source.",
  keywords: [
    "screenshot editor",
    "screenshot annotation tool",
    "screen recording editor",
    "video trim tool Windows",
    "screenshot redaction",
    "image markup tool",
    "free screenshot editor",
    "Quick Gen Studio",
  ],
  alternates: { canonical: "/features/studio" },
  openGraph: {
    title: "Studio — One Screenshot and Video Editor — Quick Gen",
    description:
      "Markup edits the pixels. Compose frames the capture on a background. Every tool works on stills and clips.",
    url: "https://qgn.app/features/studio",
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

export default function StudioPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[{ label: "Features" }, { label: "Studio" }]} />

      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 md:px-10 pt-8 pb-16">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Studio
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            One editor.
            <br />
            <span className="text-pink">Stills and clips.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            The separate annotation editor and video studio are gone. There is
            one Studio window that handles screenshots and recordings, in two
            modes: <strong className="text-foreground">Markup</strong> works on
            the pixels themselves and saves back over the original,{" "}
            <strong className="text-foreground">Compose</strong> frames the
            capture on a background and saves a new file. Switching between them
            keeps your framing, so a round trip no longer throws away the
            background and padding you set up.
          </p>
        </div>
      </section>

      {/* Markup */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
            Markup
          </h2>
          <p className="max-w-2xl text-lg text-muted leading-relaxed mb-14">
            Point at the thing that matters and hide the things that should stay
            private. Nine tools, each on a single key, and every one of them
            works on a recording as well as a screenshot.
          </p>

          <MarkupVignette />
          <VignetteCaption label="Annotate &middot; redact &middot; edit">
            An arrow is drawn, callouts are numbered automatically, an address is
            redacted, then the arrow is picked back up and recoloured.
          </VignetteCaption>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-20">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">The nine tools</h3>
              <p className="text-muted leading-relaxed">
                Pointer (V), draw (D), arrow (A), shape (S) as rectangle, ellipse,
                diamond or line, text (T) in three sizes, redact (X), numbered
                callout (C), cursor stamp (P), and crop (R).
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Marks stay editable</h3>
              <p className="text-muted leading-relaxed">
                Pick the pointer and click a mark to select it. Drag to move,
                drag a handle to resize, recolour it from the row below, delete
                with Del, or double-click a text label to fix a typo. Fixing one
                mark no longer means undoing everything drawn after it.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Redaction that holds</h3>
              <p className="text-muted leading-relaxed">
                Solid block or pixelate, in three strengths. Pixelation samples
                what is already painted underneath rather than the original
                image, so a blur stacked over a black box cannot put the hidden
                text back on screen.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Crop you can adjust</h3>
              <p className="text-muted leading-relaxed">
                Picking the crop tool arms a rect over the whole image and cuts
                nothing until you say so. Drag the sides or corners, watch the
                live pixel readout, then Apply with the button, Enter, or a
                double-click. It sits on the same undo stack as everything else.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Original-pixel accuracy</h3>
              <p className="text-muted leading-relaxed">
                Marks are stored in the source image&apos;s coordinates, so they
                stay exactly where you put them when you crop, change the aspect
                ratio, resize the window, or export at any scale. Stroke sizes
                scale with the source, so a mark on a 4K capture matches one on
                720p.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Zoom and pan</h3>
              <p className="text-muted leading-relaxed">
                Ctrl + wheel zooms about the cursor, the wheel and middle-drag
                pan, and Ctrl+0 fits again. On a 4K capture you are no longer
                annotating through two or three source pixels per screen pixel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compose */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
            Compose
          </h2>
          <p className="max-w-2xl text-lg text-muted leading-relaxed mb-14">
            The part other tools charge a subscription for: a raw screenshot
            framed on a background, padded, rounded and shadowed, ready for a
            changelog, a landing page or a deck.
          </p>

          <ComposeVignette />
          <VignetteCaption label="Background &middot; frame &middot; layout">
            A bare capture gains a gradient, a browser frame, padding, rounded
            corners and a shadow, then saves as a new file.
          </VignetteCaption>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 mt-20">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Backgrounds</h3>
              <p className="text-muted leading-relaxed">
                Ten named gradients with an adjustable angle, six soft
                wallpapers, any solid colour, or an image of your own. Save a
                gradient or a colour you like and it stays in your palette.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Frames</h3>
              <p className="text-muted leading-relaxed">
                None, a plain window, or a browser frame with an address bar, in
                a light or dark theme.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Layout</h3>
              <p className="text-muted leading-relaxed">
                Padding, corner rounding, shadow depth, and six aspect ratios:
                auto, 16:9, 4:3, 1:1, 9:16 and 3:2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clips */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
            And it does video.
          </h2>
          <p className="max-w-2xl text-lg text-muted leading-relaxed mb-14">
            Open a recording and the window title changes from Studio &middot;
            Mockup to Studio &middot; Reel. Same tools, plus a timeline.
          </p>

          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Trim</strong> with in and out
              points (I and O), loop the trimmed range while you get it right,
              and mute the audio on export if you would rather narrate later.
            </p>
            <p>
              <strong className="text-foreground">Zoom keyframes</strong>{" "}
              generated automatically from where you clicked while recording, or
              placed by hand with ease-in, ease-out and a focus point. Rebuild
              them from the click log whenever you want to start over.
            </p>
            <p>
              <strong className="text-foreground">A styled cursor</strong> as an
              arrow, dot or ring, at the size you choose, with a click ripple,
              layered over footage that was captured without one.
            </p>
            <p>
              <strong className="text-foreground">Export</strong> to MP4, WebM,
              GIF or animated WebP with a size estimate before you commit. MP4
              and WebM drive the encoder directly and finish several times faster
              than the clip&apos;s own length.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/studio" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
