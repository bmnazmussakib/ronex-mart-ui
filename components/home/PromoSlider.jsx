'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

export default function PromoSlider() {
  const slides = [
    { title: "Fresh Seafood", img: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=350&q=80" },
    { title: "Beverages & Soda", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=350&q=80" },
    { title: "Home Care", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=350&q=80" },
    { title: "Bakery & Cakes", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=350&q=80" },
    { title: "Cookware", img: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=350&q=80" },
    { title: "Fresh Fruits", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=350&q=80" },
    { title: "Home Appliances", img: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=350&q=80" },
    { title: "Fragrances", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=350&q=80" },
    { title: "Gadgets & Tech", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=350&q=80" },
    { title: "Beauty Care", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=350&q=80" },
    { title: "Hair Care", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=350&q=80" },
    { title: "Combos & Deals", img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=350&q=80" },
  ];

  return (
    <div className="relative py-1">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 6, spaceBetween: 12 },
          640: { slidesPerView: 7, spaceBetween: 12 },
          768: { slidesPerView: 8, spaceBetween: 14 },
          1024: { slidesPerView: 9, spaceBetween: 14 },
          1280: { slidesPerView: 10, spaceBetween: 14 },
        }}
        className="promoSwiper pb-1"
      >
        {slides.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link
              href="#"
              className="block bg-white border border-slate-200/90 hover:border-[#006a52] rounded-md sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-full aspect-square bg-slate-50 rounded-md sm:rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
