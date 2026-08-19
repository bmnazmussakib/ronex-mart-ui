'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaBars,
  FaMagnifyingGlass,
  FaRotateLeft,
  FaClipboard,
  FaUser,
  FaBasketShopping,
} from 'react-icons/fa6';

export default function MainHeader() {
  const { openCart, totalItemsCount, toggleSidebar } = useCart();

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
      <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        {/* Left: Hamburger Button (Mobile/Tablet) & Logo */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={toggleSidebar}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-[#006a52] transition-colors cursor-pointer"
            aria-label="Toggle categories menu"
          >
            <FaBars className="text-lg sm:text-xl" />
          </button>

          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <img
              src="/img/logo.png"
              alt="RonexMart Logo"
              className="h-8 sm:h-10 lg:h-12 object-contain group-hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-1 sm:mx-4">
          <div className="flex items-center bg-slate-50 rounded-full border border-slate-300 p-0.5 sm:p-1 focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaMagnifyingGlass className="text-slate-400 ml-2.5 sm:ml-3.5 text-xs shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <div className="hidden md:block h-4 w-px bg-slate-200 mx-1 shrink-0"></div>
            <select className="hidden md:block py-1 pl-2 pr-6 text-xs sm:text-sm font-medium text-slate-600 bg-transparent cursor-pointer focus:outline-none appearance-none shrink-0">
              <option>All categories</option>
              <option>Grocery & Food</option>
              <option>Beverages</option>
              <option>Personal Care</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-5 lg:gap-7 shrink-0 font-semibold text-slate-700">
          {/* Reorder */}
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-center justify-center">
              <FaRotateLeft className="text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
            </div>
            <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Reorder</span>
          </Link>

          {/* Account */}
          <Link
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-end justify-center">
              <FaUser className="text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
            </div>
            <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Account</span>
          </Link>

          {/* Quote */}
          <Link
            href="#"
            className="hidden sm:flex items-center gap-2 hover:text-[#006a52] transition-colors group"
          >
            <div className="relative flex items-center justify-center">
              <FaClipboard className="text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
              <span className="absolute -top-2 -right-2.5 bg-[#f97316] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                0
              </span>
            </div>
            <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Quote</span>
          </Link>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            aria-label="Open Cart"
            className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <FaBasketShopping className="text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] group-hover:scale-105 transition-all" />
              <span className="absolute -top-2 -right-2.5 bg-[#006a52] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                {totalItemsCount}
              </span>
            </div>
            <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52]">Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
