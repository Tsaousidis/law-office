"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

const ICONS = [
  // Αστικό Δίκαιο — scales of justice
  <path
    key="scale"
    d="M12 3v18M5 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6h3M19 7l-3 6a3.5 3.5 0 0 0 7 0l-3-6h3M5 7h14M9 21h6"
  />,
  // Ενοχικό Δίκαιο — document with pen
  <path
    key="contract"
    d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v4h4M9 13h6M9 17h4"
  />,
  // Κληρονομικό Δίκαιο — family tree
  <path
    key="inheritance"
    d="M12 3v4M12 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 11v4M12 15H7v2M12 15h5v2"
  />,
  // Δίκαιο Ακινήτων — house
  <path key="realestate" d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6" />,
  // Οικογενειακό Δίκαιο — heart / people
  <path
    key="family"
    d="M9 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM17 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM3 20c0-3 2.5-5 6-5s6 2 6 5M11 20c0-2.5 2-4.5 5-4.5s5 2 5 4.5"
  />,
];

export function Services() {
  const { dict } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden bg-cream-2 px-6 py-24 lg:px-10">
      <FloatingOrbs
        orbs={[
          { size: 240, top: "0%", left: "85%", tone: "gold" },
          { size: 200, top: "80%", left: "5%", tone: "ink", delay: 2 },
        ]}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {dict.services.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            {dict.services.heading}
          </h2>
          <p className="mt-4 text-base text-charcoal/70">{dict.services.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((item, i) => (
            <Reveal key={item.title} direction="scale" delay={(i % 3) * 0.08}>
              <TiltCard className="group h-full rounded-lg border border-ink/8 bg-cream p-8 transition-shadow duration-300 hover:border-gold/40 hover:shadow-xl hover:shadow-ink/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/5 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gold/15">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold-deep)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[i]}
                  </svg>
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {item.description}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
