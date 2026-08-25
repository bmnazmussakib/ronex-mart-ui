'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { FaStar, FaPlus, FaClipboardList } from 'react-icons/fa6';
import { RiHeart3Line, RiHeart3Fill, RiEyeLine } from 'react-icons/ri';
import ProductQuickViewModal from './ProductQuickViewModal';
import MobileProductQuickViewDrawer from './MobileProductQuickViewDrawer';


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
  const [isQuoted, setIsQuoted] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsQuickViewOpen(true);
  };


  const handleQuote = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsQuoted(!isQuoted);
  };

  return (
    <>
      <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200/90 overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#006a52] transition-all group w-full h-full">
        {/* Product Image Container */}
        <Link href={`/product/${id}`} className="bg-white p-2 sm:p-3 flex items-center justify-center relative shrink-0 block">
          {badge ? (
            <span className="bg-[#f97316] text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full absolute top-3 left-3 z-10">
              {badge}
            </span>
          ) : null}

          {/* Action Overlay: Wishlist & Quick View */}
          <div className="absolute top-3 right-3 z-10 flex flex-col gap-1.5 pointer-events-none group-hover:pointer-events-auto">
            {/* Wishlist Button (First to appear) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsWishlist(!isWishlist);
              }}
              aria-label="Toggle Wishlist"
              title="Wishlist"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs border border-slate-300/80 shadow-xs flex items-center justify-center cursor-pointer hover:scale-105 group/heart opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75 ease-out"
            >
              {isWishlist ? (
                <RiHeart3Fill className="text-red-500 text-base sm:text-lg" />
              ) : (
                <RiHeart3Line className="text-slate-500 text-base sm:text-lg group-hover/heart:text-red-500 transition-colors" />
              )}
            </button>

            {/* Quick View Eye Button (Second to appear after delay) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsQuickViewOpen(true);
              }}
              aria-label="Quick View"
              title="Quick View"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-xs border border-slate-300/80 shadow-xs flex items-center justify-center cursor-pointer hover:scale-105 group/eye opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150 ease-out"
            >
              <RiEyeLine className="text-slate-500 text-base sm:text-lg group-hover/eye:text-[#006a52] transition-colors" />
            </button>
          </div>


          <div className="bg-slate-50/60 w-full aspect-square rounded-md sm:rounded-lg flex items-center justify-center border border-slate-100 overflow-hidden relative">
            <Image
              src={image || "/img/product/product (1).jpeg"}
              alt={title || "Product Image"}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-contain p-2 sm:p-3 group-hover:scale-105 transition-transform duration-300"
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
              <h3 className="font-medium text-xs sm:text-sm lg:text-base text-slate-900 hover:text-[#006a52] line-clamp-2 mt-0.5 sm:mt-1 leading-snug flex items-start transition-colors">
                {title}
              </h3>
            </Link>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-slate-500 font-medium mt-1 sm:mt-2">
              <FaStar className="text-amber-500 text-[10px] sm:text-xs shrink-0" />
              <span className="truncate">{rating} · {weight}</span>
            </div>
          </div>

          {/* Footer Price & Action Buttons */}
          <div className="flex items-center justify-between pt-1 sm:pt-2 border-t border-slate-50 gap-1">
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="font-semibold text-sm sm:text-lg text-slate-900 font-taka">{price}</span>
              {oldPrice && (
                <span className="text-[10px] sm:text-xs text-slate-400 line-through font-normal font-taka">
                  {oldPrice}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {/* Add to Cart Button */}
              <button
                onClick={handleAdd}
                aria-label="Add to Cart"
                title="Add to Cart"
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center font-semibold text-xs sm:text-base transition-colors shadow-xs cursor-pointer shrink-0"
              >
                <FaPlus className="text-[10px] sm:text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Components (Desktop & Mobile) */}
      <ProductQuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={{
          id,
          image,
          title,
          category,
          rating,
          weight,
          price,
          oldPrice,
          badge,
        }}
      />

      <MobileProductQuickViewDrawer
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={{
          id,
          image,
          title,
          category,
          rating,
          weight,
          price,
          oldPrice,
          badge,
        }}
      />
    </>
  );
}


