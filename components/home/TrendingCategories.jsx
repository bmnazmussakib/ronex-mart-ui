'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa6';

export default function TrendingCategories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const categories = [
    {
      title: "Cooking Essentials",
      slug: "cooking-essentials",
      itemCount: "480+ Items",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Fresh Fruits & Veggies",
      slug: "grocery-and-food",
      itemCount: "320+ Items",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Beverages & Drinks",
      slug: "beverages",
      itemCount: "250+ Items",
      img: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Cleaning Supplies",
      slug: "cleaning-supplies",
      itemCount: "190+ Items",
      img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Personal Care",
      slug: "personal-care",
      itemCount: "410+ Items",
      img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Dairy & Frozen Food",
      slug: "bakery-and-dairy",
      itemCount: "280+ Items",
      img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Snacks & Chips",
      slug: "grocery-and-food",
      itemCount: "350+ Items",
      img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Bakery & Cookies",
      slug: "bakery-and-dairy",
      itemCount: "210+ Items",
      img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="py-3 sm:py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div>
          <h2 className="text-base sm:text-xl lg:text-2xl font-semibold uppercase text-slate-900">
            Trending Categories
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              ref={prevRef}
              aria-label="Previous Category"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-sm cursor-pointer z-10"
            >
              <FaChevronLeft />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Category"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-sm cursor-pointer z-10"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={8}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 8 },
          420: { slidesPerView: 4, spaceBetween: 8 },
          560: { slidesPerView: 5, spaceBetween: 10 },
          720: { slidesPerView: 6, spaceBetween: 12 },
          960: { slidesPerView: 7, spaceBetween: 12 },
          1200: { slidesPerView: 8, spaceBetween: 14 },
        }}
        className="trendingCategorySwiper pb-3 pt-1"
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="!h-auto flex">
            <Link
              href={`/category/${cat.slug}`}
              className="flex flex-col items-center justify-between transition-all duration-300 group w-full h-full text-center relative py-1"
            >
              {/* Circular Image */}
              <div className="w-14 h-14 min-[420px]:w-16 min-[420px]:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white shadow-md border-2 border-slate-100 group-hover:shadow-lg group-hover:shadow-emerald-950/10 transition-all duration-300 overflow-hidden my-1 flex items-center justify-center shrink-0">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover rounded-full group-hover:scale-115 transition-transform duration-500"
                />
              </div>

              {/* Title & Count Badge */}
              <div className="flex flex-col items-center w-full z-10 mt-0.5 sm:mt-1">
                <h3 className="font-medium text-[11px] sm:text-xs md:text-sm text-slate-800 group-hover:text-[#006a52] transition-colors line-clamp-1">
                  {cat.title}
                </h3>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-500 group-hover:text-white font-semibold bg-slate-100 group-hover:bg-[#006a52] px-1.5 sm:px-2 py-0.5 rounded-full mt-0.5 sm:mt-1 transition-colors duration-300">
                  {cat.itemCount}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
