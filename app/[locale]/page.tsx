import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section, SectionHeading, MonoLabel } from "@/components/Primitives";
import Hero from "@/components/Hero";
import PartnerWall from "@/components/PartnerWall";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import {
  ProjectCard,
  SkillCard,
  ServiceCard,
  TalkItem,
  WritingItem,
} from "@/components/Cards";
import { ArrowIcon } from "@/components/icons";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      <Hero dict={dict} locale={typedLocale} />

      {/* Partner wall */}
      <Section className="!py-16">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <MonoLabel>{dict.partners.eyebrow}</MonoLabel>
            <div className="flex flex-wrap gap-x-8 gap-y-1 font-mono text-[11px] text-ink-soft">
              <span>{dict.partners.stat1}</span>
              <span>{dict.partners.stat2}</span>
            </div>
          </div>
          <div className="mt-6">
            <PartnerWall />
          </div>
        </Reveal>
      </Section>

      {/* Vision band */}
      <section className="bg-bg-invert">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <MonoLabel className="!text-white/50">
              {dict.vision.eyebrow}
            </MonoLabel>
            <p className="display mt-6 text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
              {dict.vision.statement}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={dict.expertise.eyebrow}
            title={dict.expertise.title}
            intro={dict.expertise.intro}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.expertise.items.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 60}>
              <SkillCard name={item.name} desc={item.desc} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <section className="border-y border-line bg-bg-panel">
        <Section>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow={dict.projects.eyebrow}
                title={dict.projects.title}
                intro={dict.projects.intro}
              />
              <Link
                href={`/${typedLocale}/work`}
                className="mono-label inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                {dict.projects.viewAll}
                <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {dict.projects.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      {/* Services */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            intro={dict.services.intro}
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {dict.services.items.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 70}>
              <ServiceCard index={i} name={s.name} desc={s.desc} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Talks + Writing teasers */}
      <section className="border-t border-line bg-bg-panel">
        <Section className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={dict.talks.eyebrow}
              title={dict.talks.title}
            />
            <div className="mt-8">
              {dict.talks.items.slice(0, 3).map((t) => (
                <TalkItem key={t.name} {...t} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow={dict.writing.eyebrow}
              title={dict.writing.title}
            />
            <div className="mt-8">
              {dict.writing.items.map((w) => (
                <WritingItem key={w.name} {...w} soon={dict.writing.soon} />
              ))}
            </div>
          </Reveal>
        </Section>
      </section>

      <CTABand dict={dict} locale={typedLocale} />
    </>
  );
}
