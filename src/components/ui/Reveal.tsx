"use client";

import { motion } from "framer-motion";

type Direction = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  left: { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  scale: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const offset = OFFSET[direction];
  const initial =
    direction === "scale"
      ? { opacity: 0, scale: 0.9 }
      : { opacity: 0, x: offset.x, y: offset.y };
  const show =
    direction === "scale"
      ? { opacity: 1, scale: 1 }
      : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={show}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
