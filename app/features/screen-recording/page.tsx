import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Free Screen Recording Tool for Windows — Quick Gen",
  description:
    "Record any region of your screen with a single hotkey. Microphone input, MP4 and WebM export. Free, open-source screen recorder with no watermarks, no time limits.",
  keywords: [
    "screen recording",
    "screen recorder",
    "free screen recorder",
    "Windows screen recording",
    "record screen region",
    "screen capture video",
    "record with microphone",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/screen-recording" },
  openGraph: {
    title: "Free Screen Recording Tool for Windows — Quick Gen",
    description:
      "Record any screen region with Ctrl+Shift+Q. Mic input, MP4/WebM export, no watermarks, no time limits.",
    url: "https://qgn.app/features/screen-recording",
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

export default function ScreenRecordingPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Screen Recording" }
      ]} />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Screen Recording
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Record your screen
            <br />
            <span className="text-pink">in seconds.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Press Ctrl+Shift+Q. Select a region. Hit record. Quick Gen captures
            your screen with optional microphone audio — perfect for bug reports,
            quick demos, and async communication.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            How recording works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-pink font-mono font-bold text-sm">01</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Press Ctrl+Shift+Q
              </h3>
              <p className="text-muted leading-relaxed">
                The capture overlay appears. Draw a rectangle around the region
                you want to record. A control bar shows up where you can toggle
                your microphone and select which audio device to use.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">02</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Record and stop
              </h3>
              <p className="text-muted leading-relaxed">
                A pulsing red border outlines the recorded region so you always
                know what&apos;s being captured. Click stop when you&apos;re
                done. The recording is saved to your chosen folder as MP4 or
                WebM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            No watermarks.
            <br />
            <span className="text-pink">No time limits.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Region recording</h3>
              <p className="text-muted leading-relaxed">
                Record any rectangular area of your screen — a single window, a
                portion of a page, or your entire display. You pick the
                boundaries.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Microphone input</h3>
              <p className="text-muted leading-relaxed">
                Toggle mic audio on or off. Choose which microphone or audio
                device to use from a dropdown — useful if you have multiple
                inputs.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">MP4 and WebM export</h3>
              <p className="text-muted leading-relaxed">
                Recordings save as MP4 (best compatibility) or WebM (smaller
                files). Both formats work in browsers, Slack, Discord, and most
                video players.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Visual indicator</h3>
              <p className="text-muted leading-relaxed">
                A pulsing red border shows exactly what&apos;s being recorded.
                You always know when recording is active and what area is
                captured.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No cloud upload</h3>
              <p className="text-muted leading-relaxed">
                Recordings stay on your machine. Quick Gen doesn&apos;t upload
                anything anywhere. Share the file however you want — your
                recordings, your choice.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Same hotkey philosophy
              </h3>
              <p className="text-muted leading-relaxed">
                Just like screenshot capture, recording starts with a global
                hotkey. No need to open a window, navigate a menu, or configure
                anything first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Perfect for
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Bug reports</strong> —
              reproduce the issue, record it, attach the video to your ticket.
              Ten seconds from hotkey to done.
            </p>
            <p>
              <strong className="text-foreground">Quick demos</strong> — show a
              colleague how something works without scheduling a call.
              Record, send, move on.
            </p>
            <p>
              <strong className="text-foreground">Async communication</strong>{" "}
              — replace a wall of text with a 30-second video. Narrate with your
              mic while you walk through the steps on screen.
            </p>
          </div>
        </div>
      </section>

      <RelatedFeatures current="/features/screen-recording" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
