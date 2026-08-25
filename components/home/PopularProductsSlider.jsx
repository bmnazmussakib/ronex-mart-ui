'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import ProductCard from '@/components/ui/ProductCard';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa6';

export default function PopularProductsSlider() {
  const swiperRef = useRef(null);

  const products = [
    {
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "500 g",
      price: "৳70",
      oldPrice: "৳85",
      badge: "15 TK OFF",
    },
    {
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon",
      category: "CLEANING SUPPLIES",
      rating: "4.3",
      weight: "400 g bar",
      price: "৳60",
    },
    {
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce",
      category: "GROCERY & FOOD",
      rating: "4.5",
      weight: "340 g bottle",
      price: "৳70",
    },
    {
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "500 g",
      price: "৳70",
      oldPrice: "৳85",
      badge: "15 TK OFF",
    },
    {
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon",
      category: "CLEANING SUPPLIES",
      rating: "4.3",
      weight: "400 g bar",
      price: "৳60",
    },
    {
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce",
      category: "GROCERY & FOOD",
      rating: "4.5",
      weight: "340 g bottle",
      price: "৳70",
    },
    {
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.8",
      weight: "500 g",
      price: "৳70",
      oldPrice: "৳85",
      badge: "15 TK OFF",
    },
    {
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon",
      category: "CLEANING SUPPLIES",
      rating: "4.3",
      weight: "400 g bar",
      price: "৳60",
    },
    {
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce",
      category: "GROCERY & FOOD",
      rating: "4.5",
      weight: "340 g bottle",
      price: "৳70",
    },
    {
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar",
      category: "GROCERY & FOOD",
      rating: "4.7",
      weight: "1 kg",
      price: "৳90",
      badge: "Daily need",
    },
    {
      image: "/img/product/product (5).jpeg",
      title: "Fresh Iodized Salt",
      category: "GROCERY & FOOD",
      rating: "4.6",
      weight: "1 kg",
      price: "৳45",
    },
    {
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Cooking Oil 5L",
      category: "COOKING ESSENTIALS",
      rating: "4.8",
      weight: "5 L",
      price: "৳850",
    },
  ];

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div>
          <h2 className="text-base sm:text-xl lg:text-2xl font-semibold uppercase text-gray-700">
            Popular Products Today
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-[#5ba10b] hover:underline uppercase"
        >
          <span>View All</span>
          <FaArrowRight className="text-[9px] sm:text-[10px]" />
        </Link>
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 3, spaceBetween: 16 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 16 },
          }}
          className="popularSwiper pb-2"
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto flex">
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 left-1 sm:-left-4 z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 right-1 sm:-right-4 z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
