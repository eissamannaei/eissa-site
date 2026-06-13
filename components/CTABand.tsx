import Button from "./Button";
import { ArrowIcon } from "./icons";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function CTABand({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="bg-bg-invert">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="display text-3xl text-white sm:text-4xl">
            {dict.ctaBand.title}
          </h2>
          <p className="mt-4 text-base text-white/70">{dict.ctaBand.subtitle}</p>
        </div>
        <Button
          href={`/${locale}/contact`}
          variant="primary"
          className="shrink-0"
        >
          {dict.ctaBand.button}
          <ArrowIcon className="h-4 w-4 rtl:-scale-x-100" />
        </Button>
      </div>
    </section>
  );
}
