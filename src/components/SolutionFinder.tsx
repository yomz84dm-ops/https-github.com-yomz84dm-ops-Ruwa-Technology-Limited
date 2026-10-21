import React, { useState } from 'react';
import { SOLUTION_ARCHETYPES } from '../data/ruwaContent';
import { Building2, Tractor, GraduationCap, Home, CheckCircle2, ArrowRight } from 'lucide-react';

interface SolutionFinderProps {
  darkMode: boolean;
  onSelectSolution: (solutionTitle: string) => void;
}

export const SolutionFinder: React.FC<SolutionFinderProps> = ({ darkMode, onSelectSolution }) => {
  const [activeId, setActiveId] = useState<string>('commercial');

  const getArchetypeIcon = (id: string) => {
    switch (id) {
      case 'commercial': return <Building2 className="w-5 h-5" />;
      case 'agribusiness': return <Tractor className="w-5 h-5" />;
      case 'institutions': return <GraduationCap className="w-5 h-5" />;
      case 'residential': return <Home className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  const current = SOLUTION_ARCHETYPES.find(s => s.id === activeId) || SOLUTION_ARCHETYPES[0];

  return (
    <section id="solutions" className={`py-20 transition-colors border-t scroll-mt-24 ${
      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
            <span>Tailored Sector Packages</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Engineered Specifically for <span className="text-sky-600 dark:text-sky-400">Your Operational Realities</span>.
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Select your sector below to see typical power sizing, projected monthly Naira savings, and real Nigerian operational case profiles.
          </p>
        </div>

        {/* Archetype Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {SOLUTION_ARCHETYPES.map((arch) => (
            <button
              key={arch.id}
              onClick={() => setActiveId(arch.id)}
              className={`p-4 rounded-xl border font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 transition-all cursor-pointer ${
                activeId === arch.id
                  ? 'bg-sky-700 border-sky-600 text-white shadow-md'
                  : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {getArchetypeIcon(arch.id)}
              <span className="truncate">{arch.title.split('&')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Archetype Detail Card */}
        <div className={`rounded-2xl border p-6 sm:p-10 transition-all ${
          darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className={`font-display font-bold text-2xl sm:text-3xl mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {current.title}
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm sm:text-base">
                  &ldquo;{current.tagline}&rdquo;
                </p>
                <p className={`text-sm mt-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {current.description}
                </p>
              </div>

              {/* Specs Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Typical Load Demand</span>
                  <div className={`font-mono font-bold text-lg mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{current.typicalLoad}</div>
                  <span className="text-[11px] text-slate-400">Scalable modular architecture</span>
                </div>

                <div className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Est. Monthly Savings</span>
                  <div className="font-mono font-bold text-lg text-amber-500 mt-0.5">{current.estimatedDieselDisplacement}</div>
                  <span className="text-[11px] text-slate-400">Direct operational relief</span>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sector Advantages</h4>
                <div className="space-y-2.5">
                  {current.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Recommended Architecture & Case Context */}
            <div className="lg:col-span-4 space-y-4">
              <div className={`p-5 rounded-xl border space-y-3 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <span className="text-[11px] uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                  Recommended System Sizing
                </span>
                <p className={`text-xs font-medium leading-relaxed ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  {current.recommendedSystem}
                </p>
                <div className={`pt-2 border-t text-[11px] leading-relaxed ${
                  darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <strong className={darkMode ? 'text-slate-300' : 'text-slate-700'}>Operational Case:</strong> {current.caseStudyContext}
                </div>
              </div>

              <button
                onClick={() => onSelectSolution(current.title)}
                className="w-full py-3.5 px-4 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-3 cursor-pointer shadow-md"
              >
                <span>Request Consultation for {current.title.split('&')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
