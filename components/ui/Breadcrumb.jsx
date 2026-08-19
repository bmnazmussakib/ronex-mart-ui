import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa6';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white p-3 rounded-xl border border-slate-200/90 shadow-sm overflow-x-auto">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <div key={idx} className="flex items-center gap-2 shrink-0">
            {idx > 0 && <FaChevronRight className="text-[9px] text-slate-300 shrink-0" />}
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
