'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import {
  FaBars,
  FaMagnifyingGlass,
  FaUser,
  FaBasketShopping,
  FaXmark,
  FaStar,
  FaArrowRight,
  FaPlus,
  FaRotateRight,
} from 'react-icons/fa6';
import { RiHeart3Line } from 'react-icons/ri';

export default function MainHeader() {
  const { openCart, totalItemsCount, toggleSidebar, addToCart } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef(null);

  // Mock Products Database for Search
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
    {
      id: "107",
      image: "/img/product/product (7).jpeg",
      title: "Premium Miniket Rice Special Pack 5kg",
      category: "GROCERY & FOOD",
      price: "৳380",
      rating: 4.9,
    },
    {
      id: "108",
      image: "/img/product/product (1).jpeg",
      title: "Rin Advanced Detergent Powder 1kg",
      category: "CLEANING SUPPLIES",
      price: "৳140",
      oldPrice: "৳160",
      rating: 4.7,
    },
  ];

  // Filter products based on search input
  const filteredProducts = searchQuery.trim()
    ? mockProducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockProducts;

  // Handle Outside Click to Close Dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const popularTags = ["Washing Powder", "Sunflower Oil", "Sugar 1kg", "Pran Sauce", "Salt"];

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5">
      <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image
              src="/img/logo.png"
              alt="RonexMart Logo"
              width={180}
              height={50}
              priority
              className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-transform"
            />
          </Link>
        </div>

        {/* Center: Search Bar with Live Results Dropdown */}
        <div ref={searchContainerRef} className="hidden sm:block flex-1 max-w-2xl mx-1 sm:mx-4 relative z-50">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              placeholder="Search for groceries, beverages, snacks..."
              className="w-full pl-4 sm:pl-5 pr-11 sm:pr-14 py-2 sm:py-2.5 rounded-full border border-slate-300 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-hidden transition-all bg-slate-50/50 hover:bg-white focus:bg-white shadow-2xs"
            />

            {searchQuery ? (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-10 sm:right-12 text-slate-400 hover:text-slate-600 text-xs p-1"
              >
                <FaXmark />
              </button>
            ) : null}

            <button
              type="button"
              aria-label="Search"
              className="absolute right-1 sm:right-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <FaMagnifyingGlass />
            </button>
          </div>

          {/* Live Search Results Dropdown Overlay */}
          {isFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Popular Tags Header (when query is empty) */}
              {!searchQuery && (
                <div className="p-3 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2 overflow-x-auto custom-scrollbar">
                  <span className="text-[10px] font-semibold uppercase text-slate-400 shrink-0">Popular:</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {popularTags.map((tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSearchQuery(tag)}
                        className="text-[11px] bg-white border border-slate-200 hover:border-[#006a52] text-slate-600 hover:text-[#006a52] px-2.5 py-0.5 rounded-full transition-colors cursor-pointer shrink-0 font-medium"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Match List */}
              <div className="max-h-80 overflow-y-auto custom-scrollbar divide-y divide-slate-100 p-2">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="p-2 sm:p-2.5 rounded-xl hover:bg-slate-50/80 flex items-center justify-between gap-3 transition-colors group cursor-pointer"
                    >
                      <Link
                        href={`/product/${product.id}`}
                        onClick={() => setIsFocused(false)}
                        className="flex items-center gap-3 flex-1 min-w-0"
                      >
                        {/* Thumbnail */}
                        <div className="w-11 h-11 bg-white border border-slate-200/90 rounded-md shrink-0 overflow-hidden relative">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            sizes="44px"
                            className="object-contain p-1 group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Title & Info */}
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

                      {/* Price & Quick Add Button */}
                      <div className="flex items-center gap-2.5 shrink-0">
                        <div className="text-right font-taka">
                          <span className="text-xs sm:text-sm font-semibold text-slate-900 block">
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
                    No products found matching "{searchQuery}". Try a different keyword.
                  </div>
                )}
              </div>

              {/* Popular Search Tags Bar */}
              <div className="p-3 bg-slate-50/80 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-slate-500 font-medium mr-1">Top Searches:</span>
                {popularTags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag)}
                    className="text-[11px] bg-white hover:bg-emerald-50 text-slate-700 hover:text-[#006a52] border border-slate-200 px-2.5 py-0.5 rounded-full transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Bottom View All Link */}
              <Link
                href={`/category${searchQuery ? `?search=${searchQuery}` : ''}`}
                onClick={() => setIsFocused(false)}
                className="p-2.5 bg-[#006a52] hover:bg-[#005240] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View All Products</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
          )}
        </div>

        {/* Right: Action Buttons & Menu Button */}
        <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 shrink-0 font-semibold text-slate-700">
          {/* Action Buttons: Reorder, Cart, Wishlist, Login */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-4 lg:gap-5">
            {/* Reorder */}
            <Link
              href="/profile"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group"
            >
              <div className="relative flex items-center justify-center">
                <FaRotateRight className="text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] transition-all" />
              </div>
              <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52] uppercase">Reorder</span>
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={openCart}
              aria-label="Open Cart"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <FaBasketShopping className="text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52]" />
                <span className="absolute -top-1.5 -right-2 bg-[#599f05] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#599f05] shadow-xs">
                  {totalItemsCount}
                </span>
              </div>
              <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52] uppercase">Cart</span>
            </button>

            {/* Wishlist */}
            <Link
              href="/profile"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group"
            >
              <div className="relative flex items-center justify-center">
                <RiHeart3Line className="text-xl sm:text-2xl lg:text-3xl text-slate-800 group-hover:text-[#006a52] transition-all" />
                <span className="absolute -top-1.5 -right-2 bg-[#599f05] text-white text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#599f05] shadow-xs">
                  0
                </span>
              </div>
              <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52] uppercase">Wishlist</span>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#006a52] transition-colors group"
            >
              <div className="relative flex items-center justify-center">
                <FaUser className="text-lg sm:text-xl lg:text-2xl text-slate-800 group-hover:text-[#006a52] transition-all" />
              </div>
              <span className="hidden lg:inline text-xs text-slate-600 font-semibold group-hover:text-[#006a52] uppercase">Login</span>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleSidebar}
            className="xl:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-[#006a52] transition-colors cursor-pointer"
            aria-label="Toggle categories menu"
          >
            <FaBars className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
