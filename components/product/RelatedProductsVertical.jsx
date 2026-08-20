'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import ProductCard from '@/components/ui/ProductCard';
import HorizontalProductCard from '@/components/ui/HorizontalProductCard';

export default function RelatedProductsVertical() {
  const prevRefDesktop = useRef(null);
  const nextRefDesktop = useRef(null);
  const prevRefMobile = useRef(null);
  const nextRefMobile = useRef(null);

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
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-3 sm:p-4 shadow-2xs">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900">
          Related Products
        </h3>

        {/* Mobile & Tablet Nav Arrows */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            ref={prevRefMobile}
            aria-label="Previous Slide"
            className="w-6 h-6 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRefMobile}
            aria-label="Next Slide"
            className="w-6 h-6 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Desktop Nav Arrows */}
        <div className="hidden lg:flex items-center gap-1">
          <button
            ref={prevRefDesktop}
            aria-label="Previous Slide"
            className="w-6 h-6 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronUp />
          </button>
          <button
            ref={nextRefDesktop}
            aria-label="Next Slide"
            className="w-6 h-6 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* 1. Mobile & Tablet View (Horizontal Carousel showing ProductCard) */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={2}
          spaceBetween={12}
          loop={true}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRefMobile.current;
            swiper.params.navigation.nextEl = nextRefMobile.current;
          }}
          navigation={{
            prevEl: prevRefMobile.current,
            nextEl: nextRefMobile.current,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 12 },
            768: { slidesPerView: 4, spaceBetween: 14 },
          }}
          className="w-full pb-1"
        >
          {relatedProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto flex">
              {/* <ProductCard {...item} /> */}
              <HorizontalProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Desktop View (Vertical Slider showing HorizontalProductCard) */}
      <div className="hidden lg:block h-[440px] overflow-hidden">
        <Swiper
          direction="vertical"
          modules={[Navigation, Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRefDesktop.current;
            swiper.params.navigation.nextEl = nextRefDesktop.current;
          }}
          navigation={{
            prevEl: prevRefDesktop.current,
            nextEl: nextRefDesktop.current,
          }}
          className="h-full w-full verticalRelatedSwiper"
        >
          {relatedProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <HorizontalProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
