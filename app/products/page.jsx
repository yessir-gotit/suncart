"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Beach Accessories", "Footwear"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
        All Summer Products
      </h1>


      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>


      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`btn btn-sm ${
              activeCategory === category ? "btn-primary" : "btn-ghost"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product count */}
      <p className="text-sm text-base-content/60 mb-4">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {/* Products grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-base-content/50">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
