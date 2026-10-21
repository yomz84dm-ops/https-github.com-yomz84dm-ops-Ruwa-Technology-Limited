import React from 'react';
import { ROADMAP_PHASES, COMPANY_DETAILS } from '../data/ruwaContent';
import { Award, CheckCircle2, Clock, Calendar, ArrowUpRight, ShieldCheck, GitBranch } from 'lucide-react';

interface RoadmapNDISProps {
  darkMode: boolean;
}

export const RoadmapNDIS: React.FC<RoadmapNDISProps> = ({ darkMode }) => {
  return (
    <section id="roadmap" className={`py-20 transition-colors border-t scroll-mt-24 ${
      darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* NDIS Banner / Strategic Validation */}
        <div className={`rounded-2xl border p-6 sm:p-8 mb-16 relative overflow-hidden transition-all ${
          darkMode 
            ? 'bg-gradient-to-r from-sky-950/70 via-slate-900 to-amber-950/50 border-sky-800/80 shadow-xl' 
            : 'bg-gradient-to-r from-sky-50 via-white to-amber-50 border-sky-200 shadow-md'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>Summit Recognition &amp; Investor Pipeline</span>
              </div>
              <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                7th Nigeria Diaspora Investment Summit (NDIS 2024)
              </h3>
              <p className={`text-sm leading-relaxed max-w-2xl ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Ruwa Technology Limited was formally selected and presented at NDIS 2024, spotlighting our multi-vector approach to Nigerian energy independence and urban mobility infrastructure before international investors, diaspora partners, and federal stakeholders.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
                <div className="flex items-center gap-2.5 text-sky-600 dark:text-sky-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>CAC Incorporated (Est. 2019) • RC-1614229</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                  Lagos Hub: 27 Alhaji Haruna St, Ogba Ifako-Ijaiye
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3">
              <div className="text-left lg:text-right">
                <span className="text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold">Investment &amp; Partner Desk</span>
                <div className={`text-sm font-bold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Diaspora &amp; Institutional Inquiries</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{COMPANY_DETAILS.email}</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md"
              >
                <span>Request Investor &amp; Partner Brief</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Strategic Project Pipeline</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            The Infrastructure <span className="text-sky-600 dark:text-sky-400">Development Pipeline</span>.
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            A structured, phased operational pipeline starting with <strong>Phase 1 kickoff next year (2027)</strong>, advancing from initial pilot depot engineering and commercial solar microgrids to regional agricultural cold chains.
          </p>
        </div>

        {/* Roadmap Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROADMAP_PHASES.map((phase) => {
            const isPhase1 = phase.phase === 'Phase 1';
            return (
              <div
                key={phase.phase}
                className={`rounded-2xl border p-6 flex flex-col justify-between relative transition-all ${
                  isPhase1
                    ? darkMode
                      ? 'bg-slate-900 border-sky-500 ring-1 ring-sky-500/40 shadow-xl'
                      : 'bg-white border-sky-500 shadow-xl ring-1 ring-sky-500/30'
                    : darkMode
                      ? 'bg-slate-950/70 border-slate-800 shadow-md'
                      : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Phase Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {phase.phase}
                    </span>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-2.5 border ${
                      isPhase1
                        ? 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-400/40'
                        : phase.phase === 'Phase 2'
                          ? 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-400/40'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                    }`}>
                      <Clock className="w-3 h-3 text-current shrink-0" />
                      <span>{phase.statusLabel}</span>
                    </span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                    <span>{phase.period}</span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className={`font-bold text-lg mb-2 leading-snug ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {phase.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {phase.description}
                    </p>
                  </div>

                  {/* Milestones in Pipeline */}
                  <div className={`pt-3 border-t space-y-2.5 ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Pipeline Milestones
                    </span>
                    <div className="space-y-2">
                      {phase.milestones.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPhase1 
                              ? 'text-sky-600 dark:text-sky-400' 
                              : 'text-amber-500 dark:text-amber-400'
                          }`} />
                          <span className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                            {m}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Note */}
                <div className={`mt-6 pt-3 border-t text-[11px] flex items-center justify-between ${
                  darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span className="font-medium">
                    {isPhase1 ? 'Kickoff Starting Next Year (2027)' : 'Upcoming Pipeline'}
                  </span>
                  <span className="font-mono font-semibold text-sky-600 dark:text-sky-400">
                    #RUWA_PIPELINE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
