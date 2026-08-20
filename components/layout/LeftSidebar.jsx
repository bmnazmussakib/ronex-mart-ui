'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaFire,
  FaTruckFast,
  FaStar,
  FaGem,
  FaShoePrints,
  FaSuitcaseRolling,
  FaKitchenSet,
  FaTv,
  FaCouch,
  FaBed,
  FaBath,
  FaGift,
  FaPaperclip,
  FaGamepad,
  FaDumbbell,
  FaBreadSlice,
  FaBoxesPacking,
  FaUtensils,
  FaChevronRight,
  FaXmark,
} from 'react-icons/fa6';

export default function LeftSidebar() {
  const { isSidebarOpen, closeSidebar } = useCart();

  const categories = [
    { title: "Cooking Essentials", slug: "cooking-essentials", icon: FaKitchenSet },
    { title: "Grocery & Food", slug: "grocery-and-food", icon: FaBoxesPacking },
    { title: "Beverages & Drinks", slug: "beverages", icon: FaUtensils },
    { title: "Cleaning Supplies", slug: "cleaning-supplies", icon: FaBath },
    { title: "Personal Care", slug: "personal-care", icon: FaGem },
    { title: "Bakery & Restaurant", slug: "bakery-and-dairy", icon: FaBreadSlice },
    { title: "Shoe & Leather Goods", slug: "shoe-and-leather", icon: FaShoePrints },
    { title: "Luggage & Travel Gear", slug: "luggage-travel", icon: FaSuitcaseRolling },
    { title: "Electronics & Appliances", slug: "electronics", icon: FaTv },
    { title: "Home Decor & Living", slug: "home-decor", icon: FaCouch },
    { title: "Furniture & Mattresses", slug: "furniture", icon: FaBed },
    { title: "Gifts & Event Tickets", slug: "gifts-events", icon: FaGift },
    { title: "Office & Stationery", slug: "stationery", icon: FaPaperclip },
    { title: "Toys & Video Games", slug: "toys-games", icon: FaGamepad },
    { title: "Sports & Outdoor Fitness", slug: "sports-fitness", icon: FaDumbbell },
  ];

  const categoriesList = (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      {/* 1. Top 3 Feature Quick Buttons Grid */}
      <div className="grid grid-cols-3 gap-1 sm:gap-1.5 p-1.5 sm:p-2 bg-slate-50 border-b border-slate-200 shrink-0">
        <Link
          href="/category/beverages"
          onClick={closeSidebar}
          className="bg-white border border-slate-200 hover:border-[#006a52] py-1.5 sm:py-2 px-1 rounded-lg text-center flex flex-col items-center justify-center transition-all group shadow-2xs"
        >
          <FaFire className="text-rose-600 text-base sm:text-lg mb-0.5 sm:mb-1 transition-transform" />
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-tight">Hot Deals</span>
        </Link>
        <Link
          href="/category/cooking-essentials"
          onClick={closeSidebar}
          className="bg-white border border-slate-200 hover:border-[#006a52] py-1.5 sm:py-2 px-1 rounded-lg text-center flex flex-col items-center justify-center transition-all group shadow-2xs"
        >
          <FaTruckFast className="text-[#006a52] text-base sm:text-lg mb-0.5 sm:mb-1 transition-transform" />
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-tight">Express</span>
        </Link>
        <Link
          href="/category/grocery-and-food"
          onClick={closeSidebar}
          className="bg-white border border-slate-200 hover:border-[#006a52] py-1.5 sm:py-2 px-1 rounded-lg text-center flex flex-col items-center justify-center transition-all group shadow-2xs"
        >
          <FaStar className="text-amber-500 text-base sm:text-lg mb-0.5 sm:mb-1 transition-transform" />
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-tight">Best Sellers</span>
        </Link>
      </div>

      {/* 2. Section Heading */}
      <div className="px-3 sm:px-3.5 py-1.5 sm:py-2 bg-rose-50/80 border-b border-rose-100 shrink-0">
        <h3 className="text-[10px] sm:text-[11px] font-semibold text-rose-700 tracking-wider uppercase">
          Monthly Essential Items
        </h3>
      </div>

      {/* 3. Scrollable Categories List */}
      <ul className="text-xs sm:text-[13px] font-medium text-slate-700 divide-y divide-slate-100 flex-1 overflow-y-auto custom-scrollbar pb-10 sm:pb-4">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <li key={idx}>
              <Link
                href={`/category/${cat.slug}`}
                onClick={closeSidebar}
                className="flex items-center justify-between px-3 sm:px-3.5 py-2 sm:py-2.5 hover:bg-[#e8f3e8] hover:text-[#006a52] transition-colors group"
              >
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <IconComp className="text-slate-400 group-hover:text-[#006a52] w-4 text-center text-xs shrink-0" />
                  <span className="line-clamp-1">{cat.title}</span>
                </div>
                <FaChevronRight className="text-[9px] text-slate-300 group-hover:text-[#006a52]" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <>
      {/* 1. Fixed Left Sidebar (Desktop Only: XL screens & up) */}
      <aside className="hidden xl:flex w-64 shrink-0 bg-white border-r border-slate-200/90 overflow-hidden flex-col justify-between sticky top-[160px] h-[calc(100vh-175px)]">
        {categoriesList}
      </aside>

      {/* 2. Mobile & Tablet Left Side Drawer with Smooth Transitions */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeSidebar}
        />

        {/* Sliding Drawer Container */}
        <div
          className={`fixed inset-y-0 left-0 w-72 sm:w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Header with Close Icon */}
          <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#053b2c] text-white shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs tracking-widest uppercase">All Categories</span>
            </div>
            <button
              onClick={closeSidebar}
              className="p-1.5 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
              aria-label="Close menu"
            >
              <FaXmark className="text-lg" />
            </button>
          </div>

          {/* Categories Content */}
          {categoriesList}
        </div>
      </div>
    </>
  );
}
