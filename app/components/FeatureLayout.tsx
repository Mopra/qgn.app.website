"use client";

import { useState } from "react";
import { Download, Github, Code, Star, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "@/app/components/DownloadPopup";

const DOWNLOAD_URL =
  "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe";

export const FEATURES_NAV = [
  { href: "/features/screenshot-tool", label: "Screenshot Tool" },
  { href: "/features/screen-recording", label: "Screen Recording" },
  { href: "/features/screenshot-annotation", label: "Annotation Editor" },
  { href: "/features/floating-previews", label: "Floating Previews" },
  {
    href: "/features/snipping-tool-alternative",
    label: "Snipping Tool Alternative",
  },
  {
    href: "/features/open-source-screenshot-tool",
    label: "Open Source",
  },
];

export const ALTERNATIVES_NAV = [
  { href: "/alternatives/greenshot", label: "Greenshot Alternative" },
  { href: "/alternatives/sharex", label: "ShareX Alternative" },
  { href: "/alternatives/cleanshot-x", label: "CleanShot X Alternative" },
  { href: "/alternatives/snagit", label: "Snagit Alternative" },
  { href: "/alternatives/lightshot", label: "Lightshot Alternative" },
];

export const USE_CASES_NAV = [
  { href: "/use-cases/developers", label: "For Developers" },
  { href: "/use-cases/bug-reports", label: "For Bug Reports" },
  { href: "/use-cases/documentation", label: "For Documentation" },
  { href: "/use-cases/designers", label: "For Designers" },
];

/* ── Desktop dropdown (hover + focus) ── */
function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative hidden md:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onFocus={() => setOpen(true)}
        className="flex items-center gap-1 text-muted hover:text-foreground transition-colors text-sm font-medium"
      >
        {label}
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      <div
        className={`absolute top-full left-0 pt-2 transition-all duration-150 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="bg-card border border-border rounded-xl p-2 min-w-[240px] shadow-2xl"
          onBlur={(e) => {
            // Close when focus leaves the dropdown entirely
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setOpen(false);
            }
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-muted hover:text-foreground hover:bg-background rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile accordion section ── */
function MobileSection({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-base font-bold text-foreground"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="pb-3 px-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="block py-2.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Nav (shared across all pages) ── */
export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex justify-between items-center bg-background/80 backdrop-blur-md">
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-foreground">
            <Image
              src="/logo/Logo Transparent BG.png"
              alt="Quick Gen"
              width={32}
              height={32}
              className="w-8 h-8"
              priority
            />
            <span className="font-bold tracking-tight">Quick Gen</span>
          </Link>

          <NavDropdown label="Features" items={FEATURES_NAV} />
          <NavDropdown label="Use Cases" items={USE_CASES_NAV} />
          <NavDropdown label="Alternatives" items={ALTERNATIVES_NAV} />
          <Link
            href="/changelog"
            className="hidden md:block text-muted hover:text-foreground transition-colors text-sm font-medium"
          >
            Changelog
          </Link>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Mopra/qgn.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group/star hidden sm:flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <Star className="w-3.5 h-3.5 transition-colors group-hover/star:fill-yellow-400 group-hover/star:text-yellow-400" />
          </a>
          <DownloadButton
            className="group hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-pink text-white font-bold text-sm rounded-full hover:bg-pink-light transition-all hover:scale-105"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download
          </DownloadButton>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 overflow-y-auto md:hidden">
          <MobileSection
            label="Features"
            items={FEATURES_NAV}
            onNavigate={closeMobile}
          />
          <MobileSection
            label="Use Cases"
            items={USE_CASES_NAV}
            onNavigate={closeMobile}
          />
          <MobileSection
            label="Alternatives"
            items={ALTERNATIVES_NAV}
            onNavigate={closeMobile}
          />

          <Link
            href="/changelog"
            onClick={closeMobile}
            className="block px-6 py-4 text-base font-bold text-foreground border-b border-border"
          >
            Changelog
          </Link>

          <div className="px-6 py-6 space-y-4">
            <DownloadButton
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-pink text-white font-black text-base rounded-2xl hover:bg-pink-light transition-all"
            >
              <Download className="w-5 h-5" />
              Download for Windows
            </DownloadButton>
            <a
              href="https://github.com/Mopra/qgn.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 border border-border text-foreground font-bold text-base rounded-2xl hover:border-pink/40 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Source
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Breadcrumbs with BreadcrumbList schema ── */
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const crumbs = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://qgn.app${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="px-6 md:px-10 pt-24 pb-0"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-dim">
          {crumbs.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3 h-3 text-dim/60" />}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-muted transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/* ── Shared CTA section ── */
export function FeatureCTA() {
  return (
    <section className="px-6 md:px-10 py-32 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.04em] leading-[0.9] mb-6">
          Ready to try it?
        </h2>
        <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
          Download Quick Gen and start capturing in seconds. Free, open source,
          no account needed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <DownloadButton
            className="group inline-flex items-center gap-3 px-10 py-6 bg-pink text-white font-black text-xl rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03] shadow-[0_0_100px_rgba(175,34,107,0.3)]"
          >
            <Download className="w-6 h-6" />
            Download for Windows
          </DownloadButton>
          <a
            href="https://github.com/Mopra/qgn.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-5 border border-border rounded-2xl hover:border-pink/40 transition-all hover:scale-[1.03] font-bold text-lg"
          >
            <Code className="w-5 h-5" />
            View Source
          </a>
        </div>
        <p className="mt-5 text-dim text-sm">
          Free &middot; Open source &middot; Windows 10+ &middot; &lt;100 MB
        </p>
      </div>
    </section>
  );
}

/* ── Shared footer ── */
export function FeatureFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border w-full">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link href="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
            <Link href="/faq" className="text-muted hover:text-foreground transition-colors">FAQ</Link>
            <Link href="/changelog" className="text-muted hover:text-foreground transition-colors">Changelog</Link>
            <a href="https://github.com/Mopra/qgn.app" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">App Source</a>
            <a href="https://github.com/Mopra/qgn.app.website" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">Website Source</a>
          </div>
          <div className="flex items-center gap-x-5 text-xs">
            <Link href="/privacy" className="text-dim hover:text-muted transition-colors">Privacy</Link>
            <Link href="/terms" className="text-dim hover:text-muted transition-colors">Terms</Link>
          </div>
        </div>
        <div className="text-xs text-dim">
          &copy; {new Date().getFullYear()} Quick Gen &middot; MIT License
        </div>
      </div>
    </footer>
  );
}

/* ── Related links sections ── */
export function RelatedFeatures({ current }: { current: string }) {
  const others = FEATURES_NAV.filter((f) => f.href !== current);
  return (
    <section className="px-6 md:px-10 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-dim uppercase tracking-widest mb-8">
          Explore more features
        </h3>
        <div className="flex flex-wrap gap-3">
          {others.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="px-5 py-3 border border-border rounded-xl text-sm text-muted hover:text-foreground hover:border-pink/30 transition-colors"
            >
              {f.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedAlternatives({ current }: { current: string }) {
  const others = ALTERNATIVES_NAV.filter((a) => a.href !== current);
  return (
    <section className="px-6 md:px-10 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-dim uppercase tracking-widest mb-8">
          More alternatives
        </h3>
        <div className="flex flex-wrap gap-3">
          {others.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="px-5 py-3 border border-border rounded-xl text-sm text-muted hover:text-foreground hover:border-pink/30 transition-colors"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedUseCases({ current }: { current: string }) {
  const others = USE_CASES_NAV.filter((u) => u.href !== current);
  return (
    <section className="px-6 md:px-10 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-sm font-bold text-dim uppercase tracking-widest mb-8">
          More use cases
        </h3>
        <div className="flex flex-wrap gap-3">
          {others.map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className="px-5 py-3 border border-border rounded-xl text-sm text-muted hover:text-foreground hover:border-pink/30 transition-colors"
            >
              {u.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
