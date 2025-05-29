// src/lib/i18n.js
import "server-only";

const dictionaries = {
  en: () =>
    import("../locales/en/common.json").then((module) => module.default),
  ar: () =>
    import("../locales/ar/common.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    // Fallback to a default locale (e.g., 'en') or throw an error
    console.warn(`Locale "${locale}" not found. Falling back to 'en'.`);
    return dictionaries.en(); // Fallback to English
    // Or: throw new Error(`Dictionary for locale "${locale}" not found.`);
  }
  return dictionaries[locale]();
};
