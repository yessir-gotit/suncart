"use client";

import Link from "next/link";
import products from "@/data/products.json";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";



export default function PopularProducts() {

  const itemsToShow = products.slice(0, 3);

  return (
    <section className="py-24 bg-base-100 max-w-7xl mx-auto px-6">
      
  
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <div>
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-primary mb-2 block">
            Trending Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Summer Essentials</h2>
        </div>

        {/* CTA buttons*/}
        <Link
          href="/products"
          className="hidden md:inline-flex btn btn-outline btn-primary rounded-full px-8 gap-3 hover:bg-primary hover:text-white transition-all duration-300"
        >
          Shop All Collection
          <ArrowRight size={20} strokeWidth={2.5} />
        </Link>
      </div>

      {/* I'll check it if I could apply slider typa thing on mobile :) if I have time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {itemsToShow.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className="group"
          >
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              
              {/* Image Container */}
              <div className="relative aspect-4/5 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                
                />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                  {item.name}
                </h3>

                <div className="flex items-center gap-1 mt-2 mb-4">
                  <Star size={14} className="fill-orange-400 text-orange-400" />
                  <span className="text-xs font-semibold opacity-60">
                    {item.rating} / 5.0
                  </span>
                </div>

                <div className="flex items-center justify-between">
                   <p className="text-2xl font-black text-black">
                    ${item.price}
                  </p>
                  
                  {/* Small circle button just for visual flair */}
                  <div className="h-10 w-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile only button, moved it down here so it's easier to tap  */}
      <div className="mt-10 flex md:hidden">
        <Link
          href="/products"
          className="btn btn-primary w-full h-14 rounded-2xl gap-2 font-bold"
        >
          View All Products
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}