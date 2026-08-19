'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaStar, FaPlus } from 'react-icons/fa6';

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
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#006a52] transition-all group w-full h-full">
      {/* Product Image Container */}
      <Link href={`/product/${id}`} className="bg-white p-3 flex items-center justify-center relative shrink-0 block">
        {badge ? (
          <span className="bg-[#f97316] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full absolute top-5 left-5 z-10">
            {badge}
          </span>
        ) : null}
        <div className="bg-slate-50/60 w-full aspect-square rounded-xl p-3 flex items-center justify-center border border-slate-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </Link>

      {/* Details Area */}
      <div className="p-4 bg-white flex-1 flex flex-col justify-between pt-1">
        <div>
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wide block truncate">
            {category}
          </span>
          <Link href={`/product/${id}`} className="block">
            <h3 className="font-semibold text-sm text-slate-900 hover:text-[#006a52] line-clamp-2 mt-1 leading-snug min-h-[2.5rem] flex items-start transition-colors">
              {title}
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2">
            <FaStar className="text-amber-500 text-xs shrink-0" />
            <span>{rating} · {weight}</span>
          </div>
        </div>

        {/* Footer Price & Add Button */}
        <div className="flex items-center justify-between mt-4 pt-1 border-t border-slate-50">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-lg text-slate-900 font-taka">{price}</span>
            {oldPrice && (
              <span className="text-xs text-slate-400 line-through font-normal font-taka">
                {oldPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            aria-label="Add to Cart"
            className="w-9 h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center font-semibold text-base transition-colors shadow-sm cursor-pointer shrink-0"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
