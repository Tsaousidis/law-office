"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

type LogoProps = {
  variant?: "default" | "inverted";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const { dict } = useLanguage();

  const isInverted = variant === "inverted";
  const monogramBg = isInverted ? "bg-gold" : "bg-ink";
  const monogramText = isInverted ? "text-ink" : "text-cream";
  const brandText = isInverted ? "text-cream" : "text-ink";
  const taglineText = isInverted ? "text-gold-light" : "text-gold-deep";

  return (
    <a
      href="#hero"
      className={`group flex items-center gap-3 ${className}`}
      aria-label={dict.nav.brandFull}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm ${monogramBg} font-serif text-lg font-semibold ${monogramText} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
      >
        Π
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-lg font-semibold tracking-tight ${brandText}`}>
          {dict.nav.brand}
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] ${taglineText}`}
        >
          {dict.nav.brandTagline}
        </span>
      </span>
    </a>
  );
}
