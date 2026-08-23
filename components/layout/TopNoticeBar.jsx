'use client';

import { FaLocationDot, FaEnvelope } from 'react-icons/fa6';
import Marquee from 'react-fast-marquee';

export default function TopNoticeBar() {
  return (
    <div className="bg-[#053b2c] text-white/90 text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-emerald-900/40">
      <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Info */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-normal shrink-0">
          <span className="flex items-center gap-1.5">
            <FaLocationDot className="text-white text-xs" /> Plot #244/A, Road #3 & 8th Avenue, Block-K, Bashundhara Residential Area
          </span>
        </div>

        {/* Center Marquee Notice */}
        <div className="flex-1 max-w-2xl mx-auto overflow-hidden">
          <Marquee speed={30} pauseOnHover={true} gradient={false}>
            <span className="text-[11px] sm:text-xs text-white font-medium tracking-wide px-3 sm:px-4">
              🎉 Free delivery on orders over ৳5,000! &nbsp; | &nbsp; ⚡ Up to 40% OFF on Pantry Items! &nbsp; | &nbsp; 📦 Same-day delivery available in Dhaka.
            </span>
          </Marquee>
        </div>

        {/* Right Info / Badge */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-normal shrink-0">
          <span className="flex items-center gap-1.5">
            <FaEnvelope className="text-white text-xs" /> info@ronexmart.com
          </span>
        </div>
      </div>
    </div>
  );
}
