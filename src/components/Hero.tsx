import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  BatteryCharging, 
  TrendingDown, 
  MapPin, 
  Sparkles, 
  Sun, 
  Droplets, 
  Sprout, 
  Feather, 
  X, 
  CheckCircle2, 
  Compass, 
  Layers,
  Car,
  Radio,
  CreditCard
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/ruwaContent';
import { RuwaLogo } from './RuwaLogo';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [showEmblemSpecs, setShowEmblemSpecs] = useState(false);
  const [activePillar, setActivePillar] = useState<'all' | 'sun' | 'bird' | 'farmlands' | 'river'>('all');
  const [logoColorMode, setLogoColorMode] = useState<'color' | 'monotone' | 'legacy'>('color');
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-sky-600' : 'bg-sky-200'
        }`} />
        <div className={`absolute top-32 right-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-amber-500' : 'bg-amber-200'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 text-xs">
          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border font-medium ${
            darkMode 
              ? 'bg-sky-950/60 text-sky-300 border-sky-800/80' 
              : 'bg-sky-50 text-sky-800 border-sky-200'
          }`}>
            <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
            <span>CAC Registered in Nigeria (Est. 2019) • RC-1614229</span>
          </div>

          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border font-medium ${
            darkMode 
              ? 'bg-amber-950/60 text-amber-300 border-amber-800/80' 
              : 'bg-amber-50 text-amber-800 border-amber-200'
          }`}>
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Lagos HQ (Ogba) &amp; Abuja Service Hub (Karu)</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy and Conversion */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
              Commercial Solar Power &amp; Clean Energy for{' '}
              <span className="text-sky-600 dark:text-sky-400">Nigerian Enterprise</span>.
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Cut generator fuel costs by up to 70%. Ruwa Technology Limited supplies, installs, and supports turnkey commercial solar systems, industrial battery storage, commercial EV fleet chargers, and solar cold rooms across Nigeria — with 24/7 reliability and guaranteed field service.
            </p>

            {/* Quick Product Category Shortcuts */}
            <div className="p-4 rounded-2xl border bg-slate-50/80 dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Quick Product Access:
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <a 
                  href="#packages" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 border border-amber-300 transition-all shadow-xs"
                >
                  <CreditCard className="w-3.5 h-3.5 text-slate-950 shrink-0" />
                  <span>Solar Packages (Pay in Installments)</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all shadow-2xs"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Solar Systems</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all shadow-2xs"
                >
                  <BatteryCharging className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Battery Storage</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all shadow-2xs"
                >
                  <Car className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>EV Fleet Chargers</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all shadow-2xs"
                >
                  <Sprout className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Solar Cold Rooms</span>
                </a>
                <a 
                  href="#products" 
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all shadow-2xs"
                >
                  <Radio className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Solar Power Banks</span>
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#packages"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all min-h-[48px]"
              >
                <CreditCard className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Order Solar Packages (Pay in Installments)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all min-h-[48px]"
              >
                <Zap className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Browse Equipment Catalog</span>
              </a>

              <a
                href="#calculator"
                className={`inline-flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all min-h-[48px] ${
                  darkMode
                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white'
                    : 'border-slate-300 text-slate-800 bg-white hover:bg-slate-50 shadow-xs'
                }`}
              >
                <TrendingDown className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Savings Calculator</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div>
                <div className="font-display font-bold text-2xl text-sky-600 dark:text-sky-400 tabular-nums">40%–70%</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Diesel Spend Reduction</div>
              </div>
              <div>
                <div className={`font-display font-bold text-2xl tabular-nums ${darkMode ? 'text-white' : 'text-slate-900'}`}>18–36 Mos</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Typical Capital Payback</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-amber-500 tabular-nums">20kVA–500kVA+</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Turnkey Solar Systems</div>
              </div>
              <div>
                <div className={`font-display font-bold text-2xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>Lagos &amp; Abuja</div>
                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>24h Field Support SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Facility Energy Economics Card */}
          <div className="lg:col-span-5">
            <div className={`rounded-2xl border p-6 shadow-xl relative overflow-hidden transition-all ${
              darkMode 
                ? 'bg-slate-900/90 border-slate-800 text-slate-100' 
                : 'bg-white border-slate-200 text-slate-900 shadow-lg'
            }`}>
              {/* Card Header */}
              <div className={`flex items-center justify-between pb-4 border-b ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">Commercial Facility Economics</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">100 kVA Factory &amp; Cold-Chain Profile</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold border ${
                  darkMode 
                    ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800' 
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                }`}>
                  ₦4.68M/MO RETAINED
                </span>
              </div>

              {/* Status Metrics Visualizer */}
              <div className="py-5 space-y-4">
                {/* Metric 1: Clean Power Output */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-3 font-medium">
                      <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      Daytime Solar Power Coverage
                    </span>
                    <span className="font-mono font-bold text-sky-600 dark:text-sky-400 tabular-nums">75% Baseload</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-600 to-amber-500 h-2 rounded-full w-[75%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    <span>Peak generation: 82 kW</span>
                    <span>Generator shutdown: Automatic</span>
                  </div>
                </div>

                {/* Metric 2: Battery Storage Health */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-3 font-medium">
                      <BatteryCharging className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      Night Battery Storage Lifespan
                    </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white tabular-nums">6,000+ Cycles (15+ Yrs)</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div className="bg-sky-600 h-2 rounded-full w-[96%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                    <span>Continuous night power</span>
                    <span>Zero generator noise or fumes</span>
                  </div>
                </div>

                {/* Metric 3: Regional Engineering Hubs */}
                <div className={`p-3.5 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">Lagos HQ &amp; Abuja Service Hub</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">Ogba, Ifako-Ijaiye &amp; Karu, FCT</div>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      darkMode 
                        ? 'bg-sky-950/60 text-sky-300 border-sky-800' 
                        : 'bg-sky-50 text-sky-800 border-sky-200'
                    }`}>
                      24HR SLA
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Guarantee */}
              <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'
              }`}>
                <div className="flex items-center gap-2.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>5–10 Year Inverter &amp; Battery Warranty</span>
                </div>
                <a 
                  href="#contact" 
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline inline-flex items-center gap-2"
                >
                  <span>Audit My Facility</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* EMBLEM ARCHITECTURE & VECTOR BRAND IDENTITY MODAL            */}
      {/* ============================================================ */}
      {showEmblemSpecs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className={`relative w-full max-w-4xl rounded-2xl shadow-2xl border overflow-hidden max-h-[90vh] flex flex-col ${
            darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Header */}
            <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-950 flex items-start justify-between text-white">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ruwa Brand Identity & Trademark Architecture</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl tracking-tight text-white">
                  The Ruwa Sovereign Emblem Blueprint
                </h3>
                <p className="text-xs text-slate-300">
                  Precision vector synthesis of the Shining Sun, Expansive Farmland in the Background, Flowing River, and Flying White Dove.
                </p>
              </div>
              <button
                onClick={() => setShowEmblemSpecs(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Top Banner: Master Emblem Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 border border-slate-800 text-white shadow-inner">
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className={`p-4 rounded-3xl border shadow-2xl relative group transition-colors ${
                    logoColorMode === 'monotone' 
                      ? 'bg-slate-950 border-slate-600' 
                      : logoColorMode === 'legacy'
                      ? 'bg-slate-950 border-sky-500/60 shadow-sky-950/50'
                      : 'bg-slate-900/90 border-slate-700/80'
                  }`}>
                    {logoColorMode === 'legacy' ? (
                      <div className="w-[104px] h-[104px] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950">
                        <img 
                          src="/ruwa-logo.jpeg" 
                          alt="Recolored Heritage Ruwa Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <RuwaLogo 
                        size="2xl" 
                        variant="mark-only" 
                        darkMode={true} 
                        colorMode={logoColorMode}
                        monotoneColor="#FFFFFF"
                      />
                    )}
                    <div className={`absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider shadow ${
                      logoColorMode === 'monotone'
                        ? 'bg-amber-500 text-slate-950'
                        : logoColorMode === 'legacy'
                        ? 'bg-gradient-to-r from-sky-500 to-amber-500 text-slate-950'
                        : 'bg-sky-500 text-slate-950'
                    }`}>
                      {logoColorMode === 'monotone' ? '1-Color Print Ready' : logoColorMode === 'legacy' ? 'Heritage Recolored' : 'Master Mark'}
                    </div>
                  </div>

                  {/* Mode Switcher: Coloured vs Monotone vs Legacy */}
                  <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
                    <button
                      onClick={() => setLogoColorMode('color')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        logoColorMode === 'color'
                          ? 'bg-sky-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Master Vector
                    </button>
                    <button
                      onClick={() => setLogoColorMode('monotone')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        logoColorMode === 'monotone'
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      1-Color Print
                    </button>
                    <button
                      onClick={() => setLogoColorMode('legacy')}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        logoColorMode === 'legacy'
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Recolored Heritage
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">viewBox 0 0 120 120 • Clean Vector</span>
                </div>

                <div className="md:col-span-2 space-y-3">
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-sky-500/20 text-sky-300 text-xs font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Executive Philosophy & Rebranding Blueprint</span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">
                    Rooted in Hausa Heritage (<em className="text-sky-400">&quot;Ruwa&quot; = Water, Life, Flow</em>)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Redesigned to Tier-1 infrastructure standards. Steep valleys have been replaced with sprawling farmlands, a radiant sun, a gracefully flowing river, and a proportionally scaled white dove (28% compact profile to fit perfectly with crisp margins). The four cardinal dots were removed to ensure clean, high-precision industrial stamping.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      1. Shining Sun (Clean Solar Energy)
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      2. Farmland in Background (AgriTech)
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      3. Flowing River (Hydro Flow & Life)
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      4. Flying White Dove (Peace & Clean Future)
                    </span>
                  </div>
                </div>
              </div>

              {/* 4 Pillars Interactive Deep Dive */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    The 4 Symbolic Pillars Breakdown
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {([
                      { id: 'all', label: 'All Pillars' },
                      { id: 'sun', label: 'Shining Sun' },
                      { id: 'bird', label: 'White Dove' },
                      { id: 'farmlands', label: 'Farmland' },
                      { id: 'river', label: 'Flowing River' },
                    ] as const).map(({ id, label }) => (
                      <button
                        key={id}
                        onClick={() => setActivePillar(id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          activePillar === id
                            ? 'bg-sky-700 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Sun */}
                  {(activePillar === 'all' || activePillar === 'sun') && (
                    <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 space-y-2">
                      <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400 font-bold text-sm">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                          <Sun className="w-4 h-4 text-amber-500" />
                        </div>
                        <span>1. The Shining Golden Sun</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Shining brightly across the sky with a warm golden corona and radiant light rays. Represents Ruwa&apos;s clean solar energy microgrids, delivering uninterrupted 24/7 power that permanently shields Nigerian enterprises from costly diesel tariffs.
                      </p>
                      <div className="text-[10px] font-mono text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                        HEX: #F59E0B • #FEF08A • #D97706
                      </div>
                    </div>
                  )}

                  {/* White Dove */}
                  {(activePillar === 'all' || activePillar === 'bird') && (
                    <div className="p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-2">
                      <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                        <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                          <Feather className="w-4 h-4 text-indigo-500" />
                        </div>
                        <span>2. The Flying White Dove</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        A pristine white dove soaring with outstretched wings across the sunny sky, carrying a green olive sprig. Symbolizes peace, environmental purity, zero emissions, and a hopeful, electrified sustainable future for Nigeria.
                      </p>
                      <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
                        HEX: #FFFFFF • #F8FAFC • #E2E8F0 • #22C55E (Olive Sprig)
                      </div>
                    </div>
                  )}

                  {/* Farmlands */}
                  {(activePillar === 'all' || activePillar === 'farmlands') && (
                    <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-2">
                      <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                          <Sprout className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span>3. Sprawling Farmland in the Background</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        Wide, expansive agrarian plains with alternating golden grain and emerald green crop rows under open skies (without steep valley barriers). Embodies AgriTech: solar irrigation, cold-chain packhouses, and food security for Nigerian agriculture.
                      </p>
                      <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        HEX: #16A34A • #EAB308 • #FEF08A (Crop Furrows)
                      </div>
                    </div>
                  )}

                  {/* River */}
                  {(activePillar === 'all' || activePillar === 'river') && (
                    <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/5 dark:bg-sky-950/20 space-y-2">
                      <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400 font-bold text-sm">
                        <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                          <Droplets className="w-4 h-4 text-sky-500" />
                        </div>
                        <span>4. The Flowing River (&quot;Ruwa&quot;)</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        A winding river flowing gracefully through the farmland landscape with glistening water ripples. Directly honors the Hausa namesake (&quot;Ruwa&quot; = water), symbolizing life, hydro resilience, and the smooth, continuous flow of clean energy.
                      </p>
                      <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 bg-sky-500/10 px-2 py-1 rounded">
                        HEX: #0284C7 • #38BDF8 • #075985 • #FFFFFF (Ripples)
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Physical Product Stamping & 1-Color Print Validation */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Product Stamping, Engraving &amp; Merchandise Mockups
                  </h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified for 1-Color Printing &amp; Laser Etching
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Mockup 1: Inverter/Battery Steel Enclosure */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center space-y-3 shadow-lg">
                    <div className="w-full flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-slate-800 pb-2">
                      <span>STEEL CHASSIS</span>
                      <span>LASER ETCH</span>
                    </div>
                    <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center p-3 shadow-inner">
                      <RuwaLogo size="lg" variant="mark-only" colorMode="monotone" monotoneColor="#E2E8F0" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Solar Battery &amp; Inverter Cabinet</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Laser etched onto brushed powder-coat alloy. 100% fine line clarity.</div>
                    </div>
                  </div>

                  {/* Mockup 2: Packaging Carton */}
                  <div className="p-4 rounded-xl bg-[#e8dbcb] border border-[#d3c2af] flex flex-col items-center text-center space-y-3 shadow-lg text-slate-900">
                    <div className="w-full flex items-center justify-between text-[10px] text-amber-900 font-mono border-b border-[#d3c2af] pb-2">
                      <span>KRAFT CARTON</span>
                      <span>1-COLOR FLEXO</span>
                    </div>
                    <div className="w-24 h-24 rounded-2xl bg-[#dfceb9] border border-[#cbbaa4] flex items-center justify-center p-3 shadow-inner">
                      <RuwaLogo size="lg" variant="mark-only" colorMode="monotone" monotoneColor="#1c1917" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Heavyweight Shipping Box</div>
                      <div className="text-[11px] text-slate-700 mt-0.5">Single-pass black ink. No color bleeding or 4-dot misregistration.</div>
                    </div>
                  </div>

                  {/* Mockup 3: Field Engineer Apparel */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center text-center space-y-3 shadow-lg">
                    <div className="w-full flex items-center justify-between text-[10px] text-slate-400 font-mono border-b border-slate-800 pb-2">
                      <span>HARD HAT &amp; APPAREL</span>
                      <span>EMBROIDERY</span>
                    </div>
                    <div className="w-24 h-24 rounded-2xl bg-sky-950 border border-sky-800 flex items-center justify-center p-3 shadow-inner">
                      <RuwaLogo size="lg" variant="mark-only" colorMode="monotone" monotoneColor="#38BDF8" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">PPE &amp; Corporate Uniform</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Embroidered patch &amp; helmet decal. Scaled dove retains sharp stitch lines.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Corporate Reproduction Guidelines</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300">Minimum Clear Space</strong>
                    0.25x the diameter of the outer circular ring on all 4 quadrants.
                  </div>
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300">Scalability Bounds</strong>
                    Legible from 28px favicon up to massive 10-meter industrial container wraps.
                  </div>
                  <div>
                    <strong className="block text-slate-700 dark:text-slate-300">Brand Governance</strong>
                    Official insignia for Ruwa Technology Limited (RC registered, Lagos).
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official Vector Trademark Asset • Ready for Corporate & Government Procurement
              </span>
              <button
                onClick={() => setShowEmblemSpecs(false)}
                className="px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold cursor-pointer transition-colors"
              >
                Close Emblem Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
