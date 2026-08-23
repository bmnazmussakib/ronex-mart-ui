'use client';

import { useState } from 'react';
import { FaLocationDot, FaPlus, FaPen, FaTrash, FaCheck, FaHouse, FaBuilding } from 'react-icons/fa6';

export default function ProfileAddressesTab() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: 'Home Address',
      fullName: 'Tanvir Ahmed',
      phone: '01712345678',
      district: 'Dhaka',
      area: 'Dhanmondi 27',
      address: 'House #45, Road #16 (New), Flat 4B',
      isDefaultShipping: true,
      isDefaultBilling: true,
      type: 'Home',
    },
    {
      id: 2,
      title: 'Office Address',
      fullName: 'Tanvir Ahmed',
      phone: '01898765432',
      district: 'Dhaka',
      area: 'Gulshan 1',
      address: 'Level 8, Concord Tower, Gulshan Avenue',
      isDefaultShipping: false,
      isDefaultBilling: false,
      type: 'Office',
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newAddr, setNewAddr] = useState({
    title: '',
    fullName: '',
    phone: '',
    district: 'Dhaka',
    area: '',
    address: '',
    type: 'Home',
  });

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!newAddr.title || !newAddr.fullName || !newAddr.address) return;

    setAddresses((prev) => [
      ...prev,
      {
        ...newAddr,
        id: Date.now(),
        isDefaultShipping: false,
        isDefaultBilling: false,
      },
    ]);

    setNewAddr({ title: '', fullName: '', phone: '', district: 'Dhaka', area: '', address: '', type: 'Home' });
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleSetDefaultShipping = (id) => {
    setAddresses((prev) =>
      prev.map((a) => ({
        ...a,
        isDefaultShipping: a.id === id,
      }))
    );
  };

  return (
    <div className="space-y-4">
      {/* Header Bar */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-xs flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Saved Addresses</h3>
          <p className="text-sm text-slate-500 mt-0.5">Manage your shipping and billing delivery locations.</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#006a52] hover:bg-[#005240] px-3.5 py-2 rounded-md transition-all shadow-2xs cursor-pointer shrink-0"
        >
          <FaPlus className="text-xs" />
          <span>{isAdding ? 'Cancel' : 'Add New Address'}</span>
        </button>
      </div>

      {/* Add Address Form */}
      {isAdding && (
        <form onSubmit={handleAddAddress} className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs space-y-4 animate-in fade-in">
          <h4 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">Add New Location</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Address Title (e.g. My Flat)"
              value={newAddr.title}
              onChange={(e) => setNewAddr({ ...newAddr, title: e.target.value })}
              className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Recipient Name"
              value={newAddr.fullName}
              onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
              className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
            />
            <input
              type="tel"
              required
              placeholder="Contact Phone"
              value={newAddr.phone}
              onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
              className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Area / Thana (e.g. Uttara)"
              value={newAddr.area}
              onChange={(e) => setNewAddr({ ...newAddr, area: e.target.value })}
              className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Full Street Address"
              value={newAddr.address}
              onChange={(e) => setNewAddr({ ...newAddr, address: e.target.value })}
              className="sm:col-span-2 px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-xs focus:bg-white focus:border-[#006a52] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs py-2 px-4 rounded-md transition-all shadow-xs cursor-pointer"
          >
            Save Address
          </button>
        </form>
      )}

      {/* Address Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {addresses.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5 shadow-2xs space-y-3 relative flex flex-col justify-between">
            <div className="space-y-2">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.type === 'Home' ? <FaHouse className="text-slate-500 text-xs" /> : <FaBuilding className="text-slate-500 text-xs" />}
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                </div>
                {item.isDefaultShipping && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Default Shipping
                  </span>
                )}
              </div>

              {/* Address Details */}
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">{item.fullName}</p>
                <p className="text-slate-500">{item.phone}</p>
                <p className="text-slate-700">{item.address}</p>
                <p className="text-slate-500">{item.area}, {item.district}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              {!item.isDefaultShipping ? (
                <button
                  onClick={() => handleSetDefaultShipping(item.id)}
                  className="text-[11px] font-semibold text-[#006a52] hover:underline cursor-pointer"
                >
                  Set as Default
                </button>
              ) : (
                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <FaCheck className="text-[10px]" /> Primary Address
                </span>
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-slate-400 hover:text-rose-600 p-1.5 rounded-md hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Delete"
                >
                  <FaTrash className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
