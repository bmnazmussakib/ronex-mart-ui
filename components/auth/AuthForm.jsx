'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebook,
  FaCircleCheck,
  FaArrowRight,
  FaBolt,
  FaShieldHalved,
  FaCheck,
} from 'react-icons/fa6';
import ForgotPasswordModal from './ForgotPasswordModal';

export default function AuthForm({ initialTab = 'login' }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);

  // Login State
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Register State
  const [registerData, setRegisterData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  // Common UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(null); // 'login' | 'register' | null
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!loginIdentifier || !loginPassword) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess('login');
    }, 1000);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!registerData.fullName || !registerData.phone || !registerData.password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify.');
      return;
    }

    if (!registerData.agreeTerms) {
      setErrorMessage('You must agree to the Terms & Conditions.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess('register');
    }, 1200);
  };

  const handleFillDemo = () => {
    setLoginIdentifier('customer@ronexmart.com');
    setLoginPassword('DemoPassword123');
    setErrorMessage('');
  };

  // Password strength check helper
  const getPasswordStrength = (pass) => {
    if (!pass) return { label: '', color: '' };
    if (pass.length < 6) return { label: 'Weak', color: 'bg-rose-500 w-1/3' };
    if (pass.length < 10) return { label: 'Medium', color: 'bg-amber-500 w-2/3' };
    return { label: 'Strong', color: 'bg-emerald-500 w-full' };
  };

  const passwordStrength = getPasswordStrength(registerData.password);

  if (authSuccess) {
    return (
      <div className="bg-white rounded-lg border border-slate-200 p-8 shadow-xl text-center space-y-6 max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#006a52] mx-auto flex items-center justify-center text-3xl shadow-inner">
          <FaCircleCheck />
        </div>
        <div className="space-y-2">
          <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {authSuccess === 'login' ? 'WELCOME BACK' : 'ACCOUNT CREATED'}
          </span>
          <h2 className="text-2xl font-semibold text-slate-900 mt-2">
            {authSuccess === 'login' ? 'Successfully Signed In!' : 'Welcome to RonexMart!'}
          </h2>
          <p className="text-sm text-slate-500">
            {authSuccess === 'login'
              ? 'You have logged into your account. Start exploring everyday essential goods.'
              : 'Your new account has been created successfully. Enjoy your shopping experience.'}
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 text-left text-xs space-y-2">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">User Status:</span>
            <strong className="text-emerald-700 font-bold flex items-center gap-1">
              <FaShieldHalved /> Verified Account
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Session ID:</span>
            <span className="text-slate-700 font-mono font-bold">#RM-SESS-{Math.floor(1000 + Math.random() * 9000)}</span>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
        >
          <span>Continue Shopping</span>
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    );
  }

  

  return (
    <>
    
      <div className="bg-white rounded-lg border border-slate-200 overflow-hidden max-w-md w-full mx-auto">
        {/* Header Tab Switcher */}
        <div className="flex bg-slate-100/80 p-1.5 border-b border-slate-200">
          <button
            onClick={() => {
              setActiveTab('login');
              setErrorMessage('');
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'login'
                ? 'bg-white text-[#006a52] shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Sign In</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('register');
              setErrorMessage('');
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'register'
                ? 'bg-white text-[#006a52] shadow-sm'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span>Sign Up</span>
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-6">
          {/* Error Banner */}
          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs px-4 py-3 rounded-2xl font-medium animate-in fade-in">
              {errorMessage}
            </div>
          )}

          {/* LOGIN FORM */}
          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">Welcome Back!</h2>
                <p className="text-xs text-slate-500">Sign in to manage orders, wishlist & address book.</p>
              </div>

              {/* Email / Mobile Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Email Address or Phone <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    placeholder="Enter email or mobile number"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-slate-700">
                    Password <span className="text-rose-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsForgotModalOpen(true)}
                    className="text-xs font-semibold text-[#006a52] hover:underline cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative flex items-center">
                  <FaLock className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type={showLoginPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 text-sm cursor-pointer"
                  >
                    {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 font-medium select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-[#006a52] focus:ring-[#006a52] cursor-pointer"
                  />
                  <span>Keep me logged in</span>
                </label>

                {/* Quick Demo Login Link */}
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 flex items-center gap-1 cursor-pointer"
                >
                  <FaBolt className="text-[10px]" />
                  <span>Demo Fill</span>
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-md transition-all  active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Sign In </span>
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>

              {/* Social Login Divider */}
              <div className="relative py-2 flex items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Or Sign In With
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleLoginSubmit({ preventDefault: () => {} })}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-300 rounded-md bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-all cursor-pointer"
                >
                  <FaGoogle className="text-red-500 text-sm" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleLoginSubmit({ preventDefault: () => {} })}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 border border-slate-300 rounded-md bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-all cursor-pointer"
                >
                  <FaFacebook className="text-blue-600 text-sm" />
                  <span>Facebook</span>
                </button>
              </div>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-slate-900">Sign Up</h2>
                <p className="text-xs text-slate-500">Join RonexMart for faster checkout & exclusive deals.</p>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FaUser className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={registerData.fullName}
                    onChange={handleRegisterChange}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 font-bold text-xs text-slate-500">+880</span>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      placeholder="1700000000"
                      className="w-full pl-13 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <FaEnvelope className="absolute left-3.5 text-slate-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      placeholder="name@mail.com"
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FaLock className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type={showRegPassword ? 'text' : 'password'}
                    required
                    name="password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    placeholder="At least 6 characters"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegPassword(!showRegPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 text-sm cursor-pointer"
                  >
                    {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {/* Strength bar */}
                {registerData.password && (
                  <div className="space-y-1 pt-0.5">
                    <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${passwordStrength.color} transition-all duration-300`}></div>
                    </div>
                    <p className="text-[10px] text-slate-400 text-right">
                      Strength: <span className="font-bold text-slate-600">{passwordStrength.label}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">
                  Confirm Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <FaLock className="absolute left-3.5 text-slate-400 text-sm" />
                  <input
                    type={showRegConfirmPassword ? 'text' : 'password'}
                    required
                    name="confirmPassword"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    placeholder="Re-enter password"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm text-slate-800 focus:bg-white focus:border-[#006a52] focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 text-sm cursor-pointer"
                  >
                    {showRegConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600 select-none">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={registerData.agreeTerms}
                    onChange={handleRegisterChange}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#006a52] focus:ring-[#006a52] cursor-pointer"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="#" className="text-[#006a52] font-bold hover:underline">
                      Terms of Service
                    </a>{' '}
                    &{' '}
                    <a href="#" className="text-[#006a52] font-bold hover:underline">
                      Privacy Policy
                    </a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#006a52] hover:bg-[#005240] text-white font-semibold text-xs sm:text-sm py-3.5 px-4 rounded-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
              >
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Sign Up</span>
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Card Footer Info */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <FaShieldHalved className="text-[#006a52]" />
          <span>100% Safe & Encrypted Authentication</span>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
      />

      
    </>
  );
}
