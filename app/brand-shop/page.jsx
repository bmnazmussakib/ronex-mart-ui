'use client';

import { useState } from 'react';
import Link from 'next/link';
import CategoryHeader from '@/components/category/CategoryHeader';
import BrandCard from '@/components/brand/BrandCard';
import { FaChevronRight, FaMagnifyingGlass, FaStore, FaXmark } from 'react-icons/fa6';

export default function BrandShopPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const brandsList = [
    { id: 1, name: "Unilever Bangladesh", logo: "/img/brand/brand (1).jpeg", productCount: 148, slug: "unilever" },
    { id: 2, name: "PRAN Foods", logo: "/img/brand/brand (2).jpeg", productCount: 112, slug: "pran" },
    { id: 3, name: "Fresh - Meghna Group", logo: "/img/brand/brand (3).jpeg", productCount: 95, slug: "fresh" },
    { id: 4, name: "ACI Pure", logo: "/img/brand/brand (4).jpeg", productCount: 84, slug: "aci" },
    { id: 5, name: "Square Food & Beverage", logo: "/img/brand/brand (5).jpeg", productCount: 76, slug: "square" },
    { id: 6, name: "Nestlé Bangladesh", logo: "/img/brand/brand (6).jpeg", productCount: 68, slug: "nestle" },
    { id: 7, name: "Ispahani Tea", logo: "/img/brand/brand (7).jpeg", productCount: 52, slug: "ispahani" },
    { id: 8, name: "Radhuni Spices", logo: "/img/brand/brand (8).jpeg", productCount: 64, slug: "radhuni" },
    { id: 9, name: "Bombay Sweets", logo: "/img/brand/brand (9).jpeg", productCount: 45, slug: "bombay-sweets" },
    { id: 10, name: "Kazi Farms Kitchen", logo: "/img/brand/brand (10).jpeg", productCount: 38, slug: "kazi-farms" },
    { id: 11, name: "Olympic Biscuits", logo: "/img/brand/brand (11).jpeg", productCount: 56, slug: "olympic" },
    { id: 12, name: "Teer Consumer Goods", logo: "/img/brand/brand (12).jpeg", productCount: 42, slug: "teer" },
    { id: 13, name: "Aarong Dairy", logo: "/img/brand/brand (13).jpeg", productCount: 34, slug: "aarong" },
  ];

  const filteredBrands = searchQuery.trim()
    ? brandsList.filter((b) => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : brandsList;

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-2">
      {/* 1. Category Header Banner */}
      <CategoryHeader
        bannerImage="/img/hero-banner-category.png"
        alt="Top Partner Brands"
      />

      {/* 2. Breadcrumb & Search Toolbar Bar (Without category filter dropdowns) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white border border-slate-200/90 rounded-xl p-3.5 shadow-2xs">
        {/* Left: Breadcrumb Links */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-[#006a52] text-slate-500 transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <span className="font-bold text-[#006a52]">Brand Shop</span>
          <span className="bg-emerald-50 text-[#006a52] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 ml-1">
            {filteredBrands.length} Brands
          </span>
        </div>

        {/* Right: Search Brand Filter Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search brand name..."
            className="w-full pl-3.5 pr-8 py-1.5 rounded-full border border-slate-300 focus:border-[#006a52] focus:ring-1 focus:ring-[#006a52] text-xs text-slate-800 outline-none bg-slate-50/50"
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              <FaXmark />
            </button>
          ) : (
            <FaMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
          )}
        </div>
      </div>

      {/* 3. Brand Cards Grid */}
      {filteredBrands.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4.5">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            <FaStore />
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-slate-800">
            No brands found matching "{searchQuery}"
          </h3>
          <button
            onClick={() => setSearchQuery('')}
            className="px-4 py-1.5 rounded-full bg-[#006a52] text-white text-xs font-semibold hover:bg-[#005240] transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
}
