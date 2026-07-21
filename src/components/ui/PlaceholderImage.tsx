"use client";

import Image from "next/image";
import { useState } from "react";

type PlaceholderImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export function PlaceholderImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
}: PlaceholderImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-ink-2 to-ink ${className}`}
    >
      {!errored && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}
