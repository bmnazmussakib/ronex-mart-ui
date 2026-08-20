import Image from 'next/image';
import PromoSlider from "./PromoSlider";

export default function HeroBanners() {
  return (
    <>
      <div className="grid grid-cols-12 gap-1.5 sm:gap-3.5">
        {/* Main Banner (8 Cols) */}
        <div className="col-span-8 rounded-md sm:rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center relative">
          <Image
            src="/img/hero-banner-1.png"
            alt="Groceries Showcase"
            width={1200}
            height={600}
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="w-full h-auto aspect-[16/8] object-cover rounded-md sm:rounded-xl"
          />
        </div>

        {/* Side Promo Cards (4 Cols) */}
        <div className="col-span-4 flex flex-col justify-between gap-1.5 sm:gap-3.5">
          <div className="flex-1 rounded-md sm:rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 flex items-center justify-center relative">
            <Image
              src="/img/hero-banner-2.png"
              alt="Promo Banner 2"
              width={600}
              height={240}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full aspect-[5/2] object-cover rounded-md sm:rounded-xl"
            />
          </div>

          <div className="flex-1 rounded-md sm:rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 flex items-center justify-center relative">
            <Image
              src="/img/hero-banner-3.png"
              alt="Promo Banner 3"
              width={600}
              height={240}
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              className="w-full h-full aspect-[5/2] object-cover rounded-md sm:rounded-xl"
            />
          </div>
        </div>

        <div className="col-span-12">
          <PromoSlider />
        </div>
      </div>
    </>
  );
}
