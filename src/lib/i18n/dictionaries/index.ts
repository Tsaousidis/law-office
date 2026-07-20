import el from "./el.json";
import en from "./en.json";
import type { Dictionary, Locale } from "../types";

export const dictionaries: Record<Locale, Dictionary> = { el, en };
