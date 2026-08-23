'use client';

import { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendar,
  FaVenusMars,
  FaCity,
  FaPenToSquare,
  FaCheck,
  FaBoxOpen,
  FaClock,
  FaHeart,
  FaTicket,
} from 'react-icons/fa6';

export default function ProfileOverviewTab({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user.fullName || 'Tanvir Ahmed',
    email: user.email || 'tanvir.ahmed@example.com',
    phone: user.phone || '01712345678',
    gender: user.gender || 'Male',
    dob: user.dob || '1996-08-15',
    city: user.city || 'Dhaka',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, ...formData }));
    setIsEditing(false);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-5">
      {/* Save Success Banner */}
      {savedMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold p-3.5 rounded-md flex items-center gap-2 animate-in fade-in">
          <FaCheck className="text-[#006a52] text-sm" />
          <span>Profile details updated successfully!</span>
        </div>
      )}

      {/* Personal Info Card */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">Personal Information</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Manage your profile details and contact information.</p>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#006a52] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 sm:px-3.5 py-1.5 rounded-md transition-colors cursor-pointer"
            >
              <FaPenToSquare className="text-xs" />
              <span>Edit Profile</span>
            </button>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">Full Name</label>
              <div className="relative flex items-center">
                <FaUser className="absolute left-3.5 text-slate-400 text-sm" />
                <input
                  type="text"
                  name="fullName"
                  disabled={!isEditing}
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">Email Address</label>
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-3.5 text-slate-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">Phone Number</label>
              <div className="relative flex items-center">
                <FaPhone className="absolute left-3.5 text-slate-400 text-sm" />
                <input
                  type="tel"
                  name="phone"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">Gender</label>
              <div className="relative flex items-center">
                <FaVenusMars className="absolute left-3.5 text-slate-400 text-sm" />
                <select
                  name="gender"
                  disabled={!isEditing}
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100 appearance-none cursor-pointer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">Date of Birth</label>
              <div className="relative flex items-center">
                <FaCalendar className="absolute left-3.5 text-slate-400 text-sm" />
                <input
                  type="date"
                  name="dob"
                  disabled={!isEditing}
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100"
                />
              </div>
            </div>

            {/* Default City */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 block">City / District</label>
              <div className="relative flex items-center">
                <FaCity className="absolute left-3.5 text-slate-400 text-sm" />
                <input
                  type="text"
                  name="city"
                  disabled={!isEditing}
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all disabled:opacity-75 disabled:bg-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Edit Actions */}
          {isEditing && (
            <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="submit"
                className="bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-sm py-2 px-5 rounded-md transition-all shadow-xs cursor-pointer"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm py-2 px-5 rounded-md transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
