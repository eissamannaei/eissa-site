"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LangToggle({
  locale,
  switchLabel,
  className = "",
}: {
  locale: Locale;
  switchLabel: string;
  className?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const next: Locale = locale === "en" ? "ar" : "en";

  function switchTo() {
    // Replace the leading /<locale> segment with the target locale
    let rest = pathname;
    for (const l of locales) {
      if (pathname === `/${l}`) rest = "";
      else if (pathname.startsWith(`/${l}/`)) rest = pathname.slice(l.length + 1);
    }
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(`/${next}${rest}`);
  }

  return (
    <button
      type="button"
      onClick={switchTo}
      className={`mono-label rounded-xs border border-ink/15 px-2.5 py-1.5 transition-colors hover:border-accent hover:text-accent ${className}`}
      aria-label={`Switch language to ${switchLabel}`}
    >
      {switchLabel}
    </button>
  );
}
