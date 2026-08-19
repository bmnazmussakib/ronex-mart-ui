'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaStar, FaPlus } from 'react-icons/fa6';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

export default function ProductCard({
  id = "1",
  image,
  title,
  category,
  rating,
  weight,
  price,
  oldPrice,
  badge,
}) {
  const { addToCart } = useCart();
  const [isWishlist, setIsWishlist] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart({
      id,
      title,
      image,
      price,
      weight,
    });
  };

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#006a52] transition-all group w-full h-full">
      {/* Product Image Container */}
      <Link href={`/product/${id}`} className="bg-white p-2 sm:p-3 flex items-center justify-center relative shrink-0 block">
        {badge ? (
          <span className="bg-[#f97316] text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full absolute top-3 left-3 z-10">
            {badge}
          </span>
        ) : null}

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlist(!isWishlist);
          }}
          aria-label="Toggle Wishlist"
          className="absolute top-3 right-3 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs border border-slate-300/80 shadow-xs flex items-center justify-center transition-all cursor-pointer hover:scale-105 group/heart"
        >
          {isWishlist ? (
            <RiHeart3Fill className="text-red-500 text-base sm:text-lg" />
          ) : (
            <RiHeart3Line className="text-slate-500 text-base sm:text-lg group-hover/heart:text-red-500 transition-colors" />
          )}
        </button>
        <div className="bg-slate-50/60 w-full aspect-square rounded-md sm:rounded-lg p-2 sm:p-3 flex items-center justify-center border border-slate-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Details Area */}
      <div className="p-2.5 sm:p-4 bg-white flex-1 flex flex-col justify-between pt-1">
        <div>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 uppercase tracking-wide block truncate">
            {category}
          </span>
          <Link href={`/product/${id}`} className="block">
            <h3 className="font-semibold text-xs sm:text-sm text-slate-900 hover:text-[#006a52] line-clamp-2 mt-0.5 sm:mt-1 leading-snug min-h-[2rem] sm:min-h-[2.5rem] flex items-start transition-colors">
              {title}
            </h3>
          </Link>
          <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-slate-500 font-medium mt-1 sm:mt-2">
            <FaStar className="text-amber-500 text-[10px] sm:text-xs shrink-0" />
            <span className="truncate">{rating} · {weight}</span>
          </div>
        </div>

        {/* Footer Price & Add Button */}
        <div className="flex items-center justify-between mt-2.5 sm:mt-4 pt-1 sm:pt-2 border-t border-slate-50 gap-1">
          <div className="flex items-baseline gap-1 flex-wrap">
            <span className="font-semibold text-sm sm:text-lg text-slate-900 font-taka">{price}</span>
            {oldPrice && (
              <span className="text-[10px] sm:text-xs text-slate-400 line-through font-normal font-taka">
                {oldPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            aria-label="Add to Cart"
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center font-semibold text-xs sm:text-base transition-colors shadow-sm cursor-pointer shrink-0"
          >
            <FaPlus className="text-[10px] sm:text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
