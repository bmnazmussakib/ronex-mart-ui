'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

export default function TopBrandsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const brands = [
    { name: "Nestlé", items: "24+ Items", img: "/img/brand/brand (1).jpeg" },
    { name: "PRAN Group", items: "45+ Items", img: "/img/brand/brand (2).jpeg" },
    { name: "Unilever", items: "38+ Items", img: "/img/brand/brand (3).jpeg" },
    { name: "BD Foods", items: "18+ Items", img: "/img/brand/brand (4).jpeg" },
    { name: "Fresh", items: "52+ Items", img: "/img/brand/brand (5).jpeg" },
    { name: "A.B Traders", items: "15+ Items", img: "/img/brand/brand (6).jpeg" },
    { name: "ACI Pure", items: "30+ Items", img: "/img/brand/brand (7).jpeg" },
    { name: "Square Foods", items: "40+ Items", img: "/img/brand/brand (8).jpeg" },
    { name: "Kazi Farms", items: "20+ Items", img: "/img/brand/brand (9).jpeg" },
    { name: "Golden Harvest", items: "16+ Items", img: "/img/brand/brand (10).jpeg" },
    { name: "Radhuni", items: "32+ Items", img: "/img/brand/brand (11).jpeg" },
    { name: "Teer", items: "28+ Items", img: "/img/brand/brand (12).jpeg" },
    { name: "Ifad Multi Products", items: "22+ Items", img: "/img/brand/brand (13).jpeg" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#006a52] uppercase block mb-0.5">
            FEATURED PARTNERS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Top Brands</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            aria-label="Previous Brand"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#0b5d44] hover:text-white hover:border-[#0b5d44] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            ref={nextRef}
            aria-label="Next Brand"
            className="w-7 h-7 rounded-full border border-slate-200 bg-slate-50 hover:bg-[#0b5d44] hover:text-white hover:border-[#0b5d44] text-slate-600 flex items-center justify-center text-xs transition-all shadow-sm cursor-pointer z-10"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={2}
        spaceBetween={14}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          480: { slidesPerView: 3, spaceBetween: 14 },
          640: { slidesPerView: 4, spaceBetween: 14 },
          768: { slidesPerView: 5, spaceBetween: 16 },
          1024: { slidesPerView: 6, spaceBetween: 16 },
          1280: { slidesPerView: 7, spaceBetween: 16 },
        }}
        className="brandSwiper pb-2"
      >
        {brands.map((b, idx) => (
          <SwiperSlide key={idx}>
            <Link
              href="#"
              className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#0b5d44] rounded-2xl p-3 text-center transition-all group shadow-sm hover:shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-full h-20 bg-slate-50 rounded-xl p-2.5 mb-2 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform overflow-hidden">
                <img src={b.img} alt={b.name} className="max-h-full max-w-full object-contain" />
              </div>
              <h4 className="font-semibold text-xs text-slate-800 group-hover:text-[#0b5d44] line-clamp-1">
                {b.name}
              </h4>
              <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                {b.items}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
