import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section, MonoLabel } from "@/components/Primitives";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import {
  MailIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons";

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);
  const c = dict.contact;

  const methods = [
    { href: `mailto:${site.email}`, label: c.emailLabel, Icon: MailIcon },
    { href: site.social.instagram, label: c.instagramLabel, Icon: InstagramIcon },
    { href: site.social.linkedin, label: c.linkedinLabel, Icon: LinkedinIcon },
    { href: site.social.whatsapp, label: c.whatsappLabel, Icon: WhatsappIcon },
  ];

  return (
    <Section className="grid gap-14 lg:grid-cols-2 lg:items-start">
      <div>
        <MonoLabel>{c.eyebrow}</MonoLabel>
        <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">{c.title}</h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
          {c.lead}
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {methods.map((m) => (
            <li key={m.label}>
              <a
                href={m.href}
                target={m.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={m.label}
                title={m.label}
                className="group flex h-[68px] w-[68px] items-center justify-center rounded-sm border border-accent/30 bg-accent-tint text-accent shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-on-accent hover:shadow-md"
              >
                <m.Icon className="h-7 w-7" strokeWidth={1.9} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-sm border border-line bg-bg-panel p-6 sm:p-8">
        <ContactForm dict={c} />
      </div>
    </Section>
  );
}
