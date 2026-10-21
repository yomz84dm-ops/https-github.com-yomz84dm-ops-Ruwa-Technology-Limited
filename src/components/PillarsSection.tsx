import React, { useState } from 'react';
import { CORE_PILLARS } from '../data/ruwaContent';
import { Zap, Truck, Sprout, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  darkMode: boolean;
  onSelectPillar: (pillarTitle: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ darkMode, onSelectPillar }) => {
  const [activePillarId, setActivePillarId] = useState<string>('energy');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Truck': return <Truck className="w-5 h-5 text-sky-600 dark:text-sky-400" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-500" />;
      default: return <Zap className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="pillars" className="py-20 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
            <span>The Ruwa Infrastructure Architecture</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Four Strategic Verticals. <span className="text-sky-600 dark:text-sky-400">One Unified Purpose</span>.
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Rather than fragmented point solutions, Ruwa Technology Limited connects clean generation, transport, and agro-digital systems into an integrated industrial engine for Nigeria.
          </p>
        </div>

        {/* Tab / Pillar Selector for Mobile and Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CORE_PILLARS.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActivePillarId(pillar.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                activePillarId === pillar.id
                  ? darkMode
                    ? 'bg-slate-900 border-sky-500 text-white shadow-lg ring-1 ring-sky-500/50'
                    : 'bg-white border-sky-600 text-slate-900 shadow-md ring-1 ring-sky-600/40'
                  : darkMode
                    ? 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  darkMode ? 'bg-slate-800/80' : 'bg-slate-100'
                }`}>
                  {getIcon(pillar.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {pillar.tag}
                </span>
              </div>
              <div>
                <h3 className={`font-bold text-sm leading-tight mb-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>{pillar.title}</h3>
                <p className={`text-xs line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{pillar.shortDesc}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Active Pillar Showcase Detail View */}
        {CORE_PILLARS.filter(p => p.id === activePillarId).map((pillar) => (
          <div
            key={pillar.id}
            className={`rounded-2xl border p-6 sm:p-10 transition-all ${
              darkMode 
                ? 'bg-slate-900/90 border-slate-700/80 text-slate-100 shadow-xl' 
                : 'bg-white border-slate-200 text-slate-900 shadow-lg'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                  darkMode 
                    ? 'bg-sky-500/10 text-sky-300 border-sky-500/30' 
                    : 'bg-sky-50 text-sky-800 border-sky-200'
                }`}>
                  {pillar.tag}
                </div>

                <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title}
                </h3>

                <p className={`text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {pillar.longDesc}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key System Benefits &amp; Coverage
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {pillar.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectPillar(pillar.title)}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-sm font-semibold transition-all cursor-pointer shadow-md"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                  <a
                    href="#calculator"
                    className="text-xs font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
                  >
                    Calculate your diesel savings →
                  </a>
                </div>
              </div>

              {/* Right Side Impact Box */}
              <div className="lg:col-span-5">
                <div className={`p-6 sm:p-8 rounded-xl border space-y-5 ${
                  darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">Key Benchmark Metric</span>
                    <div className="font-display font-black text-4xl sm:text-5xl text-sky-600 dark:text-sky-400">
                      {pillar.stats.value}
                    </div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {pillar.stats.label}
                    </div>
                  </div>

                  <div className={`pt-4 border-t space-y-2 text-xs ${
                    darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
                  }`}>
                    <p>
                      Every deployment is backed by Ruwa&apos;s Lagos field engineering team, with guaranteed SLAs and genuine Tier-1 original equipment manufacturer warranties.
                    </p>
                    <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 pt-1 font-semibold">
                      <span>✓ Lagos Support Hub: Ogba Ifako-Ijaiye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
