import type { Metadata } from "next";
import Link from "next/link";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";
import { ComposeVignette, VignetteCaption } from "@/app/components/vignettes";

export const metadata: Metadata = {
  title: "Free Screenshot Mockup Tool — Gradient Backgrounds & Frames — Quick Gen",
  description:
    "Put a screenshot on a gradient background, wrap it in a browser frame, add padding, rounded corners and a shadow. Built into a free, open-source Windows capture tool. No web upload, no subscription, no watermark.",
  keywords: [
    "screenshot mockup tool",
    "screenshot background generator",
    "screenshot beautifier",
    "add background to screenshot",
    "gradient background screenshot",
    "browser frame screenshot",
    "screenshot padding shadow",
    "free mockup generator",
    "shots.so alternative",
    "pika alternative",
    "screenshot pretty",
  ],
  alternates: { canonical: "/features/screenshot-mockup-tool" },
  openGraph: {
    title: "Free Screenshot Mockup Tool — Quick Gen",
    description:
      "Gradient backgrounds, browser frames, padding, rounding and shadows. Offline, free, no watermark.",
    url: "https://qgn.app/features/screenshot-mockup-tool",
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

export default function ScreenshotMockupPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs
        items={[{ label: "Features" }, { label: "Screenshot Mockups" }]}
      />

      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 md:px-10 pt-8 pb-16">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Screenshot Mockups
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Make a screenshot
            <br />
            <span className="text-pink">look intentional.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            A bare screenshot dropped into a changelog or a landing page looks
            like a bare screenshot. Framed on a background with a little padding
            and a soft shadow, the same image looks like you meant it. Quick Gen
            does that in the app you already captured with, offline, for free.
          </p>
        </div>
      </section>

      {/* The vignette */}
      <section className="px-6 md:px-10 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <ComposeVignette />
          <VignetteCaption label="Compose mode">
            Background, frame, padding, rounding and shadow, then Save as new.
            The original capture is left untouched.
          </VignetteCaption>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Everything the
            <br />
            <span className="text-pink">paid ones charge for.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Ten gradients</h3>
              <p className="text-muted leading-relaxed">
                Indigo, blush, ocean, lime, peach, grape, sky, slate, coral and
                night, each with an adjustable angle. Save your own gradients and
                solid colours to a palette that holds twenty-four of each.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Six wallpapers</h3>
              <p className="text-muted leading-relaxed">
                Soft multi-blob glows in the style of a modern desktop wallpaper:
                aurora, sequoia, mint, bigsur, ember and bloom. Or use a solid
                colour, or upload an image of your own.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Window and browser frames</h3>
              <p className="text-muted leading-relaxed">
                Wrap the capture in a plain window or a browser frame with an
                address bar, in a light or dark theme. Or leave it unframed and
                let the padding do the work.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Padding, rounding, shadow</h3>
              <p className="text-muted leading-relaxed">
                Three sliders that do most of the work. Breathing room around the
                capture, softened corners, and a shadow that lifts it off the
                background.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Aspect ratios that fit</h3>
              <p className="text-muted leading-relaxed">
                Auto, 16:9, 4:3, 1:1, 9:16 and 3:2, so the export drops straight
                into a blog header, a social post, or a phone-shaped slot without
                a second crop.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Annotations come along</h3>
              <p className="text-muted leading-relaxed">
                Arrows, callouts and redactions work in Compose too, and
                switching to Markup and back keeps the framing you set up. The
                marks are stored in source pixels, so they stay put at any export
                size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why not a web tool */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Why not a web tool?
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              The usual way to get this look is to capture a screenshot, open a
              browser tab, upload the image to somebody else&apos;s server, drag
              some sliders, download the result, and find the watermark. That is
              five steps and a stranger&apos;s hard drive for something your
              capture tool should already do.
            </p>
            <p>
              In Quick Gen it is the same window you were already in. Press
              Ctrl+Q, click{" "}
              <strong className="text-foreground">Open in Studio</strong> on the
              preview card, switch to Compose, and save. Nothing leaves your
              machine, there is no account, and there is no watermark on the way
              out.
            </p>
            <p>
              It is also the reason this is worth comparing against{" "}
              <Link
                href="/alternatives/cleanshot-x"
                className="text-pink hover:text-pink-light transition-colors"
              >
                CleanShot X
              </Link>
              , which does backgrounds beautifully and only runs on a Mac, and
              against{" "}
              <Link
                href="/alternatives/snagit"
                className="text-pink hover:text-pink-light transition-colors"
              >
                Snagit
              </Link>
              , which wants $63 a year.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Good for
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Changelogs and release notes</strong>{" "}
              — one framed capture per entry, consistent background, done in the
              time it takes to write the paragraph.
            </p>
            <p>
              <strong className="text-foreground">Landing pages</strong> — a
              product shot that sits on the page instead of floating on it, at
              the exact aspect ratio your layout wants.
            </p>
            <p>
              <strong className="text-foreground">Social posts</strong> — 1:1 or
              9:16 with padding, so the interesting part is not cropped away by
              somebody else&apos;s thumbnail logic.
            </p>
            <p>
              <strong className="text-foreground">Docs and tutorials</strong> — a
              framed screenshot with numbered callouts reads as a step, not as a
              stray image.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/screenshot-mockup-tool" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
