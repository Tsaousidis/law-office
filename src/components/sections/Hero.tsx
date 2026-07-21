"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { dict } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 text-center"
    >
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <PlaceholderImage
          src={dict.hero.image}
          alt=""
          kenBurns
          className="h-[120%] w-full"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/95 via-ink/90 to-ink-2/90" />
      <FloatingOrbs
        className="-z-10"
        orbs={[
          { size: 260, top: "10%", left: "8%", tone: "gold" },
          { size: 200, top: "60%", left: "78%", tone: "gold", delay: 2 },
          { size: 180, top: "75%", left: "15%", tone: "ink", delay: 1 },
        ]}
      />

      <motion.div
        className="max-w-3xl"
        style={{ opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light"
        >
          {dict.nav.brandTagline}
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 font-serif text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl"
        >
          {dict.nav.brandFull}
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70"
        >
          {dict.hero.tagline}
        </motion.p>
        <motion.a
          variants={item}
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink shadow-lg shadow-gold/20"
        >
          {dict.nav.cta}
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60"
        style={{ opacity: contentOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
