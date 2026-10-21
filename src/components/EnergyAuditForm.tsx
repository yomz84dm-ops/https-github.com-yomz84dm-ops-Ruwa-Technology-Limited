import React, { useState, useEffect } from 'react';
import { COMPANY_DETAILS } from '../data/ruwaContent';
import { RuwaProduct, SolarInstallmentPackage } from '../types';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, ArrowRight, Clock, Zap, Tag, CreditCard } from 'lucide-react';

const INQUIRY_TYPES = [
  'Commercial Solar Microgrid (15kVA - 100kVA+)',
  'Home Solar Package with Installments (2.5kWh - 15kWh)',
  'Residential / Estate Solar (5kVA - 15kVA)',
  'AgriTech & Solar Cold-Chain Solution',
  'EV Mobility & Fleet Electrification (Ogba Hub)',
  'Enterprise IT & Institutional Hardware Supply',
  'Strategic Pipeline (2027+) / Investor Desk',
];

interface EnergyAuditFormProps {
  darkMode: boolean;
  prefilledSystem?: {
    systemName: string;
    kva: number;
    monthlySpend: number;
  } | null;
  prefilledSolution?: string | null;
  prefilledProduct?: RuwaProduct | null;
  prefilledPackage?: {
    pkg: SolarInstallmentPackage;
    plan: string;
  } | null;
}

