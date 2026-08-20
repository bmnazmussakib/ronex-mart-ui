'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfStroke, FaCheck, FaPenToSquare } from 'react-icons/fa6';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-2xs">
      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-200 bg-slate-50 px-2 sm:px-3 pt-2 overflow-x-auto gap-1 sm:gap-2 custom-scrollbar">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'description'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('specifications')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'specifications'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
            activeTab === 'reviews'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-lg shadow-2xs'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          Reviews (128)
        </button>
      </div>

      {/* Tab Content Body */}
      <div className="p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        {/* 1. DESCRIPTION TAB */}
        {activeTab === 'description' && (
          <div className="space-y-3.5 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">About this item</h3>
            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
              Wheel Washing Powder 2 in 1 Clean & Fresh is specially formulated to deliver sparkling clean clothes with every wash. Its advanced stain removal technology dissolves tough grime, food stains, and daily dirt while protecting fabric fibers.
            </p>
            <ul className="list-disc pl-4 sm:pl-5 space-y-1.5 font-normal text-slate-600 text-xs sm:text-sm">
              <li>Dual action cleaning with long-lasting freshness</li>
              <li>Removes stubborn stains without fading colors</li>
              <li>Suitable for both hand wash and top-loading washing machines</li>
              <li>Enriched with fresh floral fragrance that keeps clothes smelling great all day</li>
            </ul>
          </div>
        )}

        {/* 2. SPECIFICATIONS TAB */}
        {activeTab === 'specifications' && (
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">Technical Specifications</h3>
            <div className="divide-y divide-slate-100 max-w-xl text-xs sm:text-sm rounded-md border border-slate-100 overflow-hidden bg-slate-50/50">
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Brand</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Unilever Bangladesh</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Pack Weight</span>
                <span className="sm:col-span-2 font-medium text-slate-800">500 g</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Form</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Detergent Powder</span>
              </div>
              <div className="p-2.5 sm:p-3 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-2">
                <span className="font-semibold text-slate-500">Country of Origin</span>
                <span className="sm:col-span-2 font-medium text-slate-800">Bangladesh</span>
              </div>
            </div>
          </div>
        )}

        {/* 3. REVIEWS TAB */}
        {activeTab === 'reviews' && (
          <div id="reviews" className="space-y-4 sm:space-y-5">
            {/* Customer Ratings Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900">Customer Ratings & Reviews</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">4.8</span>
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs sm:text-sm">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">• 128 verified reviews</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 bg-[#006a52] hover:bg-[#005240] text-white px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-2xs cursor-pointer shrink-0">
                <FaPenToSquare className="text-xs" />
                <span>Write a Review</span>
              </button>
            </div>

            {/* Review Cards List */}
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 text-xs sm:text-sm">Tanvir Ahmed</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <FaCheck className="text-[9px]" /> Verified Purchase
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">2 days ago</span>
                </div>
                <div className="flex items-center gap-0.5 text-amber-500 text-xs">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Great quality powder. Cleaning power is excellent for everyday clothes and smells really fresh!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
