import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, dir, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { fontVariables } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL("https://eissaalmannaei.ae"),
    alternates: {
      languages: { en: "/en", ar: "/ar" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale === "ar" ? "ar_AE" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html lang={typedLocale} dir={dir(typedLocale)} className={fontVariables}>
      <head>
        {/* If JS is unavailable, never keep reveal content hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <Header dict={dict} locale={typedLocale} />
        <main id="main">{children}</main>
        <Footer dict={dict} locale={typedLocale} />
      </body>
    </html>
  );
}
