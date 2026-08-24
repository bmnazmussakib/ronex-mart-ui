'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  FaCircleCheck,
  FaHouse,
  FaBoxOpen,
  FaPrint,
  FaTruckFast,
  FaPhone,
  FaLocationDot,
} from 'react-icons/fa6';

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const orderId = searchParams.get('orderId') || 'RM-2608181289';
  const name = searchParams.get('name') || 'Tanvir Ahmed';
  const phone = searchParams.get('phone') || '01712345678';
  const address = searchParams.get('address') || 'House #45, Road #16 (New), Flat 4B, Dhanmondi 27, Dhaka';
  const paymentMethod = searchParams.get('payment') || 'Cash On Delivery';
  const totalAmount = searchParams.get('total') || '3,240.00';

  const mockItems = [
    { sl: 1, name: 'Miniket Rice 10kg Premium', price: 850, qty: 2, total: 1700 },
    { sl: 2, name: 'Fortune Sunflower Oil 5L', price: 1180, qty: 1, total: 1180 },
    { sl: 3, name: 'Aci Pure Salt 1kg', price: 40, qty: 5, total: 200 },
    { sl: 4, name: 'Fresh Sugar 1kg', price: 100, qty: 1, total: 100 },
  ];

  const handlePrint = () => {
    window.print();
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Checkout', href: '/checkout' },
    { label: 'Order Confirmation' },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-1 sm:py-3 pb-24 sm:pb-8">
      {/* Breadcrumb (Hidden on Print) */}
      <div className="print:hidden">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Top Success Banner */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006a52] mx-auto flex items-center justify-center text-3xl shadow-inner">
            <FaCircleCheck />
          </div>

          <div className="space-y-1.5">
            <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wide">
              ORDER PLACED SUCCESSFULLY
            </span>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Thank You For Your Order!
            </h1>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We have received your order <strong className="text-slate-800 font-semibold">#{orderId}</strong>. A confirmation SMS & email have been dispatched.
            </p>
          </div>

          {/* Delivery Timeline Pill */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-md text-xs text-slate-700 font-medium">
            <FaTruckFast className="text-[#006a52] text-sm" />
            <span>Estimated Delivery: <strong className="text-slate-900 font-semibold">Tomorrow, by 6:00 PM</strong></span>
          </div>

          {/* Action Buttons (Hidden on Print) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 print:hidden">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#006a52] bg-slate-100 hover:bg-emerald-50 border border-slate-300 px-4 py-2 rounded-md transition-colors cursor-pointer"
            >
              <FaPrint className="text-xs" />
              <span>Print Invoice</span>
            </button>

            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#006a52] hover:bg-[#005240] px-4 py-2 rounded-md transition-all shadow-xs cursor-pointer"
            >
              <FaBoxOpen className="text-xs" />
              <span>View My Orders</span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md transition-colors cursor-pointer"
            >
              <FaHouse className="text-xs" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Printable Order Receipt Container */}
        <div id="invoice-printable" className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 text-slate-800">
          {/* Receipt Top Header with Logo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="space-y-1.5">
              <Image src="/img/logo.png" alt="RonexMart Logo" width={160} height={48} className="h-12 w-auto object-contain" />
              <p className="text-xs text-slate-500">RonexMart Ltd. • Phone: 09611-678888 • WhatsApp: +880 1335-180650</p>
            </div>
            <div className="text-left sm:text-right space-y-0.5 text-xs">
              <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-sm border border-emerald-200 uppercase">
                OFFICIAL RECEIPT
              </span>
              <p className="font-semibold text-slate-900 text-sm pt-0.5">#{orderId}</p>
              <p className="text-slate-500">Date: <strong className="text-slate-700">20-08-2026</strong></p>
            </div>
          </div>

          {/* Customer & Shipping Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {/* Customer Details */}
            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-1.5">
              <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1 mb-1.5">
                Shipping & Delivery Details
              </h4>
              <p className="font-medium text-slate-900 text-sm">{name}</p>
              <p className="text-slate-600 flex items-center gap-1.5">
                <FaPhone className="text-[10px] text-slate-400" /> +880{phone.replace(/^0+/, '')}
              </p>
              <p className="text-slate-700 flex items-start gap-1.5 pt-0.5">
                <FaLocationDot className="text-xs text-[#006a52] shrink-0 mt-0.5" />
                <span>{address}</span>
              </p>
            </div>

            {/* Payment Summary */}
            <div className="bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 flex flex-col justify-between">
              <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1 mb-1.5">
                Payment Summary
              </h4>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Payment Method:</span>
                  <span className="text-[10px] font-semibold bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded-sm">
                    {paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Payment Status:</span>
                  <span className="text-[10px] font-semibold bg-cyan-400 text-white px-2.5 py-0.5 rounded-sm uppercase">
                    UN-PAID
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Order Status:</span>
                  <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-sm uppercase">
                    CONFIRMED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Purchased Items Table */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-slate-900 text-sm">Order Items Summary</h4>
            <div className="border border-slate-200 rounded-md overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r border-slate-200 font-semibold text-center w-12">SL</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 font-semibold">Product Name</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 font-semibold text-right">Unit Price</th>
                    <th className="py-2.5 px-4 border-r border-slate-200 font-semibold text-center w-20">Qty</th>
                    <th className="py-2.5 px-4 text-right font-semibold">Total Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {mockItems.map((item) => (
                    <tr key={item.sl} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-3 border-r border-slate-200 text-center font-medium text-slate-500">
                        {item.sl}
                      </td>
                      <td className="py-2.5 px-4 border-r border-slate-200 font-medium text-slate-900">
                        {item.name}
                      </td>
                      <td className="py-2.5 px-4 border-r border-slate-200 text-right font-medium whitespace-nowrap font-taka">
                        ৳ {item.price.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-4 border-r border-slate-200 text-center font-semibold text-slate-800 font-taka">
                        {item.qty}
                      </td>
                      <td className="py-2.5 px-4 text-right font-semibold text-slate-900 whitespace-nowrap font-taka">
                        ৳ {item.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing Totals */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-1">
            <div className="text-xs text-slate-500 space-y-1 max-w-xs">
              <p className="font-semibold text-slate-700">Need Help With Your Order?</p>
              <p>Call our 24/7 customer care line at +880 9610-000000 or email support@ronexmart.com.</p>
            </div>

            <div className="w-full sm:w-72 bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Subtotal:</span>
                <span className="font-semibold text-slate-900 font-taka">৳ 3,180.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Charge:</span>
                <span className="font-semibold text-slate-900 font-taka">৳ 60.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-semibold text-slate-900">
                <span>Total Amount:</span>
                <span className="text-[#006a52] text-base font-taka">৳ {totalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500 text-xs">Loading order confirmation...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
