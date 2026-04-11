import type { Metadata } from "next";
import {
  Nav,
  Breadcrumbs,
  FeatureCTA,
  FeatureFooter,
  RelatedUseCases,
} from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Screenshot Tool for Documentation — Quick Gen",
  description:
    "Create documentation screenshots quickly. Capture UI states, annotate with arrows and callout numbers, auto-save to a folder. Perfect for guides, READMEs, knowledge bases, and tutorials.",
  keywords: [
    "screenshot for documentation",
    "documentation screenshot tool",
    "screenshot for tutorials",
    "screenshot for guides",
    "screenshot for knowledge base",
    "annotated screenshots documentation",
    "Quick Gen",
  ],
  alternates: { canonical: "/use-cases/documentation" },
  openGraph: {
    title: "Screenshot Tool for Documentation — Quick Gen",
    description:
      "Fast documentation screenshots. Capture, annotate with callouts, auto-save to folder. Perfect for guides and tutorials.",
    url: "https://qgn.app/use-cases/documentation",
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

export default function DocumentationPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Use Cases" },
        { label: "For Documentation" }
      ]} />

      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-10 pt-8">
        <div className="relative max-w-5xl">
          <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
            For Documentation
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em] mb-8">
            Docs that actually
            <br />
            <span className="text-pink">show what to do.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Good documentation has screenshots. Great documentation has
            annotated screenshots with numbered steps. Quick Gen makes both
            fast enough that you&apos;ll actually do it instead of writing
            another wall of text.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-16">
            The right tools for
            <br />
            <span className="text-pink">documentation screenshots.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Numbered callouts</h3>
              <p className="text-muted leading-relaxed">
                Place auto-incrementing numbered markers on your screenshot to
                label each step. &quot;Click 1, fill in 2, submit 3&quot;
                reads instantly — no paragraph of instructions needed.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Arrows and shapes</h3>
              <p className="text-muted leading-relaxed">
                Point at the exact button, menu item, or field the user needs
                to interact with. Circle important areas, draw rectangles
                around sections. Visual directions that anyone can follow.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">Auto-save to folder</h3>
              <p className="text-muted leading-relaxed">
                Point Quick Gen at your docs asset folder. Every screenshot is
                automatically saved with a timestamp. No manual &quot;save
                as&quot; step — just capture and move on. Rename later.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Multiple output formats
              </h3>
              <p className="text-muted leading-relaxed">
                Save as PNG for lossless quality in docs, JPG for smaller file
                sizes on the web, WebP for modern docs sites, or base64 for
                inline embedding in markdown.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Blur sensitive content
              </h3>
              <p className="text-muted leading-relaxed">
                Documentation screenshots often show real user data, internal
                URLs, or configuration values. Blur them before including in
                public-facing docs.
              </p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-black mb-2">
                Video walkthroughs
              </h3>
              <p className="text-muted leading-relaxed">
                Some processes are easier to show than describe. Record a screen
                region with mic narration for tutorials, onboarding guides, or
                complex multi-step workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[0.9] mb-8">
            Works with any docs platform
          </h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Quick Gen outputs standard image formats that work everywhere —
              Notion, Confluence, GitBook, Docusaurus, ReadMe, plain
              markdown READMEs, or any CMS that accepts image pastes.
            </p>
            <p>
              Since every capture goes to your clipboard, inserting a
              screenshot into your docs is literally Ctrl+Q, select, switch to
              your editor, Ctrl+V. The image is embedded.
            </p>
          </div>
        </div>
      </section>

      <RelatedUseCases current="/use-cases/documentation" />
      <FeatureCTA />
      <FeatureFooter />
    </div>
  );
}
