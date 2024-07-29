import "server-only";
import type { Locale } from "./i18-config";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then(module => module.default), // Adjusted path
    ja: () => import("./dictionaries/ja.json").then(module => module.default), // Adjusted path
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en() ;
