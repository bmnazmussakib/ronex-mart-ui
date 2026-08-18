'use client';

import { useCart } from '@/context/CartContext';
import { FaBasketShopping } from 'react-icons/fa6';

export default function FloatingCartWidget() {
  const { openCart, totalItemsCount, subtotal } = useCart();

  return (
    <div
      onClick={openCart}
      aria-label="View Shopping Cart"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group cursor-pointer select-none"
    >
      <div className="bg-gradient-to-b from-[#0b5d44] via-[#074b37] to-[#043326] text-white p-3 rounded-l-2xl shadow-2xl shadow-emerald-950/40 border-y border-l border-emerald-400/30 flex flex-col items-center gap-2 text-center transition-all duration-300 group-hover:-translate-x-1 group-hover:border-emerald-300/60 group-hover:shadow-emerald-900/50">
        {/* Cart Icon with Item Badge Counter */}
        <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
          <FaBasketShopping className="text-base text-emerald-200 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1.5 -left-1.5 bg-[#f97316] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm border border-white/20">
            {totalItemsCount}
          </span>
        </div>

        {/* Item Label */}
        <div className="flex flex-col items-center leading-none">
          <span className="text-[10px] font-bold tracking-wide uppercase text-emerald-100">
            {totalItemsCount} {totalItemsCount === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {/* Highlighted Price Box */}
        <div className="w-full bg-[#03241b]/80 border border-emerald-500/30 rounded-xl px-2 py-1 flex items-center justify-center shadow-inner">
          <span className="text-xs font-bold text-amber-300 font-taka tracking-tight">
            ৳ {subtotal}
          </span>
        </div>
      </div>
    </div>
  );
}
