'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import CompactRelatedProductCard from '@/components/product/CompactRelatedProductCard';

export default function RelatedProductsVertical() {
  const [desktopSwiper, setDesktopSwiper] = useState(null);
  const [mobileSwiper, setMobileSwiper] = useState(null);

  const relatedProducts = [
    {
      id: '1',
      image: '/img/product/product (2).jpeg',
      title: 'Trix Dish Washing Bar Lemon 400g',
      category: 'CLEANING SUPPLIES',
      oldPrice: '৳80',
      price: '৳60',
      rating: 4.5,
      weight: '400 g',
    },
    {
      id: '2',
      image: '/img/product/product (3).jpeg',
      title: 'Pran Hot Sauce 340g Bottle',
      category: 'GROCERY & FOOD',
      oldPrice: '৳90',
      price: '৳70',
      rating: 4.6,
      weight: '340 g',
    },
    {
      id: '3',
      image: '/img/product/product (4).jpeg',
      title: 'Fresh Refined Sugar 1kg Pack',
      category: 'GROCERY & FOOD',
      oldPrice: '৳100',
      price: '৳90',
      rating: 4.8,
      weight: '1 kg',
    },
    {
      id: '4',
      image: '/img/product/product (5).jpeg',
      title: 'Smuckers Concord Grape Jelly 1.36kg',
      category: 'IMPORTED FOODS',
      oldPrice: '৳2,890',
      price: '৳2,600',
      rating: 4.9,
      weight: '1.36 kg',
    },
    {
      id: '5',
      image: '/img/product/product (6).jpeg',
      title: 'Sunflower Cooking Oil 5L Pet Bottle',
      category: 'COOKING ESSENTIALS',
      oldPrice: '৳950',
      price: '৳850',
      rating: 4.7,
      weight: '5 L',
    },
    {
      id: '6',
      image: '/img/product/product (7).jpeg',
      title: 'Premium Miniket Rice Special Pack 5kg',
      category: 'GROCERY & FOOD',
      oldPrice: '৳420',
      price: '৳380',
      rating: 4.9,
      weight: '5 kg',
    },
    {
      id: '7',
      image: '/img/product/product (1).jpeg',
      title: 'Wheel Washing Powder 2 in 1 Clean & Fresh',
      category: 'CLEANING SUPPLIES',
      oldPrice: '৳85',
      price: '৳70',
      rating: 4.8,
      weight: '500 g',
    },
    {
      id: '8',
      image: '/img/product/product (3).jpeg',
      title: 'Kirkland Organic Raw & Unfiltered Honey',
      category: 'IMPORTED FOODS',
      oldPrice: '৳2,100',
      price: '৳1,890',
      rating: 4.8,
      weight: '680 g',
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-3 sm:p-4 shadow-2xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900">
          Related Products
        </h3>

        {/* Mobile & Tablet Nav Arrows */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={() => mobileSwiper?.slidePrev()}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => mobileSwiper?.slideNext()}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Desktop Nav Arrows */}
        <div className="hidden lg:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => desktopSwiper?.slidePrev()}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            <FaChevronUp />
          </button>
          <button
            type="button"
            onClick={() => desktopSwiper?.slideNext()}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all cursor-pointer shadow-2xs active:scale-95"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* 1. Mobile & Tablet View */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setMobileSwiper}
          slidesPerView={2}
          spaceBetween={12}
          speed={500}
          loop={true}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, spaceBetween: 14 },
          }}
          className="w-full pb-1"
        >
          {relatedProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto flex">
              <CompactRelatedProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Desktop View */}
      <div className="hidden lg:block h-[440px] overflow-hidden">
        <Swiper
          direction="vertical"
          modules={[Navigation, Autoplay]}
          onSwiper={setDesktopSwiper}
          slidesPerView={5}
          spaceBetween={10}
          speed={500}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="h-full w-full verticalRelatedSwiper"
        >
          {relatedProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-[76px]">
              <CompactRelatedProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
