import Link from 'next/link';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa6';

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
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div>
          <h2 className="text-base sm:text-xl lg:text-2xl font-semibold uppercase text-slate-900">
            Fill Up Your Pantry
          </h2>
        </div>
        <Link
          href="/category"
          className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-[#006a52] hover:underline uppercase"
        >
          <span>See all</span>
          <FaChevronRight className="text-[9px] sm:text-[10px]" />
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-2.5 sm:gap-4">
        {/* Left Big Featured Card: Beverages */}
        <div className="col-span-12 lg:col-span-4 overflow-hidden flex flex-col justify-between">
          <div className="rounded-md sm:rounded-xl relative flex-1 bg-slate-50 flex items-center justify-center overflow-hidden min-h-[160px] sm:min-h-[280px] lg:min-h-[400px]">
            <Image
              src="/img/sqr-banner.png"
              alt="Beverages Showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover rounded-md sm:rounded-2xl"
            />
          </div>
          <div className="py-1.5 sm:py-2.5 px-2 sm:px-3 text-center">
            <h4 className="font-semibold text-xs sm:text-sm text-slate-800">Beverages</h4>
          </div>
        </div>

        {/* Right Grid: 8 Small Category Cards */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 grid-cols-4 gap-2 sm:gap-3.5">
          {pantryCards.map((card, idx) => (
            <Link key={idx} href="#" className="overflow-hidden flex flex-col justify-between group">
              <div className="rounded-md sm:rounded-xl aspect-square bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="py-1 sm:py-2 px-1 sm:px-2 text-center mt-0.5 sm:mt-1">
                <h4 className="font-medium text-xs sm:text-sm text-slate-800 line-clamp-1 group-hover:text-[#006a52] transition-colors">
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
