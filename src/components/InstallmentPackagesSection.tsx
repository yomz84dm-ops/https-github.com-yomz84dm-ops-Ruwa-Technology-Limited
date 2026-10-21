import React, { useState } from 'react';
import { SOLAR_INSTALLMENT_PACKAGES, COMPANY_DETAILS } from '../data/ruwaContent';
import { SolarInstallmentPackage } from '../types';
import { 
  Zap, 
  Check, 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  ArrowRight, 
  Maximize2, 
  X, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Fan,
  Tv,
  Refrigerator,
  Droplets,
  Lightbulb,
  Cpu
} from 'lucide-react';

interface InstallmentPackagesSectionProps {
  darkMode: boolean;
  onSelectPackageForOrder?: (pkg: SolarInstallmentPackage, plan: '6-month' | '12-month' | 'outright') => void;
}

export const InstallmentPackagesSection: React.FC<InstallmentPackagesSectionProps> = ({
  darkMode,
  onSelectPackageForOrder,
}) => {
  const [selectedPlanView, setSelectedPlanView] = useState<'all' | '6-month' | '12-month' | 'outright'>('all');
  const [activePosterModal, setActivePosterModal] = useState<SolarInstallmentPackage | null>(null);

  const getApplianceIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('fan')) return <Fan className="w-3.5 h-3.5 text-sky-500 shrink-0" />;
    if (lower.includes('freezer') || lower.includes('fridge')) return <Refrigerator className="w-3.5 h-3.5 text-blue-500 shrink-0" />;
    if (lower.includes('tv')) return <Tv className="w-3.5 h-3.5 text-purple-500 shrink-0" />;
    if (lower.includes('pump') || lower.includes('water')) return <Droplets className="w-3.5 h-3.5 text-cyan-500 shrink-0" />;
    if (lower.includes('light')) return <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />;
    return <Zap className="w-3.5 h-3.5 text-emerald-500 shrink-0" />;
  };

  const buildWhatsAppOrderLink = (pkg: SolarInstallmentPackage, planText: string) => {
    const message = `Hello Ruwa Technology Limited, I want to order the "${pkg.name}" (${pkg.totalPriceFormatted}) with the ${planText}. Please send me the ordering and installation details.`;
    const cleanPhone = `234${COMPANY_DETAILS.phone.replace(/^0/, '')}`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="packages" className={`py-20 transition-colors border-t scroll-mt-20 ${
      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-600 dark:text-amber-400 border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Ready for Immediate Dispatch &amp; Installation</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white">
            Power Your Home. <span className="text-sky-600 dark:text-sky-400">Pay in Installments!</span>
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Eliminate generator noise, fumes, and escalating fuel costs. Choose your complete turnkey home solar system with an easy 30% upfront deposit and transparent 6-month or 12-month payment options.
          </p>

          {/* Interactive Plan Selector Buttons */}
          <div className="inline-flex items-center p-1.5 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs">
            <button
              onClick={() => setSelectedPlanView('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPlanView === 'all'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Payment Plans
            </button>
            <button
              onClick={() => setSelectedPlanView('6-month')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPlanView === '6-month'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              6-Month Plan
            </button>
            <button
              onClick={() => setSelectedPlanView('12-month')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPlanView === '12-month'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              12-Month Plan
            </button>
            <button
              onClick={() => setSelectedPlanView('outright')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedPlanView === 'outright'
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Outright Purchase
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLAR_INSTALLMENT_PACKAGES.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:shadow-2xl ${
                  pkg.isPopular
                    ? darkMode
                      ? 'bg-slate-900/95 border-sky-500/80 shadow-sky-950/40 ring-1 ring-sky-500/50'
                      : 'bg-white border-sky-500 shadow-xl ring-1 ring-sky-500/30'
                    : darkMode
                    ? 'bg-slate-900/90 border-slate-800'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                {/* Official Marketing Poster Thumbnail Preview */}
                <div className="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden group/poster border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={pkg.posterImageUrl}
                    alt={`${pkg.name} Official Marketing Poster`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/poster:scale-105 cursor-pointer"
                    onClick={() => setActivePosterModal(pkg)}
                  />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10 pointer-events-none">
                    {pkg.badge && (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-400/30 shadow-md">
                        {pkg.badge}
                      </span>
                    )}
                    {pkg.isPopular && (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-sky-600 text-white shadow-md">
                        Top Seller
                      </span>
                    )}
                  </div>

                  {/* Tap to View Poster Fullscreen Button */}
                  <button
                    type="button"
                    onClick={() => setActivePosterModal(pkg)}
                    title="View Full Marketing Poster"
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-white border border-white/20 hover:bg-slate-900 transition-all opacity-90 hover:opacity-100 shadow-lg cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline text-[11px]">View Poster</span>
                  </button>

                  {/* Total Price Banner on bottom of poster */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end justify-between text-white">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-slate-300">Total Package Price</span>
                      <span className="font-display font-extrabold text-2xl text-amber-400 tracking-tight">
                        {pkg.totalPriceFormatted}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      In Stock
                    </span>
                  </div>
                </div>

                {/* Package Details */}
                <div className="p-6 space-y-5">
                  <div>
                    <div className="flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-mono font-bold mb-1">
                      <span>{pkg.sku}</span>
                      <span>Pay in Installments</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-snug">
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* System Hardware Items */}
                  <div className={`p-4 rounded-xl border space-y-2 text-xs ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Package Includes:
                    </div>
                    <div className="space-y-1.5 text-slate-700 dark:text-slate-200 font-medium">
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Battery:</strong> {pkg.battery}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Inverter:</strong> {pkg.inverter}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span><strong>Solar Panels:</strong> {pkg.panels}</span>
                      </div>
                    </div>
                  </div>

                  {/* Installment Pricing Breakdown */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <CreditCard className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>Installment Options (30% Upfront)</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {/* 6-Month Plan Box */}
                      <div className={`p-3 rounded-xl border transition-all ${
                        selectedPlanView === '6-month'
                          ? 'border-amber-500 bg-amber-500/10'
                          : darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}>
                        <div className="text-[10px] font-bold uppercase tracking-wide text-amber-500">
                          6-Month Plan
                        </div>
                        <div className="font-display font-bold text-base text-slate-900 dark:text-white mt-0.5">
                          {pkg.paymentPlan6M.monthlyFormatted}
                          <span className="text-[10px] font-normal text-slate-400">/mo</span>
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                          Down: {pkg.paymentPlan6M.upfrontFormatted} (30%)
                        </div>
                      </div>

                      {/* 12-Month Plan Box */}
                      <div className={`p-3 rounded-xl border transition-all ${
                        selectedPlanView === '12-month'
                          ? 'border-sky-500 bg-sky-500/10'
                          : darkMode
                          ? 'bg-slate-950 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}>
                        <div className="text-[10px] font-bold uppercase tracking-wide text-sky-500">
                          12-Month Plan
                        </div>
                        <div className="font-display font-bold text-base text-slate-900 dark:text-white mt-0.5">
                          {pkg.paymentPlan12M.monthlyFormatted}
                          <span className="text-[10px] font-normal text-slate-400">/mo</span>
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                          Down: {pkg.paymentPlan12M.upfrontFormatted} (30%)
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Appliances Supported */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Appliances It Powers:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.appliances.map((appliance, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border ${
                            darkMode
                              ? 'bg-slate-950 text-slate-300 border-slate-800'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {getApplianceIcon(appliance)}
                          <span>{appliance}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className={`p-5 border-t space-y-2.5 ${
                  darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  {/* WhatsApp Quick Order */}
                  <a
                    href={buildWhatsAppOrderLink(pkg, selectedPlanView === '6-month' ? '6-Month Installment Plan' : selectedPlanView === '12-month' ? '12-Month Installment Plan' : selectedPlanView === 'outright' ? 'Outright Purchase' : 'Flexible Installment Plan')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>Order via WhatsApp ({pkg.totalPriceFormatted})</span>
                  </a>

                  {/* Request Installation / Order through Form */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectPackageForOrder) {
                          onSelectPackageForOrder(pkg, selectedPlanView === '6-month' ? '6-month' : selectedPlanView === '12-month' ? '12-month' : 'outright');
                        }
                      }}
                      className="flex-1 py-2.5 px-3 rounded-xl border border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-600 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Order on Website</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setActivePosterModal(pkg)}
                      className="py-2.5 px-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-slate-400 text-slate-600 dark:text-slate-300 text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                      title="View full poster"
                    >
                      <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confidence & Delivery Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950 via-slate-900 to-amber-950/60 border border-sky-800/60 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center justify-center md:justify-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Full Ruwa Warranty &amp; Professional Installation</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Need Help Choosing the Right Package for Your Home or Business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Our engineering team conducts a fast load assessment to verify which appliances your system will run, and handles dispatch, mounting, and testing right at your premises.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-xs transition-all flex items-center gap-2.5"
            >
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Call {COMPANY_DETAILS.phoneFormatted}</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md"
            >
              Request Free Load Assessment
            </a>
          </div>
        </div>

      </div>

      {/* Full-Screen Marketing Poster Lightbox Modal */}
      {activePosterModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActivePosterModal(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between text-white">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                  Official Ruwa Technology Limited Marketing Poster
                </span>
                <h4 className="text-base font-bold font-display">{activePosterModal.name}</h4>
                <p className="text-xs text-sky-400">{activePosterModal.totalPriceFormatted} • 6M / 12M Installment Plans</p>
              </div>
              <button
                type="button"
                onClick={() => setActivePosterModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close poster view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster High-Res Image Display */}
            <div className="overflow-y-auto p-2 sm:p-4 bg-black flex items-center justify-center">
              <img
                src={activePosterModal.posterImageUrl}
                alt={`${activePosterModal.name} Marketing Poster`}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer with Direct WhatsApp Order */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-300">
                <span>Call/WhatsApp: <strong>{COMPANY_DETAILS.phoneFormatted}</strong></span>
                <span className="mx-2">•</span>
                <span>Email: <strong>{COMPANY_DETAILS.email}</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={buildWhatsAppOrderLink(activePosterModal, 'Flexible Installment Plan')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                  <span>Order on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const pkg = activePosterModal;
                    setActivePosterModal(null);
                    if (onSelectPackageForOrder) {
                      onSelectPackageForOrder(pkg, '12-month');
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Order on Website</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
