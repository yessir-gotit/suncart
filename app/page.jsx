import HeroSlider from "@/components/HeroSlider";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <>

      <HeroSlider />

      {/* Popular Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10">
            🔥 Popular Right Now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      <SummerTips />


      <TopBrands />
    </>
  );
}
