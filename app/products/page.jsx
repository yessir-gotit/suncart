"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, XCircle } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Beach Accessories", "Footwear"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        <span className="uppercase tracking-[0.3em] text-xs font-bold text-primary mb-4 block">
          Summer 2024
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          The Collection
        </h1>


        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center mt-16 mb-12 border-b border-base-content/10 pb-8">

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary border-primary text-primary-content shadow-md"
                    : "bg-base-200/50 border-base-content/10 text-base-content/60 hover:border-primary/50 hover:text-base-content"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search the collection..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-base-200/50 border border-base-content/10 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-base-content/30 text-base-content"
            />
          </div>
        </div>

        {/* Product Count */}
        <p className="text-sm font-medium tracking-widest uppercase text-base-content/40 mb-8">
          SHOWING {filteredProducts.length} ITEM{filteredProducts.length !== 1 ? "S" : ""}
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (

          /* Empty result */
          <div className="col-span-full py-24 flex flex-col items-center justify-center text-center animate__animated animate__fadeIn">
            <XCircle size={48} className="text-base-content/20 mb-6" />
            <h2 className="text-2xl font-black tracking-tight text-base-content font-body">
              No pieces found
            </h2>
            <p className="text-base-content/40 mt-2 text-sm">
              Try adjusting your search or filter to discover more.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="btn btn-outline btn-primary mt-6 rounded-full px-8"
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
