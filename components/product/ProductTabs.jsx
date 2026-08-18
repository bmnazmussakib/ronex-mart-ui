'use client';

import { useState } from 'react';
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden my-4">
      {/* Tabs Header */}
      <div className="flex items-center border-b border-slate-200 bg-slate-50 px-4 pt-3 overflow-x-auto gap-2">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-5 py-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${activeTab === 'description'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-xl'
              : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
        >
          Product Description
        </button>
        <button
          onClick={() => setActiveTab('specifications')}
          className={`px-5 py-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${activeTab === 'specifications'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-xl'
              : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
        >
          Specifications & Ingredients
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`px-5 py-3 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${activeTab === 'reviews'
              ? 'border-[#006a52] text-[#006a52] bg-white rounded-t-xl'
              : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
        >
          Customer Reviews (128)
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 text-xs text-slate-700 leading-relaxed">
        {activeTab === 'description' && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900">About this item</h3>
            <p>
              Wheel Washing Powder 2 in 1 Clean & Fresh is specially formulated to deliver sparkling clean clothes with every wash. Its advanced stain removal technology dissolves tough grime, food stains, and daily dirt while protecting fabric fibers.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium text-slate-600">
              <li>Dual action cleaning with long-lasting freshness</li>
              <li>Removes stubborn stains without fading colors</li>
              <li>Suitable for both hand wash and top-loading washing machines</li>
              <li>Enriched with fresh floral fragrance that keeps clothes smelling great all day</li>
            </ul>
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900">Technical Specifications</h3>
            <div className="divide-y divide-slate-100 max-w-lg">
              <div className="py-2 grid grid-cols-2">
                <span className="font-semibold text-slate-500">Brand</span>
                <span className="font-medium text-slate-800">Unilever Bangladesh</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span className="font-semibold text-slate-500">Pack Weight</span>
                <span className="font-medium text-slate-800">500 g</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span className="font-semibold text-slate-500">Form</span>
                <span className="font-medium text-slate-800">Detergent Powder</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span className="font-semibold text-slate-500">Country of Origin</span>
                <span className="font-medium text-slate-800">Bangladesh</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div id="reviews" className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Customer Ratings</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold text-slate-900">4.8</span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <span className="text-slate-400">• 128 verified reviews</span>
                </div>
              </div>
              <button className="bg-[#006a52] text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-[#005240] transition-colors cursor-pointer">
                Write a Review
              </button>
            </div>

            {/* Sample Review List */}
            <div className="space-y-4">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Tanvir Ahmed</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Verified Purchase
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">2 days ago</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500 text-xs mb-1.5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-slate-600">
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
