import "server-only";
import type { Locale } from "./i18-config";

type DictionaryFunction = () => Promise<{
  header: {
    home: string;
    monster: string;
  };
  homepage: {
    greetings: string;
  };
}>;

const dictionaries: Record<Locale, DictionaryFunction> = {
  en: () => import("./dictionaries/en.json").then(module => module.default),
  ja: () => import("./dictionaries/ja.json").then(module => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const dictionaryFunction = dictionaries[locale];
  return dictionaryFunction ? dictionaryFunction() : dictionaries.ja();
};