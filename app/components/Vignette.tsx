"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wrapper for the animated feature vignettes.
 *
 * The vignettes themselves are static markup plus CSS keyframes, so the only
 * job here is to stop the loops burning compositor time while off screen. CSS
 * defaults to running, so a vignette still animates if this never hydrates.
 *
 * `--cycle` is the loop length every keyframe percentage inside a vignette is
 * measured against; `--freeze` is the fraction of the cycle to hold on for
 * readers who asked for reduced motion.
 */
export function Vignette({
  cycle,
  freeze = 0.66,
  label,
  className = "",
  children,
}: {
  cycle: string;
  freeze?: number;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setIdle(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: React.CSSProperties & Record<string, string | number> = {
    "--cycle": cycle,
    "--freeze": freeze,
  };

  return (
    <div
      ref={ref}
      className={`vg ${className}`}
      style={style}
      data-idle={idle ? "true" : undefined}
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}
