"use client";

import { useState } from "react";

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
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                   bg-white/70 hover:bg-white w-10 h-10 rounded-full
                   flex items-center justify-center text-xl">
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                   bg-white/70 hover:bg-white w-10 h-10 rounded-full
                   flex items-center justify-center text-xl">
        ›
      </button>
    </section>
  );
}
