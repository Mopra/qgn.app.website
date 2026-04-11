import type { Metadata } from "next";
import { Nav, Breadcrumbs, FeatureFooter } from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Quick Gen",
  description:
    "Quick Gen is a privacy-first screenshot tool. No accounts, no cloud uploads, no telemetry. Read our full privacy policy.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Quick Gen",
    description: "Quick Gen is a privacy-first screenshot tool. No accounts, no cloud uploads, no telemetry.",
    url: "https://qgn.app/privacy",
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

export default function PrivacyPage() {
  return (
    <div className="noise">
      <Nav />
      <Breadcrumbs items={[
        { label: "Privacy Policy" }
      ]} />

      <article className="max-w-3xl mx-auto px-6 md:px-10 pt-8 pb-24">
        <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
          Privacy Policy
        </p>

        <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.04em] leading-[0.9] mb-10">
          Your screenshots<br />stay <span className="text-pink">yours.</span>
        </h1>

        <p className="text-muted text-sm mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-12 text-muted leading-relaxed">
          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">The short version</h2>
            <p>
              Quick Gen does not collect, store, or transmit any personal data. Your screenshots
              never leave your computer. There is no account system, no cloud storage, no analytics
              baked into the app, and no telemetry of any kind. We built Quick Gen to be a tool
              you can trust with sensitive content on your screen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">What data does Quick Gen collect?</h2>
            <p className="mb-4">
              <strong className="text-foreground">None.</strong> Quick Gen runs entirely on your
              local machine. Here is exactly what happens with your data:
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-border">
              <div>
                <p className="text-foreground font-semibold">Screenshots &amp; recordings</p>
                <p>Stored locally on your computer in the location you configure. Never uploaded anywhere.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Clipboard data</p>
                <p>Screenshots are copied to your system clipboard. This stays on your device and follows your OS clipboard behavior.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Settings &amp; preferences</p>
                <p>Stored in a local config file on your machine. Not synced, not backed up to any server.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Usage analytics</p>
                <p>There are none. We don&apos;t track feature usage, session duration, crash reports, or anything else.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Network requests</h2>
            <p>
              Quick Gen makes <strong className="text-foreground">no network requests</strong> during
              normal operation. The only time the app connects to the internet is when it checks for
              updates via GitHub&apos;s public releases API — and this is optional. No personal
              information is included in that request.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">This website</h2>
            <p className="mb-4">
              The Quick Gen website (qgn.app) uses Google Analytics to understand how visitors
              find and use the site. This is standard web analytics and applies only to the
              marketing website — not the desktop application.
            </p>
            <p>
              Google Analytics may collect anonymized data such as page views, referral sources,
              and general geographic region. You can opt out of Google Analytics using a browser
              extension or ad blocker. See{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline underline-offset-2"
              >
                Google&apos;s opt-out tool
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Open source transparency</h2>
            <p>
              Quick Gen is open source under the MIT license. You can inspect every line of code
              to verify these claims yourself. The source code is available at{" "}
              <a
                href="https://github.com/Mopra/qgn.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink hover:text-pink-light underline underline-offset-2"
              >
                github.com/Mopra/qgn.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Third-party services</h2>
            <p>
              Quick Gen does not integrate with, send data to, or receive data from any third-party
              service. There are no embedded SDKs, advertising libraries, crash reporters, or
              analytics frameworks in the desktop application.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Children&apos;s privacy</h2>
            <p>
              Quick Gen does not collect any data from anyone, including children under 13.
              Since no personal data is collected or stored, there is no COPPA applicability.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Changes to this policy</h2>
            <p>
              If we ever change our data practices, we will update this page and the
              &quot;last updated&quot; date above. Given our core philosophy of local-only
              operation, we do not anticipate significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-bold mb-4">Contact</h2>
            <p>
              Questions about this policy? Open an issue on{" "}
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
