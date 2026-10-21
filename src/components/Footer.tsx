import React from 'react';
import { COMPANY_DETAILS } from '../data/ruwaContent';
import { RuwaLogo } from './RuwaLogo';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`transition-colors border-t ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      {/* Upper Footer CTA Band */}
      <div className="border-b border-slate-800/80 bg-sky-950/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl text-white">
              Ready to eliminate diesel vulnerability from your Nigerian operations?
            </h3>
            <p className="text-xs text-slate-300">
              Speak directly with Ruwa field engineers at our Ogba Ifako-Ijaiye depot today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-xl border border-sky-500/40 text-sky-300 bg-sky-950/40 hover:bg-sky-900/60 text-xs font-semibold flex items-center gap-2.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Contact Engineering Desk</span>
            </a>
            <a
              href="#calculator"
              className="px-4 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold transition-all shadow-sm"
            >
              Launch Diesel Calculator
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <RuwaLogo size="lg" variant="full" darkMode={true} showMeaningHint={true} />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_DETAILS.tagline}. Integrating Nigeria&apos;s natural power with engineering excellence — solar generation, AgriTech food processing, and continuous clean water flow.
            </p>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
              <strong className="text-sky-400">Meaning of Ruwa:</strong> In Hausa, Ruwa signifies water — the life-giving source and symbol of seamless, unhindered flow.
            </div>
          </div>

          {/* Col 3: Infrastructure Verticals & Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Products &amp; Equipment</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#packages" className="text-amber-400 font-bold hover:underline">Pay in Installments (Packages)</a></li>
              <li><a href="#products" className="text-sky-400 font-semibold hover:underline">Equipment Catalog (All)</a></li>
              <li><a href="#products" className="text-amber-400 font-medium hover:underline">SunVolt™ Solar Power Banks</a></li>
              <li><a href="#products" className="text-amber-400 font-medium hover:underline">SoundWave™ Solar Audio Systems</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">TitanPower™ Lithium Battery Packs</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">MegaVault™ Industrial Battery Storage</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">HelioMax™ Commercial Solar Inverters</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">VoltaPort™ EV Fast Chargers</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">ArcticHarvest™ Solar Cold Rooms</a></li>
              <li><a href="#products" className="hover:text-sky-400 transition-colors">EduVanguard™ Solar IT Workstations</a></li>
            </ul>
          </div>

          {/* Col 4: Economic Tools & Summits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Initiatives</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors text-amber-400/90 font-medium">Diesel vs. Solar ROI Tool</a></li>
              <li><a href="#solutions" className="hover:text-sky-400 transition-colors">Sector Solutions Finder</a></li>
              <li><a href="#roadmap" className="hover:text-sky-400 transition-colors">Strategic Pipeline (2027+)</a></li>
              <li><a href="#roadmap" className="hover:text-sky-400 transition-colors">Industrial Roadmap</a></li>
              <li><a href="#team" className="hover:text-sky-400 transition-colors">Executive Team Profiles</a></li>
            </ul>
          </div>

          {/* Col 5: Operational Contact (Lagos & Abuja) */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">Lagos Headquarters</h4>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_DETAILS.lagosAddress}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Abuja Regional Office</h4>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{COMPANY_DETAILS.abujaAddress}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/60 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.registeredName}. All rights reserved. • CAC {COMPANY_DETAILS.rcNumber}
          </div>

          <div className="flex items-center gap-6">
            <span>Incorporated in Nigeria</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
