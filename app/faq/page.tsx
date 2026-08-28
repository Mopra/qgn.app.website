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
      "Quick Gen supports PNG, JPG, WebP, and base64 Data URI. PNG is the default clipboard format. You can configure the output format and, for JPG and WebP, the quality, in the settings.",
  },
  {
    question: "Can I annotate screenshots?",
    answer:
      "Yes. Every capture appears as a floating preview card with an Annotate button and an Open in Studio button, and the tray can open Studio directly. Studio's Markup mode has nine tools, each on a single key: pointer (V), draw (D), arrow (A), shape (S), text (T), redact (X), numbered callout (C), cursor stamp (P) and crop (R). Marks stay editable after you place them, so you can select one with the pointer to move, resize, recolour or delete it without undoing everything drawn after it.",
  },
  {
    question: "Can Quick Gen put my screenshot on a background?",
    answer:
      "Yes. Studio's Compose mode frames a capture on a background and saves it as a new file, leaving the original untouched. There are ten gradients with an adjustable angle, six soft wallpapers, solid colours and your own images, plus window and browser frames, padding, corner rounding, shadow, and six aspect ratios. It is the same job web tools like Shots.so do, done offline with no upload, no account and no watermark.",
  },
  {
    question: "Can I capture just one window?",
    answer:
      "Yes. On the capture overlay, hovering a window outlines exactly what you would get, and clicking captures that window precisely. While you drag a region, the edges also snap to nearby windows; hold Ctrl to ignore them. A pixel loupe follows the cursor with a live coordinate and colour readout for when you need to be exact, and holding Alt as you release settles the selection so you can drag its edges before confirming.",
  },
  {
    question: "Does Quick Gen support multiple monitors?",
    answer:
      "Yes. Quick Gen works across all connected monitors. The capture overlay spans every display, and you can select regions that cross monitor boundaries.",
  },
  {
    question: "What are floating previews?",
    answer:
      "Floating previews are small, always-on-top cards that appear after each capture. Each card has buttons to pin it, annotate it, open it in Studio, or copy it to the clipboard again, and you can drag the thumbnail straight out into Slack or an email. Pinned cards survive an app restart or a reboot. Cards dismiss themselves after 5, 10 or 20 seconds, or never, whichever you set.",
  },
  {
    question: "What happens if a preview card disappears before I use it?",
    answer:
      "Nothing is lost. Every capture is also kept in a small ring, and a Recent captures menu in the tray puts any of the last twelve back on screen as an ordinary card. You can switch the ring off in settings, which also forgets whatever is already stored, and there is a Clear recent captures item in the tray.",
  },
  {
    question: "Can Quick Gen record my screen?",
    answer:
      "Yes. Press Ctrl+Shift+Q, drag a region (or press Space for the whole screen), and record with microphone audio, system audio, or both. There is an optional 3-2-1 countdown, and you can pause and resume mid-take, then click Stop on the control bar. Clips open in Studio with a timeline for trimming, and export to MP4, WebM, GIF or animated WebP.",
  },
  {
    question: "What are the automatic zoom-ins in recordings?",
    answer:
      "While you record, Quick Gen logs where you clicked. In Studio those clicks become zoom keyframes on the timeline automatically, so the finished clip zooms in on whatever you were doing. You can keep them, retime them, rebuild them from the click log, or place your own with adjustable easing and a focus point. Studio can also layer a styled cursor with click ripples over footage that was captured without one.",
  },
  {
    question: "How long does exporting a recording take?",
    answer:
      "MP4 and WebM exports drive the encoder directly rather than running at playback speed, so they finish several times faster than the length of the clip. A three-minute recording no longer takes three minutes to render. GIF and animated WebP are also supported, and long exports scale their resolution and sampling to fit rather than failing.",
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
      "Open Quick Gen settings from the system tray icon and go to the Hotkeys section. The two global shortcuts, Capture and Record, can be reassigned to any combination you prefer, with conflict detection if a combination is not allowed, and a Reset shortcuts to defaults button. The tool shortcuts inside Studio are single keys and are fixed.",
  },
  {
    question: "Is redaction in Quick Gen actually safe?",
    answer:
      "Yes, and it is worth knowing why this is a real question. Redaction comes as a solid block, which is the default and the safest, or pixelate in three strengths. Until version 0.1.17, a pixelate block drawn over a solid one re-sampled the original image rather than what was already painted, which could put hidden content back on screen in pixelated but sometimes readable form. Pixelation now samples what is underneath it, so redactions stack the way you would expect. If you shared a screenshot before 0.1.17 whose sensitive area was pixelated over a black block, it is worth checking.",
  },
  {
    question: "Does Quick Gen have a portable version?",
    answer:
      "Currently, Quick Gen is available as a standard Windows installer (EXE). A portable version is being considered for a future release.",
  },
  {
    question: "Is there a Mac or Linux version?",
    answer:
      "Not yet. Quick Gen is Windows 10 and 11 only today. macOS and Linux are on the roadmap, and interest and testers are what will move them up it — the GitHub discussions are the place to say so.",
  },
  {
    question: "How does Quick Gen compare to the Windows Snipping Tool?",
    answer:
      "Quick Gen is faster (single hotkey vs. multiple clicks), copies directly to clipboard, snaps to windows, supports floating previews and a recent-captures history, includes a full editor for both screenshots and recordings, records the screen with audio, and is open source. See our detailed comparison page for a full feature-by-feature breakdown.",
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
