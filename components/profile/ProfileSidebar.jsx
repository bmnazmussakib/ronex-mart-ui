'use client';

import {
  FaUser,
  FaBoxOpen,
  FaLocationDot,
  FaGear,
  FaRightFromBracket,
  FaShieldHalved,
  FaPen,
  FaHeart,
} from 'react-icons/fa6';

export default function ProfileSidebar({ activeTab, setActiveTab, user }) {
  const navItems = [
    { id: 'overview', label: 'My Profile', icon: FaUser },
    { id: 'orders', label: 'My Orders', icon: FaBoxOpen, badge: '12' },
    { id: 'wishlist', label: 'My Wishlist', icon: FaHeart, badge: '4' },
    { id: 'addresses', label: 'Saved Addresses', icon: FaLocationDot, badge: '2' },
    { id: 'settings', label: 'Account Settings', icon: FaGear },
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs space-y-4 p-4 sm:p-5">
      {/* User Header Info Card */}
      <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-[#006a52] text-white flex items-center justify-center font-bold text-xl shadow-inner border-2 border-emerald-100">
            {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
          </div>
          <button
            className="absolute bottom-0 right-0 w-5 h-5 bg-slate-800 hover:bg-[#006a52] text-white rounded-full flex items-center justify-center text-[10px] transition-colors cursor-pointer"
            title="Edit Avatar"
          >
            <FaPen />
          </button>
        </div>

        <div className="space-y-0.5 min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 truncate">{user.fullName}</h3>
          <p className="text-xs text-slate-500 truncate">{user.email || user.phone}</p>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <FaShieldHalved className="text-[9px]" /> Ronex Mart Member
          </span>
        </div>
      </div>


      {/* Navigation List */}
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#006a52] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`text-sm ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
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
        <a
          href="/login"
          className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-md text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-all cursor-pointer pt-3 border-t border-slate-100 mt-2"
        >
          <FaRightFromBracket className="text-sm" />
          <span>Sign Out</span>
        </a>
      </nav>
    </div>
  );
}
