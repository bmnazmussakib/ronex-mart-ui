'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function TopBrandsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const brands = [
    { name: "Brand 1", logo: "/img/brand/brand (1).jpeg" },
    { name: "Brand 2", logo: "/img/brand/brand (2).jpeg" },
    { name: "Brand 3", logo: "/img/brand/brand (3).jpeg" },
    { name: "Brand 4", logo: "/img/brand/brand (4).jpeg" },
    { name: "Brand 5", logo: "/img/brand/brand (5).jpeg" },
    { name: "Brand 6", logo: "/img/brand/brand (6).jpeg" },
    { name: "Brand 7", logo: "/img/brand/brand (7).jpeg" },
    { name: "Brand 8", logo: "/img/brand/brand (8).jpeg" },
    { name: "Brand 9", logo: "/img/brand/brand (9).jpeg" },
    { name: "Brand 10", logo: "/img/brand/brand (10).jpeg" },
    { name: "Brand 11", logo: "/img/brand/brand (11).jpeg" },
    { name: "Brand 12", logo: "/img/brand/brand (12).jpeg" },
    { name: "Brand 13", logo: "/img/brand/brand (13).jpeg" },
  ];

  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
          Top Partner Brands
        </h3>
        <div className="flex items-center gap-1">
          <button
            ref={prevRef}
            aria-label="Previous Brand"
            className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all shadow-2xs cursor-pointer z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Brand"
            className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-[#006a52] hover:text-white hover:border-[#006a52] text-slate-600 flex items-center justify-center text-[10px] transition-all shadow-2xs cursor-pointer z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        spaceBetween={12}
        loop={true}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          480: { slidesPerView: 4, spaceBetween: 12 },
          640: { slidesPerView: 6, spaceBetween: 14 },
          1024: { slidesPerView: 8, spaceBetween: 16 },
        }}
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl border border-slate-200/90 p-2.5 h-16 sm:h-18 flex items-center justify-center hover:border-[#006a52] hover:shadow-md transition-all cursor-pointer group">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
