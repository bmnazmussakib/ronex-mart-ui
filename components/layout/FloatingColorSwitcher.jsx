'use client';

import { useState, useEffect } from 'react';
import { FaGear, FaPalette, FaCheck, FaXmark } from 'react-icons/fa6';

export default function FloatingColorSwitcher() {
  const [activeTheme, setActiveTheme] = useState('green');
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'green',
      name: 'Emerald Green',
      primary: '#006a52',
      dark: '#053b2c',
      bgClass: 'bg-[#006a52]',
    },
    {
      id: 'lime',
      name: 'Fresh Lime',
      primary: '#569d03',
      dark: '#549b02',
      bgClass: 'bg-[#569d03]',
    },
    {
      id: 'amber',
      name: 'Vibrant Amber',
      primary: '#ea580c',
      dark: '#7c2d12',
      bgClass: 'bg-[#ea580c]',
    },
    {
      id: 'blue',
      name: 'Royal Blue',
      primary: '#2563eb',
      dark: '#1e3a8a',
      bgClass: 'bg-[#2563eb]',
    },
  ];

  // Initialize theme from localStorage on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('ronex_theme') || 'green';
    setActiveTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
    localStorage.setItem('ronex_theme', themeId);
    document.documentElement.setAttribute('data-theme', themeId);
  };

  return (
    <div
      className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-40 flex items-center justify-end"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={`bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 rounded-full shadow-xl flex items-center transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'w-64 sm:w-72 px-3 py-2 gap-2.5' : 'w-10 h-10 sm:w-11 sm:h-11 justify-center'
        }`}
      >
        {/* Gear / Palette Toggle Icon Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Color theme switcher"
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#006a52] hover:opacity-90 text-white flex items-center justify-center shrink-0 cursor-pointer shadow-xs transition-transform"
          style={{ backgroundColor: themes.find((t) => t.id === activeTheme)?.primary || '#006a52' }}
        >
          <FaGear className={`text-xs sm:text-sm transition-transform duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
        </button>

        {/* Expanded Palette Content */}
        {isOpen && (
          <div className="flex items-center justify-between flex-1 min-w-0 pr-1 animate-fadeIn">
            <span className="text-[10px] sm:text-xs font-semibold text-slate-200 truncate uppercase tracking-wider">
              Theme Palette
            </span>

            {/* Color Bullets */}
            <div className="flex items-center gap-1.5 shrink-0">
              {themes.map((theme) => {
                const isSelected = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleSelectTheme(theme.id)}
                    title={theme.name}
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center cursor-pointer transition-all transform hover:scale-115 relative ${
                      isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-80 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: theme.primary }}
                  >
                    {isSelected && <FaCheck className="text-[10px] text-white" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
