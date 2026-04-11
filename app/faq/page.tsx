import type { Metadata } from "next";
import { Nav, Breadcrumbs, FeatureCTA, FeatureFooter } from "@/app/components/FeatureLayout";

const FAQS = [
  {
    question: "Is Quick Gen really free?",
    answer:
      "Yes, completely. Quick Gen is free and open source under the MIT license. There are no premium tiers, subscriptions, or hidden costs. The full source code is available on GitHub.",
  },
  {
    question: "What versions of Windows does Quick Gen support?",
    answer:
      "Quick Gen supports Windows 10 and Windows 11 (64-bit). It runs on any modern Windows machine with no additional dependencies required.",
  },
  {
    question: "Does Quick Gen upload my screenshots to the cloud?",
    answer:
      "No. Quick Gen is entirely local. Your screenshots and recordings are stored on your computer and copied to your clipboard. Nothing is ever uploaded to any server. The only optional network request is checking for updates via GitHub.",
  },
  {
    question: "How do I take a screenshot with Quick Gen?",
    answer:
      "Press Ctrl+Q to activate the capture overlay, then click and drag to select a region. The screenshot is instantly copied to your clipboard. You can also use Ctrl+Shift+Q to start screen recording.",
  },
  {
    question: "What image formats does Quick Gen support?",
    answer:
      "Quick Gen supports PNG, JPG, WebP, and base64. PNG is the default clipboard format. You can configure the output format and quality in the settings.",
  },
  {
    question: "Can I annotate screenshots?",
    answer:
      "Yes. After capturing a screenshot, you can open the annotation editor to add arrows, text, rectangles, highlights, blur regions, and numbered callouts. Press Tab after capture to open the editor, or right-click a floating preview.",
  },
  {
    question: "Does Quick Gen support multiple monitors?",
    answer:
      "Yes. Quick Gen works across all connected monitors. The capture overlay spans every display, and you can select regions that cross monitor boundaries.",
  },
  {
    question: "What are floating previews?",
    answer:
      "Floating previews are small, always-on-top windows that appear after each capture showing your screenshot. You can drag them around, click to copy again, right-click to annotate, or dismiss them. They act as a visual clipboard history while you work.",
  },
  {
    question: "Can Quick Gen record my screen?",
    answer:
      "Yes. Quick Gen includes screen recording with system audio and microphone support. Press Ctrl+Shift+Q to start recording a selected region, and press the same shortcut or Escape to stop. Videos are saved as MP4 or WebM.",
  },
  {
    question: "Is Quick Gen open source?",
    answer:
      "Yes. Quick Gen is fully open source under the MIT license. You can view, fork, and contribute to the source code on GitHub at github.com/Mopra/qgn.app. The website source is also open at github.com/Mopra/qgn.app.website.",
  },
  {
    question: "How big is the Quick Gen installer?",
    answer:
      "The Quick Gen installer is less than 100 MB. It includes everything needed to run — no additional runtimes or frameworks to install separately.",
  },
  {
    question: "How do I customize keyboard shortcuts?",
    answer:
      "Open Quick Gen settings from the system tray icon and go to the Hotkeys section. You can reassign the capture, recording, annotation, and other shortcuts to any key combination you prefer.",
  },
  {
    question: "Does Quick Gen have a portable version?",
    answer:
      "Currently, Quick Gen is available as a standard Windows installer (EXE). A portable version is being considered for a future release.",
  },
  {
    question: "How does Quick Gen compare to the Windows Snipping Tool?",
    answer:
      "Quick Gen is faster (single hotkey vs. multiple clicks), copies directly to clipboard, supports floating previews, has a full annotation editor, records screen, and is open source. See our detailed comparison page for a full feature-by-feature breakdown.",
  },
  {
    question: "Does Quick Gen collect any data or telemetry?",
    answer:
      "No. Quick Gen has zero telemetry, zero analytics, and zero tracking in the desktop application. It does not phone home, collect crash reports, or monitor your usage in any way. You can verify this in the open source code.",
  },
];

export const metadata: Metadata = {
  title: "FAQ — Quick Gen Screenshot Tool",
  description:
    "Frequently asked questions about Quick Gen, the free open-source screenshot tool for Windows. System requirements, features, privacy, and more.",
  keywords: [
    "Quick Gen FAQ",
    "screenshot tool FAQ",
    "Quick Gen system requirements",
    "Quick Gen features",
    "free screenshot tool questions",
    "QGN help",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Quick Gen Screenshot Tool",
    description:
      "Frequently asked questions about Quick Gen. System requirements, features, privacy, and more.",
    url: "https://qgn.app/faq",
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

export default function FAQPage() {
  /* JSON-LD FAQPage schema for Google rich results */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "FAQ" }
      ]} />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            FAQ
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
            Frequently asked<br />
            <span className="text-pink">questions.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted leading-relaxed">
            Everything you need to know about Quick Gen — from setup to features
            to privacy.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-3xl mx-auto space-y-0">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-border"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 text-foreground font-bold text-base md:text-lg list-none [&::-webkit-details-marker]:hidden">
                <span className="pr-6">{faq.question}</span>
                <span className="text-muted group-open:rotate-45 transition-transform duration-200 text-xl font-light flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="pb-6 text-muted leading-relaxed pr-10">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
