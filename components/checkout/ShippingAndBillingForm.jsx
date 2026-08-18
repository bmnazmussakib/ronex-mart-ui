'use client';

import { useState } from 'react';
import { FaTag, FaRotate, FaCheck } from 'react-icons/fa6';

export default function ShippingAndBillingForm({
  shippingData,
  onShippingChange,
  billingData,
  onBillingChange,
  sameAsShipping,
  setSameAsShipping,
  promoCode,
  setPromoCode,
  onApplyPromo,
  exchangeId,
  setExchangeId,
  onSearchExchange,
}) {
  return (
    <div className="space-y-6">
      {/* SHIPPING DETAILS CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#006a52]" />
          SHIPPING DETAILS
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Phone */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
              <span className="text-xs mr-2 shrink-0">🇧🇩 +880</span>
              <input
                type="tel"
                name="phone"
                value={shippingData.phone}
                onChange={onShippingChange}
                placeholder="1700000000"
                className="w-full bg-transparent text-xs text-slate-800 focus:outline-none font-medium"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={shippingData.email}
              onChange={onShippingChange}
              placeholder="Enter your email"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={shippingData.fullName}
              onChange={onShippingChange}
              placeholder="Enter your full name"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium"
            />
          </div>

          {/* Country */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Country
            </label>
            <select
              name="country"
              value={shippingData.country}
              onChange={onShippingChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
            >
              <option value="Bangladesh">Bangladesh</option>
            </select>
          </div>

          {/* District / State */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              District / State <span className="text-rose-500">*</span>
            </label>
            <select
              name="district"
              value={shippingData.district}
              onChange={onShippingChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
            >
              <option value="">Select District/State</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Barisal">Barisal</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Mymensingh">Mymensingh</option>
            </select>
          </div>

          {/* Area / City */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Area / City <span className="text-rose-500">*</span>
            </label>
            <select
              name="area"
              value={shippingData.area}
              onChange={onShippingChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
            >
              <option value="">Select Area/City</option>
              <option value="Dhanmondi">Dhanmondi</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Banani">Banani</option>
              <option value="Uttara">Uttara</option>
              <option value="Mirpur">Mirpur</option>
              <option value="Mohammadpur">Mohammadpur</option>
              <option value="Badda">Badda</option>
              <option value="Other Area">Other Area</option>
            </select>
          </div>

          {/* Full Address */}
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Street Address <span className="text-rose-500">*</span>
            </label>
            <textarea
              name="address"
              rows={2}
              value={shippingData.address}
              onChange={onShippingChange}
              placeholder="Enter your address (House, Road, Block...)"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium resize-none"
            />
          </div>

          {/* Special Note */}
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[11px] font-bold text-slate-600 uppercase">
              Special Delivery Note
            </label>
            <textarea
              name="specialNote"
              rows={2}
              value={shippingData.specialNote}
              onChange={onShippingChange}
              placeholder="Enter your special note (e.g. Call before delivery)"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium resize-none"
            />
          </div>
        </div>

        {/* SAME AS SHIPPING CHECKBOX */}
        <div className="pt-2">
          <label className="flex items-center gap-2.5 cursor-pointer select-none text-xs font-bold text-slate-800">
            <input
              type="checkbox"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-[#006a52] focus:ring-[#006a52] cursor-pointer"
            />
            <span>My shipping and billing address are the same</span>
          </label>
        </div>
      </div>

      {/* BILLING DETAILS CARD (Only shown if sameAsShipping is false) */}
      {!sameAsShipping && (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4 animate-fadeIn">
          <h3 className="font-extrabold text-sm text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            BILLING DETAILS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Phone */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Phone Number</label>
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
                <span className="text-xs mr-2 shrink-0">🇧🇩 +880</span>
                <input
                  type="tel"
                  name="phone"
                  value={billingData.phone}
                  onChange={onBillingChange}
                  placeholder="1700000000"
                  className="w-full bg-transparent text-xs text-slate-800 focus:outline-none font-medium"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Email Address</label>
              <input
                type="email"
                name="email"
                value={billingData.email}
                onChange={onBillingChange}
                placeholder="Enter your email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={billingData.fullName}
                onChange={onBillingChange}
                placeholder="Enter your full name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium"
              />
            </div>

            {/* Country */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Country</label>
              <select
                name="country"
                value={billingData.country}
                onChange={onBillingChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
              >
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>

            {/* District */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">District / State</label>
              <select
                name="district"
                value={billingData.district}
                onChange={onBillingChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
              >
                <option value="">Select District/State</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
              </select>
            </div>

            {/* Area */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Area / City</label>
              <select
                name="area"
                value={billingData.area}
                onChange={onBillingChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
              >
                <option value="">Select Area/City</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Gulshan">Gulshan</option>
              </select>
            </div>

            {/* Address */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-[11px] font-bold text-slate-600 uppercase">Street Address</label>
              <textarea
                name="address"
                rows={2}
                value={billingData.address}
                onChange={onBillingChange}
                placeholder="Enter your billing address"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* PROMO CODE CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-3">
        <h3 className="font-extrabold text-xs text-slate-900 tracking-wider uppercase flex items-center gap-2">
          <FaTag className="text-[#006a52]" />
          PROMO CODE
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code here"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#006a52] focus:bg-white uppercase tracking-wider"
          />
          <button
            type="button"
            onClick={onApplyPromo}
            className="bg-[#006a52] hover:bg-[#005240] text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer tracking-wider"
          >
            APPLY
          </button>
        </div>
      </div>

      {/* EXCHANGE ORDER CARD */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-3">
        <h3 className="font-extrabold text-xs text-slate-900 tracking-wider uppercase flex items-center gap-2">
          <FaRotate className="text-[#006a52]" />
          EXCHANGE ORDER
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={exchangeId}
            onChange={(e) => setExchangeId(e.target.value)}
            placeholder="Enter exchange order ID"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-bold focus:outline-none focus:border-[#006a52] focus:bg-white uppercase tracking-wider"
          />
          <button
            type="button"
            onClick={onSearchExchange}
            className="bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer tracking-wider"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
