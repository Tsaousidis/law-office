"use client";

import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  size: number;
  top: string;
  left: string;
  tone?: "gold" | "ink";
  delay?: number;
};

export function FloatingOrbs({
  orbs,
  className = "",
}: {
  orbs: Orb[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${
            orb.tone === "ink" ? "bg-ink-2/25" : "bg-gold/20"
          }`}
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left }}
          animate={
            reduceMotion ? undefined : { y: [0, -26, 0], x: [0, 18, 0] }
          }
          transition={{
            duration: 13 + i * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay ?? 0,
          }}
        />
      ))}
    </div>
  );
}
