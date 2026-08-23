'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { FaHeart, FaTrashCan, FaArrowRight } from 'react-icons/fa6';
import WishlistProductCard from '@/components/ui/WishlistProductCard';

export default function ProfileWishlistTab() {
  const { addToCart } = useCart();

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '101',
      image: '/img/product/product (1).jpeg',
      title: 'Wheel Washing Powder 2 in 1 Clean & Fresh',
      category: 'CLEANING SUPPLIES',
      brand: 'Unilever Bangladesh',
      rating: 4.8,
      reviewsCount: 128,
      price: '৳70',
      oldPrice: '৳85',
      discount: '৳15 OFF',
      stock: 'In Stock',
      weight: '500 g',
    },
    {
      id: '102',
      image: '/img/product/product (2).jpeg',
      title: 'Trix Dish Washing Bar Lemon 400g',
      category: 'CLEANING SUPPLIES',
      brand: 'Reckitt Benckiser',
      rating: 4.3,
      reviewsCount: 64,
      price: '৳60',
      oldPrice: '৳80',
      discount: '৳20 OFF',
      stock: 'In Stock',
      weight: '400 g bar',
    },
    {
      id: '103',
      image: '/img/product/product (3).jpeg',
      title: 'Pran Hot Sauce Glass Bottle 340g',
      category: 'GROCERY & FOOD',
      brand: 'PRAN Foods Ltd',
      rating: 4.5,
      reviewsCount: 92,
      price: '৳70',
      oldPrice: '৳90',
      discount: '৳20 OFF',
      stock: 'In Stock',
      weight: '340 g bottle',
    },
    {
      id: '106',
      image: '/img/product/product (6).jpeg',
      title: 'Sunflower Pure Cooking Oil Bottle 5L',
      category: 'COOKING ESSENTIALS',
      brand: 'City Group Ltd',
      rating: 4.8,
      reviewsCount: 210,
      price: '৳850',
      oldPrice: '৳950',
      discount: '৳100 OFF',
      stock: 'In Stock',
      weight: '5 L',
    },
  ]);

  const handleRemove = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear your wishlist?')) {
      setWishlistItems([]);
    }
  };

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      weight: item.weight,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-3 sm:p-5 md:p-6 shadow-xs space-y-4 sm:space-y-5">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-100 pb-3 sm:pb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <FaHeart className="text-rose-500 text-lg sm:text-xl" />
            <span>My Wishlist</span>
            <span className="text-xs sm:text-sm font-normal text-slate-500">({wishlistItems.length} saved items)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            View, manage, and add your favorite items directly to your shopping cart.
          </p>
        </div>

        {wishlistItems.length > 0 && (
          <button
            onClick={handleClearAll}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-3 py-1.5 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FaTrashCan className="text-xs" />
            <span>Clear Wishlist</span>
          </button>
        )}
      </div>

      {/* Wishlist Items Grid */}
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="h-full">
              <WishlistProductCard
                item={item}
                onRemove={handleRemove}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Empty Wishlist State */
        <div className="py-10 sm:py-12 px-4 text-center space-y-3.5 sm:space-y-4 max-w-sm mx-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center text-xl sm:text-2xl border border-rose-100 shadow-inner">
            <FaHeart />
          </div>

          <div className="space-y-1">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">Your Wishlist is Empty</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Explore our wide range of groceries and household essentials to save items for later.
            </p>
          </div>

          <Link
            href="/category"
            className="inline-flex items-center gap-2 bg-[#006a52] hover:bg-[#005240] text-white text-xs font-semibold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all shadow-2xs cursor-pointer"
          >
            <span>Explore Products</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      )}
    </div>
  );
}
