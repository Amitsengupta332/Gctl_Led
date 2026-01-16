"use client";

import { useState } from "react";

const slides = [
  {
    image: "/images/PromoSlide/colorprobottombanner.webp",
    title: "Your\nProductivity\nTools for Any\nSituation",
    description:
      "Leveraging software and hardware to build the ideal workspace for you.",
    button: "See Featured Products",
  },
  {
    image: "/images/PromoSlide/Gamingbanner.webp",
    title: "No matter how\nyou game",
    description: "We have the gear for you",
    button: "Find Yours Now",
  },
  {
    image: "/images/PromoSlide/workplacebottombanner.webp",
    title: "Reimagine Your\nSpace",
    description:
      "Create the spaces of your wildest dreams. See how projectors can expand your life through versatile applications inside and outside your home.",
    button: "Read More",
  },
];

export default function PromoSlider() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? slides.length - 1 : index - 1);

  const next = () => setIndex(index === slides.length - 1 ? 0 : index + 1);

  const slide = slides[index];

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* IMAGE (always first) */}
          <div className="relative w-full">
            <img
              src={slide.image}
              alt="Promo"
              className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
            />

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2
                         w-9 h-9 rounded-full bg-white shadow
                         flex items-center justify-center text-xl">
              ‹
            </button>

            {/* Right Arrow (mobile + tablet) */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2
                         w-9 h-9 rounded-full bg-white shadow
                         flex items-center justify-center text-xl lg:hidden">
              ›
            </button>
          </div>

          {/* CONTENT */}
          <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug mb-4 whitespace-pre-line">
              {slide.title}
            </h2>

            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              {slide.description}
            </p>

            <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
              {slide.button}
            </button>
          </div>
        </div>

        {/* Right Arrow (desktop only) */}
        <button
          onClick={next}
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2
                     w-10 h-10 rounded-full bg-white shadow
                     items-center justify-center text-xl">
        ›
        </button>
      </div>
    </section>
  );
}
