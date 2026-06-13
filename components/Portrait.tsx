"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./Logo";

/**
 * Hero portrait frame. The branded placeholder is always the base layer,
 * so nothing ever flashes a broken image. The photo is layered on top and
 * shown only once it successfully loads. Drop the headshot at
 * public/images/eissa.jpg (jpg/png) — no code change needed.
 */
export default function Portrait({
  src = "/images/eissa.jpg",
  caption,
}: {
  src?: string;
  caption: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Cover the case where the image finished loading before React attached
  // the onLoad handler (hydration race) — check `complete` on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-line bg-bg-panel">
      {/* accent corner ticks */}
      <span className="absolute left-3 top-3 z-20 h-4 w-4 border-l-2 border-t-2 border-accent" />
      <span className="absolute bottom-3 right-3 z-20 h-4 w-4 border-b-2 border-r-2 border-accent" />

      {/* base: branded placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,var(--color-accent-tint),transparent_60%)] text-center">
        <span className="text-accent">
          <LogoMark className="h-12 w-12" />
        </span>
        <p className="mono-label max-w-[14rem]">
          Add headshot → public/images/eissa.jpg
        </p>
      </div>

      {/* photo, shown only when it loads */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={caption}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 z-10 h-full w-full object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
