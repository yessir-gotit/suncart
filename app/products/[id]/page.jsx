"use client";
import NotFound from "@/app/not-found";
import { useParams } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Star, ArrowLeft, ShoppingBag, Check, X } from "lucide-react";
import products from "@/data/products.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "@/app/loading";
export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);


  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <NotFound/>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={18} className="fill-accent text-accent" />);
      } else if (i === fullStars && halfStars) {
        stars.push(<Star key={i} size={18} className="fill-accent text-accent opacity-50" />);
      } else {
        stars.push(<Star key={i} size={18} className="text-base-300" />);
      }
    }

    return stars;
  };
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace(`/login?redirect=${encodeURIComponent(window.location.pathname)}`);

    }
  }, [session, isPending, router]);

  if (isPending) {
    return <Loading />;
  }
  if (!session) {
    return null; 
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-12 animate__animated animate__fadeIn">
      
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-base-content/50 hover:text-primary transition-colors group mb-12"
      >
        <ArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to Collection
      </Link>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

        <div className="lg:col-span-7">
          <div className="sticky top-24">
            <div className="relative w-full aspect-3/4 md:aspect-square lg:aspect-4/5 bg-base-200 rounded-3xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                
                
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          {/* Category */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full border border-base-content/10 text-xs font-bold tracking-widest uppercase text-base-content/60">
              {product.category}
            </span>
            <span className="px-3 py-1 rounded-full border border-base-content/10 text-xs font-bold tracking-widest uppercase text-base-content/60">
              {product.brand}
            </span>
          </div>

          {/* Product Name */}
          <p className="text-3xl md:text-4xl font-black tracking-tighter text-base-content mt-6 leading-tight">
            {product.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm font-bold text-base-content/60">
              {product.rating}
            </span>
          </div>

          {/* Price and Stock */}
          <div className="flex items-end justify-between mt-8 pb-8 border-b border-base-content/10">
            <span className="text-4xl font-black text-primary">
              ${product.price}
            </span>
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inset-0 rounded-full bg-success shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-base-content/60">
                    In Stock
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-error shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  <span className="text-xs font-bold tracking-widest uppercase text-base-content/60">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-base-content/70 leading-relaxed text-lg mt-8 font-light">
            {product.description}
          </p>

          {/* Add to Cart button though it wasn't necessary on assignment but nvm */}
          <button className="btn btn-primary w-full h-16 rounded-full text-lg mt-12 shadow-xl hover:shadow-primary/30 group hover:-translate-y-1 transition-all duration-300">
            <ShoppingBag
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            Add to Cart
          </button>
          
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
}
