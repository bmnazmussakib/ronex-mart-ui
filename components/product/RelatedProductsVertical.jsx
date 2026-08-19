'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronUp, FaChevronDown, FaStar } from 'react-icons/fa6';

export default function RelatedProductsVertical() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const relatedProducts = [
    {
      id: "1",
      image: "/img/product/product (2).jpeg",
      title: "Trix Dish Washing Bar Lemon 400g",
      rating: 4.5,
      oldPrice: "৳80",
      price: "৳60",
    },
    {
      id: "2",
      image: "/img/product/product (3).jpeg",
      title: "Pran Hot Sauce 340g Bottle",
      rating: 4.0,
      oldPrice: "৳90",
      price: "৳70",
    },
    {
      id: "3",
      image: "/img/product/product (4).jpeg",
      title: "Fresh Refined Sugar 1kg Pack",
      rating: 5.0,
      oldPrice: "৳100",
      price: "৳90",
    },
    {
      id: "4",
      image: "/img/product/product (5).jpeg",
      title: "Smuckers Concord Grape Jelly 1.36kg",
      rating: 4.8,
      oldPrice: "৳2,890",
      price: "৳2,600",
    },
    {
      id: "5",
      image: "/img/product/product (6).jpeg",
      title: "Sunflower Cooking Oil 5L Pet Bottle",
      rating: 4.7,
      oldPrice: "৳950",
      price: "৳850",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-4">
      {/* Header with Title & Vertical Nav Controls */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-800">
          Related Products
        </h3>
        <div className="flex items-center gap-1">
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronUp />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all cursor-pointer"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* Vertical Swiper Slider Container */}
      <div className="h-[340px] overflow-hidden">
        <Swiper
          direction="vertical"
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={12}
          loop={true}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="h-full w-full verticalRelatedSwiper"
        >
          {relatedProducts.map((item, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <Link
                href={`/product/${item.id}`}
                className="flex items-center gap-3 p-2 rounded-lg border border-slate-200/80 bg-white hover:border-[#006a52] hover:shadow-sm transition-all group h-full"
              >
                {/* Product Image */}
                <div className="w-16 h-16 bg-slate-50 rounded-md p-1.5 flex items-center justify-center shrink-0 border border-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs text-slate-800 group-hover:text-[#006a52] line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h4>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400 text-[10px] my-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className="text-amber-200" />
                  </div>
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="text-xs text-slate-400 line-through font-normal">
                        {item.oldPrice}
                      </span>
                    )}
                    <span className="text-sm font-bold text-slate-900">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
