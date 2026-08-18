import Link from 'next/link';

export default function MainHeader() {
  return (
    <div className="w-full px-6 sm:px-8 py-3">
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/img/logo.png"
            alt="RonexMart Logo"
            className="h-10 sm:h-11 object-contain group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center bg-slate-50 rounded-full border border-emerald-300 p-1 shadow-inner focus-within:border-[#0b5d44] focus-within:bg-white transition-all">
            <i className="fa-solid fa-magnifying-glass text-slate-400 ml-3.5 text-xs shrink-0"></i>
            <input
              type="text"
              placeholder="Search for products, brands and essential items..."
              className="w-full px-3 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none bg-transparent"
            />
            <div className="h-4 w-px bg-slate-200 mx-1 shrink-0"></div>
            <select className="py-1 pl-2 pr-6 text-[11px] font-medium text-slate-600 bg-transparent cursor-pointer focus:outline-none appearance-none shrink-0">
              <option>All categories</option>
              <option>Grocery & Food</option>
              <option>Beverages</option>
              <option>Personal Care</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5 shrink-0 text-xs font-semibold text-slate-700">
          <Link href="#" className="hover:text-[#0b5d44] flex items-center gap-1.5 transition-colors">
            <i className="fa-solid fa-rotate-left text-sm text-emerald-700"></i>
            <span>Reorder</span>
          </Link>
          <Link href="#" className="hover:text-[#0b5d44] flex items-center gap-1.5 transition-colors relative">
            <i className="fa-regular fa-clipboard text-sm text-emerald-700"></i>
            <span>Quote</span>
            <span className="bg-[#f97316] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center -mt-2 -ml-1">
              0
            </span>
          </Link>
          <Link href="#" className="hover:text-[#0b5d44] flex items-center gap-1.5 transition-colors">
            <i className="fa-regular fa-user text-sm text-emerald-700"></i>
            <span>Login</span>
          </Link>
          <Link
            href="#"
            className="bg-[#0b5d44] hover:bg-[#084c38] text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all shadow-md shadow-emerald-900/15"
          >
            <i className="fa-solid fa-basket-shopping text-xs"></i>
            <span>Cart</span>
            <span className="bg-emerald-800 text-emerald-100 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
