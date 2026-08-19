'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export default function CategoryPagination({ totalPages = 4, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white rounded-md sm:rounded-xl border border-slate-200/90 p-3 sm:p-4 my-4 sm:my-6">
      <span className="text-xs font-semibold text-slate-500">
        Page <span className="text-slate-900">{currentPage}</span> of <span className="text-slate-900">{totalPages}</span>
      </span>

      <div className="flex items-center gap-1.5">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
          className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:border-[#006a52] hover:text-[#006a52] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-all flex items-center gap-1 cursor-pointer"
        >
          <FaChevronLeft className="text-[10px]" />
          <span>Previous</span>
        </button>

        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === page
                  ? 'bg-[#006a52] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-[#006a52] hover:text-[#006a52]'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
          className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-xs font-semibold hover:border-[#006a52] hover:text-[#006a52] disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-700 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span>Next</span>
          <FaChevronRight className="text-[10px]" />
        </button>
      </div>
    </div>
  );
}
