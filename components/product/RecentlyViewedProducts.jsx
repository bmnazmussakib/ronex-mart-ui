'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from '@/components/ui/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function RecentlyViewedProducts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const recentlyViewedList = [
    {
      id: "1",
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "500 g",
      price: "৳70",
      badge: "Recently Viewed",
    },
    {
      id: "2",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon 400g",
      category: "CLEANING SUPPLIES",
      rating: "4.3",
      weight: "400 g",
      price: "৳60",
    },
    {
      id: "3",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce 340g Bottle",
      category: "GROCERY & FOOD",
      rating: "4.5",
      weight: "340 g",
      price: "৳70",
    },
    {
      id: "4",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar 1kg Pack",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "1 kg",
      price: "৳90",
    },
    {
      id: "5",
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Salt 1kg",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "1 kg",
      price: "৳45",
    },
    {
      id: "6",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Cooking Oil 5L Pet Bottle",
      category: "COOKING ESSENTIALS",
      rating: "4.8",
      weight: "5 L",
      price: "৳850",
    },
  ];

  return (
    <div className="py-2 sm:py-4">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div>
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold uppercase text-slate-900 tracking-wide">
            Recently Viewed Products
          </h2>
        </div>
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            ref={prevRef}
            aria-label="Previous Product"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-2xs cursor-pointer z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Product"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-2xs cursor-pointer z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={12}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 14 },
          768: { slidesPerView: 4, spaceBetween: 14 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 16 },
        }}
        className="recentlyViewedSwiper pb-2"
      >
        {recentlyViewedList.map((item, idx) => (
          <SwiperSlide key={idx} className="!h-auto flex">
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
