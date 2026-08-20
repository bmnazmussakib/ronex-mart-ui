'use client';

import { useState } from 'react';
import { FaXmark, FaEnvelope, FaCircleCheck, FaKey, FaArrowLeft } from 'react-icons/fa6';

export default function ForgotPasswordModal({ isOpen, onClose }) {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmailOrPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl border border-slate-100 overflow-hidden relative p-5 sm:p-8 space-y-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
          aria-label="Close"
        >
          <FaXmark className="text-lg" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-emerald-50 text-[#006a52] rounded-lg flex items-center justify-center text-2xl mx-auto border border-emerald-100 shadow-xs">
                <FaKey />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Forgot Password?</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Enter your registered email address or phone number and we'll send you a password reset code.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Email or Phone Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FaEnvelope className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type="text"
                    required
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="e.g. user@example.com or 01700000000"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isLoading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  'Send Reset Code'
                )}
              </button>
            </form>

            <button
              onClick={onClose}
              className="w-full text-center text-xs font-semibold text-slate-500 hover:text-[#006a52] flex items-center justify-center gap-1.5 transition-colors cursor-pointer pt-2"
            >
              <FaArrowLeft className="text-[10px]" />
              <span>Back to Login</span>
            </button>
          </>
        ) : (
          <div className="text-center space-y-4 py-2">
            <div className="w-16 h-16 bg-emerald-100 text-[#006a52] rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
              <FaCircleCheck />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">Check Your Inbox</h3>
              <p className="text-xs text-slate-500">
                We've sent a verification code to <strong className="text-slate-800 font-bold">{emailOrPhone}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1 text-left">
              <p className="font-semibold text-slate-700">Next Steps:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-500">
                <li>Check your SMS or email inbox</li>
                <li>Enter the 6-digit code on the reset link</li>
                <li>If not found, check your spam folder</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all shadow-md cursor-pointer"
            >
              Done & Return to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
