'use client';

import { useState } from 'react';
import { FaCreditCard, FaCircleCheck, FaFileInvoice, FaEye, FaArrowLeft, FaPrint } from 'react-icons/fa6';

export default function ProfilePaymentsTab() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const mockPayments = [
    {
      id: 1,
      trxId: 'TRX-98234710',
      orderId: '2608161248',
      method: 'bKash Online',
      methodBadge: 'bg-pink-500 text-white',
      amount: '3,550.00',
      date: '16-08-2026 14:32',
      status: 'SUCCESS',
      statusBadge: 'bg-emerald-600 text-white font-semibold',
    },
    {
      id: 2,
      trxId: 'TRX-87612984',
      orderId: '2608109845',
      method: 'Nagad Gateway',
      methodBadge: 'bg-orange-500 text-white',
      amount: '1,890.00',
      date: '10-08-2026 11:15',
      status: 'SUCCESS',
      statusBadge: 'bg-emerald-600 text-white font-semibold',
    },
    {
      id: 3,
      trxId: 'TRX-76510923',
      orderId: '2607281092',
      method: 'Visa / MasterCard',
      methodBadge: 'bg-blue-600 text-white',
      amount: '5,200.00',
      date: '28-07-2026 16:45',
      status: 'SUCCESS',
      statusBadge: 'bg-emerald-600 text-white font-semibold',
    },
  ];

  return (
    <div className="space-y-4">
      {!selectedPayment ? (
        <>
          {/* Header */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#006a52]/10 text-[#006a52] flex items-center justify-center font-bold text-lg">
                <FaCreditCard />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Online Payment History</h3>
                <p className="text-sm text-slate-500 mt-0.5">Track all online payment receipts and transaction records.</p>
              </div>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                    <th className="py-3.5 px-4 border-r border-slate-200 w-12 text-center">#</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Trx ID</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Order ID</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Payment Gateway</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Paid Amount</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Date & Time</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Status</th>
                    <th className="py-3.5 px-4 text-center w-24">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {mockPayments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 border-r border-slate-200 text-center font-medium">
                        {payment.id}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-semibold text-slate-900">
                        {payment.trxId}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium text-slate-700">
                        {payment.orderId}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md ${payment.methodBadge}`}>
                          {payment.method}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-bold text-slate-900 font-taka">
                        ৳{payment.amount}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 text-slate-600">
                        {payment.date}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200">
                        <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${payment.statusBadge}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => setSelectedPayment(payment)}
                          className="px-2.5 py-1 rounded-md border border-slate-300 hover:border-[#006a52] text-slate-700 hover:text-[#006a52] hover:bg-emerald-50 text-xs font-semibold transition-all cursor-pointer inline-flex items-center gap-1"
                        >
                          <FaEye className="text-xs" />
                          <span>View</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* Detailed Receipt View */
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <button
              onClick={() => setSelectedPayment(null)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#006a52] transition-colors cursor-pointer"
            >
              <FaArrowLeft />
              <span>Back to Payment History</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FaPrint />
              <span>Print Receipt</span>
            </button>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4 max-w-md mx-auto text-center">
            <div className="w-14 h-14 bg-emerald-100 text-[#006a52] rounded-full flex items-center justify-center mx-auto text-2xl">
              <FaCircleCheck />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Payment Successful</h4>
              <p className="text-xs text-slate-500">Transaction ID: {selectedPayment.trxId}</p>
            </div>
            <div className="text-3xl font-extrabold text-[#006a52] font-taka py-2 border-y border-slate-200">
              ৳{selectedPayment.amount}
            </div>
            <div className="text-xs text-slate-600 space-y-1 text-left">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-bold text-slate-800">{selectedPayment.orderId}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Payment Method:</span>
                <span className="font-semibold text-slate-800">{selectedPayment.method}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-medium text-slate-800">{selectedPayment.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
