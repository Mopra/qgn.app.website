import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedAlternatives,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Lightshot Alternative — More Features, Same Simplicity — Quick Gen",
  description:
    "Looking for a Lightshot alternative with more features? Quick Gen adds floating previews, full annotation, screen recording, and multi-format clipboard — while staying just as simple. Free and open source.",
  keywords: [
    "Lightshot alternative",
    "alternative to Lightshot",
    "Lightshot replacement",
    "screenshot tool like Lightshot",
    "better than Lightshot",
    "Lightshot vs Quick Gen",
    "Lightshot privacy",
  ],
  alternates: { canonical: "/alternatives/lightshot" },
  openGraph: {
    title: "Lightshot Alternative — Quick Gen",
    description:
      "Lightshot simplicity with more features. Floating previews, annotation, screen recording. No cloud uploads. Open source.",
    url: "https://qgn.app/alternatives/lightshot",
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

export default function LightshotAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Alternatives" },
        { label: "Lightshot Alternative" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Lightshot Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Lightshot&apos;s simplicity.
            <br />
            <span className="text-pink">More features. More privacy.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Lightshot is popular because it&apos;s simple — press a key, select
            a region, done. Quick Gen keeps that same simplicity but adds
            floating previews, a full annotation editor, screen recording, and
            doesn&apos;t upload anything to the cloud.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Side by side
          </h2>

          <div className="border border-border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-border text-sm font-bold">
              <div className="p-5 text-dim">Feature</div>
              <div className="p-5 text-dim border-l border-border">
                Lightshot
              </div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Screenshot capture", "Yes", "Yes"],
              ["Simplicity", "Very simple", "Equally simple — one hotkey"],
              ["Floating previews", "No", "Yes — pin, stack, resize"],
              ["Annotation", "Basic — pen, line, arrow, text", "Full — arrows, shapes, text, callouts, blur"],
              ["Screen recording", "No", "Yes — with mic, MP4/WebM"],
              ["Cloud upload", "prnt.sc (public by default)", "None — local only"],
              ["Output formats", "PNG, JPG", "PNG, JPG, WebP, base64"],
              ["Multi-monitor", "Limited", "Seamless across displays"],
              ["Open source", "No (closed source)", "Yes (MIT)"],
              ["Telemetry", "Yes", "None"],
              ["Price", "Free", "Free"],
            ].map(([feature, lightshot, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {lightshot}
                </div>
                <div className="p-4 text-foreground border-l border-border">
                  {qgn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            Why people switch
            <br />
            <span className="text-pink">from Lightshot.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Privacy</h3>
              <p className="text-muted leading-relaxed">
                Lightshot uploads screenshots to prnt.sc by default, where
                they&apos;re publicly accessible with a guessable URL.
                Quick Gen never uploads anything anywhere. Your screenshots
                stay on your machine.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Open source</h3>
              <p className="text-muted leading-relaxed">
                Lightshot is closed-source software. You can&apos;t verify what
                it sends, what it tracks, or what it does in the background.
                Quick Gen is MIT-licensed — read every line of code on GitHub.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                Lightshot shows an overlay editor and then the screenshot is
                gone. Quick Gen keeps your capture visible as a floating card —
                pin it, stack it, reference it while you work.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Screen recording</h3>
              <p className="text-muted leading-relaxed">
                Lightshot is screenshots only. Quick Gen adds screen recording
                with microphone support — no need for a second tool when you
                need a video.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Better annotation</h3>
              <p className="text-muted leading-relaxed">
                Lightshot has basic markup — a pen, a line, an arrow, a text
                tool. Quick Gen adds shapes, numbered callouts, and a blur tool
                for redacting sensitive information.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No ads or bundled software</h3>
              <p className="text-muted leading-relaxed">
                Lightshot&apos;s installer has been known to bundle additional
                software. Quick Gen&apos;s installer is a clean NSIS setup — no
                bundleware, no toolbars, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedAlternatives current="/alternatives/lightshot" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
