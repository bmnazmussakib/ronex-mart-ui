'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { FaStar, FaPlus } from 'react-icons/fa6';

export default function CompactRelatedProductCard({ item }) {
  const { addToCart } = useCart();

  if (!item) return null;

  const {
    id = "1",
    image = "/img/product/product (1).jpeg",
    title = "Product Title",
    category = "CATEGORY",
    price = "৳0",
    oldPrice,
    rating = 4.5,
    weight,
  } = item;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      title,
      image,
      price,
      weight,
    });
  };

  return (
    <div className="flex items-center justify-between gap-2.5 p-2 rounded-lg border border-slate-200/80 bg-white hover:border-[#006a52] hover:shadow-2xs transition-all group w-full h-full relative">
      {/* Product Link wrapper */}
      <Link
        href={`/product/${id}`}
        className="flex items-center gap-2.5 flex-1 min-w-0"
      >
        {/* Thumbnail */}
        <div className="w-14 h-14 bg-slate-50 rounded-md shrink-0 border border-slate-100 overflow-hidden relative p-1">
          <Image
            src={image}
            alt={title}
            fill
            sizes="56px"
            className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block truncate">
            {category}
          </span>
          <h4 className="font-semibold text-[13px] text-slate-800 group-hover:text-[#006a52] line-clamp-1 leading-snug transition-colors mt-0.5">
            {title}
          </h4>

          {/* Rating Stars */}
          <div className="flex items-center gap-0.5 text-amber-400 text-[11px] my-0.5">
            <FaStar />
            <span className="text-[11px] text-slate-600 font-bold ml-1">{rating}</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-1.5 font-taka">
            <span className="text-sm font-semibold text-slate-900">{price}</span>
            {oldPrice && (
              <span className="text-xs text-slate-400 line-through font-normal">
                {oldPrice}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Action Button: Add to Cart */}
      <button
        type="button"
        onClick={handleAdd}
        aria-label="Add to Cart"
        className="w-7 h-7 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-2xs"
      >
        <FaPlus className="text-[10px]" />
      </button>
    </div>
  );
}
