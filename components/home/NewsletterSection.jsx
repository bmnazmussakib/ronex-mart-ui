'use client';

export default function NewsletterSection() {
  return (
    <div className="w-full bg-[#074e3a] text-white rounded-2xl p-8 sm:p-10 my-4 shadow-sm text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2">
        Get weekly deals in your inbox
      </h2>
      <p className="text-xs sm:text-sm text-emerald-100/80 mb-6 max-w-md mx-auto">
        Offers and news from our wholesale market straight to your inbox.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-md mx-auto flex items-center bg-[#043326] p-1.5 rounded-full border border-emerald-700/60 shadow-inner"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 text-xs text-white placeholder-emerald-200/50 bg-transparent focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white hover:bg-emerald-50 text-[#074e3a] font-bold text-xs px-6 py-2.5 rounded-full transition-colors shrink-0 shadow-sm cursor-pointer"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
