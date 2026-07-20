import type el from "./dictionaries/el.json";

export type Locale = "el" | "en";

export type Dictionary = typeof el;

export const locales: Locale[] = ["el", "en"];

export const defaultLocale: Locale = "el";
