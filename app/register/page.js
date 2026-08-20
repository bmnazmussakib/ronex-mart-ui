'use client';

import Breadcrumb from '@/components/ui/Breadcrumb';
import AuthForm from '@/components/auth/AuthForm';
import { FaTruckFast, FaPercent, FaHeadset } from 'react-icons/fa6';

export default function RegisterPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Account', href: '#' },
    { label: 'Register' },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-3 pb-24 sm:pb-8">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
        {/* Left Column: Brand Feature Highlights */}
        <div className="lg:col-span-5 space-y-6 hidden lg:block pr-4">
          <div className="space-y-3">
            <span className="inline-block bg-emerald-100 text-[#006a52] text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-200">
              JOIN RONEXMART TODAY
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight">
              Create an Account & Start Saving Instantly
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Register in less than 1 minute to receive welcome vouchers, track shipments live, and enjoy hassle-free checkout.
            </p>
          </div>

          {/* Feature List Cards */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#006a52] text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                <FaTruckFast />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-800">Fast Doorstep Delivery</h3>
                <p className="text-[11px] text-slate-500">Same-day express delivery across Dhaka and major districts.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                <FaPercent />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-800">Welcome Voucher Included</h3>
                <p className="text-[11px] text-slate-500">Get ৳50 OFF on your first purchase using RONEX10 promo.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 text-lg shadow-sm">
                <FaHeadset />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-bold text-slate-800">24/7 Priority Support</h3>
                <p className="text-[11px] text-slate-500">Dedicated assistance for order returns, exchanges & queries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Auth Form defaulting to register */}
        <div className="lg:col-span-7 flex justify-center">
          <AuthForm initialTab="register" />
        </div>
      </div>
    </div>
  );
}
