'use client';

import { FaArrowDownShortWide } from 'react-icons/fa6';

export default function CategoryHeader({ title, itemCount, sortBy, onSortChange }) {
  return (
    <div className="bg-[#043326] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Title & Count */}
      <div className="z-10 space-y-1">
        <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
          EXPLORE CATEGORY
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          {title || "Cooking Essentials"}
        </h1>
        <p className="text-xs text-emerald-100/70 font-medium">
          Showing <strong className="text-white">{itemCount || 48}</strong> fresh items available for instant delivery.
        </p>
      </div>

      {/* Sorting Dropdown */}
      <div className="z-10 bg-white/10 backdrop-blur-md border border-emerald-500/30 rounded-full px-4 py-2 flex items-center gap-2 text-xs shrink-0 shadow-sm">
        <FaArrowDownShortWide className="text-emerald-300 text-sm" />
        <span className="text-emerald-100/80 font-medium">Sort by:</span>
        <select
          value={sortBy || 'default'}
          onChange={(e) => onSortChange && onSortChange(e.target.value)}
          className="bg-transparent text-white font-bold cursor-pointer focus:outline-none appearance-none pr-2"
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
