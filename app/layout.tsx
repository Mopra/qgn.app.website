import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quick Gen — Instant screenshot tool for Windows",
  description:
    "Open-source screenshot tool for Windows. Capture your screen in a single keystroke. Clipboard-first, floating previews, annotation, screen recording, multi-monitor support. Free, MIT-licensed, no account, no cloud.",
  keywords: [
    "screenshot tool",
    "screen capture",
    "Windows screenshot",
    "screen recording",
    "screenshot annotation",
    "clipboard screenshot",
    "floating preview",
    "screen grab",
    "snipping tool alternative",
    "free screenshot tool",
    "open source screenshot",
    "Quick Gen",
    "QGN",
    "lightweight screenshot",
    "hotkey screenshot",
  ],
  authors: [{ name: "Quick Gen" }],
  creator: "Quick Gen",
  publisher: "Quick Gen",
  metadataBase: new URL("https://qgn.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qgn.app",
    siteName: "Quick Gen",
    title: "Quick Gen — Instant screenshot tool for Windows",
    description:
      "Capture your screen in a single keystroke. Clipboard-first screenshots, floating previews, annotation, screen recording. Free, no account, no cloud.",
    images: [
      {
        url: "/logo/Logo%20Black%20BG.png",
        width: 1200,
        height: 630,
        alt: "Quick Gen — Screenshot tool for builders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quick Gen — Instant screenshot tool for Windows",
    description:
      "Capture your screen in a single keystroke. Clipboard-first screenshots, floating previews, annotation, screen recording. Free, no account, no cloud.",
    images: ["/logo/Logo%20Black%20BG.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/logo/Icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Quick Gen",
    alternateName: "QGN",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Windows 10+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Lightweight desktop screenshot and screen recording tool for Windows. Capture screen regions instantly with a single hotkey. Clipboard-first, floating previews, annotation, screen recording.",
    url: "https://qgn.app",
    downloadUrl:
      "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe",
    fileSize: "85MB",
    featureList:
      "Instant screenshot capture, Clipboard-first workflow, Floating preview cards, Annotation editor, Screen recording with audio, Multi-monitor support, Customizable hotkeys, Auto-save, System tray integration",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8XR3Z1Y0L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8XR3Z1Y0L');
          `}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
