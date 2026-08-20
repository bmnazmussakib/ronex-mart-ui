'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

export default function HorizontalProductCard({ item }) {
  if (!item) return null;

  const {
    id = "1",
    image = "/img/product/product (1).jpeg",
    title = "Product Title",
    category = "CATEGORY",
    price = "৳0",
    oldPrice,
    rating = 4.5,
  } = item;

  return (
    <Link
      href={`/product/${id}`}
      className="flex items-center gap-2.5 p-2 rounded-lg border border-slate-200/80 bg-white hover:border-[#006a52] hover:shadow-xs transition-all group w-full h-full"
    >
      {/* Product Image Thumbnail */}
      <div className="w-14 h-14 bg-slate-50 rounded-md shrink-0 border border-slate-100 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="56px"
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wide block truncate">
          {category}
        </span>
        <h4 className="font-semibold text-xs text-slate-800 group-hover:text-[#006a52] line-clamp-1 leading-snug transition-colors mt-0.5">
          {title}
        </h4>

        {/* Rating Stars */}
        <div className="flex items-center gap-0.5 text-amber-400 text-[10px] my-0.5">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-amber-200" />
        </div>

        {/* Price & Old Price */}
        <div className="flex items-center gap-1.5 font-taka">
          <span className="text-xs font-semibold text-slate-900">{price}</span>
          {oldPrice && (
            <span className="text-[10px] text-slate-400 line-through font-normal">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
