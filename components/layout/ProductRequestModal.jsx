'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaXmark,
  FaPlus,
  FaTrashCan,
  FaPaperclip,
  FaCheck,
  FaClipboardList,
} from 'react-icons/fa6';

export default function ProductRequestModal({ isOpen, onClose }) {
  const [rows, setRows] = useState([
    { id: 1, name: '', description: '', image: null, previewUrl: '' },
  ]);
  const [bazarListFile, setBazarListFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  if (!isOpen) return null;

  // Add new row to table
  const handleAddRow = () => {
    setRows((prev) => [
      ...prev,
      { id: Date.now(), name: '', description: '', image: null, previewUrl: '' },
    ]);
  };

  // Remove row from table
  const handleRemoveRow = (id) => {
    if (rows.length === 1) {
      setRows([{ id: Date.now(), name: '', description: '', image: null, previewUrl: '' }]);
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  // Handle text field changes
  const handleFieldChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  // Handle image upload for individual row
  const handleImageUpload = (id, file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, image: file, previewUrl: url } : r))
    );
  };

  // Handle Submit Individual Items Form
  const handleSubmitItems = (e) => {
    e.preventDefault();
    const hasData = rows.some((r) => r.name.trim() !== '');
    if (!hasData) {
      alert('Please enter at least one product name before submitting.');
      return;
    }

    setIsSubmitted(true);
    setSubmitMessage('Your product request has been submitted successfully! We will contact you soon.');
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  // Handle Submit Bazar List File
  const handleSubmitBazarList = (e) => {
    e.preventDefault();
    if (!bazarListFile) {
      alert('Please select a Bazar List file (jpg or png) to upload.');
      return;
    }

    setIsSubmitted(true);
    setSubmitMessage('Bazar List uploaded successfully! Our team will review and process your order.');
    setTimeout(() => {
      setIsSubmitted(false);
      setBazarListFile(null);
      onClose();
    }, 2500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto p-3 sm:p-4 flex items-center justify-center transition-all duration-300 ease-in-out ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden z-10 my-auto transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        {/* Modal Header */}
        <div className="bg-[#006a52] text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-white">
              <FaClipboardList className="text-base" />
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg leading-tight">Product Request</h3>
              <p className="text-xs text-emerald-100/90 font-normal">
                Can't find an item? Request products or upload your Bazar List
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <FaXmark className="text-sm" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* Success Banner */}
          {isSubmitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 flex items-center gap-3 animate-in fade-in">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <FaCheck />
              </div>
              <p className="text-xs sm:text-sm font-semibold">{submitMessage}</p>
            </div>
          ) : null}

          {/* Section 1: Itemized Product Request Table */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs sm:text-sm text-slate-800 uppercase tracking-wide flex items-center gap-2">
              <span>Itemized Product Request</span>
            </h4>

            {/* Table wrapper */}
            <div className="border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-[#006a52] text-white  text-center border-b border-[#005240]">
                      <th className="font-semibold py-2.5 px-3 w-18">Sl No</th>
                      <th className="font-semibold py-2.5 px-4 w-44">Name</th>
                      <th className="font-semibold py-2.5 px-4">Description</th>
                      <th className="font-semibold py-2.5 px-4 w-48">Image</th>
                      <th className="font-semibold py-2.5 px-3 w-20">Preview</th>
                      <th className="font-semibold py-2.5 px-3 w-16">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {rows.map((row, index) => (
                      <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                        {/* Sl No */}
                        <td className="py-2.5 px-3 text-center font-medium text-slate-700">
                          {index + 1}
                        </td>

                        {/* Product Name */}
                        <td className="py-2 px-3">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(e) => handleFieldChange(row.id, 'name', e.target.value)}
                            placeholder="Product Name"
                            className="w-full px-2.5 py-1.5 rounded-md border border-slate-300 focus:border-[#006a52] focus:ring-1 focus:ring-[#006a52] text-xs text-slate-800 outline-none bg-white"
                          />
                        </td>

                        {/* Description */}
                        <td className="py-2 px-3">
                          <input
                            type="text"
                            value={row.description}
                            onChange={(e) =>
                              handleFieldChange(row.id, 'description', e.target.value)
                            }
                            placeholder="Brand, size, weight, etc."
                            className="w-full px-2.5 py-1.5 rounded-md border border-slate-300 focus:border-[#006a52] focus:ring-1 focus:ring-[#006a52] text-xs text-slate-800 outline-none bg-white"
                          />
                        </td>

                        {/* Image File Input */}
                        <td className="py-2 px-3">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleImageUpload(row.id, e.target.files && e.target.files[0])
                            }
                            className="w-full text-[11px] text-slate-500 file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 cursor-pointer"
                          />
                        </td>

                        {/* Preview Thumbnail */}
                        <td className="py-2 px-3 text-center">
                          {row.previewUrl ? (
                            <div className="w-10 h-10 rounded-md border border-slate-200 overflow-hidden relative mx-auto bg-slate-50">
                              <Image
                                src={row.previewUrl}
                                alt="Preview"
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <span className="text-[10px] text-slate-400 italic">No image</span>
                          )}
                        </td>

                        {/* Action Delete */}
                        <td className="py-2 px-3 text-center">
                          <button
                            type="button"
                            onClick={() => handleRemoveRow(row.id)}
                            className="w-7 h-7 rounded-md bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center transition-colors mx-auto cursor-pointer"
                            title="Delete row"
                          >
                            <FaTrashCan className="text-xs" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Submit & + More Buttons */}
            <div className="flex items-center justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleSubmitItems}
                className="px-5 py-2 rounded-md bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                Submit Request
              </button>
              <button
                type="button"
                onClick={handleAddRow}
                className="px-4 py-2 rounded-md bg-[#004f3d] hover:bg-[#003b2e] text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              >
                <FaPlus className="text-xs" />
                <span>More</span>
              </button>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Section 2: Upload Bazar List */}
          <div className="space-y-3 pt-1">
            <h4 className="font-semibold text-xs sm:text-sm text-slate-800 uppercase tracking-wide">
              Upload Bazar List (jpg, png)
            </h4>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <label className="flex-1 flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md cursor-pointer hover:border-[#006a52] transition-colors">
                  <FaPaperclip className="text-slate-400 text-sm shrink-0" />
                  <span className="text-xs text-slate-600 truncate flex-1 font-medium">
                    {bazarListFile ? bazarListFile.name : 'Choose file (JPG or PNG)...'}
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={(e) => setBazarListFile(e.target.files && e.target.files[0])}
                    className="hidden"
                  />
                </label>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleSubmitBazarList}
                  className="px-5 py-2.5 rounded-md bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
                >
                  Submit Bazar List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
