"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Star, ArrowLeft } from "lucide-react";
import products from "@/data/products.json";
// replace <img> with <Image> :)
// TODO: adjust auth import path based on actual BetterAuth setup
// import { useSession } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  // TODO: Uncomment for auth protection
  // const { data: session, isPending } = useSession();
  // const router = useRouter();
  // useEffect(() => {
  //   if (!isPending && !session) router.push("/login");
  // }, [session, isPending]);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Product not found</h2>
          <p className="text-base-content/60 mb-4">The product you{"'"}re looking for doesn{"'"}t exist.</p>
          <Link href="/products" className="btn btn-primary">
            &larr; Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={18} className="fill-accent text-accent" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(<Star key={i} size={18} className="fill-accent text-accent opacity-50" />);
      } else {
        stars.push(<Star key={i} size={18} className="text-base-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <Link
        href="/products"
        className="btn btn-ghost btn-sm gap-2 mb-6"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-box overflow-hidden shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>


        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-black">
            {product.name}
          </h1>

          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-secondary badge-outline">{product.category}</span>
            <span className="badge badge-primary badge-outline">{product.brand}</span>
          </div>

          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
            <span className="text-sm text-base-content/60 ml-1">({product.rating})</span>
          </div>


          <p className="text-3xl font-bold text-primary">
            ${product.price}
          </p>


          <div className="flex items-center gap-2">
            <div className={`badge ${product.stock > 0 ? "badge-success" : "badge-error"}`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
            </div>
          </div>


          <p className="text-base-content/70 leading-relaxed">
            {product.description}
          </p>

          <button className="btn btn-primary btn-wide mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
