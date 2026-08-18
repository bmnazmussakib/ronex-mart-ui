'use client';

import { FaUser, FaPhone, FaLocationDot, FaTruckFast, FaHouse } from 'react-icons/fa6';

export default function AddressForm({ formData, onChange, deliveryArea, setDeliveryArea }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
        <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-sm">
          1
        </div>
        <div>
          <h2 className="font-bold text-base text-slate-900 leading-none">
            Shipping & Contact Details
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Where should we deliver your fresh order?
          </span>
        </div>
      </div>

      {/* Delivery Area Selection Toggle */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
          Select Delivery Area:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setDeliveryArea('inside-dhaka')}
            className={`p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all cursor-pointer ${deliveryArea === 'inside-dhaka'
                ? 'border-[#006a52] bg-[#e8f3e8]/70 text-[#006a52] shadow-xs'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <FaTruckFast className="text-base text-[#006a52]" />
              <div>
                <strong className="block text-xs font-bold">Inside Dhaka</strong>
                <span className="text-[11px] text-slate-500">Fast 24 Hour Delivery</span>
              </div>
            </div>
            <span className="font-extrabold text-sm text-slate-900 font-taka">৳60</span>
          </button>

          <button
            type="button"
            onClick={() => setDeliveryArea('outside-dhaka')}
            className={`p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all cursor-pointer ${deliveryArea === 'outside-dhaka'
                ? 'border-[#006a52] bg-[#e8f3e8]/70 text-[#006a52] shadow-xs'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
          >
            <div className="flex items-center gap-2.5">
              <FaHouse className="text-base text-[#006a52]" />
              <div>
                <strong className="block text-xs font-bold">Outside Dhaka</strong>
                <span className="text-[11px] text-slate-500">Courier 48-72 Hours</span>
              </div>
            </div>
            <span className="font-extrabold text-sm text-slate-900 font-taka">৳120</span>
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 block">
            Full Name <span className="text-rose-600">*</span>
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaUser className="text-slate-400 text-xs shrink-0 mr-2.5" />
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={onChange}
              placeholder="e.g. Nazmus Sakib"
              className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 block">
            Mobile Number <span className="text-rose-600">*</span>
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaPhone className="text-slate-400 text-xs shrink-0 mr-2.5" />
            <span className="text-xs font-bold text-slate-500 mr-1.5">+88</span>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={onChange}
              placeholder="01700000000"
              className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Division */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 block">
            Division <span className="text-rose-600">*</span>
          </label>
          <select
            name="division"
            value={formData.division}
            onChange={onChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all font-medium cursor-pointer"
          >
            <option value="Dhaka">Dhaka Division</option>
            <option value="Chittagong">Chittagong Division</option>
            <option value="Sylhet">Sylhet Division</option>
            <option value="Rajshahi">Rajshahi Division</option>
            <option value="Khulna">Khulna Division</option>
            <option value="Barisal">Barisal Division</option>
            <option value="Rangpur">Rangpur Division</option>
            <option value="Mymensingh">Mymensingh Division</option>
          </select>
        </div>

        {/* City / Thana */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700 block">
            City / Thana <span className="text-rose-600">*</span>
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaLocationDot className="text-slate-400 text-xs shrink-0 mr-2.5" />
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={onChange}
              placeholder="e.g. Dhanmondi, Uttara, Mirpur"
              className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder-slate-400 font-medium"
            />
          </div>
        </div>

        {/* Full Address */}
        <div className="space-y-1 sm:col-span-2">
          <label className="text-xs font-semibold text-slate-700 block">
            Full Street Address <span className="text-rose-600">*</span>
          </label>
          <textarea
            name="address"
            required
            rows={2}
            value={formData.address}
            onChange={onChange}
            placeholder="House/Holding no, Road no, Area landmark details..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-[#006a52] focus:bg-white transition-all placeholder-slate-400 font-medium resize-none"
          />
        </div>
      </div>
    </div>
  );
}
