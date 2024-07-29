import "server-only";
import type { Locale } from "./i18-config";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then(module => module.default),
    ja: () => import("./dictionaries/ja.json").then(module => module.default), 
};

export const getDictionary = async (locale: Locale) => {
  const dictionaryFunction = dictionaries[locale as keyof typeof dictionaries];
  return dictionaryFunction ? dictionaryFunction() : dictionaries.ja();
};