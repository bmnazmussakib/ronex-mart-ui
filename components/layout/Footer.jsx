import Link from 'next/link';
import {
  FaTruckFast,
  FaShieldHalved,
  FaCreditCard,
  FaHeadset,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaChevronRight,
} from 'react-icons/fa6';

export default function Footer() {
  const valueProps = [
    {
      icon: FaTruckFast,
      title: "Express Delivery",
      subtitle: "Same day shipping on orders",
    },
    {
      icon: FaShieldHalved,
      title: "100% Quality Guaranteed",
      subtitle: "Fresh & genuine products",
    },
    {
      icon: FaCreditCard,
      title: "Secure Payments",
      subtitle: "Multiple safe payment options",
    },
    {
      icon: FaHeadset,
      title: "24/7 Hotline Support",
      subtitle: "Dedicated customer service",
    },
  ];

  return (
    <footer className="bg-[#032a1f] text-slate-300 border-t border-emerald-900/60 mt-auto pb-28 sm:pb-8">
      {/* Top Value Props Grid */}
      <div className="border-b border-emerald-900/60 bg-[#043326]/50">
        <div className="w-full px-4 sm:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {valueProps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-900/40 hover:border-emerald-700/50 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-emerald-900/60 text-emerald-400 flex items-center justify-center text-base sm:text-lg shrink-0 group-hover:bg-[#006a52] group-hover:text-white transition-colors">
                    <IconComp />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-md font-medium text-white leading-snug">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-emerald-100/60 font-medium">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full px-4 sm:px-8 pt-6 sm:pt-10 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pb-8 border-b border-emerald-900/60">
          {/* Column 1: Brand Info & Social Media */}
          <div className="col-span-2 lg:col-span-2 space-y-3.5 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <img
                src="/img/logo.png"
                alt="RonexMart Logo"
                className="h-9 sm:h-12 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm font-medium">
              RonexMart is Bangladesh's leading wholesale & retail online superstore, delivering everyday groceries, fresh produce, and household essentials with guaranteed freshness.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1 font-medium">
              <div className="flex items-start gap-2">
                <FaLocationDot className="text-emerald-400 text-xs sm:text-sm mt-0.5 shrink-0" />
                <span>Uttara Sector 7, Dhaka 1230, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-400 text-xs sm:text-sm shrink-0" />
                <a href="mailto:info@ronexmart.com" className="hover:text-white transition-colors">
                  info@ronexmart.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-emerald-400 text-xs sm:text-sm shrink-0" />
                <a href="tel:09611996677" className="hover:text-white text-xs sm:text-sm transition-colors">
                  09611996677
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-emerald-200/70 font-medium mr-1">Follow Us:</span>
              <Link
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaFacebookF className="text-[11px] sm:text-xs" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaInstagram className="text-[11px] sm:text-xs" />
              </Link>
              <Link
                href="#"
                aria-label="X Twitter"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaXTwitter className="text-[11px] sm:text-xs" />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaYoutube className="text-[11px] sm:text-xs" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-emerald-900/60 inline-block">
              Quick Shop
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/70 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Fresh Fruits</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Beverages</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Personal Care</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Bakery Items</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-emerald-900/60 inline-block">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/70 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Order Tracking</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Product Request</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Return Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Coverage Areas</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Help & FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-emerald-900/60 inline-block">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/70 font-medium">
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>About RonexMart</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Careers</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Become a Partner</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-300 flex items-center gap-1.5 transition-all group">
                  <FaChevronRight className="text-[9px] text-emerald-500/60 group-hover:text-emerald-300" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left text-[11px] sm:text-xs text-emerald-100/60 font-medium">
          <p>© 2026 RonexMart Superstore Ltd. All rights reserved.</p>
          <p className="text-emerald-200/70">
            Designed & Developed by{' '}
            <a
              href="https://mediasoftbd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:underline font-medium"
            >
              Mediasoft Data Systems Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
