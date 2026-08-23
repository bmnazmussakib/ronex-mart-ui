"use client";

import Image from "next/image";

export default function CategoryHeader({
  bannerImage = "/img/hero-banner-category.png",
  alt = "Category Banner",
}) {
  return (
    <div className="w-full relative rounded-lg sm:rounded-xl overflow-hidden shadow-2xs aspect-[21/6] sm:aspect-[25/5] lg:aspect-[28/5] bg-slate-100 border border-slate-200/80">
      <Image
        src={bannerImage}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
