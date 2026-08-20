'use client';

import { useState } from 'react';
import {
  FaEye,
  FaArrowLeft,
  FaPrint,
  FaDownload,
  FaBoxOpen,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaCircleCheck,
  FaRotateRight,
} from 'react-icons/fa6';

export default function ProfileOrdersTab() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const mockOrders = [
    {
      index: 1,
      id: '2608181289',
      date: '18-08-2026',
      price: '3,180.00',
      paymentMethod: 'Cash On Delivery',
      paymentMethodBadge: 'bg-amber-400 text-slate-900',
      paymentStatus: 'UN-PAID',
      paymentStatusBadge: 'bg-cyan-400 text-white font-semibold',
      deliveryStatus: 'CANCELED',
      deliveryStatusBadge: 'bg-slate-500 text-white font-semibold',
      customer: {
        name: 'Tanvir Ahmed',
        email: 'tanvir.ahmed@example.com',
        phone: '+8801712345678',
        address: 'House #45, Road #16 (New), Flat 4B',
        area: 'Dhanmondi 27',
        city: 'Dhaka',
      },
      items: [
        { sl: 1, name: 'Miniket Rice 10kg Premium', price: 850, qty: 2, total: 1700 },
        { sl: 2, name: 'Fortune Sunflower Oil 5L', price: 1180, qty: 1, total: 1180 },
        { sl: 3, name: 'Aci Pure Salt 1kg', price: 40, qty: 5, total: 200 },
        { sl: 4, name: 'Fresh Sugar 1kg', price: 100, qty: 1, total: 100 },
      ],
      subtotal: '3,180.00',
      shippingFee: '60.00',
      vat: '0.00',
      totalAmount: '3,240.00',
    },
    {
      index: 2,
      id: '2608161249',
      date: '16-08-2026',
      price: '2,090.00',
      paymentMethod: 'Bkash',
      paymentMethodBadge: 'bg-amber-400 text-slate-900',
      paymentStatus: 'UN-PAID',
      paymentStatusBadge: 'bg-cyan-400 text-white font-semibold',
      deliveryStatus: 'Pending',
      deliveryStatusBadge: 'bg-slate-500 text-white font-semibold',
      customer: {
        name: 'Tanvir Ahmed',
        email: 'tanvir.ahmed@example.com',
        phone: '+8801712345678',
        address: 'House #45, Road #16 (New), Flat 4B',
        area: 'Dhanmondi 27',
        city: 'Dhaka',
      },
      items: [
        { sl: 1, name: 'Dano Full Cream Milk Powder 500g', price: 490, qty: 2, total: 980 },
        { sl: 2, name: 'Pragati Pasteurized Milk 1L', price: 90, qty: 5, total: 450 },
        { sl: 3, name: 'Teatulia Organic Green Tea 100g', price: 660, qty: 1, total: 660 },
      ],
      subtotal: '2,090.00',
      shippingFee: '60.00',
      vat: '0.00',
      totalAmount: '2,150.00',
    },
    {
      index: 3,
      id: '2608161248',
      date: '16-08-2026',
      price: '3,550.00',
      paymentMethod: 'Bkash',
      paymentMethodBadge: 'bg-amber-400 text-slate-900',
      paymentStatus: 'UN-PAID',
      paymentStatusBadge: 'bg-cyan-400 text-white font-semibold',
      deliveryStatus: 'Pending',
      deliveryStatusBadge: 'bg-slate-500 text-white font-semibold',
      customer: {
        name: 'Tanvir Ahmed',
        email: 'tanvir.ahmed@example.com',
        phone: '+8801712345678',
        address: 'House #45, Road #16 (New), Flat 4B',
        area: 'Dhanmondi 27',
        city: 'Dhaka',
      },
      items: [
        { sl: 1, name: 'Fresh Farm Eggs (30 pcs)', price: 390, qty: 3, total: 1170 },
        { sl: 2, name: 'Fortune Soyabean Oil 5L', price: 820, qty: 2, total: 1640 },
        { sl: 3, name: 'Ruchi Chanachur Bar-B-Q 300g', price: 740, qty: 1, total: 740 },
      ],
      subtotal: '3,550.00',
      shippingFee: '60.00',
      vat: '0.00',
      totalAmount: '3,610.00',
    },
    {
      index: 4,
      id: '260802986',
      date: '02-08-2026',
      price: '7,500.00',
      paymentMethod: 'Cash On Delivery',
      paymentMethodBadge: 'bg-amber-400 text-slate-900',
      paymentStatus: 'UN-PAID',
      paymentStatusBadge: 'bg-cyan-400 text-white font-semibold',
      deliveryStatus: 'DELIVERY CANCELED',
      deliveryStatusBadge: 'bg-slate-500 text-white font-semibold',
      customer: {
        name: 'Tanvir Ahmed',
        email: 'tanvir.ahmed@example.com',
        phone: '+8801712345678',
        address: 'House #45, Road #16 (New), Flat 4B',
        area: 'Dhanmondi 27',
        city: 'Dhaka',
      },
      items: [
        { sl: 1, name: 'Wholesale Grocery Combo Pack', price: 7500, qty: 1, total: 7500 },
      ],
      subtotal: '7,500.00',
      shippingFee: '120.00',
      vat: '0.00',
      totalAmount: '7,620.00',
    },
    {
      index: 5,
      id: '260730945',
      date: '30-07-2026',
      price: '2,110.01',
      paymentMethod: 'Cash On Delivery',
      paymentMethodBadge: 'bg-amber-400 text-slate-900',
      paymentStatus: 'UN-PAID',
      paymentStatusBadge: 'bg-cyan-400 text-white font-semibold',
      deliveryStatus: 'CANCELED',
      deliveryStatusBadge: 'bg-slate-500 text-white font-semibold',
      customer: {
        name: 'Tanvir Ahmed',
        email: 'tanvir.ahmed@example.com',
        phone: '+8801712345678',
        address: 'House #45, Road #16 (New), Flat 4B',
        area: 'Dhanmondi 27',
        city: 'Dhaka',
      },
      items: [
        { sl: 1, name: 'Nescafe Classic Instant Coffee 200g', price: 890, qty: 1, total: 890 },
        { sl: 2, name: 'Horlicks Malt Drink 500g Jar', price: 540, qty: 2, total: 1080 },
        { sl: 3, name: 'Lays Potato Chips Cream & Onion 50g', price: 70, qty: 2, total: 140 },
      ],
      subtotal: '2,110.01',
      shippingFee: '60.00',
      vat: '0.00',
      totalAmount: '2,170.01',
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="space-y-4">
      {/* 1. ORDERS TABLE VIEW */}
      {!selectedOrder ? (
        <>
          {/* Header */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">My Orders</h3>
              <p className="text-xs text-slate-500">View and track all your placed orders and payment statuses.</p>
            </div>
          </div>

          {/* Orders Table Container */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-2xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                    <th className="py-3 px-4 border-r border-slate-200 w-12 text-center">#</th>
                    <th className="py-3 px-4 border-r border-slate-200">Order ID</th>
                    <th className="py-3 px-4 border-r border-slate-200">Order Date</th>
                    <th className="py-3 px-4 border-r border-slate-200">Price</th>
                    <th className="py-3 px-4 border-r border-slate-200">Payment Method</th>
                    <th className="py-3 px-4 border-r border-slate-200">Payment Status</th>
                    <th className="py-3 px-4 border-r border-slate-200">Delivery Status</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* # */}
                      <td className="py-3.5 px-4 border-r border-slate-200 text-center font-medium">
                        {order.index}
                      </td>

                      {/* Order ID */}
                      <td className="py-3.5 px-4 border-r border-slate-200 font-semibold text-slate-900">
                        {order.id}
                      </td>

                      {/* Order Date */}
                      <td className="py-3.5 px-4 border-r border-slate-200 font-medium">
                        {order.date}
                      </td>

                      {/* Price */}
                      <td className="py-3.5 px-4 border-r border-slate-200 font-semibold text-slate-900 whitespace-nowrap">
                        <span className="font-taka">৳</span> {order.price}
                      </td>

                      {/* Payment Method */}
                      <td className="py-3.5 px-4 border-r border-slate-200">
                        <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-sm ${order.paymentMethodBadge}`}>
                          {order.paymentMethod}
                        </span>
                      </td>

                      {/* Payment Status */}
                      <td className="py-3.5 px-4 border-r border-slate-200">
                        <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider ${order.paymentStatusBadge}`}>
                          {order.paymentStatus}
                        </span>
                      </td>

                      {/* Delivery Status */}
                      <td className="py-3.5 px-4 border-r border-slate-200">
                        <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider ${order.deliveryStatusBadge}`}>
                          {order.deliveryStatus}
                        </span>
                      </td>

                      {/* Action Eye Button */}
                      <td className="py-3.5 px-4 text-center">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-1.5 rounded-md border border-slate-300 hover:border-[#006a52] text-slate-700 hover:text-[#006a52] hover:bg-emerald-50 transition-all cursor-pointer inline-flex items-center justify-center"
                          title="View Order Details"
                        >
                          <FaEye className="text-sm" />
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
        /* 2. INLINE PAGE-LEVEL ORDER DETAILS / INVOICE VIEW */
        <div className="space-y-4">
          {/* Top Actions Bar (Hidden on Print) */}
          <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 print:hidden">
            <button
              onClick={() => setSelectedOrder(null)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#006a52] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-md transition-colors cursor-pointer"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Orders</span>
            </button>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-slate-800 px-3.5 py-2 rounded-md transition-all shadow-2xs cursor-pointer"
              >
                <FaDownload className="text-xs" />
                <span>Download Invoice</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#006a52] hover:bg-[#005240] px-4 py-2 rounded-md transition-all shadow-xs cursor-pointer"
              >
                <FaPrint className="text-xs" />
                <span>Print Invoice</span>
              </button>
            </div>
          </div>

          {/* Printable Invoice Container */}
          <div id="invoice-printable" className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 text-slate-800">
            {/* Invoice Top Header with Logo */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              {/* Company Logo & Details */}
              <div className="space-y-2">
                <img
                  src="/img/logo.png"
                  alt="RonexMart Logo"
                  className="h-12 sm:h-14 object-contain"
                />
                <div className="text-xs text-slate-500 space-y-0.5">
                  <p className="font-semibold text-slate-700">RonexMart Superstore Ltd.</p>
                  <p>House #12, Road #5, Dhanmondi, Dhaka-1209</p>
                  <p>Support Hotline: +880 9610-000000 | info@ronexmart.com</p>
                </div>
              </div>

              {/* Invoice Number & Date */}
              <div className="text-left sm:text-right space-y-1 sm:self-start">
                <span className="inline-block text-[10px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 uppercase tracking-wide">
                  INVOICE / RECEIPT
                </span>
                <h2 className="text-md font-semibold text-slate-900 pt-1">#{selectedOrder.id}</h2>
                <p className="text-xs text-slate-500">Date: <strong className="text-slate-700">{selectedOrder.date}</strong></p>
              </div>
            </div>

            {/* Billed To & Order Status Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-200 text-xs">
              {/* Billed & Shipped To */}
              <div className="space-y-1.5 bg-slate-50/80 p-4 rounded-md border border-slate-200">
                <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1.5 mb-2">
                  Customer & Shipping Address
                </h4>
                <p className="font-medium text-slate-900 text-sm">{selectedOrder.customer.name}</p>
                <p className="text-slate-600 flex items-center gap-1.5">
                  <FaPhone className="text-[10px] text-slate-400" /> {selectedOrder.customer.phone}
                </p>
                <p className="text-slate-600 flex items-center gap-1.5">
                  <FaEnvelope className="text-[10px] text-slate-400" /> {selectedOrder.customer.email}
                </p>
                <p className="text-slate-700 pt-1 flex items-start gap-1.5">
                  <FaLocationDot className="text-xs text-[#006a52] shrink-0 mt-0.5" />
                  <span>{selectedOrder.customer.address}, {selectedOrder.customer.area}, {selectedOrder.customer.city}</span>
                </p>
              </div>

              {/* Order Meta Info */}
              <div className="space-y-2 bg-slate-50/80 p-4 rounded-md border border-slate-200 flex flex-col justify-between">
                <h4 className="font-semibold text-slate-900 uppercase tracking-wider text-[11px] border-b border-slate-200 pb-1.5 mb-2">
                  Order Status Details
                </h4>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Payment Method:</span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-sm ${selectedOrder.paymentMethodBadge}`}>
                      {selectedOrder.paymentMethod}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Payment Status:</span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-sm uppercase ${selectedOrder.paymentStatusBadge}`}>
                      {selectedOrder.paymentStatus}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Delivery Status:</span>
                    <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-sm uppercase ${selectedOrder.deliveryStatusBadge}`}>
                      {selectedOrder.deliveryStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Products Table */}
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-900 text-sm">Order Items Breakdown</h4>
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
                    {selectedOrder.items.map((item) => (
                      <tr key={item.sl} className="hover:bg-slate-50/50">
                        <td className="py-3 px-3 border-r border-slate-200 text-center font-medium text-slate-500">
                          {item.sl}
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 font-medium text-slate-900">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 text-right font-medium whitespace-nowrap font-taka">
                          ৳ {item.price.toFixed(2)}
                        </td>
                        <td className="py-3 px-4 border-r border-slate-200 text-center font-semibold text-slate-800 font-taka">
                          {item.qty}
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-slate-900 whitespace-nowrap font-taka">
                          ৳ {item.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Price Calculations */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-2">
              <div className="text-xs text-slate-500 space-y-1 max-w-xs">
                <p className="font-semibold text-slate-700">Terms & Notes:</p>
                <p>Thank you for shopping with RonexMart. Please inspect goods upon delivery.</p>
              </div>

              <div className="w-full sm:w-72 bg-slate-50 p-4 rounded-md border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Subtotal:</span>
                  <span className="font-semibold text-slate-900 font-taka">৳ {selectedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Charge:</span>
                  <span className="font-semibold text-slate-900 font-taka">৳ {selectedOrder.shippingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">VAT / Tax (0%):</span>
                  <span className="font-semibold text-slate-900 font-taka">৳ {selectedOrder.vat}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-semibold text-slate-900">
                  <span>Total Amount:</span>
                  <span className="text-[#006a52] text-base font-taka">৳ {selectedOrder.totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Invoice Footer Stamp / Note */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 text-center sm:text-left">
              <p>© 2026 RonexMart Superstore Ltd. All rights reserved.</p>
              <p className="font-mono">Computer Generated Invoice — No Signature Required</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
