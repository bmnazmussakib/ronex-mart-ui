import Link from 'next/link';

export default function LeftSidebar() {
  const categories = [
    { title: "Jewelry, Watches & Sunglasses", icon: "fa-gem" },
    { title: "Shoe & Leather Goods", icon: "fa-shoe-prints" },
    { title: "Luggage & Travel Gear", icon: "fa-suitcase-rolling" },
    { title: "Kitchen & Dining", icon: "fa-kitchen-set" },
    { title: "Electronics & Home Appliances", icon: "fa-tv" },
    { title: "Home Decor", icon: "fa-couch" },
    { title: "Furniture & Mattresses", icon: "fa-bed" },
    { title: "Bed & Bath", icon: "fa-bath" },
    { title: "Gifts, Tickets & Events", icon: "fa-gift" },
    { title: "Office & Stationery", icon: "fa-paperclip" },
    { title: "Toys & Video Games", icon: "fa-gamepad" },
    { title: "Sports & Fitness", icon: "fa-dumbbell" },
    { title: "Outdoor, Patio, Garden & Nursery", icon: "fa-tree" },
    { title: "Pet Supplies", icon: "fa-dog" },
    { title: "Bakery & Restaurant", icon: "fa-bread-slice" },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between sticky top-[115px] h-[calc(100vh-135px)]">
      <div className="flex flex-col flex-1 min-h-0">
        {/* 1. Top 3 Feature Buttons Grid */}
        <div className="grid grid-cols-3 gap-1.5 p-2 bg-slate-50 border-b border-slate-200 shrink-0">
          <Link
            href="#"
            className="bg-white border border-slate-200 hover:border-[#0b5d44] p-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all group"
          >
            <i className="fa-solid fa-utensils text-[#0b5d44] text-lg mb-0.5 group-hover:scale-110 transition-transform"></i>
            <span className="text-[10px] font-medium text-slate-700 leading-tight">Restaurant</span>
          </Link>
          <Link
            href="#"
            className="bg-white border border-slate-200 hover:border-[#0b5d44] p-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all group"
          >
            <i className="fa-solid fa-store text-[#0b5d44] text-lg mb-0.5 group-hover:scale-110 transition-transform"></i>
            <span className="text-[10px] font-medium text-slate-700 leading-tight">Brand Shop</span>
          </Link>
          <Link
            href="#"
            className="bg-white border border-slate-200 hover:border-[#0b5d44] p-1.5 rounded-lg text-center flex flex-col items-center justify-center transition-all group"
          >
            <i className="fa-solid fa-boxes-packing text-[#0b5d44] text-lg mb-0.5 group-hover:scale-110 transition-transform"></i>
            <span className="text-[10px] font-medium text-slate-700 leading-tight">Bulk Sale</span>
          </Link>
        </div>

        {/* 2. Section Heading */}
        <div className="px-3.5 py-2 bg-rose-50/80 border-b border-rose-100 shrink-0">
          <h3 className="text-[11px] font-bold text-rose-700 tracking-wider uppercase">
            Monthly Essential Items
          </h3>
        </div>

        {/* 3. Scrollable Categories List */}
        <ul className="text-[13px] font-medium text-slate-700 divide-y divide-slate-100 flex-1 overflow-y-auto custom-scrollbar">
          {categories.map((cat, idx) => (
            <li key={idx}>
              <Link
                href="#"
                className="flex items-center justify-between px-3.5 py-2 hover:bg-[#e8f3e8] hover:text-[#0b5d44] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <i className={`fa-solid ${cat.icon} text-slate-400 group-hover:text-[#0b5d44] w-4 text-center text-xs`}></i>
                  <span className="line-clamp-1">{cat.title}</span>
                </div>
                <i className="fa-solid fa-chevron-right text-[9px] text-slate-300 group-hover:text-[#0b5d44]"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Bottom Button: Product Request */}
      <div className="p-2.5 bg-slate-50 border-t border-slate-200 shrink-0">
        <Link
          href="#"
          className="w-full bg-[#0b5d44] hover:bg-[#084c38] text-white font-semibold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <i className="fa-regular fa-clipboard text-xs"></i>
          <span>Product Request</span>
        </Link>
      </div>
    </aside>
  );
}
