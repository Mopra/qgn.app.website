"use client";

import { useEffect, useState, type ReactNode } from "react";

type OS = "windows" | "mac" | "linux" | "mobile" | "unknown";

function detectOS(): OS {
  const ua = navigator.userAgent.toLowerCase();
  if (/android|iphone|ipad|ipod|mobile/i.test(ua)) return "mobile";
  if (ua.includes("mac")) return "mac";
  if (ua.includes("linux")) return "linux";
  if (ua.includes("win")) return "windows";
  return "unknown";
}

const DOWNLOAD_URL =
  "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe";
const GITHUB_URL = "https://github.com/Mopra/qgn.app";

/**
 * Shows download CTA on Windows, or a "not available yet" message on other platforms.
 * Falls back to the Windows download button during SSR / before hydration.
 */
export function SmartDownloadHero({
  downloadButton,
}: {
  downloadButton: ReactNode;
}) {
  const [os, setOS] = useState<OS>("windows");

  useEffect(() => {
    setOS(detectOS());
  }, []);

  if (os === "windows" || os === "unknown") {
    return <>{downloadButton}</>;
  }

  const label = os === "mac" ? "macOS" : os === "linux" ? "Linux" : "desktop";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3 px-6 py-4 border border-border rounded-2xl bg-card max-w-md">
        <span className="text-foreground font-bold text-sm">
          {os === "mobile"
            ? "QGN is a desktop app for Windows."
            : `${label} support is on the roadmap.`}
        </span>
        <p className="text-muted text-sm leading-relaxed">
          {os === "mobile"
            ? "Visit this page from your Windows PC to download, or star the repo to save it for later."
            : "Star the repo to get notified when it ships."}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-6 py-4 bg-pink text-white font-black text-base rounded-2xl hover:bg-pink-light transition-all hover:scale-[1.03]"
        >
          Star on GitHub
        </a>
        {os !== "mobile" && (
          <a
            href={DOWNLOAD_URL}
            className="text-muted text-sm hover:text-foreground transition-colors underline underline-offset-4"
          >
            Download anyway (Windows .exe)
          </a>
        )}
      </div>
    </div>
  );
}
