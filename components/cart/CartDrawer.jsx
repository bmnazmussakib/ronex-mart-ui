'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  FaXmark,
  FaBasketShopping,
  FaPlus,
  FaMinus,
  FaTrashCan,
  FaTruckFast,
  FaArrowRight,
} from 'react-icons/fa6';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalItemsCount,
    subtotal,
  } = useCart();

  const freeDeliveryThreshold = 500;
  const progressPercent = Math.min(100, (subtotal / freeDeliveryThreshold) * 100);
  const remainingForFree = Math.max(0, freeDeliveryThreshold - subtotal);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop Overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Drawer Container (Right Slide-over with smooth translation) */}
      <div
        className={`fixed inset-y-0 right-0 max-w-full flex pl-10 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-200 bg-[#043326] text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <FaBasketShopping className="text-emerald-300 text-sm" />
              </div>
              <div>
                <h2 className="font-bold text-sm leading-none text-white">Your Cart</h2>
                <span className="text-[11px] text-emerald-200/70 font-medium">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              aria-label="Close Cart"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <FaXmark className="text-base" />
            </button>
          </div>

          {/* Free Delivery Bar */}
          <div className="bg-emerald-50/80 px-5 py-3 border-b border-emerald-100 shrink-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900 mb-1.5">
              <FaTruckFast className="text-[#006a52] text-sm" />
              {remainingForFree > 0 ? (
                <span>
                  Add <strong className="font-taka font-bold text-[#006a52]">৳{remainingForFree}</strong> more for <strong className="uppercase text-[#006a52]">Free Delivery</strong>!
                </span>
              ) : (
                <span className="text-[#006a52] font-bold">🎉 Congratulations! You unlocked Free Delivery!</span>
              )}
            </div>
            <div className="w-full bg-emerald-200/60 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-[#006a52] h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 divide-y divide-slate-100 custom-scrollbar">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-2xl">
                  <FaBasketShopping />
                </div>
                <h3 className="font-bold text-sm text-slate-800">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Looks like you haven't added anything to your cart yet. Explore our grocery deals!
                </p>
                <button
                  onClick={closeCart}
                  className="mt-2 bg-[#006a52] text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-[#005240] transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="py-3.5 flex items-center gap-3.5 group">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-xs text-slate-800 line-clamp-1 leading-snug">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block mt-0.5">
                      {item.weight}
                    </span>

                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-sm text-slate-900 font-taka">
                        {item.price}
                      </span>

                      {/* Quantity Controller Pill */}
                      <div className="flex items-center border border-slate-200 rounded-full bg-white p-0.5 shadow-xs">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaMinus className="text-[9px]" />
                        </button>
                        <span className="w-7 text-center font-bold text-xs text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center transition-colors cursor-pointer"
                        >
                          <FaPlus className="text-[9px]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                    className="text-slate-300 hover:text-rose-600 p-1 transition-colors cursor-pointer shrink-0"
                  >
                    <FaTrashCan className="text-xs" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3 shrink-0">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900 text-sm font-taka">
                    ৳{subtotal}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>Estimated Delivery</span>
                  <span className="font-semibold text-emerald-700">Calculated at checkout</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={closeCart}
                  className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs py-3 px-4 rounded-full transition-all text-center cursor-pointer"
                >
                  Continue Shopping
                </button>
                <Link
                  href="#"
                  onClick={closeCart}
                  className="bg-[#006a52] hover:bg-[#005240] text-white font-bold text-xs py-3 px-4 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-md text-center"
                >
                  <span>Checkout</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
