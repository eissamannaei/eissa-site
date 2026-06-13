import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { Section, SectionHeading, MonoLabel } from "@/components/Primitives";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { ProjectCard, TalkItem, WritingItem } from "@/components/Cards";

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <>
      {/* Page header */}
      <section className="border-b border-line">
        <Section className="!pb-12">
          <MonoLabel>{dict.nav.work}</MonoLabel>
          <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">
            {dict.projects.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            {dict.projects.intro}
          </p>
        </Section>
      </section>

      {/* Projects */}
      <Section id="projects">
        <div className="grid gap-4 md:grid-cols-3">
          {dict.projects.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Talks */}
      <section id="talks" className="border-t border-line bg-bg-panel">
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow={dict.talks.eyebrow}
              title={dict.talks.title}
              intro={dict.talks.intro}
            />
          </Reveal>
          <div className="mt-10">
            {dict.talks.items.map((t) => (
              <TalkItem key={t.name} {...t} />
            ))}
          </div>
        </Section>
      </section>

      {/* Writing */}
      <Section id="writing">
        <Reveal>
          <SectionHeading
            eyebrow={dict.writing.eyebrow}
            title={dict.writing.title}
            intro={dict.writing.intro}
          />
        </Reveal>
        <div className="mt-10 max-w-3xl">
          {dict.writing.items.map((w) => (
            <WritingItem key={w.name} {...w} soon={dict.writing.soon} />
          ))}
        </div>
      </Section>

      <CTABand dict={dict} locale={typedLocale} />
    </>
  );
}
