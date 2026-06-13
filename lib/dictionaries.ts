import "server-only";
import type { Locale } from "./i18n";
import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

const dictionaries = { en, ar };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
