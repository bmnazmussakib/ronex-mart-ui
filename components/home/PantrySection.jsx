import Link from 'next/link';

export default function PantrySection() {
  const pantryCards = [
    { title: "Bread & Bakery", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80" },
    { title: "Milk & Dairy Products", img: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=400&q=80" },
    { title: "Snacks & Chips", img: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80" },
    { title: "Condiments & Dressings", img: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=400&q=80" },
    { title: "Chocolate & Candy", img: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?auto=format&fit=crop&w=400&q=80" },
    { title: "Spices & Seasoning", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80" },
    { title: "Biscuits & Cookies", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80" },
    { title: "Canned & Gourmet", img: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="py-3">
      <div className="flex items-center justify-between mb-5">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-[#006a52] uppercase block mb-0.5">
            STOCK UP YOUR SHELVES
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Fill Up Your Pantry
          </h2>
        </div>
        <Link
          href="#"
          className="border border-slate-200 bg-white hover:border-[#006a52] hover:text-[#006a52] rounded-full px-4 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-all text-slate-700 shadow-sm"
        >
          <span>See all categories</span>
          <i className="fa-solid fa-chevron-right text-[10px]"></i>
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left Big Featured Card: Beverages */}
        <div className="col-span-12 lg:col-span-4 overflow-hidden flex flex-col justify-between">
          <div className="rounded-xl relative flex-1 bg-slate-50 flex items-center justify-center overflow-hidden min-h-[300px] lg:min-h-[400px]">
            <img
              src="/img/sqr-banner.png"
              alt="Beverages Showcase"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="py-2.5 px-3 text-center border-t border-slate-100 bg-white rounded-b-xl">
            <h4 className="font-semibold text-xs text-slate-800">Beverages</h4>
          </div>
        </div>

        {/* Right Grid: 8 Small Category Cards */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {pantryCards.map((card, idx) => (
            <Link key={idx} href="#" className="overflow-hidden flex flex-col justify-between group">
              <div className="rounded-xl aspect-square bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl py-2 px-2 text-center border-t border-slate-100 bg-white mt-1">
                <h4 className="font-semibold text-xs text-slate-800 line-clamp-1 group-hover:text-[#006a52] transition-colors">
                  {card.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
