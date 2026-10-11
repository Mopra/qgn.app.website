import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const mono = Geist_Mono({ subsets: ["latin"], weight: ["300", "400"] });

const description =
  "QGN is a free, open source screenshot and screen recording tool for Windows. Press Ctrl+Q, drag, and the capture is on your clipboard. No account, no cloud, no subscription.";

export const metadata: Metadata = {
  metadataBase: new URL("https://qgn.app"),
  title: "QGN: free screenshot tool for Windows. Ctrl+Q, straight to the clipboard",
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "QGN: Ctrl+Q, straight to the clipboard", description, url: "/", siteName: "QGN", type: "website" },
  twitter: { card: "summary_large_image", title: "QGN: Ctrl+Q, straight to the clipboard", description },
  icons: { icon: "/icon.png", apple: "/logo/Icon.png" },
};

const app = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "QGN",
  alternateName: "Quick Gen",
  url: "https://qgn.app",
  description,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows 10, Windows 11",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  downloadUrl: "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe",
  fileSize: "85MB",
  isAccessibleForFree: true,
  license: "https://opensource.org/licenses/MIT",
  sameAs: ["https://github.com/Mopra/qgn.app"],
};

// GA4, plus one event: a click on anything that downloads the installer or
// opens a release. Installs are the measure, so the site should say which
// pages lead to them.
const ga = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X8XR3Z1Y0L');
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="/releases/"]');
  if (a) gtag('event', 'download', { link_url: a.href, page_path: location.pathname });
});
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-X8XR3Z1Y0L" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{ga}</Script>
      </body>
    </html>
  );
}
