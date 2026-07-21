"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Logo } from "./Logo";

const NAV_ITEMS = ["about", "services", "team", "contact"] as const;
const SCROLL_THRESHOLD = 60;

export function Navbar() {
  const { locale, setLocale, dict } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-cream/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Logo variant={scrolled ? "default" : "inverted"} />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`group relative text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink/80 hover:text-gold-deep"
                  : "text-cream/85 hover:text-gold-light"
              }`}
            >
              {dict.nav.links[item]}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-gold-deep" : "bg-gold-light"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle locale={locale} onChange={setLocale} scrolled={scrolled} />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              scrolled
                ? "bg-ink text-cream hover:bg-gold hover:text-ink"
                : "bg-gold text-ink hover:bg-gold-light"
            }`}
          >
            {dict.nav.cta}
          </motion.a>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-sm transition-colors md:hidden ${
            scrolled ? "text-ink" : "text-cream"
          }`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-cream-2 hover:text-gold-deep"
            >
              {dict.nav.links[item]}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between gap-4 px-2">
            <LanguageToggle locale={locale} onChange={setLocale} scrolled />
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-gold hover:text-ink"
            >
              {dict.nav.cta}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function LanguageToggle({
  locale,
  onChange,
  scrolled,
}: {
  locale: "el" | "en";
  onChange: (locale: "el" | "en") => void;
  scrolled: boolean;
}) {
  return (
    <div
      className={`flex items-center rounded-full border p-1 text-xs font-semibold transition-colors ${
        scrolled ? "border-ink/15 bg-cream-2/60" : "border-cream/30 bg-cream/10"
      }`}
    >
      {(["el", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-3 py-1.5 uppercase tracking-wide transition-colors ${
            locale === l
              ? "bg-ink text-gold-light"
              : scrolled
                ? "text-ink/60 hover:text-ink"
                : "text-cream/70 hover:text-cream"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}
