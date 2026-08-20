import Link from 'next/link';
import Image from 'next/image';

export default function DualPromoBanners() {
  return (
    <div className="grid grid-cols-1 grid-cols-2 gap-2.5 sm:gap-4 py-1.5 sm:py-2">
      <Link href="#" className="block rounded-md sm:rounded-xl overflow-hidden transition-all border border-slate-200/80 group">
        <Image
          src="/img/banner-1.png"
          alt="All Your Daily Needs Under One Roof"
          width={800}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto object-cover rounded-md sm:rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
        />
      </Link>
      <Link href="#" className="block rounded-md sm:rounded-xl overflow-hidden transition-all border border-slate-200/80 group">
        <Image
          src="/img/banner-2.png"
          alt="Joyful Moments, Happy Babies!"
          width={800}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto object-cover rounded-md sm:rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
        />
      </Link>
    </div>
  );
}

