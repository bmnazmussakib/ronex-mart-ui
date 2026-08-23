'use client';

import { FaBoxOpen, FaClock, FaHeart, FaTicket, FaArrowRight, FaRotateRight } from 'react-icons/fa6';
import Link from 'next/link';

export default function ProfileDashboardTab({ setActiveTab }) {
  return (
    <div className="space-y-5">
      {/* 4 Stats Quick Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        {/* Total Orders Card */}
        <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5 hover:border-[#006a52] transition-colors">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-sm font-medium text-slate-600">Total Orders</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#006a52] flex items-center justify-center">
              <FaBoxOpen className="text-base" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">12</p>
        </div>

        {/* In Transit Card */}
        <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5 hover:border-amber-500 transition-colors">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-sm font-medium text-slate-600">In Transit</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
              <FaClock className="text-base" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">2</p>
        </div>

        {/* Wishlist Card */}
        <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5 hover:border-rose-500 transition-colors">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-sm font-medium text-slate-600">Wishlist</span>
            <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
              <FaHeart className="text-base" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">4</p>
        </div>

        {/* Vouchers Card */}
        <div className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-2xs space-y-2.5 hover:border-emerald-600 transition-colors">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-sm font-medium text-slate-600">Vouchers</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <FaTicket className="text-base" />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">3</p>
        </div>
      </div>

      {/* Quick Recent Activity / Orders Summary Container */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Dashboard Overview</h3>
            <p className="text-sm text-slate-500 mt-0.5">Welcome back to your RonexMart member dashboard.</p>
          </div>
          <Link
            href="/monthly-list"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-[#006a52] hover:bg-[#005240] px-3.5 py-1.5 rounded-md transition-colors shadow-2xs"
          >
            <FaRotateRight className="text-xs" />
            <span>Reorder Monthly List</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Recent Order Item Widget */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Latest Order #2608181289</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">Miniket Rice 10kg + Oils</p>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 inline-block mt-2">
                Pending Payment
              </span>
            </div>
            <button
              onClick={() => setActiveTab && setActiveTab('orders')}
              className="text-xs font-semibold text-[#006a52] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>View Order</span>
              <FaArrowRight className="text-[10px]" />
            </button>
          </div>

          {/* Saved Wishlist Summary Widget */}
          <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">Saved Items</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">4 Products in Wishlist</p>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 inline-block mt-2">
                Ready to Purchase
              </span>
            </div>
            <button
              onClick={() => setActiveTab && setActiveTab('wishlist')}
              className="text-xs font-semibold text-[#006a52] hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>View Wishlist</span>
              <FaArrowRight className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
