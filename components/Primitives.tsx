import type { ReactNode } from "react";

/** Mono "eyebrow" label — the signature 100x accent. */
export function MonoLabel({
  children,
  className = "",
  withTick = true,
}: {
  children: ReactNode;
  className?: string;
  withTick?: boolean;
}) {
  return (
    <span className={`mono-label inline-flex items-center gap-2 ${className}`}>
      {withTick && (
        <span className="inline-block h-1.5 w-1.5 rounded-pill bg-accent" />
      )}
      {children}
    </span>
  );
}

/** Section heading block: eyebrow + title + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <MonoLabel>{eyebrow}</MonoLabel>
      <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base text-ink-soft">{intro}</p>}
    </div>
  );
}

/** Page section wrapper with consistent rhythm. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
