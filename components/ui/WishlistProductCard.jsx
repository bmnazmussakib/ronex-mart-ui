'use client';

import Link from 'next/link';
import { FaTrashCan, FaPlus, FaStar, FaCircleCheck } from 'react-icons/fa6';

export default function WishlistProductCard({ item, onRemove, onAddToCart }) {
  if (!item) return null;

  const {
    id,
    image,
    title,
    category,
    rating,
    reviewsCount,
    price,
    oldPrice,
    discount,
    stock = 'In Stock',
  } = item;

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 hover:border-[#006a52] overflow-hidden flex flex-col justify-between transition-all group shadow-2xs hover:shadow-sm relative w-full h-full">
      {/* Top Discount Badge & Remove Button */}
      <div className="p-2 sm:p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
        {discount ? (
          <span className="bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full font-taka">
            {discount}
          </span>
        ) : (
          <span />
        )}

        <button
          onClick={() => onRemove && onRemove(id)}
          aria-label="Remove from wishlist"
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200/80 flex items-center justify-center text-[10px] sm:text-xs transition-colors cursor-pointer shrink-0"
          title="Remove from wishlist"
        >
          <FaTrashCan className="text-[10px] sm:text-[11px]" />
        </button>
      </div>

      {/* Product Thumbnail & Basic Details */}
      <div className="p-2.5 sm:p-3 md:p-4 flex flex-col items-center text-center space-y-1.5 sm:space-y-2 flex-1">
        <Link
          href={`/product/${id}`}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-lg p-1 sm:p-1.5 flex items-center justify-center overflow-hidden block"
        >
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        <span className="text-[8px] sm:text-[9px] font-semibold text-slate-400 uppercase tracking-wider block truncate">
          {category}
        </span>

        <Link
          href={`/product/${id}`}
          className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#006a52] line-clamp-2 leading-snug transition-colors"
        >
          {title}
        </Link>

        {/* Rating Bar */}
        <div className="flex items-center justify-center gap-1 text-amber-500 text-[10px] sm:text-[11px]">
          <FaStar />
          <span className="font-semibold text-slate-700">{rating}</span>
          {reviewsCount && (
            <span className="text-slate-400 text-[9px] sm:text-[10px]">({reviewsCount})</span>
          )}
        </div>

        {/* Stock Indicator */}
        <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-200/60">
          <FaCircleCheck className="text-[8px] sm:text-[9px] text-emerald-600" />
          {stock}
        </span>
      </div>

      {/* Bottom Footer: Side-by-Side (Pashapashi) Prices & Plus Button */}
      <div className="p-2 sm:p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-baseline gap-1.5 flex-wrap font-taka min-w-0">
          <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900">
            {price}
          </span>
          {oldPrice && (
            <span className="text-[10px] sm:text-xs text-slate-400 line-through">
              {oldPrice}
            </span>
          )}
        </div>

        <button
          onClick={() => onAddToCart && onAddToCart(item)}
          aria-label="Add to cart"
          title="Add to Cart"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center text-[10px] sm:text-xs transition-colors shadow-2xs cursor-pointer shrink-0"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
