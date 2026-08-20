'use client';

import { useCart } from '@/context/CartContext';
import { FaCartPlus } from 'react-icons/fa6';

export default function FloatingCartWidget() {
  const { openCart, totalItemsCount, subtotal } = useCart();

  return (
    <div
      onClick={openCart}
      aria-label="View Shopping Cart"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 group cursor-pointer select-none"
    >
      <div className="bg-white rounded-l-md sm:rounded-l-lg shadow-lg sm:shadow-xl overflow-hidden flex flex-col items-center min-w-[56px] sm:min-w-[72px] transition-all duration-300 group-hover:-translate-x-1 group-hover:shadow-2xl">
        {/* Top White Section with Cart Plus Icon */}
        <div className="p-2 sm:p-3 flex flex-col items-center justify-center gap-0.5 sm:gap-1 bg-white w-full">
          <FaCartPlus className="text-lg sm:text-2xl text-slate-700 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
          <span className="text-[10px] sm:text-xs font-bold text-slate-800 tracking-tight">
            ৳{subtotal}
          </span>
        </div>

        {/* Bottom Theme Color Bar (#006a52) */}
        <div className="w-full bg-[#006a52] group-hover:bg-[#005240] text-white py-1 sm:py-1.5 px-1 sm:px-2 font-bold text-[9px] sm:text-[11px] tracking-wider uppercase flex items-center justify-center transition-colors shadow-inner">
          {totalItemsCount} {totalItemsCount === 1 ? 'ITEM' : 'ITEMS'}
        </div>
      </div>
    </div>
  );
}
