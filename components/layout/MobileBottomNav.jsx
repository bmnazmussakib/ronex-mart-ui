'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import {
  FaHouse,
  FaMagnifyingGlass,
  FaRegHeart,
  FaBasketShopping,
  FaRegUser,
  FaXmark,
  FaStar,
  FaPlus,
  FaArrowRight,
} from 'react-icons/fa6';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { openCart, totalItemsCount, addToCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Products Database for Mobile Search
  const mockProducts = [
    {
      id: "101",
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      price: "৳70",
      oldPrice: "৳85",
      rating: 4.8,
    },
    {
      id: "102",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon 400g",
      category: "CLEANING SUPPLIES",
      price: "৳60",
      oldPrice: "৳80",
      rating: 4.3,
    },
    {
      id: "103",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce Glass Bottle 340g",
      category: "GROCERY & FOOD",
      price: "৳70",
      oldPrice: "৳90",
      rating: 4.5,
    },
    {
      id: "104",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar Pure White 1kg",
      category: "GROCERY & FOOD",
      price: "৳90",
      oldPrice: "৳100",
      rating: 4.7,
    },
    {
      id: "105",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Vacuum Salt 1kg",
      category: "GROCERY & FOOD",
      price: "৳45",
      rating: 4.6,
    },
    {
      id: "106",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Pure Cooking Oil Bottle 5L",
      category: "COOKING ESSENTIALS",
      price: "৳850",
      oldPrice: "৳950",
      rating: 4.8,
    },
  ];

  // Prevent background scrolling when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  const filteredProducts = searchQuery.trim()
    ? mockProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockProducts;

  const popularTags = ["Washing Powder", "Sunflower Oil", "Sugar 1kg", "Pran Sauce", "Salt"];

  return (
    <>
      {/* Mobile User-Friendly Floating Search Modal with Smooth Ease-In-Out Transition */}
      <div
        className={`fixed inset-0 z-50 flex flex-col justify-start p-3 pt-4 sm:hidden transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Translucent Backdrop (Click to Close) */}
        <div
          onClick={() => setIsSearchOpen(false)}
          className={`fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            isSearchOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Floating Search Card Popup */}
        <div
          className={`relative z-10 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh] transition-all duration-300 ease-out transform ${
            isSearchOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : '-translate-y-6 scale-95 opacity-0'
          }`}
        >
            {/* 1. Search Input Header */}
            <div className="p-3 bg-white border-b border-slate-100 flex items-center gap-2 shrink-0">
              <div className="flex-1 bg-slate-100 rounded-full flex items-center px-3 py-1.5 border border-slate-200 focus-within:border-[#006a52] focus-within:bg-white transition-all">
                <FaMagnifyingGlass className="text-slate-400 text-xs shrink-0 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, groceries..."
                  autoFocus
                  className="w-full text-xs text-slate-800 focus:outline-none bg-transparent placeholder-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <FaXmark className="text-xs" />
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close search"
              >
                <FaXmark className="text-xs" />
              </button>
            </div>

            {/* 2. Popular Tags Bar */}
            <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto custom-scrollbar shrink-0">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider shrink-0">
                Top:
              </span>
              {popularTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(tag)}
                  className="text-[11px] bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#006a52] border border-slate-200 px-2.5 py-0.5 rounded-full whitespace-nowrap cursor-pointer transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* 3. Scrollable Results List */}
            <div className="flex-1 overflow-y-auto p-3 divide-y divide-slate-100 custom-scrollbar max-h-[340px]">
              <div className="pb-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  {searchQuery.trim()
                    ? `Results (${filteredProducts.length})`
                    : 'Suggested Products'}
                </span>
              </div>

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="py-2.5 flex items-center justify-between gap-3 group border-b border-slate-100 last:border-0"
                  >
                    <Link
                      href={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      {/* Thumbnail */}
                      <div className="w-11 h-11 bg-slate-50 border border-slate-200/80 rounded-lg p-1 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider block truncate">
                          {product.category}
                        </span>
                        <h4 className="text-xs font-semibold text-slate-800 group-hover:text-[#006a52] line-clamp-1 leading-snug transition-colors">
                          {product.title}
                        </h4>
                        <div className="flex items-center gap-1 text-amber-400 text-[10px] mt-0.5">
                          <FaStar />
                          <span className="text-slate-600 font-semibold text-[10px]">{product.rating}</span>
                        </div>
                      </div>
                    </Link>

                    {/* Price & Add Button */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="text-right font-taka">
                        <span className="text-xs font-semibold text-slate-900 block">
                          {product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-[10px] text-slate-400 line-through block">
                            {product.oldPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => addToCart({ ...product, quantity: 1 })}
                        className="w-7 h-7 rounded-full bg-[#006a52]/10 hover:bg-[#006a52] text-[#006a52] hover:text-white flex items-center justify-center text-xs transition-colors cursor-pointer"
                        aria-label="Add to cart"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-slate-500 text-xs">
                  No products found matching "{searchQuery}".
                </div>
              )}
            </div>

            {/* 4. View All Footer Link */}
            <div className="p-2.5 bg-slate-50 border-t border-slate-200 shrink-0">
              <Link
                href={`/category${searchQuery ? `?search=${searchQuery}` : ''}`}
                onClick={() => setIsSearchOpen(false)}
                className="w-full bg-[#006a52] hover:bg-[#005240] text-white text-xs font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>View All Results</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          </div>
        </div>

      {/* Floating Bottom Nav */}
      <div className="fixed bottom-4 left-5 right-5 z-40 max-w-sm mx-auto bg-[#1c1d22]/95 backdrop-blur-md text-white rounded-2xl py-2 px-4 shadow-2xl shadow-black/60 border border-slate-800 flex items-center justify-between sm:hidden">
        {/* 1. Search */}
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Search"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <FaMagnifyingGlass className="text-lg" />
        </button>

        {/* 2. Wishlist */}
        <Link
          href="/category"
          aria-label="Wishlist"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer relative"
        >
          <FaRegHeart className="text-xl" />
        </Link>

        {/* 3. Middle Position: Home (#006a52 Theme Circle) */}
        <Link
          href="/"
          aria-label="Home"
          className="w-11 h-11 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center text-xl shadow-lg shadow-emerald-950/50 transition-transform active:scale-95 cursor-pointer shrink-0"
        >
          <FaHouse className="text-lg" />
        </Link>

        {/* 4. Cart */}
        <button
          onClick={openCart}
          aria-label="Cart"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer relative"
        >
          <FaBasketShopping className="text-xl" />
          {totalItemsCount > 0 && (
            <span className="absolute top-1 right-1 bg-[#006a52] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#1c1d22]">
              {totalItemsCount}
            </span>
          )}
        </button>

        {/* 5. Account */}
        <Link
          href="/login"
          aria-label="Account"
          className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <FaRegUser className="text-xl" />
        </Link>
      </div>
    </>
  );
}
