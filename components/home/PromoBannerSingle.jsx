import Link from 'next/link';

export default function PromoBannerSingle() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200/80 group">
      <Link href="#" className="block w-full">
        <img
          src="/img/hero-banner-37.png"
          alt="Promotional Banner"
          className="w-full h-auto object-cover rounded-2xl aspect-[7/2] transition-transform duration-300"
        />
      </Link>
    </div>
  );
}
