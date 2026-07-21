"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const match = value.match(/^(\d+)(\D*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const displayRef = useRef<HTMLSpanElement>(null);

  useMotionValueEvent(count, "change", (latest) => {
    if (displayRef.current) {
      displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
    }
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, target, count]);

  return (
    <span ref={ref} className={className}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}
