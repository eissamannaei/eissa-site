import Link from "next/link";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";
import { MailIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const year = 2026;
  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/work`, label: dict.nav.work },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];
  const socials = [
    { href: `mailto:${site.email}`, label: dict.contact.emailLabel, Icon: MailIcon },
    { href: site.social.instagram, label: dict.contact.instagramLabel, Icon: InstagramIcon },
    { href: site.social.linkedin, label: dict.contact.linkedinLabel, Icon: LinkedinIcon },
    { href: site.social.whatsapp, label: dict.contact.whatsappLabel, Icon: WhatsappIcon },
  ];

  return (
    <footer className="border-t border-line bg-bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5 text-accent">
            <LogoMark className="h-7 w-7" />
            <span className="font-display text-[15px] font-bold text-ink">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <p className="mono-label">{dict.footer.navTitle}</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono-label">{dict.footer.connectTitle}</p>
          <ul className="mt-4 space-y-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  <s.Icon className="h-[18px] w-[18px]" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-ink-soft sm:flex-row sm:px-8">
          <p>
            © {year} {site.name}. {dict.footer.rights}
          </p>
          <p className="mono-label" style={{ letterSpacing: undefined }}>
            {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
