'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaPaperPlane,
  FaFileInvoice,
  FaChevronRight,
  FaCircleCheck,
  FaXmark,
  FaCartPlus,
  FaEye,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaNoteSticky,
} from 'react-icons/fa6';

export default function QuotePage() {
  // Initial Mock Quote Items based on reference image
  const [quoteItems, setQuoteItems] = useState([
    {
      id: 1,
      slNo: 1,
      name: 'Drinking Water Pet Bottle 330 ml',
      partyName: 'Party-2',
      image: '/img/product/product (1).jpeg',
      unitPrice: 15,
      quantity: 1,
    },
    {
      id: 2,
      slNo: 2,
      name: 'Actifit Fortified Sunflower Oil 2 Ltr',
      partyName: 'Party',
      image: '/img/product/product (6).jpeg',
      unitPrice: 380,
      quantity: 84,
    },
    {
      id: 3,
      slNo: 3,
      name: 'Drinking Water Pet Bottle 1 Ltr',
      partyName: 'Party-1',
      image: '/img/product/product (1).jpeg',
      unitPrice: 25,
      quantity: 1,
    },
    {
      id: 4,
      slNo: 4,
      name: 'Fortified Soybean Oil Pet Bottle 2 Ltr',
      partyName: 'Party-3',
      image: '/img/product/product (6).jpeg',
      unitPrice: 396,
      quantity: 1,
    },
  ]);

  // Selected product for "View Details" modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  // Submit Quote Modal state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    address: '',
    remarks: '',
  });

  // Quantity updates
  const handleQuantityChange = (id, newQty) => {
    const qty = Math.max(1, parseInt(newQty) || 1);
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleIncrement = (id) => {
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleDecrement = (id) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setQuoteItems((prev) =>
      prev
        .filter((item) => item.id !== id)
        .map((item, idx) => ({ ...item, slNo: idx + 1 }))
    );
  };

  // Calculate totals
  const totalItems = quoteItems.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = quoteItems.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Quote Request', href: '/quote' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 py-2 sm:py-4">
      {/* Breadcrumb Navigation */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#006a52]/10 text-[#006a52] flex items-center justify-center text-xl shrink-0">
            <FaFileInvoice />
          </div>
          <div>
            <h1 className="text-lg sm:text-2xl font-medium text-slate-900 leading-tight">
              Request For Quote (RFQ)
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Review requested products, update bulk quantities, and submit for wholesale pricing.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="text-sm font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            Total Items: <strong className="text-[#006a52]">{quoteItems.length}</strong>
          </span>
        </div>
      </div>

      {/* Quote Table Content */}
      {quoteItems.length > 0 ? (
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col">
          {/* Desktop & Tablet Table (Scrollable on small screens) */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#006a52] text-white text-xs sm:text-xs uppercase tracking-wider font-bold">
                  <th className="py-3.5 px-4 text-center w-16 border-r border-[#005240]">SL </th>
                  <th className="py-3.5 px-4 text-center w-24 border-r border-[#005240]">IMAGE</th>
                  <th className="py-3.5 px-6 border-r border-[#005240]">PRODUCT NAME</th>
                  <th className="py-3.5 px-4 text-center w-32 border-r border-[#005240]">UNIT PRICE</th>
                  <th className="py-3.5 px-4 text-center w-44 border-r border-[#005240]">QUANTITY</th>
                  <th className="py-3.5 px-4 text-center w-36 border-r border-[#005240]">TOTAL</th>
                  <th className="py-3.5 px-4 text-center w-24">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {quoteItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    {/* SL NO */}
                    <td className="py-4 px-4 text-center font-bold text-slate-800 border-r border-slate-200/80">
                      {item.slNo}
                    </td>

                    {/* IMAGE */}
                    <td className="py-3 px-4 text-center border-r border-slate-200/80">
                      <div className="w-14 h-14 relative mx-auto bg-white border border-slate-200 rounded-md overflow-hidden p-1 flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                    </td>

                    {/* PRODUCT NAME */}
                    <td className="py-3 px-6 border-r border-slate-200/80">
                      <h3 className="font-medium text-slate-900 text-xs sm:text-sm leading-snug">
                        {item.name}
                      </h3>
                      {item.partyName && (
                        <p className="text-xs font-medium text-slate-600 mt-1">
                          Party Name: <span className="text-slate-800">{item.partyName}</span>
                        </p>
                      )}
                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-[#006a52] uppercase tracking-wider mt-1.5 transition-colors cursor-pointer"
                      >
                        <FaEye className="text-[10px]" />
                        <span>VIEW DETAILS</span>
                      </button>
                    </td>

                    {/* UNIT PRICE */}
                    <td className="py-4 px-4 text-center font-semibold text-slate-900 font-taka border-r border-slate-200/80 text-sm sm:text-base">
                      ৳{item.unitPrice.toLocaleString()}
                    </td>

                    {/* QUANTITY */}
                    <td className="py-3 px-4 text-center border-r border-slate-200/80">
                      <div className="inline-flex items-center rounded-full border border-slate-200/90 bg-white px-2 py-0.5 shadow-2xs">
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.id)}
                          className="w-7 h-7 rounded-full text-[#006a52] hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                          aria-label="Decrease quantity"
                        >
                          <FaMinus className="text-xs" />
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="w-10 sm:w-12 text-center text-xs sm:text-sm font-semibold text-slate-900 bg-transparent outline-hidden border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none font-taka"
                        />
                        <button
                          type="button"
                          onClick={() => handleIncrement(item.id)}
                          className="w-7 h-7 rounded-full text-[#006a52] hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                          aria-label="Increase quantity"
                        >
                          <FaPlus className="text-xs" />
                        </button>
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td className="py-4 px-4 text-center font-semibold text-slate-900 font-taka border-r border-slate-200/80 text-sm sm:text-base">
                      ৳{(item.unitPrice * item.quantity).toLocaleString()}
                    </td>

                    {/* ACTION */}
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-500 text-red-500 hover:text-white inline-flex items-center justify-center text-sm transition-colors cursor-pointer"
                        title="Remove item"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Bar & Action Section */}
          <div className="bg-slate-50 p-4 sm:p-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Total Summary */}
            <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-slate-700">
              <span className="bg-white border border-slate-200 px-6 py-2.5 rounded-md shadow-2xs">
                Total Products: <strong className="text-slate-900 font-bold">{quoteItems.length}</strong>
              </span>
              <span className="bg-white border border-slate-200 px-6 py-2.5 rounded-md shadow-2xs">
                Estimated Total: <strong className="text-[#006a52] font-bold  font-taka">৳{grandTotal.toLocaleString()}</strong>
              </span>
            </div>

            {/* Submit Quote Button at Bottom of Table */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/"
                className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold text-center transition-colors shadow-2xs"
              >
                Add More Items
              </Link>
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <FaPaperPlane className="text-xs" />
                <span>Submit Quote</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Quote State */
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4 shadow-2xs">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-3xl">
            <FaFileInvoice />
          </div>
          <div>
            <h3 className="text-base sm:text-xl font-bold text-slate-800">Your Quote Request is Empty</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-1">
              You currently have no products selected for quotation. Browse our store products and add items to your quote request.
            </p>
          </div>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-2xs mt-2"
          >
            <FaCartPlus />
            <span>Browse Products</span>
          </Link>
        </div>
      )}

      {/* VIEW DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <FaXmark className="text-lg" />
            </button>
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
              <div className="w-16 h-16 relative bg-white border border-slate-200 rounded-lg p-1 shrink-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {selectedProduct.name}
                </h3>
                {selectedProduct.partyName && (
                  <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                    {selectedProduct.partyName}
                  </span>
                )}
              </div>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Unit Price:</span>
                <strong className="text-slate-900 font-taka">৳{selectedProduct.unitPrice}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Quantity Requested:</span>
                <strong className="text-slate-900">{selectedProduct.quantity} units</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span>Line Total:</span>
                <strong className="text-[#006a52] font-taka font-bold">
                  ৳{(selectedProduct.unitPrice * selectedProduct.quantity).toLocaleString()}
                </strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Wholesale Status:</span>
                <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md text-xs">
                  Available for Bulk Quote
                </span>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUBMIT QUOTE MODAL */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-lg w-full p-5 sm:p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => {
                setIsSubmitModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <FaXmark className="text-base" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#006a52]/10 text-[#006a52] flex items-center justify-center text-lg shrink-0">
                    <FaPaperPlane />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 text-lg">Submit Quote Request</h3>
                    <p className="text-xs text-slate-500">Provide your party/company details for official pricing</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Party / Company Name *
                    </label>
                    <div className="relative flex items-center">
                      <FaBuilding className="absolute left-3 text-slate-400 text-xs" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Party-2 / Acme Enterprise"
                        value={formData.partyName}
                        onChange={(e) => setFormData({ ...formData, partyName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <div className="relative flex items-center">
                        <FaPhone className="absolute left-3 text-slate-400 text-xs" />
                        <input
                          type="tel"
                          required
                          placeholder="017XXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 outline-hidden"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative flex items-center">
                        <FaEnvelope className="absolute left-3 text-slate-400 text-xs" />
                        <input
                          type="email"
                          placeholder="info@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Delivery Address
                    </label>
                    <div className="relative flex items-center">
                      <FaLocationDot className="absolute left-3 text-slate-400 text-xs" />
                      <input
                        type="text"
                        placeholder="Warehouse or shop location"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Special Notes / Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any specific delivery requirements or discount requests..."
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      className="w-full p-2.5 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:border-[#006a52] focus:ring-2 focus:ring-[#006a52]/20 outline-hidden resize-none"
                    />
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-md border border-slate-200 text-xs text-slate-600 flex justify-between items-center font-semibold">
                  <span>Grand Total ({quoteItems.length} Products):</span>
                  <span className="text-[#006a52] font-semibold text-base font-taka">৳{grandTotal.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(false)}
                    className="w-1/2 py-2.5 rounded-md border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2.5 rounded-md bg-[#006a52] hover:bg-[#005240] text-white text-xs sm:text-sm font-bold transition-colors cursor-pointer shadow-md"
                  >
                    Confirm & Send
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                  <FaCircleCheck />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Quote Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xs mx-auto">
                    Your request (Ref: #RFQ-{Math.floor(100000 + Math.random() * 900000)}) has been sent to our sales team. We will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitModalOpen(false);
                    setIsSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-[#006a52] hover:bg-[#005240] text-white rounded-md text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
