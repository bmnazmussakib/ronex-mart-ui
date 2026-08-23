'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaCircleCheck,
  FaStar,
  FaStarHalfStroke,
  FaMinus,
  FaPlus,
  FaTruckFast,
  FaShieldHalved,
  FaHandHoldingDollar,
  FaClipboardList,
  FaCalendarCheck,
} from 'react-icons/fa6';

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();

  const data = product || {
    id: "1",
    title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
    brand: "Unilever Bangladesh",
    category: "Cleaning Supplies",
    rating: 4.8,
    reviewsCount: 128,
    price: "৳70",
    oldPrice: "৳85",
    discount: "৳15 OFF",
    stock: "In Stock",
    sku: "RM-WHL-500G",
    weights: ["500 g", "1 kg", "2 kg"],
    images: ["/img/product/product (1).jpeg"],
  };

  const [selectedWeight, setSelectedWeight] = useState(data.weights[0]);
  const [inCartQty, setInCartQty] = useState(0);
  const [isQuoted, setIsQuoted] = useState(false);
  const [isSavedMonthly, setIsSavedMonthly] = useState(false);
  const [actionToast, setActionToast] = useState('');

  const handleAddToCart = () => {
    setInCartQty(1);
    addToCart({
      id: data.id || "1",
      title: data.title,
      price: data.price,
      weight: selectedWeight,
      image: data.images && data.images.length > 0 ? data.images[0] : "/img/product/product (1).jpeg",
      quantity: 1,
    });
  };

  const incrementQty = () => {
    setInCartQty((prev) => prev + 1);
    addToCart({
      id: data.id || "1",
      title: data.title,
      price: data.price,
      weight: selectedWeight,
      image: data.images && data.images.length > 0 ? data.images[0] : "/img/product/product (1).jpeg",
      quantity: 1,
    });
  };

  const decrementQty = () => {
    setInCartQty((prev) => (prev > 1 ? prev - 1 : 0));
  };

  const handleAddToQuote = () => {
    setIsQuoted(!isQuoted);
    setActionToast(isQuoted ? 'Item removed from quote list' : 'Item added to quote list successfully!');
    setTimeout(() => setActionToast(''), 3500);
  };

  const handleSaveMonthlyList = () => {
    setIsSavedMonthly(!isSavedMonthly);
    setActionToast(isSavedMonthly ? 'Item removed from monthly list' : 'Item saved to your monthly list successfully!');
    setTimeout(() => setActionToast(''), 3500);
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5 bg-white rounded-xl border border-slate-200/90 p-4 sm:p-5 md:p-6 shadow-2xs">
      {/* Toast Notification */}
      {actionToast && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3 rounded-lg flex items-center gap-2 animate-in fade-in">
          <FaCircleCheck className="text-[#006a52] text-sm shrink-0" />
          <span>{actionToast}</span>
        </div>
      )}

      {/* Category & Brand Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <span>Brand:</span>
          <Link href="/category" className="text-[#006a52] hover:underline font-semibold">
            {data.brand}
          </Link>
          <span className="text-slate-300">•</span>
          <span className="text-slate-400">SKU: {data.sku}</span>
        </div>
        <span className="bg-emerald-50 text-emerald-700 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-emerald-200/60 flex items-center gap-1">
          <FaCircleCheck className="text-[10px] text-emerald-600" />
          {data.stock}
        </span>
      </div>

      {/* Title */}
      <div className="space-y-1.5">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
          {data.title}
        </h1>

        {/* Rating Bar */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs">
          <div className="flex items-center gap-1 text-amber-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <span className="font-semibold text-slate-700 ml-1">{data.rating}</span>
          </div>
          <span className="text-slate-300">•</span>
          <a href="#reviews" className="text-slate-500 hover:text-[#006a52] underline font-medium">
            {data.reviewsCount} Customer Reviews
          </a>
        </div>
      </div>

      {/* Price Block */}
      <div className="bg-slate-50 p-3.5 sm:p-4 rounded-lg border border-slate-100 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-semibold text-slate-900 font-taka">
            {data.price}
          </span>
          {data.oldPrice && (
            <span className="text-xs sm:text-sm text-slate-400 line-through font-taka">
              {data.oldPrice}
            </span>
          )}
        </div>
        {data.discount && (
          <span className="bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full font-taka">
            {data.discount}
          </span>
        )}
      </div>

      {/* Weight Variant Selector */}
      <div className="space-y-1.5 sm:space-y-2">
        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block">
          Select Weight / Size:
        </label>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          {data.weights.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeight(w)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold rounded-full border transition-all cursor-pointer whitespace-nowrap ${
                selectedWeight === w
                  ? 'border-[#006a52] bg-[#e8f3e8] text-[#006a52] shadow-xs'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons: Add To Cart, Add to Quote, Save Monthly List */}
      <div className="space-y-2.5 pt-1 w-full">
        {/* Add To Cart */}
        {inCartQty === 0 ? (
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-bold uppercase text-xs sm:text-sm py-3 px-5 rounded-full flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer"
          >
            <FaPlus className="text-xs" />
            <span>Add To Cart</span>
          </button>
        ) : (
          <div className="w-full bg-white border-2 border-[#006a52] text-[#006a52] p-1 rounded-full flex items-center justify-between shadow-xs">
            <button
              onClick={decrementQty}
              aria-label="Decrease Quantity"
              className="w-7 h-7 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shrink-0"
            >
              <FaMinus className="text-[10px]" />
            </button>
            <span className="font-bold text-sm text-slate-900 px-2">
              {inCartQty} in Cart
            </span>
            <button
              onClick={incrementQty}
              aria-label="Increase Quantity"
              className="w-7 h-7 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shrink-0"
            >
              <FaPlus className="text-[10px]" />
            </button>
          </div>
        )}

        {/* Row 2: Add to Quote & Save Monthly List */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {/* Add to Quote Button */}
          <button
            onClick={handleAddToQuote}
            className={`w-full font-semibold uppercase text-[11px] sm:text-xs py-2.5 sm:py-3 px-2 sm:px-4 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer border ${
              isQuoted
                ? 'bg-amber-500 text-white border-amber-500'
                : 'bg-emerald-50 text-[#006a52] border-emerald-200 hover:bg-[#006a52] hover:text-white'
            }`}
          >
            <FaClipboardList className="text-xs shrink-0" />
            <span className="truncate">{isQuoted ? 'In Quote List' : 'Add To Quote'}</span>
          </button>

          {/* Save Monthly List Button */}
          <button
            onClick={handleSaveMonthlyList}
            className={`w-full font-semibold uppercase text-[11px] sm:text-xs py-2.5 sm:py-3 px-2 sm:px-4 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer border ${
              isSavedMonthly
                ? 'bg-slate-800 text-white border-slate-800'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <FaCalendarCheck className="text-xs shrink-0" />
            <span className="truncate">{isSavedMonthly ? 'Monthly Saved' : 'Save Monthly List'}</span>
          </button>
        </div>
      </div>

      {/* Trust Badges Strip (Responsive Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 border-t border-slate-100 pt-4">
        {/* Fast Delivery */}
        <div className="flex flex-row sm:flex-col xl:flex-row items-center gap-2.5 p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 text-base sm:text-lg">
            <FaTruckFast />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-800">Fast Home Delivery</span>
            <span className="text-[10px] text-slate-500 font-medium">Express 24-48 Hrs</span>
          </div>
        </div>

        {/* 100% Genuine */}
        <div className="flex flex-row sm:flex-col xl:flex-row items-center gap-2.5 p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 text-base sm:text-lg">
            <FaShieldHalved />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-800">100% Genuine</span>
            <span className="text-[10px] text-slate-500 font-medium">Authentic Goods</span>
          </div>
        </div>

        {/* Cash On Delivery */}
        <div className="flex flex-row sm:flex-col xl:flex-row items-center gap-2.5 p-2.5 rounded-lg border border-slate-200/80 bg-slate-50/60">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 text-base sm:text-lg">
            <FaHandHoldingDollar />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold text-slate-800">Cash On Delivery</span>
            <span className="text-[10px] text-slate-500 font-medium">Pay On Receipt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
