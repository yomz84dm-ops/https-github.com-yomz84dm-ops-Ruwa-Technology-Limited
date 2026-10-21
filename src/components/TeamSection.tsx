import React from 'react';
import { TEAM_MEMBERS, COMPANY_DETAILS } from '../data/ruwaContent';
import { ShieldCheck, UserCheck } from 'lucide-react';

interface TeamSectionProps {
  darkMode: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ darkMode }) => {
  return (
    <section id="team" className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
            <UserCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Engineering & Operational Leadership</span>
          </div>

          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            The Hands-On Leadership Behind <span className="text-sky-600 dark:text-sky-400">Ruwa Technology Limited</span>.
          </h2>

          <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Combining field operations, mechanical and solar engineering rigour, and market expansion across the Nigerian clean technology landscape.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                darkMode ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Avatar and Role */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-13 h-13 rounded-2xl flex items-center justify-center font-display font-extrabold text-lg text-slate-950 shadow-inner"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                    <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">{member.role}</p>
                    <span className="text-[10px] text-slate-400">Ruwa Technology Limited • Lagos</span>
                  </div>
                </div>

                {/* Bio */}
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {member.bio}
                </p>

                {/* Skill Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                        darkMode 
                          ? 'bg-slate-800 text-slate-300 border-slate-700/60' 
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className={`mt-6 pt-3 border-t flex items-center justify-between text-[11px] text-slate-400 ${
                darkMode ? 'border-slate-800/80' : 'border-slate-100'
              }`}>
                <span className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Verified Executive</span>
                </span>
                <span>Ogba, Lagos</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Certification Bar */}
        <div className={`mt-12 p-4 rounded-xl border flex flex-wrap items-center justify-between gap-4 text-xs ${
          darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
          <div>
            <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Registered Entity:</strong> {COMPANY_DETAILS.registeredName} ({COMPANY_DETAILS.rcNumber}) • Incorporated under the Companies and Allied Matters Act, Nigeria.
          </div>
          <div className="text-sky-600 dark:text-sky-400 font-semibold">
            Operational Base: {COMPANY_DETAILS.address}
          </div>
        </div>
      </div>
    </section>
  );
};
