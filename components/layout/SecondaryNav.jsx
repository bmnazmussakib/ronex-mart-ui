import Link from 'next/link';

export default function SecondaryNav() {
  return (
    <div className="bg-slate-100/90 border-t border-slate-200 text-[13px] font-semibold text-slate-700">
      <div className="w-full pr-6 sm:pr-8 flex items-center justify-between">
        {/* Left Categories Header Box */}
        <div className="w-64 bg-[#053b2c] text-white px-4 py-3 flex items-center justify-between cursor-pointer tracking-wider shrink-0 font-bold">
          <div className="flex items-center gap-2.5">
            <i className="fa-solid fa-bars text-sm"></i>
            <span className="uppercase text-xs tracking-widest font-bold">CATEGORY</span>
          </div>
          <i className="fa-solid fa-chevron-down text-[10px]"></i>
        </div>

        {/* Links Nav */}
        <nav className="flex items-center gap-7 ml-6 flex-1 py-3 overflow-x-auto custom-scrollbar font-semibold text-xs tracking-wide text-slate-700">
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">SHOP BY BRANDS</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">MEMBERSHIP</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">OFFERS</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">RECIPES</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">CELEBRATION DAY</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap">GIFT VOUCHER</Link>
          <Link href="#" className="hover:text-[#0b5d44] transition-colors whitespace-nowrap flex items-center gap-1">
            MORE <i className="fa-solid fa-chevron-down text-[9px]"></i>
          </Link>
        </nav>

        {/* Right Hotline */}
        <div className="hidden xl:flex items-center gap-2 text-slate-800 text-xs font-bold shrink-0 py-2">
          <i className="fa-solid fa-phone text-[#0b5d44]"></i>
          <span>09611996677</span>
        </div>
      </div>
    </div>
  );
}
