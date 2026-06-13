"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LangToggle from "./LangToggle";
import { MenuIcon, CloseIcon } from "./icons";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home, exact: true },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo locale={locale} name={site.name} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive(l.href, l.exact) ? "text-accent" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle locale={locale} switchLabel={dict.langToggle.switchTo} />
          <Link
            href={`/${locale}/contact`}
            className="rounded-xs bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-press"
          >
            {dict.nav.cta}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <MenuIconClose /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3 text-sm font-medium ${
                  isActive(l.href, l.exact) ? "text-accent" : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center justify-between py-4">
              <LangToggle
                locale={locale}
                switchLabel={dict.langToggle.switchTo}
              />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setOpen(false)}
                className="rounded-xs bg-accent px-4 py-2 text-sm font-semibold text-on-accent"
              >
                {dict.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIconClose() {
  return <CloseIcon />;
}