export const EnergyAuditForm: React.FC<EnergyAuditFormProps> = ({ 
  darkMode, 
  prefilledSystem,
  prefilledSolution,
  prefilledProduct,
  prefilledPackage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    inquiryType: INQUIRY_TYPES[0],
    currentGenKva: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledPackage) {
      setFormData(prev => ({
        ...prev,
        inquiryType: `Order Solar Package: ${prefilledPackage.pkg.name} (${prefilledPackage.pkg.totalPriceFormatted})`,
        notes: `I want to order the "${prefilledPackage.pkg.name}" [SKU: ${prefilledPackage.pkg.sku}] under the ${prefilledPackage.plan} payment plan. Total package price: ${prefilledPackage.pkg.totalPriceFormatted}. System includes ${prefilledPackage.pkg.battery}, ${prefilledPackage.pkg.inverter}, and ${prefilledPackage.pkg.panels}. Please arrange site dispatch and installation.`,
      }));
    } else if (prefilledProduct) {
      setFormData(prev => ({
        ...prev,
        inquiryType: `Product Quotation: ${prefilledProduct.name} (${prefilledProduct.sku})`,
        notes: `Inquiring for quotation & delivery timeline on ${prefilledProduct.name} [SKU: ${prefilledProduct.sku}]. Rated specs: ${prefilledProduct.specs.capacityOrRating}, ${prefilledProduct.specs.voltageOrInput}. Availability status: ${prefilledProduct.availability}.`,
      }));
    } else if (prefilledSystem) {
      setFormData(prev => ({
        ...prev,
        inquiryType: `Commercial Solar (${prefilledSystem.systemName})`,
        currentGenKva: `${prefilledSystem.kva} kVA`,
        notes: `Selected from Diesel ROI Calculator with estimated current monthly spend of ₦${prefilledSystem.monthlySpend.toLocaleString()}.`,
      }));
    } else if (prefilledSolution) {
      setFormData(prev => ({
        ...prev,
        inquiryType: prefilledSolution,
      }));
    }
  }, [prefilledSystem, prefilledSolution, prefilledProduct, prefilledPackage]);

  // The site is hosted statically, so inquiries are delivered via WhatsApp
  // (with an email fallback) instead of a backend endpoint.
  const buildInquiryMessage = () => {
    const lines = [
      'Hello Ruwa Technology Limited, I would like to request a Technical Energy Audit.',
      '',
      `Name: ${formData.name}`,
      formData.company ? `Company: ${formData.company}` : null,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      formData.location ? `Location: ${formData.location}` : null,
      `Inquiry: ${formData.inquiryType}`,
      formData.currentGenKva ? `Current Generator: ${formData.currentGenKva}` : null,
      formData.notes ? `Details: ${formData.notes}` : null,
    ];
    return lines.filter((line) => line !== null).join('\n');
  };

  const whatsappNumber = `234${COMPANY_DETAILS.phone.replace(/^0/, '')}`;
  const whatsappLink = () => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildInquiryMessage())}`;
  const emailLink = () =>
    `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(`Energy Audit Request – ${formData.name}`)}&body=${encodeURIComponent(buildInquiryMessage())}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-20 transition-colors border-t scroll-mt-24 ${
      darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Lagos HQ Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Start Your Energy Transition</span>
              </div>

              <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Request a Free <span className="text-sky-600 dark:text-sky-400">Technical Energy Audit</span>.
              </h2>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Our certified Lagos engineering team inspects your facility, measures real power draw, and delivers an exact engineering blueprint showing how fast your fuel savings pay for the system.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Lagos Headquarters & Operational Hub</h3>
                  <div className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{COMPANY_DETAILS.lagosAddress}</div>
                  <div className="text-[11px] text-slate-400">Ifako-Ijaiye, Lagos State, Nigeria</div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-amber-200/60'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400">Abuja Regional Office & Service Center</h3>
                  <div className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{COMPANY_DETAILS.abujaAddress}</div>
                  <div className="text-[11px] text-slate-400">Karu, Federal Capital Territory (FCT), Nigeria</div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Telephone Line</h3>
                  <div className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{COMPANY_DETAILS.phoneFormatted}</div>
                  <div className="text-[11px] text-slate-400">Monday – Saturday: 8:00 AM – 6:00 PM (WAT)</div>
                </div>
              </div>

              <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Corporate Inquiries</h3>
                  <div className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{COMPANY_DETAILS.email}</div>
                  <div className="text-[11px] text-slate-400">Technical proposals & investor correspondence</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Escalation */}
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>Chat Directly with an Engineer on WhatsApp ({COMPANY_DETAILS.phoneFormatted})</span>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className={`rounded-2xl border p-6 sm:p-8 shadow-xl ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className={`font-display font-bold text-2xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Almost Done – Send Your Request
                  </h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. We've prepared your audit request in WhatsApp – just tap <strong>Send</strong> and our engineering lead from Ogba, Lagos will reach out within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-semibold"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0" />
                      <span>Open WhatsApp Again</span>
                    </a>
                    <a
                      href={emailLink()}
                      className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-semibold ${
                        darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>Send by Email Instead</span>
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer ${
                        darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className={`flex items-center justify-between pb-2 border-b ${
                    darkMode ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Technical Proposal Form
                    </span>
                    <span className="text-[11px] text-sky-600 dark:text-sky-400 flex items-center gap-2.5 font-medium">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>24-Hour Response Guaranteed</span>
                    </span>
                  </div>

                  {prefilledPackage && (
                    <div className={`p-3.5 rounded-xl border text-xs flex items-center justify-between ${
                      darkMode 
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-200' 
                        : 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                    }`}>
                      <span className="flex items-center gap-2.5">
                        <CreditCard className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Ready-to-Order Package: <strong>{prefilledPackage.pkg.name}</strong> ({prefilledPackage.pkg.totalPriceFormatted}) • Plan: <strong className="uppercase">{prefilledPackage.plan}</strong></span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-500 text-slate-950">In Stock</span>
                    </div>
                  )}

                  {prefilledProduct && !prefilledPackage && (
                    <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                      darkMode 
                        ? 'bg-sky-950/40 border-sky-500/30 text-sky-300' 
                        : 'bg-sky-50 border-sky-200 text-sky-800'
                    }`}>
                      <span className="flex items-center gap-2.5">
                        <Tag className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>Product Quotation: <strong>{prefilledProduct.name}</strong> ({prefilledProduct.sku})</span>
                      </span>
                      <span className="text-[10px] text-emerald-500 font-bold">{prefilledProduct.availability}</span>
                    </div>
                  )}

                  {prefilledSystem && !prefilledProduct && (
                    <div className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                      darkMode 
                        ? 'bg-sky-950/40 border-sky-500/30 text-sky-300' 
                        : 'bg-sky-50 border-sky-200 text-sky-800'
                    }`}>
                      <span>✓ Pre-configured: <strong>{prefilledSystem.systemName}</strong></span>
                      <span className="text-[10px] text-slate-400">Calculated from your generator parameters</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="audit-name" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Your Full Name *
                      </label>
                      <input
                        id="audit-name"
                        type="text"
                        required
                        placeholder="e.g. Babatunde Adeleke"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="audit-company" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Company / Organization
                      </label>
                      <input
                        id="audit-company"
                        type="text"
                        placeholder="e.g. Ikeja Cold Storage Ltd"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="audit-phone" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="audit-phone"
                        type="tel"
                        required
                        placeholder="e.g. 0803 123 4567"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="audit-email" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email Address *
                      </label>
                      <input
                        id="audit-email"
                        type="email"
                        required
                        placeholder="e.g. b.adeleke@company.ng"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="audit-location" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Facility Location / State
                      </label>
                      <input
                        id="audit-location"
                        type="text"
                        placeholder="e.g. Ogba / Ikeja / Lekki, Lagos"
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="audit-inquiryType" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Inquiry Classification
                      </label>
                      <select
                        id="audit-inquiryType"
                        value={formData.inquiryType}
                        onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                        className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        } outline-none focus:border-sky-600`}
                      >
                        {!INQUIRY_TYPES.includes(formData.inquiryType) && (
                          <option>{formData.inquiryType}</option>
                        )}
                        {INQUIRY_TYPES.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="audit-notes" className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Project Details or Current Power Challenges
                    </label>
                    <textarea
                      id="audit-notes"
                      rows={3}
                      placeholder="Mention your daily generator run hours, current monthly fuel bills, or specific facility requirements..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className={`w-full px-3 py-2.5 rounded-xl text-sm border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      } outline-none focus:border-sky-600`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>Schedule Free On-Site Energy Audit</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Ruwa Technology Limited respects your confidentiality. Your operational data will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
