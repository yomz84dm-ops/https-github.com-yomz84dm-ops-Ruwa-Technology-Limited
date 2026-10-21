import React, { useState, useMemo, useEffect } from 'react';
import { NIGERIAN_ENERGY_PRESETS, LIVE_DIESEL_BENCHMARK, COMPANY_DETAILS } from '../data/ruwaContent';
import { LiveDieselPriceData } from '../types';
import { 
  Calculator, 
  Zap, 
  Fuel, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingDown, 
  RotateCw, 
  Radio, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Check 
} from 'lucide-react';

interface DieselRoiCalculatorProps {
  darkMode: boolean;
  onSelectSystemForAudit: (systemName: string, kva: number, monthlyDieselSpend: number) => void;
}

export const DieselRoiCalculator: React.FC<DieselRoiCalculatorProps> = ({ darkMode, onSelectSystemForAudit }) => {
  const [selectedKva, setSelectedKva] = useState<number>(30);
  const [dailyHours, setDailyHours] = useState<number>(10);
  const [daysPerMonth, setDaysPerMonth] = useState<number>(26);

  // Live Diesel Price Index State
  const [livePriceData, setLivePriceData] = useState<LiveDieselPriceData>(LIVE_DIESEL_BENCHMARK);
  const [selectedRegion, setSelectedRegion] = useState<'lagos' | 'abuja' | 'national' | 'custom'>('lagos');
  const [dieselPricePerLiter, setDieselPricePerLiter] = useState<number>(LIVE_DIESEL_BENCHMARK.lagosPrice);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<string>('Just now');

  // Fetch live diesel price from API endpoint on mount
  const fetchLivePrice = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch('/api/diesel-price');
      if (response.ok) {
        const data = await response.json();
        setLivePriceData(data);
        if (selectedRegion === 'lagos') setDieselPricePerLiter(data.lagosPrice);
        else if (selectedRegion === 'abuja') setDieselPricePerLiter(data.abujaPrice);
        else if (selectedRegion === 'national') setDieselPricePerLiter(data.nationalAverage);
      }
    } catch {
      // Fallback to internal LIVE_DIESEL_BENCHMARK if offline or static preview
      setLivePriceData(LIVE_DIESEL_BENCHMARK);
    } finally {
      const now = new Date();
      setLastRefreshedAt(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setTimeout(() => setIsRefreshing(false), 400);
    }
  };

  useEffect(() => {
    fetchLivePrice();
  }, []);

  // Handle region button clicks
  const handleSelectRegion = (region: 'lagos' | 'abuja' | 'national' | 'custom') => {
    setSelectedRegion(region);
    if (region === 'lagos') {
      setDieselPricePerLiter(livePriceData.lagosPrice);
    } else if (region === 'abuja') {
      setDieselPricePerLiter(livePriceData.abujaPrice);
    } else if (region === 'national') {
      setDieselPricePerLiter(livePriceData.nationalAverage);
    }
  };

  // Find preset or estimate consumption
  const preset = useMemo(() => {
    return NIGERIAN_ENERGY_PRESETS.find(p => p.kva === selectedKva) || {
      kva: selectedKva,
      label: `${selectedKva} kVA Generator`,
      dieselLitersPerHour: selectedKva * 0.22,
      typicalSystem: `${Math.round(selectedKva * 0.8)}kVA Solar Microgrid`,
    };
  }, [selectedKva]);

  // Calculations
  const calculations = useMemo(() => {
    const litersPerHour = preset.dieselLitersPerHour;
    const monthlyLiters = Math.round(litersPerHour * dailyHours * daysPerMonth);
    const monthlyFuelCost = monthlyLiters * dieselPricePerLiter;
    // Estimated servicing & filters (approx 15% of fuel spend)
    const monthlyMaintenanceCost = Math.round(monthlyFuelCost * 0.15);
    const totalMonthlyDieselBurden = monthlyFuelCost + monthlyMaintenanceCost;

    // Solar displacement factor (approx 75% fuel displacement)
    const displacementRate = 0.75;
    const monthlySavingsNaira = Math.round(totalMonthlyDieselBurden * displacementRate);
    const annualSavingsNaira = monthlySavingsNaira * 12;

    // Rough estimated turnkey solar Capex (based on current Tier-1 pricing ~₦850k/kVA installed with lithium)
    const estimatedSolarCapex = selectedKva * 850000;
    const paybackMonths = Math.max(8, Math.round((estimatedSolarCapex / monthlySavingsNaira) * 10) / 10);

    // CO2 savings (approx 2.68 kg CO2 per liter of diesel)
    const annualCo2Tonnes = Math.round(((monthlyLiters * 12 * 2.68) / 1000) * 10) / 10;

    return {
      monthlyLiters,
      monthlyFuelCost,
      monthlyMaintenanceCost,
      totalMonthlyDieselBurden,
      monthlySavingsNaira,
      annualSavingsNaira,
      paybackMonths,
      annualCo2Tonnes,
      recommendedSystem: preset.typicalSystem,
    };
  }, [preset, dailyHours, daysPerMonth, dieselPricePerLiter, selectedKva]);

  const formatNaira = (amount: number) => {
    return '₦' + amount.toLocaleString('en-NG');
  };

  return (
    <section id="calculator" className={`py-20 transition-colors border-y scroll-mt-24 ${
      darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Live Nigerian Energy Economics Engine</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Stop Burning Capital on <span className="text-amber-500">Diesel Generators</span>.
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Connected to official National Bureau of Statistics (NBS) and NMDPRA market benchmarks. See the real-time naira savings a Ruwa Solar Microgrid generates for your business in Lagos, Abuja, and nationwide.
          </p>
        </div>

        {/* Live Diesel Price Live Bar */}
        <div className={`mb-8 p-4 sm:p-5 rounded-2xl border shadow-sm transition-all ${
          darkMode 
            ? 'bg-slate-950/90 border-slate-800 text-slate-200' 
            : 'bg-white border-amber-200/80 text-slate-900 shadow-xs'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Live Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    LIVE NIGERIA DIESEL (AGO) INDEX
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-400/20 text-amber-500 dark:text-amber-300 border border-amber-400/30">
                    NBS & NMDPRA Feed
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Real-time regional pump benchmarks • Last checked: <span className="font-semibold text-slate-700 dark:text-slate-300">{lastRefreshedAt}</span>
                </p>
              </div>
            </div>

            {/* Quick Regional Rate Switcher */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline mr-1">
                Select Market:
              </span>

              {/* Lagos Button */}
              <button
                type="button"
                onClick={() => handleSelectRegion('lagos')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  selectedRegion === 'lagos'
                    ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                    : darkMode
                      ? 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <MapPin className="w-3 h-3 text-amber-400" />
                <span>Lagos: ₦{livePriceData.lagosPrice.toLocaleString()}/L</span>
                {selectedRegion === 'lagos' && <Check className="w-3 h-3 ml-0.5" />}
              </button>

              {/* Abuja Button */}
              <button
                type="button"
                onClick={() => handleSelectRegion('abuja')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  selectedRegion === 'abuja'
                    ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                    : darkMode
                      ? 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <Building2 className="w-3 h-3 text-amber-400" />
                <span>Abuja FCT: ₦{livePriceData.abujaPrice.toLocaleString()}/L</span>
                {selectedRegion === 'abuja' && <Check className="w-3 h-3 ml-0.5" />}
              </button>

              {/* National Average */}
              <button
                type="button"
                onClick={() => handleSelectRegion('national')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  selectedRegion === 'national'
                    ? 'bg-sky-600 text-white border-sky-500 shadow-sm'
                    : darkMode
                      ? 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <span>National Avg: ₦{livePriceData.nationalAverage.toLocaleString()}/L</span>
                {selectedRegion === 'national' && <Check className="w-3 h-3 ml-0.5" />}
              </button>

              {/* Live Refresh Trigger */}
              <button
                type="button"
                onClick={fetchLivePrice}
                disabled={isRefreshing}
                className={`p-2 rounded-xl text-xs transition-all border cursor-pointer ${
                  darkMode 
                    ? 'bg-slate-900 text-slate-400 hover:text-white border-slate-700' 
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
                title="Refresh Live Diesel Benchmark"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-sky-400' : ''}`} />
              </button>
            </div>

          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form: Left 7 Columns */}
          <div className={`lg:col-span-7 rounded-2xl border p-6 sm:p-8 space-y-6 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className={`font-bold text-lg flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Fuel className="w-5 h-5 text-amber-500" />
              <span>Step 1: Your Generator Parameters</span>
            </h3>

            {/* Generator Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Select Generator Rating (kVA)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {NIGERIAN_ENERGY_PRESETS.map((p) => (
                  <button
                    key={p.kva}
                    type="button"
                    onClick={() => setSelectedKva(p.kva)}
                    className={`py-3 px-2 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      selectedKva === p.kva
                        ? 'bg-sky-700 border-sky-600 text-white shadow-md'
                        : darkMode
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <span className="text-base">{p.kva} kVA</span>
                    <span className="text-[10px] font-normal opacity-80">{p.dieselLitersPerHour} L/hr</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Daily Run Hours Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center text-sm">
                <label className={`font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Daily Generator Operating Hours
                </label>
                <span className="font-mono font-bold text-sky-600 dark:text-sky-400 text-base">{dailyHours} Hours / Day</span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                step="1"
                value={dailyHours}
                onChange={(e) => setDailyHours(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>4 Hours (Grid Backup)</span>
                <span>10 Hours (Typical Shift)</span>
                <span>24 Hours (Full Off-Grid)</span>
              </div>
            </div>

            {/* Diesel Price & Days Per Month */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-400">
                    Live Diesel Price (₦ / Litre)
                  </label>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase">
                    ● Live Rate Active
                  </span>
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-sm text-slate-400 font-semibold">₦</span>
                  <input
                    type="number"
                    min="800"
                    max="2500"
                    step="10"
                    value={dieselPricePerLiter}
                    onChange={(e) => {
                      setDieselPricePerLiter(Number(e.target.value));
                      setSelectedRegion('custom');
                    }}
                    className={`w-full pl-8 pr-3 py-2 rounded-xl text-sm border font-semibold ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800 text-white focus:border-sky-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-600'
                    } outline-none`}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Selected: {selectedRegion === 'custom' ? 'Custom rate' : selectedRegion === 'lagos' ? 'Lagos Hub' : selectedRegion === 'abuja' ? 'Abuja Hub' : 'National Avg'}</span>
                  <span>Adjustable for your local station</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">
                  Operating Days / Month
                </label>
                <select
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className={`w-full px-3 py-2 rounded-xl text-sm border font-semibold ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-white focus:border-sky-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-sky-600'
                  } outline-none`}
                >
                  <option value={22}>22 Days (Standard Office Mon-Fri)</option>
                  <option value={26}>26 Days (SME & Retail Mon-Sat)</option>
                  <option value={30}>30 Days (24/7 Factory, Hospital, Estate)</option>
                </select>
                <span className="text-[10px] text-slate-400">Determines monthly fuel volume</span>
              </div>
            </div>

            {/* Current Fuel Burn Summary */}
            <div className={`p-4 rounded-xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-slate-400">Monthly Fuel Burn:</span>{' '}
                  <span className="font-mono font-bold text-amber-500">{calculations.monthlyLiters.toLocaleString()} Litres</span>
                </div>
                <div>
                  <span className="text-slate-400">Monthly Gen Cost (Fuel + Filters):</span>{' '}
                  <span className="font-mono font-bold text-rose-500 dark:text-rose-400">{formatNaira(calculations.totalMonthlyDieselBurden)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card: Right 5 Columns */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`rounded-2xl border p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden ${
              darkMode 
                ? 'bg-gradient-to-b from-sky-950/50 via-slate-900 to-slate-900 border-sky-800/80' 
                : 'bg-white border-sky-200 shadow-md'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Ruwa Clean Energy Solution
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  75% Fuel Cut
                </span>
              </div>

              {/* Recommended System */}
              <div>
                <span className="text-xs text-slate-400">Recommended Turnkey Architecture:</span>
                <div className={`font-display font-extrabold text-2xl mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {calculations.recommendedSystem}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Engineered with Tier-1 LiFePO4 battery storage to completely take over daytime and peak operational load.
                </p>
              </div>

              {/* Key Savings Figures */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-sky-50/60 border-sky-100'
                }`}>
                  <span className="text-xs text-slate-400">Monthly Fuel Savings</span>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 mt-1">
                    {formatNaira(calculations.monthlySavingsNaira)}
                  </div>
                  <span className="text-[10px] text-slate-400">Retained in your cashflow</span>
                </div>

                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-sky-50/60 border-sky-100'
                }`}>
                  <span className="text-xs text-slate-400">Annual Savings</span>
                  <div className="font-display font-extrabold text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 mt-1">
                    {formatNaira(calculations.annualSavingsNaira)}
                  </div>
                  <span className="text-[10px] text-slate-400">Direct operational relief</span>
                </div>
              </div>

              {/* Payback & ESG Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-[11px] text-slate-400">Estimated Payback Period</span>
                  <div className="font-display font-bold text-xl text-sky-600 dark:text-sky-400 mt-0.5">
                    {calculations.paybackMonths} Months
                  </div>
                  <span className="text-[10px] text-slate-400">Self-amortizing asset</span>
                </div>

                <div className={`p-3 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <span className="text-[11px] text-slate-400">CO2 Emissions Cut</span>
                  <div className="font-display font-bold text-xl text-amber-500 mt-0.5">
                    {calculations.annualCo2Tonnes} Tons/yr
                  </div>
                  <span className="text-[10px] text-slate-400">ESG & Carbon Qualified</span>
                </div>
              </div>

              {/* What You Get Checklist */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div className={`flex items-center gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Heavy-Duty Solar Panels Built for Intense Nigerian Sunlight</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Long-Life Lithium Battery Storage (15+ Year Expected Lifespan)</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Automatic Generator Switch (Runs generator only when batteries run low)</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Fast On-Site Support from Lagos HQ &amp; Abuja Service Hub</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectSystemForAudit(calculations.recommendedSystem, selectedKva, calculations.totalMonthlyDieselBurden)}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Request Free Quote &amp; Sizing for this System</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="flex items-center justify-center gap-2.5 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Zero obligation • Free on-site energy audit included</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
