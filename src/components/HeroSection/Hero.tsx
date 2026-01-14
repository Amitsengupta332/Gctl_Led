"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/Tripod-Turnstile-Gate.webp",
  "/images/Full-Height-Turnstile-Gate.webp",
  "/images/X-Ray-Baggage-Scanner.webp",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px]
      "
    >
      {/* Responsive Image */}
      <Image
        src={images[index]}
        alt="Hero image"
        fill
        priority
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 100vw,
          100vw
        "
        className="object-cover object-center"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="
          absolute left-3 sm:left-4 md:left-6
          top-1/2 -translate-y-1/2 z-20
          bg-white/80 hover:bg-white
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
          rounded-full flex items-center justify-center
          text-lg md:text-xl
        "
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="
          absolute right-3 sm:right-4 md:right-6
          top-1/2 -translate-y-1/2 z-20
          bg-white/80 hover:bg-white
          w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
          rounded-full flex items-center justify-center
          text-lg md:text-xl
        "
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}
