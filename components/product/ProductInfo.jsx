'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaCircleCheck,
  FaStar,
  FaStarHalfStroke,
  FaCartShopping,
  FaMinus,
  FaPlus,
  FaTruckFast,
  FaShieldHalved,
  FaHandHoldingDollar,
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

  return (
    <div className="flex flex-col gap-5 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
      {/* Category & Brand Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span>Brand:</span>
          <Link href="#" className="text-[#006a52] hover:underline font-bold">
            {data.brand}
          </Link>
          <span>•</span>
          <span className="text-slate-400">SKU: {data.sku}</span>
        </div>
        <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200/60 flex items-center gap-1">
          <FaCircleCheck className="text-[10px] text-emerald-600" />
          {data.stock}
        </span>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
          {data.title}
        </h1>

        {/* Rating Bar */}
        <div className="flex items-center gap-3 mt-2 text-xs">
          <div className="flex items-center gap-1 text-amber-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <span className="font-bold text-slate-700 ml-1">{data.rating}</span>
          </div>
          <span className="text-slate-300">•</span>
          <a href="#reviews" className="text-slate-500 hover:text-[#006a52] underline font-medium">
            {data.reviewsCount} Customer Reviews
          </a>
        </div>
      </div>

      {/* Price Block */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-taka">
            {data.price}
          </span>
          {data.oldPrice && (
            <span className="text-sm text-slate-400 line-through font-taka">
              {data.oldPrice}
            </span>
          )}
        </div>
        {data.discount && (
          <span className="bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 text-xs font-bold px-3 py-1 rounded-full font-taka">
            {data.discount}
          </span>
        )}
      </div>

      {/* Weight Variant Selector */}
      <div>
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
          Select Weight / Size:
        </label>
        <div className="flex items-center gap-2.5 flex-wrap">
          {data.weights.map((w, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedWeight(w)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                selectedWeight === w
                  ? 'border-[#006a52] bg-[#e8f3e8] text-[#006a52] shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons & Quantity Controller */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        {inCartQty === 0 ? (
          /* Initial Add to Cart Button */
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#006a52] hover:bg-[#005240] text-white font-bold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <FaCartShopping className="text-xs" />
            <span>Add To Cart</span>
          </button>
        ) : (
          /* Plus / Minus Quantity Controller Pill (White BG) */
          <div className="flex-1 bg-white border-2 border-[#006a52] text-[#006a52] p-1 rounded-full flex items-center justify-between shadow-sm">
            <button
              onClick={decrementQty}
              aria-label="Decrease Quantity"
              className="w-8 h-8 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              <FaMinus className="text-xs" />
            </button>
            <span className="font-extrabold text-sm text-slate-900 px-3">
              {inCartQty}
            </span>
            <button
              onClick={incrementQty}
              aria-label="Increase Quantity"
              className="w-8 h-8 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
            >
              <FaPlus className="text-xs" />
            </button>
          </div>
        )}

        {/* Buy Now Button */}
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <span>Buy Now</span>
        </button>
      </div>

      {/* Professional Multi-Color Trust Badges Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-slate-100 pt-4">
        {/* Fast Delivery - Blue Theme */}
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-blue-100 bg-blue-50/40 hover:bg-white hover:border-blue-300 transition-all shadow-2xs">
          <div className="w-7 h-7 rounded-md bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
            <FaTruckFast className="text-xs" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-slate-800">Fast Home Delivery</span>
            <span className="text-[10px] text-blue-600/80 font-medium">Express 24-48 Hrs</span>
          </div>
        </div>

        {/* 100% Genuine - Emerald Theme */}
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-emerald-100 bg-emerald-50/40 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs">
          <div className="w-7 h-7 rounded-md bg-emerald-100/80 text-[#006a52] flex items-center justify-center shrink-0">
            <FaShieldHalved className="text-xs" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-slate-800">100% Genuine</span>
            <span className="text-[10px] text-[#006a52]/80 font-medium">Authentic Goods</span>
          </div>
        </div>

        {/* Cash On Delivery - Amber Theme */}
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-amber-100 bg-amber-50/40 hover:bg-white hover:border-amber-300 transition-all shadow-2xs">
          <div className="w-7 h-7 rounded-md bg-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
            <FaHandHoldingDollar className="text-xs" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-slate-800">Cash On Delivery</span>
            <span className="text-[10px] text-amber-600/80 font-medium">Pay On Receipt</span>
          </div>
        </div>
      </div>
    </div>
  );
}
