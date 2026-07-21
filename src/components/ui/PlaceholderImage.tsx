"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  kenBurns?: boolean;
};

export function PlaceholderImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  kenBurns = false,
}: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink-2 to-ink ${className}`}
    >
      {!errored && (
        <motion.div
          className="absolute inset-0"
          animate={
            kenBurns && !reduceMotion ? { scale: [1, 1.09, 1] } : undefined
          }
          transition={
            kenBurns
              ? { duration: 20, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
            onError={() => setErrored(true)}
          />
        </motion.div>
      )}
    </div>
  );
}
