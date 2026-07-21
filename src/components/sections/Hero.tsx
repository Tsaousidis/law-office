"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function Hero() {
  const { dict } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <PlaceholderImage src={dict.hero.image} alt="" className="h-[120%] w-full" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/95 via-ink/90 to-ink-2/90" />

      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
          {dict.nav.brandTagline}
        </p>
        <h1 className="mt-6 font-serif text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
          {dict.nav.brandFull}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          {dict.hero.tagline}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
        >
          {dict.nav.cta}
        </a>
      </motion.div>
    </section>
  );
}
