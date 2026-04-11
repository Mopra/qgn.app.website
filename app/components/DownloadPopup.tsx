"use client";

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { Github, Star, MessageSquare, X, Heart, Download } from "lucide-react";

const DOWNLOAD_URL =
  "https://github.com/Mopra/qgn.app/releases/latest/download/QGN-Setup.exe";
const GITHUB_URL = "https://github.com/Mopra/qgn.app";

/**
 * Download button that also triggers a thank-you popup.
 * The <a href> fires the download instantly; the popup appears on top.
 */
export function DownloadButton({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    window.addEventListener("keydown", onKey);
    // Focus the modal when it opens
    modalRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, hide]);

  return (
    <>
      <a
        href={DOWNLOAD_URL}
        className={className}
        onClick={() => setOpen(true)}
      >
        {children}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={hide}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-popup-title"
            tabIndex={-1}
            className="relative w-full max-w-md bg-card border border-border rounded-3xl p-8 md:p-10 shadow-[0_0_120px_rgba(175,34,107,0.15)] animate-in outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={hide}
              className="absolute top-4 right-4 text-dim hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-pink/10 border border-pink/20 mb-6">
              <Heart className="w-7 h-7 text-pink" />
            </div>

            <h3 id="download-popup-title" className="text-2xl font-black tracking-tight mb-2">
              Thanks for downloading!
            </h3>
            <p className="text-muted leading-relaxed mb-8">
              QGN is free and open source &mdash; built with love, no VC money.
              If it saves you time, here are two small ways to help:
            </p>

            <div className="space-y-3">
              {/* Star on GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full px-5 py-4 border border-border rounded-2xl hover:border-yellow-500/40 transition-all hover:bg-yellow-500/[0.04]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/10 shrink-0">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">Star on GitHub</p>
                  <p className="text-muted text-xs">
                    Helps others discover the project
                  </p>
                </div>
                <Github className="w-5 h-5 text-dim group-hover:text-foreground transition-colors ml-auto shrink-0" />
              </a>

              {/* Leave feedback */}
              <a
                href={`${GITHUB_URL}/discussions`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full px-5 py-4 border border-border rounded-2xl hover:border-pink/40 transition-all hover:bg-pink/[0.04]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-pink/10 shrink-0">
                  <MessageSquare className="w-5 h-5 text-pink" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-sm">Leave feedback</p>
                  <p className="text-muted text-xs">
                    Tell us what you think or request a feature
                  </p>
                </div>
              </a>
            </div>

            <button
              onClick={hide}
              className="w-full mt-6 py-3 text-sm text-dim hover:text-muted transition-colors"
            >
              No thanks, just let me use it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
