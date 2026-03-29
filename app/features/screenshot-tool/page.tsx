import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Free Screenshot Tool for Windows — Quick Gen",
  description:
    "Capture any region of your screen instantly with a single hotkey. Screenshots are copied to your clipboard in PNG, JPG, WebP, or base64. Free, open-source, no account required.",
  keywords: [
    "screenshot tool",
    "free screenshot tool",
    "Windows screenshot tool",
    "screen capture tool",
    "screenshot to clipboard",
    "hotkey screenshot",
    "region capture",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/screenshot-tool" },
  openGraph: {
    title: "Free Screenshot Tool for Windows — Quick Gen",
    description:
      "Capture any region of your screen instantly with a single hotkey. Clipboard-first, multiple formats, pixel-precise selection.",
    url: "https://qgn.app/features/screenshot-tool",
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

export default function ScreenshotToolPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Screenshot Tool" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Screenshot Capture
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Free screenshot tool
            <br />
            <span className="text-pink">for Windows.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Press Ctrl+Q. A fullscreen overlay drops. Drag to select any region.
            Your screenshot is on your clipboard before you lift your finger.
            That&apos;s the entire workflow.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-pink font-mono font-bold text-sm">01</span>
              <h3 className="text-xl font-black mt-2 mb-3">Press Ctrl+Q</h3>
              <p className="text-muted leading-relaxed">
                A transparent overlay covers your entire screen. Your cursor
                becomes a crosshair. No windows open, no menus appear — just the
                overlay on top of whatever you&apos;re looking at.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">02</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Drag to select
              </h3>
              <p className="text-muted leading-relaxed">
                Click and drag to draw a rectangle around what you want to
                capture. Pixel dimensions appear in real time so you always know
                the exact size of your selection.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">03</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                It&apos;s on your clipboard
              </h3>
              <p className="text-muted leading-relaxed">
                The moment you release, the screenshot lands on your clipboard.
                Paste it into Slack, Figma, an email, a document — anywhere that
                accepts images.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Built for speed,
            <br />
            <span className="text-pink">not for menus.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Clipboard-first</h3>
              <p className="text-muted leading-relaxed">
                Every capture is immediately placed on your clipboard. No
                &quot;save as&quot; dialog, no file picker, no extra clicks. The
                screenshot is ready to paste the instant you finish selecting.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Multiple formats</h3>
              <p className="text-muted leading-relaxed">
                Choose your clipboard format in settings: PNG for lossless
                quality, JPG for smaller size, WebP for modern compression, or
                base64 Data URI for embedding directly in code.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Pixel-precise selection
              </h3>
              <p className="text-muted leading-relaxed">
                The crosshair cursor and real-time dimension display let you
                capture exactly the region you need. No guessing, no cropping
                after the fact.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Multi-monitor</h3>
              <p className="text-muted leading-relaxed">
                The overlay appears on whichever display your cursor is on.
                Multiple monitors just work — no configuration, no &quot;select
                which screen&quot; dialog.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Auto-save optional</h3>
              <p className="text-muted leading-relaxed">
                Want a copy on disk too? Point Quick Gen at a folder and every
                capture is automatically saved with a timestamp. Or keep it
                clipboard-only — your choice.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Custom hotkeys</h3>
              <p className="text-muted leading-relaxed">
                Ctrl+Q is the default, but you can rebind the capture hotkey to
                any combination that fits your workflow. The shortcut is global —
                it works from any application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Why another screenshot tool?
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Most screenshot tools want you to create an account, choose a
              subscription plan, and upload your images to their cloud. Quick Gen
              does none of that. It&apos;s a local tool that captures your screen
              and puts the image on your clipboard.
            </p>
            <p>
              The entire app runs on your machine. No network requests, no
              telemetry, no analytics. Your screenshots never leave your
              computer unless you choose to share them.
            </p>
            <p>
              Quick Gen is open source under the MIT license. You can read every
              line of code, fork it, modify it, and distribute it freely.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/screenshot-tool" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
