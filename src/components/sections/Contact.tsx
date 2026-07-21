"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="bg-cream-2 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {dict.contact.kicker}
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          {dict.contact.heading}
        </h2>
        <p className="mt-6 text-sm text-charcoal/50">{dict.contact.comingSoon}</p>
      </div>
    </section>
  );
}
