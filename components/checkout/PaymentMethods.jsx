'use client';

import { FaMoneyBill1Wave, FaMobileRetro, FaCreditCard } from 'react-icons/fa6';

export default function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  const methods = [
    {
      id: 'cod',
      title: 'Cash on Delivery',
      subtitle: 'Pay in cash when your goods are delivered',
      icon: FaMoneyBill1Wave,
      badge: 'Recommended',
    },
    {
      id: 'bkash',
      title: 'bKash / Nagad / Rocket',
      subtitle: 'Instant mobile banking payment transfer',
      icon: FaMobileRetro,
      badge: 'Fast Transfer',
    },
    {
      id: 'card',
      title: 'Credit / Debit Card',
      subtitle: 'Visa, Mastercard, AMEX via SSLCommerz',
      icon: FaCreditCard,
      badge: '100% Secure',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
        <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#006a52] flex items-center justify-center font-bold text-sm">
          2
        </div>
        <div>
          <h2 className="font-bold text-base text-slate-900 leading-none">
            Select Payment Method
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Choose how you wish to pay for your order
          </span>
        </div>
      </div>

      {/* Methods List */}
      <div className="space-y-3 pt-1">
        {methods.map((method) => {
          const IconComp = method.icon;
          const isSelected = paymentMethod === method.id;

          return (
            <div
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#006a52] bg-[#e8f3e8]/70 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    isSelected ? 'bg-[#006a52] text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <IconComp />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-xs sm:text-sm font-bold text-slate-900">
                      {method.title}
                    </strong>
                    <span className="text-[9px] font-extrabold text-[#006a52] bg-emerald-100/80 px-2 py-0.2 rounded-full uppercase">
                      {method.badge}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {method.subtitle}
                  </span>
                </div>
              </div>

              {/* Radio Indicator */}
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  isSelected ? 'border-[#006a52] bg-[#006a52]' : 'border-slate-300'
                }`}
              >
                {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
