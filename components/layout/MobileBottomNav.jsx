'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import {
  FaHouse,
  FaMagnifyingGlass,
  FaHeart,
  FaRegHeart,
  FaBasketShopping,
  FaUser,
  FaRegUser,
  FaXmark,
} from 'react-icons/fa6';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { openCart, totalItemsCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Mobile Search Overlay Input */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-0 z-50 bg-white p-3 shadow-md border-b border-slate-200 flex items-center gap-2 sm:hidden">
          <FaMagnifyingGlass className="text-slate-400 text-sm ml-2" />
          <input
            type="text"
            placeholder="Search products..."
            autoFocus
            className="flex-1 bg-slate-100 px-3 py-1.5 rounded-full text-xs text-slate-800 focus:outline-none border border-slate-300"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold text-slate-600 px-2 py-1"
          >
            <FaXmark className="text-sm" />
          </button>
        </div>
      )}

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-4 left-5 right-5 z-40 max-w-sm mx-auto bg-[#1c1d22]/95 backdrop-blur-md text-white rounded-2xl py-2 px-4 shadow-2xl shadow-black/60 border border-slate-800 flex items-center justify-between sm:hidden">
        {/* 1. Search */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Search"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <FaMagnifyingGlass className="text-lg" />
        </button>

        {/* 2. Wishlist */}
        <Link
          href="/category"
          aria-label="Wishlist"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer relative"
        >
          <FaRegHeart className="text-xl" />
        </Link>

        {/* 3. Middle Position: Home (#006a52 Theme Circle) */}
        <Link
          href="/"
          aria-label="Home"
          className="w-11 h-11 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center text-xl shadow-lg shadow-emerald-950/50 transition-transform active:scale-95 cursor-pointer shrink-0"
        >
          <FaHouse className="text-lg" />
        </Link>

        {/* 4. Cart */}
        <button
          onClick={openCart}
          aria-label="Cart"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer relative"
        >
          <FaBasketShopping className="text-xl" />
          {totalItemsCount > 0 && (
            <span className="absolute top-1 right-1 bg-[#006a52] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#1c1d22]">
              {totalItemsCount}
            </span>
          )}
        </button>

        {/* 5. Account */}
        <Link
          href="/login"
          aria-label="Account"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <FaRegUser className="text-xl" />
        </Link>
      </div>
    </>
  );
}
