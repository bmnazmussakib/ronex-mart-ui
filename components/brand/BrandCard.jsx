'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaStore } from 'react-icons/fa6';

export default function BrandCard({ brand }) {
  return (
    <Link
      href={`/brand-shop/${brand.slug || 'unilever'}`}
      className="group bg-white rounded-xl border border-slate-200/90 hover:border-[#006a52]/40 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer p-4 text-center items-center h-full"
    >
      {/* Brand Logo Container */}
      <div className="w-full h-24 sm:h-28 rounded-lg p-3 flex items-center justify-center relative overflow-hidden  transition-colors ">
        <Image
          src={brand.logo}
          alt={brand.name}
          fill
          sizes="(max-width: 768px) 150px, 200px"
          className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
        />
      </div>

      {/* Brand Info */}
      <div className="mt-3.5 space-y-1 w-full">
        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#006a52] line-clamp-1 transition-colors">
          {brand.name}
        </h3>
        <p className="text-[11px] sm:text-xs font-semibold text-slate-500 font-taka flex items-center justify-center gap-1">
          <FaStore className="text-[10px] text-[#006a52]" />
          <span>{brand.productCount || 50}+ Products</span>
        </p>
      </div>

      {/* Action CTA */}
      {/* <div className="mt-3 pt-2.5 border-t border-slate-100 w-full flex items-center justify-center">
        <span className="text-[11px] sm:text-xs font-semibold text-[#006a52] group-hover:underline flex items-center gap-1">
          <span>Explore Shop</span>
          <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
        </span>
      </div> */}
    </Link>
  );
}
