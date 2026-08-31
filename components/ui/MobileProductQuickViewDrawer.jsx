'use client';

import { useState, useEffect, useRef } from 'react';

import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import {
  FaStar,
  FaCircleCheck,
  FaBagShopping,
  FaCalendarCheck,
  FaXmark,
  FaArrowRight,
  FaTruckFast,
  FaShieldHalved,
  FaPlus as FaPlusIcon,
  FaMinus as FaMinusIcon
} from 'react-icons/fa6';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

export default function MobileProductQuickViewDrawer({ isOpen, onClose, product }) {
  const router = useRouter();
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = product || {
    id: "1",
    title: "Product Title",
    image: "/img/product/product (1).jpeg",
    category: "Category",
    rating: 4.8,
    reviewsCount: 42,
    price: "৳100",
    oldPrice: "৳120",
    badge: "",
    weight: "500 g",
    brand: "Ronex Mart",
    stock: "In Stock"
  };

  const images = data.images && data.images.length > 0
    ? data.images
    : [data.image || "/img/product/product (1).jpeg"];

  const weights = data.weights || [data.weight || "500 g", "1 kg", "2 kg"];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isSavedMonthly, setIsSavedMonthly] = useState(false);
  const [actionToast, setActionToast] = useState('');

  // Find quantity directly from global cart state
  const existingCartItem = cartItems.find((item) => String(item.id) === String(data.id));
  const inCartQty = existingCartItem ? existingCartItem.quantity : 0;

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    }
    if (weights && weights.length > 0) {
      setSelectedWeight(weights[0]);
    }
  }, [data.id]);

  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Handle ESC key press & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onCloseRef.current) {
        onCloseRef.current();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);



  if (!mounted) return null;

  const showToast = (msg) => {
    setActionToast(msg);
    setTimeout(() => setActionToast(''), 3000);
  };

  const handleAddToCart = () => {
    addToCart({
      id: data.id,
      title: data.title,
      image: selectedImage,
      price: data.price,
      weight: selectedWeight,
      quantity: 1
    });
  };

  const incrementQty = () => {
    updateQuantity(data.id, 1);
  };

  const decrementQty = () => {
    if (inCartQty <= 1) {
      removeFromCart(data.id);
    } else {
      updateQuantity(data.id, -1);
    }
  };

  const handleBuyNow = () => {
    if (inCartQty === 0) {
      addToCart({
        id: data.id,
        title: data.title,
        image: selectedImage,
        price: data.price,
        weight: selectedWeight,
        quantity: 1
      });
    }
    onClose();
    router.push('/checkout');
  };

  const handleSaveMonthly = () => {
    setIsSavedMonthly(!isSavedMonthly);
    showToast(isSavedMonthly ? 'Removed from monthly list' : 'Added to monthly shopping list!');
  };

  const drawerContent = (
    <div
      className={`md:hidden fixed inset-0 z-[99999] flex items-end justify-center p-0 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-300 ease-in-out touch-none ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Bottom Sheet Card */}
      <div
        className={`relative w-full bg-white rounded-t-3xl border-t border-slate-200 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh] transition-transform duration-300 ease-out transform overscroll-contain ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >


        {/* Drag Indicator handle */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-2.5 shrink-0" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close drawer"
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center transition-all cursor-pointer active:scale-95"
        >
          <FaXmark className="text-base" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 space-y-4">
          {/* Toast Notification */}
          {actionToast && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-2.5 rounded-lg flex items-center gap-2 animate-in fade-in">
              <FaCircleCheck className="text-[#006a52] text-sm shrink-0" />
              <span>{actionToast}</span>
            </div>
          )}

          {/* Product Image & Main Details */}
          <div className="flex flex-col gap-3">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative h-52 flex items-center justify-center p-3">
              {data.badge && (
                <span className="bg-[#f97316] text-white text-[10px] font-bold px-2 py-0.5 rounded-full absolute top-3 left-3 z-10 shadow-2xs">
                  {data.badge}
                </span>
              )}
              
              <button
                type="button"
                onClick={() => setIsWishlist(!isWishlist)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center shadow-2xs active:scale-95 transition-all cursor-pointer"
              >
                {isWishlist ? (
                  <RiHeart3Fill className="text-red-500 text-base" />
                ) : (
                  <RiHeart3Line className="text-slate-500 text-base" />
                )}
              </button>

              <Image
                src={selectedImage}
                alt={data.title || "Product image"}
                fill
                sizes="100vw"
                className="object-contain p-2"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-12 h-12 rounded-lg border overflow-hidden relative shrink-0 p-1 bg-slate-50 cursor-pointer transition-all ${
                      selectedImage === img
                        ? 'border-[#006a52] ring-2 ring-[#006a52]/20'
                        : 'border-slate-200'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="48px"
                      className="object-contain p-0.5"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {data.category || 'Category'}
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <FaCircleCheck className="text-[9px]" />
                  {data.stock || 'In Stock'}
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-900 leading-snug">
                {data.title}
              </h2>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-1.5 flex-wrap">
                <div className="flex items-center gap-1 text-amber-500">
                  <FaStar className="text-xs" />
                  <span className="font-bold text-slate-800">{data.rating || '4.8'}</span>
                </div>
                <span className="text-slate-300">•</span>
                <span>Brand: <strong className="text-slate-700">{data.brand || 'Ronex Mart'}</strong></span>
              </div>
            </div>

            {/* Price Block */}
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
              <div className="flex items-baseline gap-2 font-taka">
                <span className="text-xl font-semibold text-slate-900">{data.price}</span>
                {data.oldPrice && (
                  <span className="text-xs text-slate-400 line-through font-normal">{data.oldPrice}</span>
                )}
              </div>
              {data.weight && (
                <span className="text-[11px] font-semibold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {selectedWeight}
                </span>
              )}
            </div>

            {/* Weight Variant Selector */}
            {weights.length > 0 && (
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                  Weight / Size:
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {weights.map((w, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedWeight(w)}
                      className={`px-2.5 py-1 text-[11px] font-semibold rounded-full border transition-all cursor-pointer ${
                        selectedWeight === w
                          ? 'border-[#006a52] bg-emerald-50 text-[#006a52]'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              {inCartQty === 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-bold uppercase text-xs py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-98"
                >
                  <FaPlusIcon className="text-xs" />
                  <span>Add To Cart</span>
                </button>
              ) : (
                <div className="w-full bg-white border-2 border-[#006a52] text-[#006a52] py-1 px-2 rounded-full flex items-center justify-between shadow-xs">
                  <button
                    onClick={decrementQty}
                    aria-label="Decrease Quantity"
                    className="w-8 h-8 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shrink-0 active:scale-95"
                  >
                    <FaMinusIcon className="text-xs" />
                  </button>
                  <span className="font-bold text-xs text-slate-900 px-2">
                    {inCartQty}
                  </span>

                  <button
                    onClick={incrementQty}
                    aria-label="Increase Quantity"
                    className="w-8 h-8 rounded-full hover:bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-xs transition-colors cursor-pointer shrink-0 active:scale-95"
                  >
                    <FaPlusIcon className="text-xs" />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleBuyNow}
                  className="w-full font-semibold uppercase text-[11px] py-2.5 px-2 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer bg-[#f97316] text-white active:scale-98"
                >
                  <FaBagShopping className="text-xs shrink-0" />
                  <span>Buy Now</span>
                </button>

                <button
                  onClick={handleSaveMonthly}
                  className={`w-full font-semibold uppercase text-[11px] py-2.5 px-2 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer border active:scale-98 ${
                    isSavedMonthly
                      ? 'bg-slate-800 text-white border-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <FaCalendarCheck className="text-xs shrink-0" />
                  <span className="truncate">{isSavedMonthly ? 'Monthly Saved' : 'Monthly List'}</span>
                </button>
              </div>
            </div>

            {/* Footer View Full Details Link */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1"><FaTruckFast className="text-slate-400" /> Express</span>
                <span className="flex items-center gap-1"><FaShieldHalved className="text-slate-400" /> Authentic</span>
              </div>
              <Link
                href={`/product/${data.id}`}
                onClick={onClose}
                className="text-[#006a52] hover:underline font-bold flex items-center gap-1 text-xs"
              >
                <span>Full Details</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
