'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from '@/components/ui/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function RelatedProducts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const relatedList = [
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
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold uppercase text-slate-900">
            Related Products You May Like
          </h2>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            ref={prevRef}
            aria-label="Previous Product"
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Product"
            className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={16}
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
          480: { slidesPerView: 2, spaceBetween: 16 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          768: { slidesPerView: 4, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
        className="relatedSwiper pb-2"
      >
        {relatedList.map((item, idx) => (
          <SwiperSlide key={idx} className="!h-auto flex">
            <ProductCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
