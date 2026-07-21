"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  const { dict } = useLanguage();

  return (
    <section id="team" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl">
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
            <Reveal key={member.name} delay={i * 0.1} className="group flex flex-col">
              <PlaceholderImage
                src={member.photo}
                alt={member.name}
                className="aspect-[3/4] w-full rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-deep">
                {member.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                {member.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
