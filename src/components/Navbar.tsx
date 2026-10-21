import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/ruwaContent';
import { RuwaLogo } from './RuwaLogo';
import { Menu, X, PhoneCall, Zap, ArrowRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Clean, customer-friendly navigation links matching user needs
  const navItems = [
    { label: "Pay in Installments (Packages)", href: "#packages", highlight: true },
    { label: "Products & Equipment", href: "#products" },
    { label: "Solar for Businesses", href: "#solutions" },
    { label: "EV Fleet Charging", href: "#solutions" },
    { label: "Farm & Cold Storage", href: "#solutions" },
    { label: "Savings Calculator", href: "#calculator" },
    { label: "Infrastructure Portfolio", href: "#infrastructure-portfolio" },
    { label: "Our Team", href: "#team" },
    { label: "Contact & Audit", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 backdrop-blur-md border-b ${
      darkMode 
        ? 'bg-slate-950/95 border-slate-800 text-slate-100' 
        : 'bg-white/95 border-slate-200 text-slate-900 shadow-xs'
    }`}>
      {/* Top Banner with Corporate Hotlines */}
      <div className={`text-xs py-2 px-4 border-b ${
        darkMode 
          ? 'bg-slate-900 text-slate-300 border-slate-800' 
          : 'bg-sky-950 text-sky-100 border-sky-900'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
              Commercial Infrastructure
            </span>
            <span className="hidden md:inline text-xs font-medium opacity-90">
              Turnkey Solar Microgrids, Commercial EV Depots &amp; AgriTech • Lagos HQ &amp; Abuja Hub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_DETAILS.phone}`} 
              className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-colors font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Hotline: {COMPANY_DETAILS.phoneFormatted}</span>
            </a>
            <span className="hidden sm:inline text-sky-700">|</span>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline text-xs font-semibold text-amber-300 hover:text-white transition-colors"
            >
              Rapid On-Site Energy Audit (24h SLA)
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar (Menu Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
        
        {/* Brand Identity / Emblem */}
        <a 
          href="#" 
          aria-label="Ruwa Technology Limited Home" 
          className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
        >
          <RuwaLogo size="md" darkMode={darkMode} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto py-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                item.highlight
                  ? darkMode
                    ? 'text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 font-bold'
                    : 'text-amber-900 bg-amber-100/70 hover:bg-amber-100 font-bold border border-amber-200/60'
                  : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quick Hotline on Desktop Header */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold shrink-0">
          <a
            href={`tel:${COMPANY_DETAILS.phone}`}
            className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors ${
              darkMode 
                ? 'text-slate-300 hover:text-white hover:bg-slate-900' 
                : 'text-slate-700 hover:text-sky-700 hover:bg-slate-100'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>{COMPANY_DETAILS.phoneFormatted}</span>
          </a>
        </div>
      </div>

      {/* Relocated Action Bar Underneath the Menu Bar: Fitted on all screen sizes */}
      <div className={`border-t transition-colors ${
        darkMode 
          ? 'bg-slate-900/90 border-slate-800/80 text-slate-200' 
          : 'bg-slate-50/95 border-slate-200 text-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          
          {/* Trust Indicators / Operational Specs */}
          <div className="flex items-center gap-3 sm:gap-4 text-xs">
            <span className="inline-flex items-center gap-2.5 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
              <span>Solar Power Systems</span>
            </span>
            <span className="hidden sm:inline text-xs font-medium text-slate-600 dark:text-slate-400">
              Solar Systems (20kVA–500kVA+) • EV Fleet Chargers • Solar Cold Rooms
            </span>
            <span className="hidden md:inline-flex text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
              24h On-Site Audit Guarantee
            </span>
          </div>

          {/* CTA Request Consultation Button & Menu Button fitted cleanly together */}
          <div className="flex items-center gap-3 shrink-0 ml-auto sm:ml-0">
            {/* Prominent High-Contrast CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all min-h-[42px] shadow-xs hover:shadow-md cursor-pointer ${
                darkMode
                  ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold'
                  : 'bg-sky-700 hover:bg-sky-600 text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 dark:text-slate-950 fill-current shrink-0" />
              <span className="whitespace-nowrap font-bold">Request Consultation</span>
            </a>

            {/* Clean Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all min-h-[42px] cursor-pointer ${
                menuOpen
                  ? darkMode
                    ? 'bg-slate-800 border-amber-400/60 text-amber-400'
                    : 'bg-slate-200 border-sky-600 text-sky-800'
                  : darkMode 
                    ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-800 hover:text-white' 
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <>
                  <X className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="font-bold">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 shrink-0" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Simplified, Clean Expanded Menu Drawer (Easy to Navigate, No Clutter) */}
      {menuOpen && (
        <div className={`border-b px-4 sm:px-6 py-6 shadow-xl animate-fadeIn ${
          darkMode ? 'bg-slate-950/98 border-slate-800 text-slate-100' : 'bg-white/98 border-slate-200 text-slate-900'
        }`}>
          <div className="max-w-3xl mx-auto space-y-4">
            
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Direct Section Navigation
              </span>
              <span className="text-xs text-sky-500 font-mono">
                Ruwa Technology Limited • CAC RC-1614229
              </span>
            </div>

            {/* Clean Tap Targets (Minimal & Clear 2-column on md screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl flex items-center justify-between text-sm font-semibold transition-colors min-h-[48px] ${
                    item.highlight
                      ? darkMode
                        ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                        : 'bg-amber-50 text-amber-900 border border-amber-200'
                      : darkMode
                        ? 'hover:bg-slate-900 text-slate-200 border border-slate-800/60'
                        : 'hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                </a>
              ))}
            </div>

            {/* Simple Bottom Action Band */}
            <div className="pt-4 border-t border-slate-800/40 space-y-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-wider min-h-[48px] shadow-sm transition-all ${
                  darkMode
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold'
                    : 'bg-sky-700 hover:bg-sky-600 text-white'
                }`}
              >
                <Zap className="w-4 h-4 fill-current shrink-0" />
                <span>Request Consultation (24h SLA)</span>
              </a>

              <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-400">
                <a 
                  href={`tel:${COMPANY_DETAILS.phone}`} 
                  className="hover:text-sky-500 transition-colors flex items-center gap-2.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Direct Hotline: {COMPANY_DETAILS.phoneFormatted}</span>
                </a>
                <span>Lagos HQ &amp; Abuja Hub</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
