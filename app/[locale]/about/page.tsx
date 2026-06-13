import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section, MonoLabel } from "@/components/Primitives";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";

export default async function AboutPage({
  params,
}: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      <Section className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-24">
          <Portrait caption={dict.about.title} />
        </Reveal>

        <div>
          <MonoLabel>{dict.about.eyebrow}</MonoLabel>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">
            {dict.about.title}
          </h1>
          <p className="mono-label mt-3" style={{ color: "var(--color-accent)" }}>
            {dict.about.role}
          </p>
          <p className="mt-6 text-xl leading-relaxed text-ink">
            {dict.about.lead}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-soft">
            {dict.about.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Focus areas */}
          <div className="mt-10">
            <MonoLabel>{dict.about.focusTitle}</MonoLabel>
            <ul className="mt-5 flex flex-wrap gap-2">
              {dict.expertise.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xs border border-line bg-bg-panel px-3 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Speaking */}
          <div className="mt-10 rounded-sm border border-line bg-bg-panel p-6">
            <MonoLabel>{dict.about.speakingTitle}</MonoLabel>
            <p className="mt-4 text-base leading-relaxed text-ink">
              {dict.about.speakingDesc}
            </p>
          </div>
        </div>
      </Section>

      <CTABand dict={dict} locale={typedLocale} />
    </>
  );
}
