import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600 bg-white px-4 py-3 rounded-lg border border-slate-200/90 shadow-2xs overflow-x-auto">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center gap-2.5 shrink-0">
            {idx > 0 && <FaChevronRight className="text-[10px] text-slate-300 shrink-0" />}
            {isLast ? (
              <span className="text-slate-800 font-semibold truncate max-w-xs">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href || '#'}
                className="hover:text-[#006a52] transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
