'use client';

import { useState } from 'react';
import { FaFilter, FaRotateLeft, FaStar } from 'react-icons/fa6';

export default function CategoryFilterSidebar({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const subCategories = [
    { title: "Edible Oil & Ghee", count: 14 },
    { title: "Spices & Masala", count: 22 },
    { title: "Rice & Flour", count: 18 },
    { title: "Salt & Sugar", count: 9 },
    { title: "Lentils & Pulses", count: 12 },
  ];

  const brands = [
    { name: "Unilever Bangladesh", count: 16 },
    { name: "PRAN Foods", count: 24 },
    { name: "Fresh (Meghna Group)", count: 19 },
    { name: "ACI Pure", count: 11 },
    { name: "Square Food & Beverage", count: 15 },
  ];

  const toggleBrand = (brandName) => {
    setSelectedBrands((prev) =>
      prev.includes(brandName)
        ? prev.filter((b) => b !== brandName)
        : [...prev, brandName]
    );
  };

  const handleReset = () => {
    setMinPrice(0);
    setMaxPrice(2000);
    setSelectedBrands([]);
    setInStockOnly(false);
    setSelectedRating(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
          <FaFilter className="text-[#006a52] text-xs" />
          <span>Filter Products</span>
        </div>
        <button
          onClick={handleReset}
          className="text-[11px] font-semibold text-slate-500 hover:text-[#006a52] flex items-center gap-1 transition-colors cursor-pointer"
        >
          <FaRotateLeft className="text-[10px]" />
          <span>Reset All</span>
        </button>
      </div>

      {/* Sub-categories */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Sub-Categories
        </h4>
        <div className="space-y-1 text-xs">
          {subCategories.map((sub, idx) => (
            <button
              key={idx}
              className="w-full flex items-center justify-between py-1.5 px-2 rounded-xl text-slate-700 hover:bg-[#e8f3e8] hover:text-[#006a52] font-medium transition-colors text-left cursor-pointer"
            >
              <span>{sub.title}</span>
              <span className="text-[10px] text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
                {sub.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-3 border-t border-slate-100 pt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Price Range (৳)
        </h4>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 flex items-center gap-1">
            <span className="text-slate-400 font-bold font-taka">৳</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min"
              className="w-full bg-transparent text-slate-800 font-bold focus:outline-none"
            />
          </div>
          <span className="text-slate-400">-</span>
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 flex items-center gap-1">
            <span className="text-slate-400 font-bold font-taka">৳</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              placeholder="Max"
              className="w-full bg-transparent text-slate-800 font-bold focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Brand Checkboxes */}
      <div className="space-y-2.5 border-t border-slate-100 pt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Popular Brands
        </h4>
        <div className="space-y-2 text-xs max-h-48 overflow-y-auto custom-scrollbar pr-1">
          {brands.map((b, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between text-slate-700 hover:text-[#006a52] cursor-pointer select-none"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(b.name)}
                  onChange={() => toggleBrand(b.name)}
                  className="rounded border-slate-300 text-[#006a52] focus:ring-[#006a52] cursor-pointer"
                />
                <span className="font-medium">{b.name}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">({b.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Customer Rating Filter */}
      <div className="space-y-2 border-t border-slate-100 pt-4">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Rating
        </h4>
        <div className="space-y-1.5 text-xs">
          {[4, 3].map((stars) => (
            <button
              key={stars}
              onClick={() => setSelectedRating(stars)}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl border text-left transition-all cursor-pointer ${selectedRating === stars
                  ? 'border-[#006a52] bg-[#e8f3e8] text-[#006a52] font-bold'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
            >
              <div className="flex items-center gap-1 text-amber-500">
                <FaStar />
                <span className="text-xs font-bold text-slate-800 ml-1">{stars}★ & above</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Availability Toggle */}
      <div className="border-t border-slate-100 pt-4">
        <label className="flex items-center justify-between cursor-pointer select-none text-xs font-bold text-slate-800">
          <span>In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-[#006a52] focus:ring-[#006a52] cursor-pointer"
          />
        </label>
      </div>
    </div>
  );
}
