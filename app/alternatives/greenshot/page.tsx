import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedAlternatives,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Greenshot Alternative for Windows — Quick Gen",
  description:
    "Looking for a Greenshot alternative? Quick Gen is a modern, open-source screenshot tool for Windows with floating previews, annotation, screen recording, and a clipboard-first workflow.",
  keywords: [
    "Greenshot alternative",
    "alternative to Greenshot",
    "Greenshot replacement",
    "screenshot tool like Greenshot",
    "better than Greenshot",
    "Greenshot vs Quick Gen",
    "free screenshot tool Windows",
  ],
  alternates: { canonical: "/alternatives/greenshot" },
  openGraph: {
    title: "Greenshot Alternative for Windows — Quick Gen",
    description:
      "Modern Greenshot alternative with floating previews, annotation, screen recording. Open source, clipboard-first.",
    url: "https://qgn.app/alternatives/greenshot",
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

export default function GreenshotAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Alternatives" },
        { label: "Greenshot Alternative" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Greenshot Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            A modern alternative
            <br />
            <span className="text-pink">to Greenshot.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Greenshot has been a reliable tool for years, but development has
            slowed and it&apos;s missing features modern workflows need. Quick
            Gen picks up where Greenshot left off — with floating previews,
            screen recording, and a faster capture flow.
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
                Greenshot
              </div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Screenshot capture", "Yes", "Yes"],
              ["Clipboard-first", "Optional", "Default — every capture"],
              ["Floating previews", "No", "Yes — pin, stack, resize"],
              ["Annotation editor", "Built-in", "Built-in — with blur and callouts"],
              ["Screen recording", "No", "Yes — with mic, MP4/WebM"],
              ["Multi-monitor", "Basic", "Seamless across displays"],
              ["Custom hotkeys", "Yes", "Yes"],
              ["Output formats", "PNG, JPG, BMP", "PNG, JPG, WebP, base64"],
              ["Auto-save", "Yes", "Yes — with timestamps"],
              ["Active development", "Slow / stalled", "Actively maintained"],
              ["Open source", "Yes (GPL)", "Yes (MIT)"],
              ["Price", "Free", "Free"],
            ].map(([feature, greenshot, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {greenshot}
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
            <span className="text-pink">from Greenshot.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                Greenshot captures go to the editor or clipboard — then
                they&apos;re gone. Quick Gen shows every capture as a floating,
                always-on-top card you can pin to your screen for reference.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Screen recording</h3>
              <p className="text-muted leading-relaxed">
                Greenshot only does screenshots. Quick Gen includes built-in
                screen recording with microphone support — no need for a
                separate tool for bug reports and demos.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Active development</h3>
              <p className="text-muted leading-relaxed">
                Greenshot&apos;s open-source version hasn&apos;t seen major
                updates in a while. Quick Gen is actively maintained with
                regular releases and new features.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Modern annotation</h3>
              <p className="text-muted leading-relaxed">
                Quick Gen&apos;s annotation editor includes numbered callouts
                and a blur tool for redacting sensitive information — tools
                Greenshot doesn&apos;t offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            What stays the same
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Both Greenshot and Quick Gen are free and open source. Both run
              locally with no cloud uploads or accounts. Both support custom
              hotkeys and annotation.
            </p>
            <p>
              If you liked Greenshot&apos;s simplicity and privacy, you&apos;ll
              feel right at home with Quick Gen. The core philosophy is the same
              — a fast, local screenshot tool that respects your workflow.
            </p>
          </div>
        </div>
      </section>

      <RelatedAlternatives current="/alternatives/greenshot" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
