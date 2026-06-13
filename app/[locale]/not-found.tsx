import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 py-24 text-center">
      <span className="font-mono text-sm text-accent">404</span>
      <h1 className="display mt-4 text-4xl text-ink">Page not found</h1>
      <Link
        href="/"
        className="mt-6 rounded-xs bg-accent px-5 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-press"
      >
        Go home
      </Link>
    </section>
  );
}
