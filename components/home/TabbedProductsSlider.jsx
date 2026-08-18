'use client';

import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import ProductCard from '@/components/ui/ProductCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function TabbedProductsSlider() {
  const [activeTab, setActiveTab] = useState('new-arrival');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const tabProducts = {
    'new-arrival': [
      {
        image: "/img/product/product (1).jpeg",
        title: "Kirkland Organic Raw & Unfiltered Honey 3pcs",
        category: "GROCERY & FOOD",
        rating: "4.8",
        weight: "680 g x 3",
        price: "৳5,550",
      },
      {
        image: "/img/product/product (2).jpeg",
        title: "Kirkland Honey Pet Bottle 680 Gm",
        category: "GROCERY & FOOD",
        rating: "4.7",
        weight: "680 g",
        price: "৳1,890",
      },
      {
        image: "/img/product/product (3).jpeg",
        title: "Don Victor Blossom Pure Honey Glass Jar 454g",
        category: "IMPORTED FOODS",
        rating: "4.6",
        weight: "454 g",
        price: "৳1,850",
      },
      {
        image: "/img/product/product (4).jpeg",
        title: "Don Victor Honey With Comb Glass Jar 454g",
        category: "IMPORTED FOODS",
        rating: "4.9",
        weight: "454 g",
        price: "৳2,750",
      },
      {
        image: "/img/product/product (5).jpeg",
        title: "Smuckers Concord Grape Jelly Glass Jar 1.36kg",
        category: "IMPORTED FOODS",
        rating: "4.8",
        weight: "1.36 kg",
        price: "৳2,600",
        oldPrice: "৳2,890",
        badge: "290 TK OFF",
      },
      {
        image: "/img/product/product (6).jpeg",
        title: "Sunflower Pure Cooking Oil Bottle 5L",
        category: "COOKING ESSENTIALS",
        rating: "4.8",
        weight: "5 L",
        price: "৳850",
      },
    ],
    'imported-products': [
      {
        image: "/img/product/product (3).jpeg",
        title: "Don Victor Blossom Pure Honey Glass Jar 454g",
        category: "IMPORTED FOODS",
        rating: "4.6",
        weight: "454 g",
        price: "৳1,850",
      },
      {
        image: "/img/product/product (4).jpeg",
        title: "Don Victor Honey With Comb Glass Jar 454g",
        category: "IMPORTED FOODS",
        rating: "4.9",
        weight: "454 g",
        price: "৳2,750",
      },
      {
        image: "/img/product/product (5).jpeg",
        title: "Smuckers Concord Grape Jelly Glass Jar 1.36kg",
        category: "IMPORTED FOODS",
        rating: "4.8",
        weight: "1.36 kg",
        price: "৳2,600",
        oldPrice: "৳2,890",
        badge: "290 TK OFF",
      },
      {
        image: "/img/product/product (7).jpeg",
        title: "Premium Basmati Rice 5kg",
        category: "GROCERY & FOOD",
        rating: "4.9",
        weight: "5 kg",
        price: "৳650",
      },
    ],
    'imported-usa': [
      {
        image: "/img/product/product (1).jpeg",
        title: "Kirkland Organic Raw & Unfiltered Honey 3pcs",
        category: "GROCERY & FOOD",
        rating: "4.8",
        weight: "680 g x 3",
        price: "৳5,550",
      },
      {
        image: "/img/product/product (2).jpeg",
        title: "Kirkland Honey Pet Bottle 680 Gm",
        category: "GROCERY & FOOD",
        rating: "4.7",
        weight: "680 g",
        price: "৳1,890",
      },
      {
        image: "/img/product/product (5).jpeg",
        title: "Smuckers Concord Grape Jelly Glass Jar 1.36kg",
        category: "IMPORTED FOODS",
        rating: "4.8",
        weight: "1.36 kg",
        price: "৳2,600",
        oldPrice: "৳2,890",
        badge: "290 TK OFF",
      },
    ]
  };

  const currentProducts = tabProducts[activeTab] || tabProducts['new-arrival'];

  return (
    <div className="py-4">
      {/* Tabs Header Bar */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-sm gap-1">
          <button
            onClick={() => setActiveTab('new-arrival')}
            className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'new-arrival'
                ? 'bg-[#006a52] text-white shadow-sm font-bold'
                : 'text-slate-600 font-semibold hover:text-[#006a52] hover:bg-slate-50'
            }`}
          >
            New Arrival
          </button>
          <button
            onClick={() => setActiveTab('imported-products')}
            className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'imported-products'
                ? 'bg-[#006a52] text-white shadow-sm font-bold'
                : 'text-slate-600 font-semibold hover:text-[#006a52] hover:bg-slate-50'
            }`}
          >
            Imported Products
          </button>
          <button
            onClick={() => setActiveTab('imported-usa')}
            className={`text-xs px-5 py-2 rounded-full transition-all cursor-pointer ${
              activeTab === 'imported-usa'
                ? 'bg-[#006a52] text-white shadow-sm font-bold'
                : 'text-slate-600 font-semibold hover:text-[#006a52] hover:bg-slate-50'
            }`}
          >
            Imported From USA
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <Swiper
          key={activeTab}
          modules={[Autoplay, Navigation]}
          slidesPerView={2}
          spaceBetween={16}
          loop={currentProducts.length > 2}
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
          className="tabProductSwiper pb-2"
        >
          {currentProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto flex">
              <ProductCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Navigation Buttons */}
        <button
          ref={prevRef}
          aria-label="Previous Slide"
          className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 -left-4 z-20"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={nextRef}
          aria-label="Next Slide"
          className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 -right-4 z-20"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
