'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { FaStar, FaPlus, FaBasketShopping } from 'react-icons/fa6';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

export default function HorizontalProductCard({ item }) {
  const { addToCart } = useCart();
  const [isWishlist, setIsWishlist] = useState(false);

  if (!item) return null;

  const {
    id = "1",
    image = "/img/product/product (1).jpeg",
    title = "Product Title",
    category = "CATEGORY",
    price = "৳0",
    oldPrice,
    rating = "4.5",
    weight = "500 g",
    badge,
  } = item;

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
    <div className="bg-white rounded-xl border border-slate-200/90 p-3 sm:p-4 hover:border-[#006a52] hover:shadow-md transition-all group w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 relative">
      {/* Product Image Thumbnail */}
      <Link
        href={`/product/${id}`}
        className="w-full sm:w-36 h-36 sm:h-36 bg-slate-50/70 rounded-lg shrink-0 border border-slate-100 overflow-hidden relative p-2 flex items-center justify-center"
      >
        {badge ? (
          <span className="bg-[#f97316] text-white text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-2 left-2 z-10 shadow-2xs">
            {badge}
          </span>
        ) : null}

        <Image
          src={image}
          alt={title}
          fill
          sizes="144px"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Middle: Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between space-y-1.5">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
            {category}
          </span>
          <Link href={`/product/${id}`}>
            <h3 className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-[#006a52] transition-colors line-clamp-2 leading-snug mt-1">
              {title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium mt-2">
            <div className="flex items-center gap-1 text-amber-500">
              <FaStar className="text-xs" />
              <span className="font-bold text-slate-800">{rating}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-medium">{weight}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 line-clamp-1 hidden sm:block">
          Fresh quality product delivered right to your doorstep with guaranteed freshness.
        </p>
      </div>

      {/* Right: Price & Action Buttons */}
      <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 sm:pl-4 sm:border-l shrink-0 gap-3">
        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsWishlist(!isWishlist);
          }}
          aria-label="Toggle Wishlist"
          className="w-8 h-8 rounded-full bg-slate-50 hover:bg-rose-50 border border-slate-200 shadow-2xs flex items-center justify-center transition-all cursor-pointer group/heart shrink-0"
        >
          {isWishlist ? (
            <RiHeart3Fill className="text-rose-600 text-lg" />
          ) : (
            <RiHeart3Line className="text-slate-400 text-lg group-hover/heart:text-rose-600 transition-colors" />
          )}
        </button>

        {/* Pricing */}
        <div className="text-left sm:text-right font-taka">
          <div className="text-base sm:text-xl font-semibold text-slate-900">{price}</div>
          {oldPrice && (
            <div className="text-xs text-slate-400 line-through font-normal">
              {oldPrice}
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-md bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs shrink-0"
        >
          <FaBasketShopping className="text-xs sm:text-sm" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
