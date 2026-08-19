'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaMagnifyingGlass,
  FaRotateLeft,
  FaClipboard,
  FaUser,
  FaBasketShopping,
} from 'react-icons/fa6';

export default function MainHeader() {
  const { openCart, totalItemsCount } = useCart();

  return (
    <div className="w-full px-6 sm:px-8 py-3.5">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/img/logo.png"
            alt="RonexMart Logo"
            className="h-10 sm:h-13 object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center bg-slate-50 rounded-full border border-slate-300 p-1  focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaMagnifyingGlass className="text-slate-400 ml-3.5 text-xs shrink-0" />
            <input
              type="text"
              placeholder="Search for products, brands and essential items..."
              className="w-full px-3 py-1.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <div className="h-4 w-px bg-slate-200 mx-1 shrink-0"></div>
            <select className="py-1 pl-2 pr-6 text-sm font-medium text-slate-600 bg-transparent cursor-pointer focus:outline-none appearance-none shrink-0">
              <option>All categories</option>
              <option>Grocery & Food</option>
              <option>Beverages</option>
              <option>Personal Care</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-7 shrink-0 font-semibold text-slate-700">
          {/* Reorder */}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-center justify-center">
              <FaRotateLeft className="text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
            </div>
            <span className="text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Reorder</span>
          </Link>

          {/* Account */}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-end justify-center">
              <FaUser className="text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
            </div>
            <span className="text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Account</span>
          </Link>

          {/* Quote */}
          <Link
            href="#"
            className="flex items-center gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-center justify-center">
              <FaClipboard className="text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
              <span className="absolute -top-2 -right-2.5 bg-[#f97316] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                0
              </span>
            </div>
            <span className="text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Quote</span>
          </Link>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            aria-label="Open Cart"
            className="flex items-center gap-2 hover:text-[#006a52] transition-colors group cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <FaBasketShopping className="text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
              <span className="absolute -top-2 -right-2.5 bg-[#006a52] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {totalItemsCount}
              </span>
            </div>
            <span className="text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
