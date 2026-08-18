import Link from 'next/link';

export default function DualPromoBanners() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
      <Link href="#" className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/80 group">
        <img
          src="/img/banner-1.png"
          alt="All Your Daily Needs Under One Roof"
          className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
        />
      </Link>
      <Link href="#" className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/80 group">
        <img
          src="/img/banner-2.png"
          alt="Joyful Moments, Happy Babies!"
          className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
        />
      </Link>
    </div>
  );
}
