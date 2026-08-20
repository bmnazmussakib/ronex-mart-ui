'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import HorizontalProductCard from '@/components/ui/HorizontalProductCard';
import CategoryHeader from '@/components/category/CategoryHeader';
import CategoryFilterSidebar from '@/components/category/CategoryFilterSidebar';
import CategoryPagination from '@/components/category/CategoryPagination';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  FaChevronRight,
  FaFilter,
  FaXmark,
  FaGrip,
  FaList,
  FaBorderAll,
  FaTableCellsLarge,
} from 'react-icons/fa6';

export default function CategoryViewClient({ currentTitle, productsList, breadcrumbItems }) {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [gridView, setGridView] = useState('4cols'); // 'list' | '2cols' | '3cols' | '4cols'
  const [priceRange, setPriceRange] = useState([350, 3500]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  // Pill Sub-categories demo
  const pillCategories = [
    'Cooking Oils & Ghee',
    'Spices & Masala',
    'Rice & Flour',
    'Salt & Sugar',
    'Lentils & Pulses',
    'Organic Items',
  ];

  // Dynamic Grid CSS Class generator
  const getGridClasses = () => {
    if (gridView === 'list') return 'grid grid-cols-1 gap-3';
    if (gridView === '2cols') return 'grid grid-cols-2 gap-4';
    if (gridView === '3cols') return 'grid grid-cols-2 sm:grid-cols-3 gap-4';
    // Default 4cols
    return 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4';
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5 py-1 sm:py-2">
      {/* 1. TOP: Category Banner Header (Pure Banner Image) */}
      <CategoryHeader bannerImage="/img/hero-banner-1.png" alt={currentTitle} />

      {/* 2. Sub-Category Pill Chips (Desktop Only) */}
      <div className="hidden lg:flex items-center gap-2 overflow-x-auto custom-scrollbar py-1">
        {pillCategories.map((pill, idx) => (
          <button
            key={idx}
            className="px-4 py-2 rounded-full bg-slate-100 hover:bg-[#006a52] hover:text-white text-slate-700 text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer border border-slate-200/80 shadow-2xs"
          >
            {pill}
          </button>
        ))}
      </div>

      {/* 3. DESKTOP FILTER TOOLBAR BAR (Breadcrumb + Price Slider + Brand + Sort + All Filters + View As) */}
      <div className="hidden lg:flex items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
        {/* Left: Breadcrumb Link */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 shrink-0">
          <Link href="/" className="hover:text-[#006a52] text-slate-500 transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <span className="font-bold text-[#006a52] truncate max-w-[220px]">
            {currentTitle}
          </span>
        </div>

        {/* Center: Inline Filters (Price Range, Select Brand, Sort, All Filters) */}
        <div className="flex items-center gap-3">
          {/* Price Range Slider */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 px-3.5 py-1.5 rounded-full text-xs sm:text-sm shrink-0">
            <span className="text-xs font-bold text-[#006a52] bg-emerald-50 px-2 py-0.5 rounded-md font-taka border border-emerald-200">
              ৳{priceRange[0]}
            </span>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-24 sm:w-28 accent-[#006a52] cursor-pointer"
            />
            <span className="text-xs font-bold text-[#006a52] bg-emerald-50 px-2 py-0.5 rounded-md font-taka border border-emerald-200">
              ৳{priceRange[1]}
            </span>
          </div>

          {/* Select Brand Dropdown */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-300 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:border-[#006a52] focus:outline-none cursor-pointer shadow-2xs"
          >
            <option value="">Select Brand</option>
            <option value="unilever">Unilever Bangladesh</option>
            <option value="pran">PRAN Foods</option>
            <option value="fresh">Fresh (Meghna Group)</option>
            <option value="aci">ACI Pure</option>
            <option value="square">Square Food & Beverage</option>
          </select>

          {/* Sort By Relevance Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-slate-300 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:border-[#006a52] focus:outline-none cursor-pointer shadow-2xs"
          >
            <option value="relevance">Sort By Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="popularity">Popularity</option>
          </select>

          {/* All Filters Button (Opens Slide Drawer) */}
          <button
            onClick={() => setIsFilterDrawerOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer shadow-2xs shrink-0"
          >
            <FaFilter className="text-xs" />
            <span>All Filters</span>
          </button>
        </div>

        {/* Right: View As Grid Switcher Icons */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-sm font-bold text-slate-600">View As:</span>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/90">
            {/* List View */}
            <button
              onClick={() => setGridView('list')}
              title="List View"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === 'list'
                  ? 'bg-white text-[#006a52] shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaList className="text-sm" />
            </button>
            {/* 2 Columns */}
            <button
              onClick={() => setGridView('2cols')}
              title="2 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === '2cols'
                  ? 'bg-white text-[#006a52] shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaTableCellsLarge className="text-sm" />
            </button>
            {/* 3 Columns */}
            <button
              onClick={() => setGridView('3cols')}
              title="3 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === '3cols'
                  ? 'bg-white text-[#006a52] shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaGrip className="text-sm" />
            </button>
            {/* 4 Columns (Default) */}
            <button
              onClick={() => setGridView('4cols')}
              title="4 Columns"
              className={`p-1.5 rounded-md transition-colors ${
                gridView === '4cols'
                  ? 'bg-white text-[#006a52] shadow-2xs font-bold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaBorderAll className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE BREADCRUMB BAR (lg:hidden) */}
      <div className="lg:hidden">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* MAIN CONTAINER: DESKTOP FULL-WIDTH GRID + MOBILE FILTER SIDEBAR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start">
        {/* Left Filter Sidebar (Mobile & Tablet only) */}
        <div className="lg:hidden">
          <CategoryFilterSidebar />
        </div>

        {/* Product Grid Area (Takes full 12 cols on Desktop, dynamic grid columns) */}
        <div className="lg:col-span-12 flex flex-col justify-between">
          <div className={getGridClasses()}>
            {productsList.map((item) => (
              <div key={item.id} className="h-full">
                {gridView === 'list' ? (
                  <HorizontalProductCard item={item} />
                ) : (
                  <ProductCard {...item} />
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <CategoryPagination totalPages={4} />
        </div>
      </div>

      {/* DESKTOP ALL FILTERS SLIDE-OVER DRAWER */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isFilterDrawerOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Dark Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isFilterDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsFilterDrawerOpen(false)}
        />

        {/* Sliding Drawer (Right to Left) */}
        <div
          className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col justify-between z-50 transform transition-transform duration-300 ease-in-out ${
            isFilterDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#053b2c] text-white shrink-0">
            <div className="flex items-center gap-2">
              <FaFilter className="text-emerald-300 text-xs" />
              <span className="font-bold text-xs tracking-wider uppercase">Filter Products</span>
            </div>
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white cursor-pointer transition-colors"
              aria-label="Close filters"
            >
              <FaXmark className="text-base" />
            </button>
          </div>

          {/* Sidebar Filter Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 custom-scrollbar">
            <CategoryFilterSidebar />
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 shrink-0">
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs py-2.5 rounded-full uppercase transition-colors text-center cursor-pointer shadow-xs"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
