"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

export function Team() {
  const { dict } = useLanguage();

  return (
    <section id="team" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <FloatingOrbs
        orbs={[{ size: 220, top: "10%", left: "45%", tone: "gold", delay: 1 }]}
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {dict.team.kicker}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            {dict.team.heading}
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-10 sm:grid-cols-2">
          {dict.team.members.map((member, i) => (
            <Reveal
              key={member.name}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.1}
            >
              <div className="group flex flex-col transition-transform duration-500 hover:-translate-y-1">
                <div className="relative">
                  <div className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 shadow-[0_0_0_2px_var(--color-gold)] transition-opacity duration-500 group-hover:opacity-100" />
                  <PlaceholderImage
                    src={member.photo}
                    alt={member.name}
                    kenBurns
                    className="aspect-[3/4] w-full rounded-lg"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                  {member.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
