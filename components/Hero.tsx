import Button from "./Button";
import Portrait from "./Portrait";
import { ArrowIcon } from "./icons";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 0%, black, transparent 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="mono-label">
            <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent" />
            {dict.hero.eyebrow}
          </span>
          <h1 className="display mt-6 text-4xl text-ink sm:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {dict.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`/${locale}/contact`} variant="primary">
              {dict.hero.ctaPrimary}
              <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
            </Button>
            <Button href={`/${locale}/work`} variant="secondary">
              {dict.hero.ctaSecondary}
            </Button>
          </div>
          <p className="mono-label mt-8" style={{ letterSpacing: undefined }}>
            <span className="inline-block h-2 w-2 animate-pulse rounded-pill bg-accent" />
            {dict.hero.available}
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <Portrait caption={dict.about.title} />
        </div>
      </div>
    </section>
  );
}
