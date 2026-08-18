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
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md hover:border-[#006a52] transition-all group h-full">
      <div className="bg-white p-3 flex items-center justify-center relative">
        {badge && (
          <span className="bg-[#f97316] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full absolute top-5 left-5 z-10">
            {badge}
          </span>
        )}
        <div className="bg-slate-50/60 w-full aspect-square rounded-xl p-3 flex items-center justify-center border border-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div className="p-4 bg-white flex-1 flex flex-col justify-between pt-1">
        <div>
          <span className="text-[11px] font-semibold text-[#006a52] uppercase tracking-wide block">
            {category}
          </span>
          <h3 className="font-semibold text-sm text-slate-800 line-clamp-2 mt-1 leading-snug">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-2">
            <i className="fa-solid fa-star text-amber-500 text-xs"></i>
            <span>{rating} · {weight}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-1">
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-lg text-slate-900">{price}</span>
            {oldPrice && (
              <span className="text-xs text-slate-400 line-through font-normal">
                {oldPrice}
              </span>
            )}
          </div>
          <button className="w-9 h-9 rounded-full bg-[#006a52] hover:bg-[#005240] text-white flex items-center justify-center font-semibold text-base transition-colors shadow-sm cursor-pointer">
            <i className="fa-solid fa-plus text-xs"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
