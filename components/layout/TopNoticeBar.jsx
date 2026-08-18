export default function TopNoticeBar() {
  return (
    <div className="bg-[#053b2c] text-white/90 text-xs py-2 px-6 sm:px-8 border-b border-emerald-900/40">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-6 text-[11px] font-normal">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-emerald-400"></i> 123 Wholesale Ave, Dhaka 1230
          </span>
          <span className="hidden sm:flex items-center gap-1.5">
            <i className="fa-solid fa-envelope text-emerald-400"></i> info@ronexmart.com
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-normal">
          <span className="bg-emerald-800/60 text-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold">
            Free delivery on orders over $50
          </span>
        </div>
      </div>
    </div>
  );
}
