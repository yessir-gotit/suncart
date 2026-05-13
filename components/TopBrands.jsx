"use client";

import { Hexagon, Triangle, Circle, Square, ArrowUpRight } from "lucide-react";

const brands = [
  {
    name: "AURA",
    Icon: Hexagon,
  },
  {
    name: "LUMI",
    Icon: Triangle,
  },
  {
    name: "SOLIS",
    Icon: Circle,
  },
  {
    name: "TERRA",
    Icon: Square,
  },
];

export default function TopBrands() {
  return (
    <section className="py-24 bg-base-100 relative max-w-7xl mx-auto px-6 border-t border-base-200/50">
      
      <div className="flex items-end justify-between">
  
        <div>
          <span className="uppercase tracking-[0.3em] text-xs font-bold text-base-content/50">
            Curated Partners
          </span>
          <h2 className="text-4xl font-black mt-2">
            Featured Brands
          </h2>
        </div>

        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-1 font-medium text-base-content/60 hover:text-primary transition-colors"
        >
          Explore All
          <ArrowUpRight size={18} strokeWidth={2} />
        </a>
      </div>

  
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-base-200/50 mt-16 rounded-3xl overflow-hidden border border-base-200/50">
        {brands.map(({ name, Icon }, index) => (
          <div
            key={name}
            className="bg-base-100 aspect-square flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden animate__animated animate__fadeIn"
            style={{ animationDelay: `${index * 150}ms` }}
            onAnimationEnd={(e) => {
              e.currentTarget.classList.remove('animate__animated', 'animate__fadeIn');
            }}
          >
    
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-base-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      
            <ArrowUpRight
              size={20}
              strokeWidth={2}
              className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-primary"
            />

 
            <Icon
              size={40}
              strokeWidth={1.5}
              className="text-base-content/20 group-hover:text-primary transition duration-500 group-hover:-translate-y-2 relative z-10"
            />

            <span className="font-black tracking-widest uppercase mt-4 text-sm text-base-content/40 group-hover:text-base-content transition-all duration-500 group-hover:-translate-y-2 relative z-10">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
