'use client';

import Link from 'next/link';
import {
  FaGaugeHigh,
  FaUser,
  FaHeart,
  FaLocationDot,
  FaBoxOpen,
  FaCreditCard,
  FaFileInvoice,
  FaListCheck,
  FaCartShopping,
  FaLock,
  FaRightFromBracket,
  FaShieldHalved,
  FaPen,
} from 'react-icons/fa6';

export default function ProfileSidebar({ activeTab, setActiveTab, user }) {
  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: FaGaugeHigh },
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'wishlist', label: 'Wishlist', icon: FaHeart, badge: '4' },
    { id: 'addresses', label: 'Shipping Address', icon: FaLocationDot, badge: '2' },
    { id: 'orders', label: 'Order History', icon: FaBoxOpen, badge: '12' },
    { id: 'payments', label: 'Online Payment History', icon: FaCreditCard },
    { id: 'quote-orders', label: 'Quote Order', icon: FaFileInvoice, badge: '5' },
    { id: 'bazar-list', label: 'Bazar List', icon: FaListCheck, href: '/monthly-list' },
    { id: 'checkout', label: 'Checkout', icon: FaCartShopping, href: '/checkout' },
    { id: 'settings', label: 'Change Password', icon: FaLock },
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs p-4 sm:p-5 space-y-4">
      {/* User Header Info Card */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
        <div className="relative shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#006a52] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-inner border-2 border-emerald-100">
            {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
          </div>
          <button
            className="absolute bottom-0 right-0 w-4.5 h-4.5 sm:w-5 sm:h-5 bg-slate-800 hover:bg-[#006a52] text-white rounded-full flex items-center justify-center text-[9px] sm:text-[10px] transition-colors cursor-pointer"
            title="Edit Avatar"
          >
            <FaPen />
          </button>
        </div>

        <div className="space-y-0.5 min-w-0">
          <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">{user.fullName}</h3>
          <p className="text-xs sm:text-sm text-slate-500 truncate">{user.email || user.phone}</p>
          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <FaShieldHalved className="text-[10px]" /> Ronex Mart Member
          </span>
        </div>
      </div>

      {/* MOBILE SCROLLABLE TAB NAV (Visible on Mobile/Tablet < lg) */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            if (item.href) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="px-3 py-2 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 shrink-0 flex items-center gap-1.5 transition-all snap-start"
                >
                  <Icon className="text-xs text-slate-500" />
                  <span>{item.label}</span>
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-full text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-all cursor-pointer snap-start ${
                  isActive
                    ? 'bg-[#006a52] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`text-xs ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* DESKTOP VERTICAL NAV (Visible on Desktop >= lg) */}
      <nav className="hidden lg:block space-y-1 divide-y divide-slate-100/60">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.href) {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#006a52] transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="text-base text-slate-400" />
                  <span>{item.label}</span>
                </div>
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#006a52] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`text-base ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        {/* Logout Button */}
        <Link
          href="/login"
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-all cursor-pointer pt-3"
        >
          <FaRightFromBracket className="text-base" />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
}
