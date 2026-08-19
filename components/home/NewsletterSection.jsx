'use client';

export default function NewsletterSection() {
  return (
    <div className="relative overflow-hidden w-full bg-[#074e3a] text-white rounded-md sm:rounded-2xl p-5 sm:p-12 my-3 sm:my-4 shadow-sm text-center">
      {/* Background Decorative SVG Shapes (Organic Fluid Blobs) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-Left Organic Blob */}
        <svg
          className="absolute -top-16 -left-16 w-64 h-64 sm:w-80 sm:h-80 text-emerald-300/10"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M44.7,-59.1C57.3,-49.8,66.6,-36.1,70.9,-20.9C75.2,-5.7,74.5,11,68.7,25.6C62.9,40.2,52,52.7,38.6,60.8C25.2,68.9,9.3,72.6,-6.6,71.7C-22.5,70.8,-38.4,65.3,-50.7,55.3C-63,45.3,-71.7,30.8,-74.6,15C-77.5,-0.8,-74.6,-17.9,-66.4,-31.7C-58.2,-45.5,-44.7,-56,-30.7,-64.7C-16.7,-73.4,-2.2,-80.3,11.5,-78.9C25.2,-77.5,32.1,-68.4,44.7,-59.1Z" transform="translate(100 100)" />
        </svg>

        {/* Bottom-Right Organic Blob */}
        <svg
          className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 text-emerald-200/10"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M38,-51.6C48.6,-42.6,56.2,-29.9,60.3,-16.1C64.4,-2.3,65,12.6,60.3,26.4C55.6,40.2,45.6,52.9,32.8,60C20,67.1,4.4,68.6,-10.8,66.3C-26,64,-40.8,57.9,-51.7,47.2C-62.6,36.5,-69.6,21.2,-71.4,5C-73.2,-11.2,-69.8,-28.3,-60.2,-40.6C-50.6,-52.9,-34.8,-60.4,-19.7,-63.3C-4.6,-66.2,9.8,-64.5,22.8,-60.6C35.8,-56.7,27.4,-60.6,38,-51.6Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight mb-1.5 sm:mb-2">
          Get weekly deals in your inbox
        </h2>
        <p className="text-xs sm:text-sm text-emerald-100/80 mb-4 sm:mb-6 max-w-md mx-auto px-2">
          Offers and news from our wholesale market straight to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center sm:bg-[#043326] sm:p-1.5 sm:rounded-full sm:border sm:border-emerald-700/60 sm:shadow-inner gap-2.5 sm:gap-0"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-[#043326] sm:bg-transparent border border-emerald-700/60 sm:border-none rounded-md sm:rounded-none px-4 py-2.5 sm:py-2 text-xs sm:text-sm text-white placeholder-emerald-200/50 focus:outline-none text-center sm:text-left shadow-inner sm:shadow-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white hover:bg-emerald-50 text-[#074e3a] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-md sm:rounded-full transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
