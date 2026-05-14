import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  const { id, name, image, price, rating, category, brand } = product;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-primary text-primary" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(<Star key={i} size={14} className="fill-primary text-primary opacity-50" />);
      } else {
        stars.push(<Star key={i} size={14} className="text-base-300" />);
      }
    }

    return stars;
  };

  return (
    <Link href={`/products/${id}`} className="group flex flex-col gap-4 cursor-pointer outline-none">

      <div className="relative w-full aspect-4/5 bg-base-200 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}

          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />


        <div className="absolute top-4 left-4 bg-base-100/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-base-content shadow-sm z-10">
          {category}
        </div>

        
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

   
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center gap-2 bg-primary text-primary-content px-5 py-2.5 rounded-full font-bold shadow-xl z-10 ">
          
          View Details
        </div>
      </div>


      <div className="flex flex-col gap-1.5">

        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-base-content/50">{brand}</span>
          <div className="flex items-center gap-1">
            {renderStars(rating)}
            <span className="text-xs font-bold text-base-content/60 ml-0.5">{rating}</span>
          </div>
        </div>


        <div className="flex items-center justify-between gap-2">
          <p className="text-lg font-black tracking-tight  text-base-content group-hover:text-primary transition-colors line-clamp-1">{name}</p>
          <ArrowUpRight size={18} className="text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0" />
        </div>


        <p className="text-xl font-bold text-base-content">${price}</p>
      </div>
    </Link>
  );
}
