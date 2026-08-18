'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { FaTag, FaShieldHalved, FaTruckFast, FaBasketShopping } from 'react-icons/fa6';

export default function OrderSummarySidebar({ deliveryFee, onConfirmOrder, isSubmitting }) {
  const { cartItems, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'RONEX10') {
      setDiscount(50);
      setAppliedCoupon('RONEX10');
    } else {
      alert('Invalid Promo Code. Try "RONEX10" for ৳50 OFF!');
    }
  };

  const totalPayable = Math.max(0, subtotal + deliveryFee - discount);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
          <FaBasketShopping className="text-[#006a52] text-sm" />
          <span>Order Summary</span>
        </h3>
        <span className="text-xs font-semibold text-slate-500">
          {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      {/* Cart Items Preview List */}
      <div className="space-y-3 max-h-56 overflow-y-auto custom-scrollbar pr-1 divide-y divide-slate-100">
        {cartItems.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-4">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="pt-3 first:pt-0 flex items-center gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 rounded-xl object-contain bg-slate-50 border border-slate-100 p-1 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-xs text-slate-800 truncate">
                  {item.title}
                </h4>
                <span className="text-[11px] text-slate-400 font-medium block">
                  Qty: {item.quantity} × {item.price}
                </span>
              </div>
              <span className="font-bold text-xs text-slate-900 font-taka shrink-0">
                {item.price}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Promo Code Form */}
      <form onSubmit={handleApplyCoupon} className="space-y-2 border-t border-slate-100 pt-4">
        <label className="text-xs font-semibold text-slate-700 block">
          Have a Coupon Code?
        </label>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 focus-within:border-[#006a52] focus-within:bg-white transition-all">
            <FaTag className="text-slate-400 text-xs shrink-0" />
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter Promo Code"
              className="w-full bg-transparent text-xs text-slate-800 focus:outline-none placeholder-slate-400 uppercase font-bold"
            />
          </div>
          <button
            type="submit"
            className="bg-[#006a52] hover:bg-[#005240] text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Apply
          </button>
        </div>
        {appliedCoupon && (
          <span className="text-[11px] text-emerald-700 font-bold block">
            ✓ Coupon '{appliedCoupon}' Applied! ৳50 Discount
          </span>
        )}
      </form>

      {/* Price Calculations */}
      <div className="space-y-2.5 border-t border-slate-100 pt-4 text-xs">
        <div className="flex justify-between items-center text-slate-600">
          <span>Subtotal</span>
          <span className="font-bold text-slate-900 font-taka">৳{subtotal}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span>Delivery Charge</span>
          <span className="font-bold text-slate-900 font-taka">৳{deliveryFee}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between items-center text-emerald-700 font-semibold">
            <span>Promo Discount</span>
            <span className="font-bold font-taka">-৳{discount}</span>
          </div>
        )}
        <div className="flex justify-between items-center text-sm font-extrabold text-slate-900 border-t border-slate-200 pt-3">
          <span>Total Payable Amount</span>
          <span className="text-lg text-[#006a52] font-taka font-extrabold">
            ৳{totalPayable}
          </span>
        </div>
      </div>

      {/* Confirm Order Button */}
      <button
        onClick={onConfirmOrder}
        disabled={isSubmitting || cartItems.length === 0}
        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
      >
        <span>{isSubmitting ? 'Placing Order...' : 'Confirm Order'}</span>
      </button>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-2 text-center pt-1 border-t border-slate-100">
        <div className="flex flex-col items-center gap-1 p-2 bg-slate-50 rounded-xl">
          <FaShieldHalved className="text-[#006a52] text-xs" />
          <span className="text-[10px] font-semibold text-slate-600">100% Secure Order</span>
        </div>
        <div className="flex flex-col items-center gap-1 p-2 bg-slate-50 rounded-xl">
          <FaTruckFast className="text-[#006a52] text-xs" />
          <span className="text-[10px] font-semibold text-slate-600">Cash On Delivery</span>
        </div>
      </div>
    </div>
  );
}
