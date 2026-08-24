'use client';

import { useState } from 'react';
import {
  FaComments,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookMessenger,
  FaPhone,
  FaXmark,
} from 'react-icons/fa6';

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const contactLinks = [
    {
      id: 'email',
      label: 'Email Us',
      href: 'mailto:info@ronexmart.com',
      icon: FaEnvelope,
      bgColor: 'bg-[#ff4d6d] hover:bg-[#e63946]',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      href: 'https://wa.me/8801335180650',
      icon: FaWhatsapp,
      bgColor: 'bg-[#25d366] hover:bg-[#128c7e]',
      target: '_blank',
    },
    {
      id: 'messenger',
      label: 'Messenger',
      href: 'https://m.me/Ronexmart',
      icon: FaFacebookMessenger,
      bgColor: 'bg-[#0084ff] hover:bg-[#0066cc]',
      target: '_blank',
    },
    {
      id: 'phone',
      label: 'Call 09611-678888',
      href: 'tel:09611678888',
      icon: FaPhone,
      bgColor: 'bg-[#ff9f1c] hover:bg-[#e08b10]',
    },
  ];

  return (
    <div
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-end select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* EXPANDED ICONS CONTAINER (Expands Right to Left) */}
        <div
          className={`flex items-center gap-2 sm:gap-2.5 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? 'max-w-[400px] opacity-100 pointer-events-auto pr-0.5'
              : 'max-w-0 opacity-0 pointer-events-none pr-0'
          }`}
        >
          {contactLinks.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="relative group/btn shrink-0">
                {/* Tooltip for individual icon */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-semibold rounded-md whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none shadow-md z-10">
                  {item.label}
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-900 mx-auto -mb-1" />
                </div>

                <a
                  href={item.href}
                  target={item.target || '_self'}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bgColor} text-white flex items-center justify-center text-base sm:text-xl shadow-lg transition-colors`}
                >
                  <IconComp />
                </a>
              </div>
            );
          })}
        </div>

        {/* MAIN TRIGGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact Us"
          className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full text-white flex items-center justify-center text-lg sm:text-2xl shadow-xl transition-colors duration-300 relative shrink-0 cursor-pointer ${
            isOpen ? 'bg-[#d90429] hover:bg-[#b70321]' : 'bg-[#006a52] hover:bg-[#005240]'
          }`}
        >
          {isOpen ? <FaXmark /> : <FaComments />}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
          )}
        </button>
      </div>
    </div>
  );
}
