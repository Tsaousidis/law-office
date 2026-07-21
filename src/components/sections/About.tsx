"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal>
          <PlaceholderImage
            src={dict.about.image}
            alt=""
            className="aspect-[4/5] w-full rounded-lg"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {dict.about.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            {dict.about.heading}
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {dict.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-charcoal/80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {dict.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-semibold text-gold-deep sm:text-4xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
