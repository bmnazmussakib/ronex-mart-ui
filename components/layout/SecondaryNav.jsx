'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaBars, FaChevronDown, FaPhone } from 'react-icons/fa6';

export default function SecondaryNav() {
  const { toggleSidebar } = useCart();

  return (
    <div className="hidden md:block bg-slate-100/90 border-t border-slate-200 text-[13px] font-semibold text-slate-700">
      <div className="w-full pr-3 sm:pr-8 flex items-center justify-between">
        {/* Left Categories Header Box (Desktop Only) */}
        <button
          onClick={toggleSidebar}
          className="hidden xl:flex w-64 bg-[#053b2c] hover:bg-[#03241b] text-white px-4 py-3 items-center justify-between cursor-pointer tracking-wider shrink-0 font-bold transition-colors"
          aria-label="Toggle categories menu"
        >
          <div className="flex items-center gap-2">
            <FaBars className="text-sm" />
            <span className="uppercase text-xs tracking-widest font-bold">ALL CATEGORIES</span>
          </div>
          <FaChevronDown className="text-[10px] ml-2" />
        </button>

        {/* Links Nav */}
        <nav className="flex items-center md:justify-center xl:justify-start gap-4 sm:gap-6 px-4 xl:px-0 xl:ml-6 flex-1 py-2.5 sm:py-3 overflow-x-auto custom-scrollbar font-semibold text-xs tracking-wide text-slate-700">
          <Link href="/" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap uppercase">
            HOME
          </Link>
          <Link href="/category/cooking-essentials" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap uppercase">
            COOKING ESSENTIALS
          </Link>
          <Link href="/category/grocery-and-food" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap uppercase">
            DAILY GROCERY
          </Link>
          <Link href="/category/beverages" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap uppercase flex items-center gap-1.5">
            <span>OFFERS & DEALS</span>
            <span className="bg-rose-600 text-white text-[9px] font-extrabold px-1.5 py-0.2 rounded-full uppercase animate-pulse">
              HOT
            </span>
          </Link>
          <Link href="/category/cleaning-supplies" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap uppercase">
            SHOP BY BRANDS
          </Link>
        </nav>

        {/* Right Hotline */}
        <div className="hidden xl:flex items-center gap-2 text-slate-800 text-xs font-bold shrink-0 py-2">
          <FaPhone className="text-[#0b5d44]" />
          <span>09611996677</span>
        </div>
      </div>
    </div>
  );
}
