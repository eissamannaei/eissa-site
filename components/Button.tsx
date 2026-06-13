import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xs px-5 py-3 text-sm font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-on-accent hover:bg-accent-press",
  secondary:
    "border border-ink/15 bg-bg text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

export default function Button({
  variant = "primary",
  className = "",
  href,
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
