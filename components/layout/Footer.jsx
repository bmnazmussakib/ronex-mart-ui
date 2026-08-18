import Link from 'next/link';

export default function Footer() {
  const valueProps = [
    {
      icon: "fa-truck-fast",
      title: "Express Delivery",
      subtitle: "Same day shipping on orders",
    },
    {
      icon: "fa-shield-halved",
      title: "100% Quality Guaranteed",
      subtitle: "Fresh & genuine products",
    },
    {
      icon: "fa-credit-card",
      title: "Secure Payments",
      subtitle: "Multiple safe payment options",
    },
    {
      icon: "fa-headset",
      title: "24/7 Hotline Support",
      subtitle: "Dedicated customer service",
    },
  ];

  return (
    <footer className="bg-[#032a1f] text-slate-300 border-t border-emerald-900/60 mt-auto">
      {/* Top Value Props Grid */}
      <div className="border-b border-emerald-900/60 bg-[#043326]/50">
        <div className="w-full px-6 sm:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 hover:border-emerald-700/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#0b5d44] group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-emerald-100/60 font-medium">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full px-6 sm:px-8 pt-10 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-emerald-900/60">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <img
                src="/img/logo.png"
                alt="RonexMart Logo"
                className="h-10 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-emerald-100/70 leading-relaxed max-w-sm">
              RonexMart is Bangladesh's leading wholesale & retail online superstore, delivering everyday groceries, fresh produce, and household essentials with guaranteed freshness.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-emerald-400 text-xs mt-0.5 shrink-0"></i>
                <span>Uttara Sector 7, Dhaka 1230, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-emerald-400 text-xs shrink-0"></i>
                <a href="mailto:info@ronexmart.com" className="hover:text-white transition-colors">
                  info@ronexmart.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-emerald-400 text-xs shrink-0"></i>
                <a href="tel:09611996677" className="hover:text-white font-semibold transition-colors">
                  09611996677
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-emerald-900/60 inline-block">
              Quick Shop
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Fresh Fruits & Produce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Beverages & Drinks
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Personal Care & Hygiene
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Bakery & Dairy Items
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all text-amber-400 font-semibold">
                  Wholesale Bulk Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-emerald-900/60 inline-block">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Product Request Form
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Delivery Coverage Areas
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Help Center & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-1 border-b border-emerald-900/60 inline-block">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/70">
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  About RonexMart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Become a Partner / Supplier
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 hover:translate-x-1 inline-block transition-all">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Payment Badges, Social Media */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© 2026 RonexMart Superstore Ltd. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-200/50 mr-2 font-medium">Follow Us:</span>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#0b5d44] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#0b5d44] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-instagram text-xs"></i>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#0b5d44] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-x-twitter text-xs"></i>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#0b5d44] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-youtube text-xs"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
