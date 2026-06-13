import Link from "next/link";
import type { Locale } from "@/lib/i18n";

/**
 * Custom brand mark — "agent hub" glyph.
 * A core node orchestrating satellite nodes + a prompt caret:
 * a compact symbol for agentic AI and prompt-driven building.
 * Pure SVG, uses currentColor so it inherits the accent.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* connections */}
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="16" y1="16" x2="6.5" y2="7.5" />
        <line x1="16" y1="16" x2="25.5" y2="9" />
        <line x1="16" y1="16" x2="16" y2="26.5" />
      </g>
      {/* satellite nodes */}
      <g fill="currentColor">
        <circle cx="6.5" cy="7.5" r="2.4" />
        <circle cx="25.5" cy="9" r="2.4" />
        <circle cx="16" cy="26.5" r="2.4" />
      </g>
      {/* core node */}
      <circle cx="16" cy="16" r="4.2" fill="currentColor" />
      <circle cx="16" cy="16" r="1.7" fill="var(--color-bg, #fff)" />
    </svg>
  );
}

export default function Logo({
  locale,
  name,
}: {
  locale: Locale;
  name: string;
}) {
  return (
    <Link
      href={`/${locale}`}
      className="group inline-flex items-center gap-2.5"
      aria-label={name}
    >
      <span className="text-accent transition-transform duration-300 group-hover:rotate-[30deg]">
        <LogoMark className="h-7 w-7" />
      </span>
      <span className="font-display text-[15px] font-bold tracking-tight text-ink">
        {name}
      </span>
    </Link>
  );
}
