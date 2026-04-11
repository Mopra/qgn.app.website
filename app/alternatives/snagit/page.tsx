import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedAlternatives,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Free Snagit Alternative for Windows — Quick Gen",
  description:
    "Looking for a free Snagit alternative? Quick Gen offers screenshot capture, annotation, screen recording, and floating previews — without the $63 price tag. Open source and MIT-licensed.",
  keywords: [
    "Snagit alternative",
    "free Snagit alternative",
    "alternative to Snagit",
    "Snagit replacement",
    "screenshot tool like Snagit",
    "Snagit vs Quick Gen",
    "free screenshot annotation tool",
    "TechSmith Snagit alternative",
  ],
  alternates: { canonical: "/alternatives/snagit" },
  openGraph: {
    title: "Free Snagit Alternative for Windows — Quick Gen",
    description:
      "Screenshot capture, annotation, and screen recording without the $63 price tag. Free and open source.",
    url: "https://qgn.app/alternatives/snagit",
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

export default function SnagitAlternativePage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Alternatives" },
        { label: "Snagit Alternative" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            Snagit Alternative
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Snagit features.
            <br />
            <span className="text-pink">Zero cost.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Snagit by TechSmith is a solid tool, but at $63 per license
            it&apos;s hard to justify when free alternatives cover most of the
            same ground. Quick Gen gives you screenshot capture, annotation, and
            screen recording — for free, forever.
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
              <div className="p-5 text-dim border-l border-border">Snagit</div>
              <div className="p-5 text-pink border-l border-border">
                Quick Gen
              </div>
            </div>
            {[
              ["Screenshot capture", "Yes", "Yes"],
              ["Screen recording", "Yes", "Yes — with mic, MP4/WebM"],
              ["Annotation editor", "Yes — comprehensive", "Yes — arrows, shapes, text, callouts, blur"],
              ["Floating previews", "No", "Yes — pin, stack, resize"],
              ["Clipboard-first", "Optional", "Default — every capture"],
              ["Scrolling capture", "Yes", "Not yet"],
              ["Templates & stamps", "Yes — large library", "No"],
              ["Video trimming", "Yes", "No"],
              ["Cloud integration", "Screencast.com, Google Drive", "None — local only"],
              ["Open source", "No", "Yes (MIT)"],
              ["Price", "$63 one-time", "Free"],
              ["Account required", "TechSmith account", "None"],
            ].map(([feature, snagit, qgn], i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-border last:border-b-0 text-sm"
              >
                <div className="p-4 text-foreground font-medium">
                  {feature}
                </div>
                <div className="p-4 text-muted border-l border-border">
                  {snagit}
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
            <span className="text-pink">from Snagit.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Price</h3>
              <p className="text-muted leading-relaxed">
                Snagit costs $63 per license plus annual maintenance fees for
                major upgrades. Quick Gen is free — not freemium, not a trial.
                Free forever, MIT-licensed, open source.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">No account required</h3>
              <p className="text-muted leading-relaxed">
                Snagit requires a TechSmith account for activation. Quick Gen
                has no account, no license key, no activation. Download, install,
                capture.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Floating previews</h3>
              <p className="text-muted leading-relaxed">
                Snagit captures go into its editor tray. Quick Gen shows every
                capture as a floating card on your desktop — pin it, annotate it,
                or reference it while you work in other apps.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Lighter weight</h3>
              <p className="text-muted leading-relaxed">
                Snagit is a full application suite with a persistent editor
                window, a library, templates, and cloud integrations. Quick Gen
                lives in your system tray and only appears when you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            When Snagit is the better choice
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              If you need scrolling capture, video editing, template stamps,
              step-by-step guides, or deep integration with tools like
              Camtasia, Snagit offers more. It&apos;s a mature enterprise tool
              with a decade of features.
            </p>
            <p>
              Quick Gen is for people who need fast screenshots, annotation, and
              screen recording without the overhead or cost. If your workflow is
              capture → annotate → share, Quick Gen covers it.
            </p>
          </div>
        </div>
      </section>

      <RelatedAlternatives current="/alternatives/snagit" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
