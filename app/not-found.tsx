import type { Metadata } from "next";
import Link from "next/link";
import { Nav, FeatureFooter } from "@/app/components/FeatureLayout";

export const metadata: Metadata = {
  title: "Page Not Found — Quick Gen",
  description: "The page you're looking for doesn't exist. Head back to Quick Gen to explore our free screenshot tool for Windows.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="noise min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1 flex flex-col justify-center items-center px-6 md:px-10 text-center">
        <p className="text-pink font-mono font-bold text-sm tracking-widest uppercase mb-6">
          404
        </p>

        <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.05em] mb-6">
          Page not<br />
          <span className="text-pink">found.</span>
        </h1>

        <p className="max-w-md text-lg text-muted mt-4 leading-relaxed">
          This page doesn&apos;t exist — maybe you followed an old link, or there&apos;s a typo in the URL.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-5 bg-pink text-white font-black text-lg rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_80px_rgba(175,34,107,0.25)]"
          >
            Back to Home
          </Link>
          <Link
            href="/changelog"
            className="inline-flex items-center gap-3 px-6 py-4 border border-border text-foreground font-bold text-base rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03]"
          >
            View Changelog
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-16 text-sm text-dim">
          <Link href="/features/screenshot-tool" className="hover:text-muted transition-colors">Screenshot Tool</Link>
          <Link href="/features/screen-recording" className="hover:text-muted transition-colors">Screen Recording</Link>
          <Link href="/features/screenshot-annotation" className="hover:text-muted transition-colors">Annotation</Link>
          <Link href="/features/floating-previews" className="hover:text-muted transition-colors">Floating Previews</Link>
          <Link href="/use-cases/developers" className="hover:text-muted transition-colors">For Developers</Link>
          <Link href="/use-cases/bug-reports" className="hover:text-muted transition-colors">For Bug Reports</Link>
        </div>
      </main>

      <FeatureFooter />
    </div>
  );
}
