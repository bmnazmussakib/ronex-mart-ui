'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import {
  FaMinus,
  FaPlus,
  FaXmark,
  FaLock,
  FaChevronDown,
  FaChevronUp,
  FaCircleCheck,
  FaCreditCard,
  FaMobileRetro,
  FaMoneyBill1Wave,
  FaBuildingColumns,
} from 'react-icons/fa6';

export default function CheckoutSummarySidebar({
  shippingFee = 0,
  vatAmount = 0,
  discountAmount = 0,
  selectedPayment,
  setSelectedPayment,
  needBag,
  setNeedBag,
  onPlaceOrder,
  isSubmitting,
}) {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const [isBagOpen, setIsBagOpen] = useState(true);

  const bagFee = needBag ? 10 : 0;
  const totalAmount = Math.max(0, subtotal + shippingFee + vatAmount + bagFee - discountAmount);

  const paymentOptions = [
    { id: 'sslcommerz', label: 'SSLCOMMERZ', icon: FaCreditCard, badge: 'CARD / NET BANKING' },
    { id: 'bkash', label: 'BKASH PAYMENT GATEWAY (5% CASH BACK)', icon: FaMobileRetro, badge: '5% CASHBACK' },
    { id: 'ebl', label: 'EBL (EASTERN BANK PLC)', icon: FaBuildingColumns, badge: 'BANK DIRECT' },
    { id: 'cod', label: 'CASH ON DELIVERY (COD)', icon: FaMoneyBill1Wave, badge: 'COD' },
  ];

  return (
    <div className="space-y-4">

      
      {/* 2. SHOPPING BAG ITEMS LIST CARD */}
      <div className="bg-white rounded-md sm:rounded-xl border border-slate-200/90 p-4 sm:p-5 space-y-3">
        <div
          onClick={() => setIsBagOpen(!isBagOpen)}
          className="flex items-center justify-between cursor-pointer select-none border-b border-slate-100 pb-2.5"
        >
          <h3 className="font-semibold text-xs sm:text-sm text-slate-900 tracking-wider uppercase">
            SHOPPING BAG ({cartItems.length})
          </h3>
          {isBagOpen ? (
            <FaChevronUp className="text-xs text-slate-400" />
          ) : (
            <FaChevronDown className="text-xs text-slate-400" />
          )}
        </div>

        {isBagOpen && (
          <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar divide-y divide-slate-100 pt-1">
            {cartItems.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-2">Bag is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="pt-3 first:pt-0 flex items-start gap-3">
                  <div className="w-12 h-12 rounded-md bg-slate-50 border border-slate-100 shrink-0 overflow-hidden relative">
                    <Image
                      src={item.image || "/img/product/product (1).jpeg"}
                      alt={item.title || "Bag Item"}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-xs text-slate-900 line-clamp-1 leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      {item.weight}
                    </span>
                    <span className="font-medium text-xs text-slate-900 font-taka block mt-0.5">
                      {item.price} × {item.quantity}
                    </span>

                    {/* Quantity Controller */}
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex items-center border border-slate-200 rounded-full bg-white px-1 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-5 h-5 rounded-full hover:bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer"
                        >
                          <FaMinus className="text-[8px]" />
                        </button>
                        <span className="w-5 text-center font-medium text-xs text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-5 h-5 rounded-full hover:bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer"
                        >
                          <FaPlus className="text-[8px]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                  >
                    <FaXmark className="text-xs" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* 1. ORDER SUMMARY CARD */}
      <div className="bg-white rounded-md sm:rounded-xl border border-slate-200/90 p-4 sm:p-5 space-y-3">
        <h3 className="font-semibold text-xs sm:text-sm text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-2.5">
          ORDER SUMMARY
        </h3>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between items-center">
            <span className='font-medium text-xs'>SUBTOTAL</span>
            <span className="font-semibold text-sm text-slate-900 font-taka">৳{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className='font-medium text-xs'>SHIPPING</span>
            <span className="font-semibold text-sm text-slate-900 font-taka">৳{shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className='font-medium text-xs'>VAT</span>
            <span className="font-semibold text-sm text-slate-900 font-taka">৳{vatAmount.toFixed(2)}</span>
          </div>
          {needBag && (
            <div className="flex justify-between items-center text-emerald-700">
              <span className='font-medium text-xs'>SHOPPING BAG</span>
              <span className="font-semibold text-sm font-taka">৳10.00</span>
            </div>
          )}
          <div className="flex justify-between items-center text-slate-600">
            <span className='font-medium text-xs'>DISCOUNT</span>
            <span className="font-semibold text-sm text-rose-600 font-taka">- ৳{discountAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-sm font-semibold text-slate-900 border-t border-slate-200 pt-3">
            <span>TOTAL</span>
            <span className="text-base text-[#006a52] font-taka font-semibold">
              ৳{totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>


      {/* 4. PAYMENT METHOD CARD */}
      <div className="bg-white rounded-md sm:rounded-xl border border-slate-200/90 p-4 sm:p-5 space-y-3">
        <h3 className="font-semibold text-xs sm:text-sm text-slate-900 tracking-wider uppercase border-b border-slate-100 pb-2.5">
          PAYMENT METHOD
        </h3>

        <div className="space-y-2 text-xs">
          {paymentOptions.map((opt) => {
            const IconComp = opt.icon;
            const isSelected = selectedPayment === opt.id;

            return (
              <label
                key={opt.id}
                onClick={() => setSelectedPayment(opt.id)}
                className={`p-2.5 sm:p-3 rounded-md border flex items-center justify-between cursor-pointer transition-all ${isSelected
                    ? 'border-[#006a52] bg-[#e8f3e8]/70 shadow-2xs font-bold text-[#006a52]'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${isSelected ? 'border-[#006a52] bg-[#006a52]' : 'border-slate-300'
                      }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="truncate text-[10px] sm:text-[11px] uppercase font-semibold tracking-wide">
                    {opt.label}
                  </span>
                </div>
                <IconComp className="text-slate-400 shrink-0 text-xs ml-1" />
              </label>
            );
          })}
        </div>

        {/* Checkout Information Disclaimer */}
        <div className="bg-slate-50 rounded-lg sm:rounded-xl p-3 border border-slate-100 text-[11px] text-slate-600 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800">
            <FaCircleCheck className="text-[#006a52]" />
            <span>Checkout Information</span>
          </div>
          <ul className='list-disc pl-4 space-y-1 text-[11px] text-slate-500 leading-tight'>
            <li >Discounted products are not eligible for return or exchange.</li>
            <li >Accept delivered parcels in sealed condition.</li>
            <li >Orders cannot be modified after confirmation.</li>
          </ul>
        </div>

        {/* Place Order CTA Button */}
        <button
          type="button"
          onClick={onPlaceOrder}
          disabled={isSubmitting || cartItems.length === 0}
          className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm py-3 sm:py-3.5 px-4 sm:px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer tracking-widest uppercase mt-2"
        >
          <FaLock className="text-xs" />
          <span>{isSubmitting ? 'PROCESSING...' : 'PLACE ORDER'}</span>
        </button>
      </div>
    </div>
  );
}
