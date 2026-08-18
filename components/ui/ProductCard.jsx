export default function ProductCard({
  image,
  title,
  category,
  rating,
  weight,
  price,
  oldPrice,
  badge,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#006a52] transition-all group w-full h-full">
      {/* Product Image Container */}
      <div className="bg-white p-3 flex items-center justify-center relative shrink-0">
        {badge ? (
          <span className="bg-[#f97316] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full absolute top-5 left-5 z-10">
            {badge}
          </span>
        ) : null}
        <div className="bg-slate-50/60 w-full aspect-square rounded-xl p-3 flex items-center justify-center border border-slate-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Details Area */}
      <div className="p-4 bg-white flex-1 flex flex-col justify-between pt-1">
        <div>
          <span className="text-[11px] font-semibold text-[#006a52] uppercase tracking-wide block truncate">
            {category}
          </span>
          <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 mt-1 leading-snug min-h-[2.5rem] flex items-start">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2">
            <i className="fa-solid fa-star text-amber-500 text-xs"></i>
            <span>{rating} · {weight}</span>
          </div>
        </div>

        {/* Footer Price & Add Button */}
        <div className="flex items-center justify-between mt-4 pt-1 border-t border-slate-50">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-lg text-slate-900 font-taka">{price}</span>
            {oldPrice && (
              <span className="text-xs text-slate-400 line-through font-normal font-taka">
                {oldPrice}
              </span>
            )}
          </div>
          <button
            aria-label="Add to Cart"
            className="w-9 h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center font-semibold text-base transition-colors shadow-sm cursor-pointer shrink-0"
          >
            <i className="fa-solid fa-plus text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
