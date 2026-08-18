'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function TopBrandsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const brands = [
    { name: "Unilever", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80" },
    { name: "Nestle", logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80" },
    { name: "Square", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&q=80" },
    { name: "PRAN", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=200&q=80" },
    { name: "ACI", logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?auto=format&fit=crop&w=200&q=80" },
    { name: "Fresh", logo: "https://images.unsplash.com/photo-1542744094-3a3172720177?auto=format&fit=crop&w=200&q=80" },
  ];

  return (
    <div className="py-2">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Top Partner Brands
        </h3>
        <div className="flex items-center gap-1">
          <button
            ref={prevRef}
            aria-label="Previous Brand"
            className="w-6 h-6 rounded-full border border-slate-200 bg-white hover:bg-[#0b5d44] hover:text-white text-slate-600 flex items-center justify-center text-[10px] transition-colors cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            aria-label="Next Brand"
            className="w-6 h-6 rounded-full border border-slate-200 bg-white hover:bg-[#0b5d44] hover:text-white text-slate-600 flex items-center justify-center text-[10px] transition-colors cursor-pointer"
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
          480: { slidesPerView: 4, spaceBetween: 12 },
          640: { slidesPerView: 5, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
        }}
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl border border-slate-200/80 p-3 h-14 flex items-center justify-center hover:border-[#0b5d44] transition-all cursor-pointer shadow-xs">
              <span className="font-bold text-xs text-slate-700 tracking-wide">{brand.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
