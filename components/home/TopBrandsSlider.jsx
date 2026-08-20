'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function TopBrandsSlider() {
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
    <div className="py-3 overflow-hidden">
      <div className="text-center mb-3 sm:mb-5">
        <h2 className="text-base sm:text-xl lg:text-2xl font-semibold uppercase text-slate-900">
          Top Partner Brands
        </h2>
      </div>

      <Marquee pauseOnHover={true} speed={35} gradient={false} className="overflow-hidden py-1 sm:py-2">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="mx-1.5 sm:mx-3 bg-white rounded-lg sm:rounded-xl w-24 sm:w-32 lg:w-36 h-12 sm:h-16 lg:h-18 flex items-center justify-center transition-all cursor-pointer group px-2.5 sm:px-4 overflow-hidden relative"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              sizes="144px"
              className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

