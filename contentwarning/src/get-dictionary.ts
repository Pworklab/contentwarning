import "server-only";
import type { Locale } from "./i18-config";
// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types

const dictionaries = {
    en: () => import("./dictionaries/en.json").then(module => module.default), // Adjusted path
    ja: () => import("./dictionaries/ja.json").then(module => module.default), // Adjusted path
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
