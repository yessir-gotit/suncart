"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    headline: "Beat the Heat in Style 🌞",
    subtext: "Discover the coolest summer trends and essentials.",
    cta: "Shop Now",
    href: "/products",
    bg: "bg-gradient-to-r from-orange-500 to-amber-500",
  },
  {
    id: 2,
    headline: "Summer Sale — Up to 50% OFF 🔥",
    subtext: "Limited-time deals on your favorite summer gear.",
    cta: "View Deals",
    href: "/products",
    bg: "bg-gradient-to-r from-teal-600 to-teal-400",
  },
  {
    id: 3,
    headline: "New Arrivals Just Dropped 🏖️",
    subtext: "Fresh styles for the ultimate summer vibe.",
    cta: "Explore Now",
    href: "/products",
    bg: "bg-gradient-to-r from-amber-400 to-yellow-300",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative">

      <div className="carousel w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className={`carousel-item relative w-full min-h-[70vh] ${slide.bg} flex items-center justify-center`}
          >
            <div className="text-center px-6 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white animate__animated animate__fadeInDown">
                {slide.headline}
              </h1>
              <p className="text-lg md:text-xl text-white/80 mt-4 mb-8 animate__animated animate__fadeInUp">
                {slide.subtext}
              </p>
              <Link
                href={slide.href}
                className="btn btn-lg bg-white text-neutral hover:bg-white/90 border-0 animate__animated animate__fadeInUp"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center gap-3 py-4">
        {slides.map((slide, index) => (
          <a
            key={slide.id}
            href={`#slide${slide.id}`}
            onClick={() => setActiveSlide(index)}
            className={`btn btn-xs btn-circle ${
              activeSlide === index ? "btn-primary" : "btn-ghost bg-base-300"
            }`}
          >
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}
