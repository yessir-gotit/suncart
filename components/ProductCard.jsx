import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { id, name, image, price, rating, category, brand } = product;

 
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-accent text-accent" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(<Star key={i} size={14} className="fill-accent text-accent opacity-50" />);
      } else {
        stars.push(<Star key={i} size={14} className="text-base-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
          className="object-cover h-48 w-full"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2">
          <span className="badge badge-secondary badge-outline">{category}</span>
          <span className="text-xs text-base-content/60">{brand}</span>
        </div>
        <h3 className="card-title text-base">{name}</h3>
        <div className="flex items-center gap-1">
          {renderStars(rating)}
          <span className="text-xs text-base-content/60 ml-1">({rating})</span>
        </div>
        <p className="text-primary font-bold text-lg">${price}</p>
        <Link href={`/products/${id}`} className="btn btn-primary btn-sm w-full">
          View Details
        </Link>
      </div>
    </div>
  );
}
