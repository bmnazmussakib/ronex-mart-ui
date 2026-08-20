'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';

export default function ProductGallery({ images, defaultBadge }) {
  const galleryImages =
    images && images.length > 0
      ? images
      : [
          "/img/product/product (1).jpeg",
          "/img/product/product (2).jpeg",
          "/img/product/product (3).jpeg",
          "/img/product/product (4).jpeg",
        ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleThumbClick = (idx) => {
    setActiveIndex(idx);
    if (mainSwiper) {
      mainSwiper.slideTo(idx);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Box with Swiper */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 sm:p-6 flex items-center justify-center relative overflow-hidden aspect-square group shadow-2xs">
        {defaultBadge && (
          <span className="bg-[#f97316] text-white text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full absolute top-3 sm:top-4 left-3 sm:left-4 z-10 shadow-2xs">
            {defaultBadge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlist(!isWishlist)}
          aria-label="Toggle Wishlist"
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center transition-all cursor-pointer hover:scale-105 group/heart"
        >
          {isWishlist ? (
            <RiHeart3Fill className="text-red-500 text-lg sm:text-xl" />
          ) : (
            <RiHeart3Line className="text-slate-400 text-lg sm:text-xl group-hover/heart:text-red-500 transition-colors" />
          )}
        </button>

        <Swiper
          onSwiper={setMainSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full h-full productGallerySwiper"
        >
          {galleryImages.map((img, idx) => (
            <SwiperSlide key={idx} className="!flex !items-center !justify-center h-full w-full">
              <div className="w-full h-full flex items-center justify-center p-2 relative">
                <Image
                  src={img}
                  alt={`Product Preview ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Visible on mobile touch & desktop hover) */}
        <button
          ref={prevRef}
          aria-label="Previous Image"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-700 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 z-20 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <FaChevronLeft />
        </button>
        <button
          ref={nextRef}
          aria-label="Next Image"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs border border-slate-200 text-slate-700 hover:bg-[#006a52] hover:text-white hover:border-[#006a52] flex items-center justify-center text-[10px] sm:text-xs transition-all shadow-md cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 z-20 sm:opacity-0 sm:group-hover:opacity-100"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbClick(idx)}
            className={`aspect-square rounded-lg bg-white border flex items-center justify-center overflow-hidden transition-all cursor-pointer relative ${
              activeIndex === idx
                ? 'border-[#006a52] ring-2 ring-[#006a52]/20'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              fill
              sizes="100px"
              className="object-contain p-1.5 sm:p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
