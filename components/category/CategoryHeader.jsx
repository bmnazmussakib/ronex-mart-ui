'use client';

import { FaArrowDownShortWide } from 'react-icons/fa6';

export default function CategoryHeader({ title, itemCount, sortBy, onSortChange }) {
  return (
    <div className="bg-[#043326] text-white rounded-md sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Title & Count */}
      <div className="z-10 space-y-1">
        <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-white/10 backdrop-blur-md text-[#5ba902] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase rounded-full border border-emerald-500/30">
          EXPLORE CATEGORY
        </span>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
          {title || "Cooking Essentials"}
        </h1>
        <p className="text-xs sm:text-sm text-emerald-100/70 font-medium">
          Showing <strong className="text-white">{itemCount || 48}</strong> fresh items available for instant delivery.
        </p>
      </div>

      {/* Sorting Dropdown (Desktop & Tablet) */}
      <div className="hidden sm:flex z-10 bg-white/10 backdrop-blur-md border border-emerald-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 items-center justify-between sm:justify-start gap-2 text-xs shrink-0 w-full sm:w-auto">
        <div className="flex items-center gap-1.5">
          <FaArrowDownShortWide className="text-emerald-300 text-xs sm:text-sm" />
          <span className="text-emerald-100/80 font-medium">Sort by:</span>
        </div>
        <select
          value={sortBy || 'default'}
          onChange={(e) => onSortChange && onSortChange(e.target.value)}
          className="bg-transparent text-white font-semibold cursor-pointer focus:outline-none appearance-none pr-2 text-xs"
        >
          <option value="default" className="text-slate-900 font-medium">Default Featured</option>
          <option value="price-low" className="text-slate-900 font-medium">Price: Low to High</option>
          <option value="price-high" className="text-slate-900 font-medium">Price: High to Low</option>
          <option value="popularity" className="text-slate-900 font-medium">Popularity</option>
          <option value="rating" className="text-slate-900 font-medium">Highest Rated</option>
        </select>
      </div>
    </div>
  );
}
