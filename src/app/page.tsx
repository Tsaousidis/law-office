"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

const SWATCHES = [
  { name: "cream", label: "Cream (bg)", className: "bg-cream border border-ink/10" },
  { name: "cream-2", label: "Cream 2", className: "bg-cream-2 border border-ink/10" },
  { name: "ink", label: "Ink", className: "bg-ink" },
  { name: "ink-2", label: "Ink 2", className: "bg-ink-2" },
  { name: "gold", label: "Gold", className: "bg-gold" },
  { name: "gold-light", label: "Gold Light", className: "bg-gold-light" },
  { name: "gold-deep", label: "Gold Deep", className: "bg-gold-deep" },
];

export default function Home() {
  const { dict } = useLanguage();

  return (
    <>
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center bg-gradient-to-br from-ink via-ink to-ink-2 px-6 pt-20 text-center"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            {dict.nav.brandTagline}
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            {dict.nav.brandFull}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/70">
            {dict.footer.tagline}
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            {dict.nav.cta}
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Design System — Στάδιο 1
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Χρωματική Παλέτα &amp; Τυπογραφία
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SWATCHES.map((s) => (
            <div key={s.name} className="flex flex-col gap-2">
              <div className={`h-16 rounded-md ${s.className}`} />
              <span className="text-xs text-charcoal/70">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-lg bg-cream-2 p-8">
          <h1 className="font-serif text-4xl font-semibold text-ink">
            Aa — Alegreya (serif / headings)
          </h1>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            Δικηγορικό Γραφείο Παπαδόπουλος
          </h2>
          <p className="font-sans text-base text-charcoal">
            Inter (sans / body &amp; UI) — Το γραφείο μας παρέχει ολοκληρωμένη
            νομική υποστήριξη σε υποθέσεις αστικού δικαίου, με έμφαση στη
            διαφάνεια και την προσωπική προσοχή σε κάθε πελάτη.
          </p>
          <p className="font-sans text-sm text-charcoal/70">
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        <p className="mt-10 text-sm text-charcoal/60">
          {dict.placeholder.sectionNotice}
        </p>
      </section>

      <section
        id="services"
        className="mx-auto flex max-w-5xl items-center justify-center px-6 py-24 lg:px-10"
      >
        <p className="text-sm text-charcoal/50">
          {dict.nav.links.services} — {dict.placeholder.sectionNotice}
        </p>
      </section>

      <section
        id="team"
        className="mx-auto flex max-w-5xl items-center justify-center bg-cream-2 px-6 py-24 lg:px-10"
      >
        <p className="text-sm text-charcoal/50">
          {dict.nav.links.team} — {dict.placeholder.sectionNotice}
        </p>
      </section>

      <section
        id="contact"
        className="mx-auto flex max-w-5xl items-center justify-center px-6 py-24 lg:px-10"
      >
        <p className="text-sm text-charcoal/50">
          {dict.nav.links.contact} — {dict.placeholder.sectionNotice}
        </p>
      </section>
    </>
  );
}
