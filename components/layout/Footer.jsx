import Link from 'next/link';
import Image from 'next/image';
import {
  FaTruckFast,
  FaShieldHalved,
  FaCreditCard,
  FaHeadset,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
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
      <div className="border-b border-emerald-900/60 bg-[#043326]/50 hidden">
        <div className="w-full px-4 sm:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {valueProps.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-900/40 hover:border-emerald-700/50 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-emerald-900/60 text-white flex items-center justify-center text-base sm:text-lg shrink-0 group-hover:bg-[#006a52] group-hover:text-white transition-colors">
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
      <div className="w-full px-4 sm:px-8 pt-6 sm:pt-14 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pb-8 border-b border-emerald-900/60">
          {/* Column 1: Brand Info & Social Media */}
          <div className="col-span-2 lg:col-span-2 space-y-3.5 pr-0 lg:pr-6">
            <Link href="/" className="inline-block">
              <Image
                src="/img/logo.png"
                alt="RonexMart Logo"
                width={160}
                height={48}
                className="h-9 sm:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm font-medium">
              RonexMart is Bangladesh's leading retail online superstore, delivering everyday groceries, fresh produce, and household essentials with guaranteed freshness.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1 font-medium">
              <div className="flex flex-col items-start gap-2">
                {/* <FaLocationDot className="text-gray-200 text-xs sm:text-sm mt-1 shrink-0" /> */}
                <p>Address:</p>
                <div className="space-y-1 text-slate-300 text-xs sm:text-xs">
                  <p>Unit 01 — Road-1, Block-G, Plot 714/A, 714/B</p>
                  <p>Unit 02 — Afrooza Begum Road, Block-G, Plot 733/A</p>
                  <p>Unit 03 — Plot #244/A, Road #3 & 8th Avenue, Block-K, Bashundhara Residential Area.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <FaEnvelope className="text-gray-200 text-xs sm:text-sm shrink-0" />
                <a href="mailto:info@ronexmart.com" className="hover:text-white transition-colors">
                  info@ronexmart.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-gray-200 text-xs sm:text-sm shrink-0" />
                <a href="tel:09611678888" className="hover:text-white text-xs sm:text-sm transition-colors font-medium">
                  09611-678888
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-400 text-xs sm:text-sm shrink-0" />
                <a href="https://wa.me/8801335180650" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xs sm:text-sm transition-colors font-medium">
                  +880 1335-180650
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-gray-200 font-medium mr-1">Follow Us:</span>
              <a
                href="https://www.facebook.com/Ronexmart/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaFacebookF className="text-[11px] sm:text-xs" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaInstagram className="text-[11px] sm:text-xs" />
              </a>
              <a
                href="https://wa.me/8801335180650"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaWhatsapp className="text-[11px] sm:text-xs text-emerald-400" />
              </a>
              <a
                href="https://www.youtube.com/@RonexMart-bd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-950/80 border border-emerald-900/60 hover:bg-[#006a52] hover:text-white hover:border-emerald-500 text-slate-300 flex items-center justify-center transition-all"
              >
                <FaYoutube className="text-[11px] sm:text-xs" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div className="col-span-1">
            <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 pb-1 border-b border-emerald-900/60 inline-block">
              Quick Shop
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-medium">
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  <span>Fresh Fruits</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  <span>Beverages</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  <span>Personal Care</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
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
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-medium">
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Order Tracking</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Product Request</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Return Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Coverage Areas</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
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
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-medium">
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>About RonexMart</span>
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Become a Partner</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 flex items-center gap-1.5 transition-all group">
                  
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Banner Section */}
        <div className=" flex flex-col items-center justify-center gap-2 py-2 border-b border-emerald-900/60">
          <div className="w-full flex items-center justify-center">
            {/* Desktop Banner Image */}
            <Image
              src="/img/payment/SSLCommerz.png"
              alt="SSLCommerz Payment Gateway - bKash, Nagad, Rocket, Visa, Mastercard, AMEX"
              width={800}
              height={120}
              className="hidden lg:block lg:max-w-3/4 w-auto object-contain rounded-lg shadow-sm"
            />
            {/* Mobile Banner Image */}
            <Image
              src="/img/payment/SSLCommerz-Pay-With-logo-All-Size-01-2048x240.png"
              alt="Accepted Payment Methods"
              width={1000}
              height={120}
              className="lg:hidden w-auto object-contain rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center sm:text-left text-[11px] sm:text-xs text-gray-400 font-medium">
          <p>© 2026 <span className='text-[#589f06] font-bold '>RonexMart Ltd.</span> All rights reserved.</p>
          <p className="text-gray-400">
            Designed & Developed by{' '}
            <a
              href="https://mediasoftbd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold "
            >
              Mediasoft Data Systems Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
