'use client';

import { useState } from 'react';

export default function ProductGallery({ images, defaultBadge }) {
  const galleryImages = images && images.length > 0
    ? images
    : [
        "/img/product/product (1).jpeg",
        "/img/product/product (2).jpeg",
        "/img/product/product (3).jpeg",
        "/img/product/product (4).jpeg",
      ];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image Box */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 flex items-center justify-center relative overflow-hidden shadow-sm aspect-square group">
        {defaultBadge && (
          <span className="bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-full absolute top-4 left-4 z-10 shadow-sm">
            {defaultBadge}
          </span>
        )}
        <img
          src={activeImage}
          alt="Product Main Preview"
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-2.5">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(img)}
            className={`aspect-square rounded-xl bg-white border p-2 flex items-center justify-center overflow-hidden transition-all cursor-pointer ${
              activeImage === img
                ? 'border-[#006a52] ring-2 ring-[#006a52]/20 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
