import type { Metadata } from "next";
import { Nav, Breadcrumbs, FeatureFooter } from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Quick Gen",
  description:
    "Terms of service for Quick Gen, a free open-source screenshot tool for Windows. MIT-licensed, provided as-is.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Quick Gen",
    description: "Terms of service for Quick Gen, a free open-source screenshot tool for Windows.",
    url: "https://qgn.app/terms",
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

export default function TermsPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Terms of Service" }
      ]} />

      <article className="max-w-3xl mx-auto px-6 md:px-10 pt-8 pb-24">
        <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
          Terms of Service
        </p>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.04em] leading-[0.9] mb-10">
          Simple terms for<br />a <span className="text-pink">simple tool.</span>
        </h1>

        <p className="text-muted text-sm mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-12 text-muted leading-relaxed">
          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Overview</h2>
            <p>
              Quick Gen is a free, open-source screenshot and screen recording tool for Windows.
              It is distributed under the MIT License. By downloading, installing, or using
              Quick Gen, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">License</h2>
            <p className="mb-4">
              Quick Gen is released under the{" "}
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline underline-offset-2"
              >
                MIT License
              </a>
              . You are free to use, copy, modify, merge, publish, distribute, sublicense,
              and/or sell copies of the software, subject to the conditions in the MIT License.
            </p>
            <p>
              The full license text is included with the software and available in the{" "}
              <a
                href="https://github.com/Mopra/qgn.app/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline underline-offset-2"
              >
                source repository
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Disclaimer of warranties</h2>
            <p>
              Quick Gen is provided &quot;as is&quot; without warranty of any kind, express or
              implied, including but not limited to the warranties of merchantability, fitness
              for a particular purpose, and non-infringement. The entire risk as to the quality
              and performance of the software is with you.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Limitation of liability</h2>
            <p>
              In no event shall the authors or copyright holders be liable for any claim, damages,
              or other liability, whether in an action of contract, tort, or otherwise, arising
              from, out of, or in connection with the software or the use or other dealings in
              the software.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Your content</h2>
            <p>
              Screenshots, recordings, and any other content you create with Quick Gen belong
              entirely to you. Quick Gen does not claim any rights to your content. Since
              everything is processed and stored locally on your machine, you maintain full
              control and ownership.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Responsible use</h2>
            <p>
              You are responsible for how you use Quick Gen and the content you capture. Please
              respect the privacy of others and comply with applicable laws when capturing
              screenshots or recordings.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Updates</h2>
            <p>
              Quick Gen may offer optional update notifications via GitHub releases. Updates
              are not mandatory, and you can continue using any version you have downloaded.
              We are not obligated to provide updates, bug fixes, or support.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Changes will be reflected on this
              page with an updated date. Continued use of Quick Gen after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Contact</h2>
            <p>
              Questions about these terms? Open an issue on{" "}
              <a
                href="https://github.com/Mopra/qgn.app/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline underline-offset-2"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <FeatureFooter />
    </div>
  );
}
