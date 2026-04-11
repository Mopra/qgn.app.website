import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedAlternatives,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "ShareX Alternative — Simpler Screenshot Tool — Quick Gen",
  description:
    "Looking for a simpler ShareX alternative? Quick Gen is a lightweight, focused screenshot tool for Windows. One hotkey, clipboard-first, no configuration needed. Open source and free.",
  keywords: [
    "ShareX alternative",
    "alternative to ShareX",
    "ShareX replacement",
    "simpler than ShareX",
    "screenshot tool like ShareX",
    "ShareX vs Quick Gen",
    "lightweight screenshot tool",
  ],
  alternates: { canonical: "/alternatives/sharex" },
  openGraph: {
    title: "ShareX Alternative — Simpler Screenshot Tool — Quick Gen",
    description:
      "A simpler, focused alternative to ShareX. One hotkey, clipboard-first screenshots, no configuration maze.",
    url: "https://qgn.app/alternatives/sharex",
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

export default function ShareXAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Alternatives" },
        { label: "ShareX Alternative" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            ShareX Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            ShareX is powerful.
            <br />
            <span className="text-pink">Maybe too powerful.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            ShareX can do everything — OCR, uploads, GIF creation, scrolling
            capture, color picker, and dozens more. But if all you need is fast
            screenshots and screen recording, that complexity gets in the way.
            Quick Gen does fewer things, but does them faster.
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
              <div className="p-5 text-dim border-l border-border">ShareX</div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Screenshot capture", "Yes", "Yes"],
              ["Time to first capture", "Configure first", "Instant — Ctrl+Q"],
              ["Learning curve", "Steep — many menus", "None — one hotkey"],
              ["Floating previews", "No", "Yes — pin, stack, resize"],
              ["Annotation", "Yes — separate editor", "Yes — inline, keyboard-driven"],
              ["Screen recording", "Yes — GIF and video", "Yes — MP4/WebM with mic"],
              ["Cloud upload", "Built-in (Imgur, etc.)", "None — local only"],
              ["Settings pages", "20+ tabs", "One page"],
              ["Install size", "~30 MB + .NET", "~85 MB standalone"],
              ["Open source", "Yes (GPL)", "Yes (MIT)"],
              ["Price", "Free", "Free"],
            ].map(([feature, sharex, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {sharex}
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
            <span className="text-pink">from ShareX.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Simplicity</h3>
              <p className="text-muted leading-relaxed">
                ShareX has dozens of settings tabs, after-capture tasks, upload
                destinations, and workflow configurations. Quick Gen has one
                hotkey and one settings page. It does what you need without
                asking you to configure anything first.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                ShareX captures go to files or the clipboard — then
                they&apos;re gone from your screen. Quick Gen keeps every
                capture visible as a floating card you can pin, stack, and
                reference while you work.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No cloud upload</h3>
              <p className="text-muted leading-relaxed">
                ShareX encourages cloud uploads to Imgur, Dropbox, and other
                services. Quick Gen is entirely local. Your screenshots stay on
                your machine. No API keys to configure, no upload failures.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Speed</h3>
              <p className="text-muted leading-relaxed">
                With ShareX, you often need to decide what happens after
                capture: save, upload, open editor, copy, or run through a task
                chain. Quick Gen always does the same thing — clipboard, preview,
                done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            When to stay with ShareX
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              If you rely on ShareX&apos;s cloud uploads, OCR, scrolling
              capture, GIF creation, or automated workflow chains, ShareX is
              still the right tool for you. It does a lot of things well.
            </p>
            <p>
              Quick Gen is for people who want the opposite: fewer features,
              less configuration, faster capture. If your workflow is
              &quot;screenshot → clipboard → paste&quot;, Quick Gen does it with
              less friction.
            </p>
          </div>
        </div>
      </section>

      <RelatedAlternatives current="/alternatives/sharex" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
