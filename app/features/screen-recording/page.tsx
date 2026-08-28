import type { Metadata } from "next";
import Link from "next/link";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedFeatures,
} from "@/app/components/FeatureLayout";
import { RecordVignette, VignetteCaption } from "@/app/components/vignettes";

export const metadata: Metadata = {
  title: "Free Screen Recording Tool for Windows — Quick Gen",
  description:
    "Record any region of your screen with a single hotkey. Microphone and system audio, automatic zoom-ins from your clicks, trimming, and MP4, WebM, GIF or WebP export that renders faster than real time. Free and open source, no watermarks, no time limits.",
  keywords: [
    "screen recording",
    "screen recorder",
    "free screen recorder",
    "Windows screen recording",
    "record screen region",
    "screen recorder with zoom",
    "record system audio",
    "screen recording to GIF",
    "record with microphone",
    "Quick Gen",
  ],
  alternates: { canonical: "/features/screen-recording" },
  openGraph: {
    title: "Free Screen Recording Tool for Windows — Quick Gen",
    description:
      "Record any screen region with Ctrl+Shift+Q. Mic and system audio, auto zoom-ins from your clicks, MP4/WebM/GIF export, no watermarks, no time limits.",
    url: "https://qgn.app/features/screen-recording",
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

export default function ScreenRecordingPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Features" },
        { label: "Screen Recording" }
      ]} />

      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 md:px-10 pt-8 pb-16">
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
            your screen with optional microphone and system audio, then hands the
            clip to Studio where your clicks have already become zoom-ins.
          </p>
        </div>
      </section>

      {/* Vignette */}
      <section className="px-6 md:px-10 py-16 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <RecordVignette />
          <VignetteCaption label="Record &middot; trim &middot; export">
            A countdown, a pulsing region border with a live mic meter, then the
            timeline: zoom keyframes built from the clicks, trim handles, and a
            render that finishes ahead of the playhead.
          </VignetteCaption>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            How recording works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-pink font-mono font-bold text-sm">01</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Press Ctrl+Shift+Q
              </h3>
              <p className="text-muted leading-relaxed">
                The capture overlay appears. Draw a rectangle around the region
                you want, or press Space to take the whole screen. A control bar
                shows up where you can toggle your microphone and system audio,
                and pick which input device to use.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">02</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Record, pause, stop
              </h3>
              <p className="text-muted leading-relaxed">
                An optional 3-2-1 countdown gives you a moment to get ready. A
                pulsing red border outlines the recorded region so you always
                know what is being captured. Pause and resume as often as you
                like, then stop when you are done.
              </p>
            </div>
            <div>
              <span className="text-pink font-mono font-bold text-sm">03</span>
              <h3 className="text-xl font-black mt-2 mb-3">
                Finish it in Studio
              </h3>
              <p className="text-muted leading-relaxed">
                The clip opens in{" "}
                <Link
                  href="/features/studio"
                  className="text-pink hover:text-pink-light transition-colors"
                >
                  Studio
                </Link>{" "}
                with a timeline. Trim it, keep or retime the automatic zoom-ins,
                add a styled cursor, annotate it, then export.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            No watermarks.
            <br />
            <span className="text-pink">No time limits.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Zoom-ins from your clicks</h3>
              <p className="text-muted leading-relaxed">
                Every click during a take is logged, then turned into zoom
                keyframes automatically. Keep them as they are, retime them, or
                place your own with ease-in, ease-out and a focus point. Rebuild
                them from the click log whenever you want to start over.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Microphone and system audio
              </h3>
              <p className="text-muted leading-relaxed">
                Record your voice, the sound coming out of your machine, or both.
                Choose which microphone from a dropdown if you have several. If an
                audio source refuses to open, the control bar carries a warning
                badge for the whole take and a toast fires once, so a silent
                recording is never a silent surprise.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Region recording</h3>
              <p className="text-muted leading-relaxed">
                Record any rectangular area — a single window, a portion of a
                page, or your entire display. You pick the boundaries, and Space
                grabs the whole screen if that is easier.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">A cursor you can see</h3>
              <p className="text-muted leading-relaxed">
                Captures come through without the operating system cursor, so
                Studio layers a styled one back over the footage: arrow, dot or
                ring, at the size you choose, with a ripple on every click.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Four formats, faster than real time
              </h3>
              <p className="text-muted leading-relaxed">
                MP4, WebM, GIF or animated WebP, with a size estimate before you
                commit to a render. MP4 and WebM drive the encoder directly rather
                than running at playback speed, so a three-minute clip no longer
                takes three minutes.
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
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Perfect for
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              <strong className="text-foreground">Bug reports</strong> —
              reproduce the issue, record it, attach the video to your ticket.
              Ten seconds from hotkey to done, and the zoom-ins land on whatever
              you clicked.
            </p>
            <p>
              <strong className="text-foreground">Quick demos</strong> — show a
              colleague how something works without scheduling a call.
              Record, send, move on.
            </p>
            <p>
              <strong className="text-foreground">Changelog clips</strong> —
              export a short loop as a GIF or animated WebP and drop it straight
              into release notes, no video player required.
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
