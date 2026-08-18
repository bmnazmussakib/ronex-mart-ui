'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

export default function PopularProductsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    {
      image: "/img/product/product (1).jpeg",
      title: "Wheel Washing Powder 2 in 1 Clean & Fresh",
      category: "CLEANING SUPPLIES",
      rating: "4.4",
      weight: "500 g",
      price: "৳70",
      oldPrice: "৳85",
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
    {
      image: "/img/product/product (7).jpeg",
      title: "Premium Basmati Rice 5kg",
      category: "GROCERY & FOOD",
      rating: "4.9",
      weight: "5 kg",
      price: "৳650",
    },
    {
      image: "/img/product/product (8).jpeg",
      title: "Pure Mustard Oil 1L",
      category: "COOKING ESSENTIALS",
      rating: "4.5",
      weight: "1 L",
      price: "৳320",
    },
    {
      image: "/img/product/product (9).jpeg",
      title: "Tomato Ketchup Squeeze 1kg",
      category: "SAUCES & CONDIMENTS",
      rating: "4.6",
      weight: "1 kg",
      price: "৳180",
    },
    {
      image: "/img/product/product (10).jpeg",
      title: "Full Cream Milk Powder 1kg",
      category: "DAIRY & BEVERAGES",
      rating: "4.7",
      weight: "1 kg",
      price: "৳780",
    },
  ];

  return (
    <div className="py-2">
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#006a52] uppercase block mb-0.5">
            CUSTOMER FAVOURITES
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Popular right now
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden sm:flex border border-slate-200 bg-white hover:border-[#006a52] hover:text-[#006a52] rounded-full px-4 py-1.5 text-xs font-semibold items-center gap-1.5 transition-all text-slate-700 shadow-sm"
          >
            <span>View all products</span>
            <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
          <div className="flex items-center gap-1.5">
            <button
              ref={prevRef}
              aria-label="Previous Product"
              className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              ref={nextRef}
              aria-label="Next Product"
              className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
        className="productSwiper pb-2"
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
