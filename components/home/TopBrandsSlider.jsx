'use client';

import Marquee from 'react-fast-marquee';

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
      <div className="text-center mb-5">
        
        <h2 className="text-xl sm:text-2xl font-semibold uppercase text-slate-900">
          Top Partner Brands
        </h2>
      </div>

      <Marquee pauseOnHover={true} speed={40} gradient={false} className="overflow-hidden py-2">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="mx-3 sm:mx-4 bg-white rounded-xl h-16 sm:h-18 flex items-center justify-center transition-all cursor-pointer group px-4 overflow-hidden"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

