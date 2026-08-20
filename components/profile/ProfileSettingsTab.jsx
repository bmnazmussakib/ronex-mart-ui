'use client';

import { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash, FaBell, FaShieldCheck, FaCheck } from 'react-icons/fa6';

export default function ProfileSettingsTab() {
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirmPass: '',
  });
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [passSuccess, setPassSuccess] = useState(false);
  const [passError, setPassError] = useState('');

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promoOffers: true,
    smsAlerts: false,
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassError('');

    if (!passwords.current || !passwords.newPass) {
      setPassError('Please fill in all password fields.');
      return;
    }

    if (passwords.newPass !== passwords.confirmPass) {
      setPassError('New passwords do not match.');
      return;
    }

    setPassSuccess(true);
    setPasswords({ current: '', newPass: '', confirmPass: '' });
    setTimeout(() => setPassSuccess(false), 3000);
  };

  return (
    <div className="space-y-5">
      {/* Change Password Card */}
      <div className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Change Password</h3>
          <p className="text-xs text-slate-500">Update your account password regularly to keep it secure.</p>
        </div>

        {passSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3 rounded-md flex items-center gap-2">
            <FaCheck className="text-[#006a52]" />
            <span>Password updated successfully!</span>
          </div>
        )}

        {passError && (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 rounded-md">
            {passError}
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-3.5 max-w-md">
          {/* Current Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 block">Current Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-slate-400 text-xs" />
              <input
                type={showCurrent ? 'text' : 'password'}
                required
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                placeholder="••••••••"
                className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 text-slate-400 text-xs hover:text-slate-600 cursor-pointer"
              >
                {showCurrent ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 block">New Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-slate-400 text-xs" />
              <input
                type={showNew ? 'text' : 'password'}
                required
                value={passwords.newPass}
                onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })}
                placeholder="At least 6 characters"
                className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 text-slate-400 text-xs hover:text-slate-600 cursor-pointer"
              >
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 block">Confirm New Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-slate-400 text-xs" />
              <input
                type="password"
                required
                value={passwords.confirmPass}
                onChange={(e) => setPasswords({ ...passwords, confirmPass: e.target.value })}
                placeholder="Re-enter new password"
                className="w-full pl-9 pr-9 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs py-2.5 px-4 rounded-md transition-all shadow-xs cursor-pointer"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">Notification Preferences</h3>
          <p className="text-xs text-slate-500">Control how and when you receive updates from RonexMart.</p>
        </div>

        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 bg-slate-50 rounded-md border border-slate-200/80 cursor-pointer">
            <div>
              <p className="font-semibold text-slate-800">Order Status Updates</p>
              <p className="text-[11px] text-slate-500">Receive instant email notifications on order status changes.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.orderUpdates}
              onChange={(e) => setNotifications({ ...notifications, orderUpdates: e.target.checked })}
              className="w-4 h-4 rounded text-[#006a52] focus:ring-[#006a52]"
            />
          </label>

          <label className="flex items-center justify-between p-3 bg-slate-50 rounded-md border border-slate-200/80 cursor-pointer">
            <div>
              <p className="font-semibold text-slate-800">Promotions & Discount Offers</p>
              <p className="text-[11px] text-slate-500">Get notified about flash sales and seasonal promo codes.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.promoOffers}
              onChange={(e) => setNotifications({ ...notifications, promoOffers: e.target.checked })}
              className="w-4 h-4 rounded text-[#006a52] focus:ring-[#006a52]"
            />
          </label>

          <label className="flex items-center justify-between p-3 bg-slate-50 rounded-md border border-slate-200/80 cursor-pointer">
            <div>
              <p className="font-semibold text-slate-800">SMS Notifications</p>
              <p className="text-[11px] text-slate-500">Receive delivery rider status update via Mobile SMS.</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.smsAlerts}
              onChange={(e) => setNotifications({ ...notifications, smsAlerts: e.target.checked })}
              className="w-4 h-4 rounded text-[#006a52] focus:ring-[#006a52]"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
