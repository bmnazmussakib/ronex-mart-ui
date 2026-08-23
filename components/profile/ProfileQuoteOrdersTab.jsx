'use client';

import { useState } from 'react';
import { FaEye, FaFileInvoice, FaCircleCheck, FaPrint, FaArrowLeft, FaDownload } from 'react-icons/fa6';

export default function ProfileQuoteOrdersTab() {
  const [selectedQuote, setSelectedQuote] = useState(null);

  const mockQuotes = [
    {
      slNo: 1,
      quoteDate: '07/08/2026',
      quoteCode: 'EQ2026070812483295',
      bookingName: 'Corporate Annual Event',
      numberOfGuest: '150',
      date: '15/09/2026',
      time: '12:30 PM',
      totalAmount: '45,000.00',
      items: [
        { sl: 1, name: 'Miniket Rice 10kg Special Pack', qty: 10, unitPrice: 760, total: 7600 },
        { sl: 2, name: 'Fortune Soyabean Oil 5L Can', qty: 5, unitPrice: 820, total: 4100 },
        { sl: 3, name: 'Broiler Chicken Fresh Whole 10kg', qty: 3, unitPrice: 2200, total: 6600 },
        { sl: 4, name: 'Mixed Catering Spice Combo', qty: 2, unitPrice: 1350, total: 2700 },
      ],
    },
    {
      slNo: 2,
      quoteDate: '07/08/2026',
      quoteCode: 'EQ2026070812445955',
      bookingName: 'Family Gathering Dinner',
      numberOfGuest: '40',
      date: '20/08/2026',
      time: '08:00 PM',
      totalAmount: '18,500.00',
      items: [
        { sl: 1, name: 'Katari Bhog Polao Rice 5kg', qty: 4, unitPrice: 650, total: 2600 },
        { sl: 2, name: 'Pure Mustard Oil 2L', qty: 3, unitPrice: 480, total: 1440 },
        { sl: 3, name: 'Beef Fresh Boneless 5kg', qty: 2, unitPrice: 3900, total: 7800 },
      ],
    },
    {
      slNo: 3,
      quoteDate: '06/27/2026',
      quoteCode: 'EQ2026062711073844',
      bookingName: 'Office Monthly Grocery Pantry',
      numberOfGuest: '25',
      date: '01/07/2026',
      time: '10:00 AM',
      totalAmount: '12,400.00',
      items: [
        { sl: 1, name: 'Nescafe Instant Coffee 200g', qty: 5, unitPrice: 890, total: 4450 },
        { sl: 2, name: 'Fresh Milk Powder 1kg Tin', qty: 4, unitPrice: 980, total: 3920 },
      ],
    },
    {
      slNo: 4,
      quoteDate: '06/27/2026',
      quoteCode: 'EQ2026062711044196',
      bookingName: 'Birthday Party Catering',
      numberOfGuest: '60',
      date: '10/07/2026',
      time: '06:30 PM',
      totalAmount: '24,800.00',
      items: [
        { sl: 1, name: 'Whole Cake & Bakery Assortment', qty: 1, unitPrice: 5500, total: 5500 },
        { sl: 2, name: 'Beverages & Soft Drinks Crate', qty: 4, unitPrice: 1200, total: 4800 },
      ],
    },
    {
      slNo: 5,
      quoteDate: '06/27/2026',
      quoteCode: 'EQ2026062711042723',
      bookingName: 'Community Picnic Lunch',
      numberOfGuest: '200',
      date: '05/07/2026',
      time: '01:00 PM',
      totalAmount: '68,900.00',
      items: [
        { sl: 1, name: 'Wholesale Grocery Combo Pack', qty: 5, unitPrice: 12500, total: 62500 },
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {!selectedQuote ? (
        <>
          {/* Header */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#006a52]/10 text-[#006a52] flex items-center justify-center font-bold text-lg">
                <FaFileInvoice />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Quote Order History</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Manage and view all your requested price quote orders.</p>
              </div>
            </div>
          </div>

          {/* Quote Order Table Container */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold text-xs sm:text-sm">
                    <th className="py-3.5 px-4 border-r border-slate-200 w-14 text-center">Sl No.</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Quote Date</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Quote Code</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Booking Name</th>
                    <th className="py-3.5 px-4 border-r border-slate-200 text-center">Number Of Guest</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Date</th>
                    <th className="py-3.5 px-4 border-r border-slate-200">Time</th>
                    <th className="py-3.5 px-4 text-center w-20">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {mockQuotes.map((quote) => (
                    <tr key={quote.slNo} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 border-r border-slate-200 text-center font-semibold text-slate-500">
                        {quote.slNo}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium text-slate-600">
                        {quote.quoteDate}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-semibold text-slate-900">
                        {quote.quoteCode}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium text-slate-800">
                        {quote.bookingName}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 text-center font-semibold text-slate-700">
                        {quote.numberOfGuest}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium text-slate-600">
                        {quote.date}
                      </td>
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium text-slate-600">
                        {quote.time}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => setSelectedQuote(quote)}
                          className="px-3.5 py-1.5 rounded-md bg-[#006a52] hover:bg-[#005240] text-white text-xs font-semibold transition-colors cursor-pointer inline-flex items-center justify-center gap-1 shadow-2xs"
                        >
                          View
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
        /* Detailed Quote View */
        <div className="bg-white rounded-lg border border-slate-200 p-5 sm:p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <button
              onClick={() => setSelectedQuote(null)}
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#006a52] transition-colors cursor-pointer"
            >
              <FaArrowLeft />
              <span>Back to Quote Orders</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FaPrint />
                <span>Print Quote</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                  Quote Code
                </span>
                <h4 className="text-lg font-extrabold text-[#006a52]">{selectedQuote.quoteCode}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 block">Booking Event</span>
                <span className="text-sm font-bold text-slate-800">{selectedQuote.bookingName}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Quote Date</span>
                <strong className="text-slate-900 font-semibold">{selectedQuote.quoteDate}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Event Date & Time</span>
                <strong className="text-slate-900 font-semibold">{selectedQuote.date} at {selectedQuote.time}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Guests Count</span>
                <strong className="text-slate-900 font-semibold">{selectedQuote.numberOfGuest} Guests</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Total Price</span>
                <strong className="text-[#006a52] font-extrabold font-taka">৳{selectedQuote.totalAmount}</strong>
              </div>
            </div>

            {/* Items Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <th className="py-2.5 px-3 border-r w-10 text-center">#</th>
                    <th className="py-2.5 px-3 border-r">Item Description</th>
                    <th className="py-2.5 px-3 border-r text-center">Qty</th>
                    <th className="py-2.5 px-3 border-r text-right">Unit Price</th>
                    <th className="py-2.5 px-3 text-right">Total Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {selectedQuote.items.map((item) => (
                    <tr key={item.sl} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 border-r text-center font-medium">{item.sl}</td>
                      <td className="py-2.5 px-3 border-r font-semibold text-slate-900">{item.name}</td>
                      <td className="py-2.5 px-3 border-r text-center font-bold">{item.qty}</td>
                      <td className="py-2.5 px-3 border-r text-right font-taka">৳{item.unitPrice}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900 font-taka">৳{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
