import Link from 'next/link';

export default function PromoBannerSingle() {
  return (
    <div className="w-full rounded-md sm:rounded-xl overflow-hidden transition-all border border-slate-200/80 group">
      <Link href="#" className="block w-full">
        <img
          src="/img/banner-2.png"
          alt="Promotional Banner"
          className="w-full h-auto object-cover rounded-md sm:rounded-xl aspect-[2172/724] transition-transform duration-300"
        />
      </Link>
    </div>
  );
}
