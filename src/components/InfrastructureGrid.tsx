import React, { useState } from 'react';
import { 
  Building2, 
  Zap, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2, 
  X, 
  FileText,
  Activity,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface InfrastructureProject {
  id: string;
  title: string;
  category: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  specs: {
    powerOutput: string;
    uptime: string;
    deploymentTime: string;
    capacityOrThroughput: string;
  };
  highlights: string[];
  clientSector: string;
  status: string;
}

interface InfrastructureGridProps {
  darkMode: boolean;
  onSelectProjectForAudit?: (projectTitle: string) => void;
}

export const InfrastructureGrid: React.FC<InfrastructureGridProps> = ({ 
  darkMode,
  onSelectProjectForAudit 
}) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; category: string } | null>(null);

  const projects: InfrastructureProject[] = [
    {
      id: 'dc-fast-charging-depot',
      title: 'Commercial EV Fast-Charging Depot',
      category: 'Electric Fleet Mobility',
      location: 'Ogba Logistics Corridor, Lagos',
      imageSrc: '/products/ev-fast-charger.jpg',
      imageAlt: 'Turnkey Commercial Dual-Port DC Fast Charging Depot',
      status: 'Ready for Deployment',
      clientSector: 'Delivery Companies & Commercial Fleets',
      specs: {
        powerOutput: '120kW Fast Charging (Charges 2 Vans at Once)',
        uptime: '99.8% Guaranteed Power SLA',
        deploymentTime: '6–8 Weeks Complete Setup',
        capacityOrThroughput: '40+ Delivery Vans Daily',
      },
      highlights: [
        'Dedicated solar canopy with battery storage to bypass national grid limitations',
        'Fast-charges 2 commercial delivery vans at the same time in under 45 minutes',
        'Fleet manager app provides real-time battery status and charging reports'
      ]
    },
    {
      id: 'solar-cold-chain-packhouse',
      title: 'Solar-Powered Farm Cold Room',
      category: 'Farm & Cold Storage',
      location: 'South-West Agricultural Hub',
      imageSrc: '/products/solar-cold-room.jpg',
      imageAlt: 'Ruwa ArcticHarvest Solar Walk-in Cold Room Facility',
      status: 'Turnkey Modular',
      clientSector: 'Farmers, Food Aggregators & Exporters',
      specs: {
        powerOutput: '15kVA 100% Solar Power System',
        uptime: 'Continuous 24/7 Cooling (No Grid Needed)',
        deploymentTime: '4 Weeks Modular Setup',
        capacityOrThroughput: '25 Tons Fresh Produce Storage',
      },
      highlights: [
        'Maintains 2°C to 8°C temperature to keep tomatoes, vegetables, and fruit fresh up to 21 days',
        'Thermal storage locks in cool air overnight without burning a single liter of diesel',
        'Modular pre-built structure that can be easily expanded or relocated as your farm grows'
      ]
    },
    {
      id: 'megavault-bess-microgrid',
      title: 'Factory & Industrial Battery Storage',
      category: 'Manufacturing Clean Power',
      location: 'Ikeja Industrial Estate, Lagos',
      imageSrc: '/products/industrial-bess-rack.jpg',
      imageAlt: 'MegaVault High-Voltage Industrial LiFePO4 Battery Storage System',
      status: 'Certified Industrial Grade',
      clientSector: 'Factories & Industrial Processing Plants',
      specs: {
        powerOutput: '250kVA / 400kWh Battery Storage Plant',
        uptime: '99.9% Continuous Power Uptime',
        deploymentTime: '8–10 Weeks Turnkey Delivery',
        capacityOrThroughput: 'Displaces ₦5.4M/mo in Fuel Spend',
      },
      highlights: [
        'Long-life lithium battery system built to run heavy production machinery for 15+ years',
        'Instant power transfer (<10ms) completely protects packaging lines and motors from surges',
        'Smart energy manager shifts facility load away from high-tariff peak grid hours'
      ]
    },
    {
      id: 'battery-swap-station',
      title: 'Quick Battery Swap Kiosk (90 Seconds)',
      category: 'Electric Mobility',
      location: 'Commercial Dispatch Corridor, Lagos',
      imageSrc: '/products/ev-battery-swap.jpg',
      imageAlt: 'Commercial Two-Wheeler and Three-Wheeler Battery Swap Hub',
      status: 'Modular Kiosk',
      clientSector: 'Courier & Food Delivery Networks',
      specs: {
        powerOutput: '30kW Rapid Multi-Bay Fast Charger',
        uptime: '24/7 Automated Access',
        deploymentTime: '3 Weeks Fast Installation',
        capacityOrThroughput: 'Under 90 Seconds Battery Swap',
      },
      highlights: [
        'Secure 12-bay automated locker system keeps 60 swap batteries charged and ready',
        'Eliminates driver waiting time—riders swap an empty battery for a full one in 90 seconds',
        'Simple driver tap-card authentication with mobile billing software for fleet managers'
      ]
    },
    {
      id: 'commercial-hybrid-inverter-plant',
      title: 'Three-Phase Commercial Solar Plant',
      category: 'Commercial Buildings & Hospitals',
      location: 'Abuja FCT Commercial District',
      imageSrc: '/products/hybrid-solar-inverter.jpg',
      imageAlt: 'HelioMax Commercial 3-Phase Solar Hybrid Inverter Infrastructure',
      status: 'Utility Synchronized',
      clientSector: 'Private Hospitals, Clinics & Office Campuses',
      specs: {
        powerOutput: '100kW Continuous Clean AC Power',
        uptime: '99.95% Medical-Grade Reliability',
        deploymentTime: '4–6 Weeks Turnkey Delivery',
        capacityOrThroughput: '100% Free Daylight Solar Power',
      },
      highlights: [
        'Automatically manages on-site diesel generators, running them only when necessary',
        'Clean, pure power that protects sensitive medical scanners, elevators, and server racks',
        'High-efficiency solar capture engineered to perform even during overcast or hazy weather'
      ]
    },
    {
      id: 'precision-agro-pumping-grid',
      title: 'Solar Farm Irrigation & Water Grid',
      category: 'Farm Water & Irrigation',
      location: 'Ogun Agricultural Basin',
      imageSrc: '/products/agri-iot-sensor.jpg',
      imageAlt: 'Agro-Industrial Solar Irrigation Pumping and Ground IoT Array',
      status: 'Zero Diesel Fuel',
      clientSector: 'Commercial Crop Farms & Greenhouses',
      specs: {
        powerOutput: '11kW Direct Solar Water Pumping',
        uptime: '100% Sun-Powered Water Delivery',
        deploymentTime: '2 Weeks Fast Deployment',
        capacityOrThroughput: '150,000 Liters Daily Water Pumping',
      },
      highlights: [
        'Powers deep-well farm pumps directly from solar panels without needing expensive batteries',
        'Zero fuel logistics: completely stops the need to haul diesel drums to distant farm fields',
        'Automated soil moisture sensors turn pumps on only when crops need watering'
      ]
    }
  ];

  const handleConsultClick = (project: InfrastructureProject) => {
    if (onSelectProjectForAudit) {
      onSelectProjectForAudit(project.title);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="infrastructure-portfolio" className={`py-20 transition-colors border-t scroll-mt-24 ${
      darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-700 dark:text-sky-400 border border-sky-500/20">
              <Building2 className="w-3.5 h-3.5 text-amber-500" />
              <span>Commercial Infrastructure Portfolio</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Turnkey Energy &amp; Mobility Infrastructure Built for Nigeria.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Engineered, procured, and deployed to institutional standards. We deliver turnkey microgrids, commercial EV depots, and decentralized cold-chains designed for maximum uptime under heavy tropical operating conditions.
            </p>
          </div>

          {/* Institutional Trust Notice */}
          <div className={`p-4 rounded-xl border text-xs max-w-sm ${
            darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
          }`}>
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
              <span>Enterprise Procurement Ready</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              Full EPC capabilities, CAC registered (RC-1614229), with verified Nigerian SLAs and on-site engineering crews stationed in Lagos and Abuja.
            </p>
          </div>
        </div>

        {/* Clean, Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-xl group ${
                darkMode 
                  ? 'bg-slate-950 border-slate-800 hover:border-slate-700' 
                  : 'bg-white border-slate-200 hover:border-sky-300 shadow-sm'
              }`}
            >
              {/* Card Top: Photo Container / Placeholder */}
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 cursor-pointer group/img"
                     onClick={() => setSelectedImage({ src: project.imageSrc, title: project.title, category: project.category })}>
                  
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      // Resilient fallback if image path ever fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-900');
                        parent.innerHTML = `
                          <div class="text-center p-6 text-slate-400">
                            <svg class="w-10 h-10 mx-auto text-sky-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">${project.title}</span>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Contrast gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Category and Status Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-800">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-950/80 backdrop-blur-md text-sky-400 border border-sky-800">
                      {project.status}
                    </span>
                  </div>

                  {/* Enlarge Hint on Image */}
                  <div className="absolute bottom-2.5 right-3 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/60 px-2 py-1 rounded backdrop-blur-xs">
                    <Maximize2 className="w-3 h-3" />
                    <span>Enlarge Photo</span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-2.5 left-3 text-[11px] text-slate-300 font-medium truncate max-w-[80%] drop-shadow-sm">
                    {project.location}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Title & Client Focus */}
                  <div className="space-y-1">
                    <h3 className={`font-display font-extrabold text-xl leading-snug tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {project.title}
                    </h3>
                    <div className="text-xs font-medium text-sky-600 dark:text-sky-400">
                      Targeted for: {project.clientSector}
                    </div>
                  </div>

                  {/* Operational Metrics Specification Box (Clean tabular layout) */}
                  <div className={`p-3.5 rounded-xl border space-y-2 font-mono text-xs ${
                    darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/40 pb-1 flex items-center justify-between">
                      <span>Operational Metrics</span>
                      <Activity className="w-3.5 h-3.5 text-amber-500" />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-sans text-[10px]">Power Output</span>
                        <span className="font-bold text-slate-900 dark:text-white">{project.specs.powerOutput}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-sans text-[10px]">Uptime SLA</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{project.specs.uptime}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-sans text-[10px]">Deployment Time</span>
                        <span className="font-bold text-sky-600 dark:text-sky-400">{project.specs.deploymentTime}</span>
                      </div>
                      <div>
                        <span className="block text-slate-500 dark:text-slate-400 font-sans text-[10px]">Daily Outcome / Benefit</span>
                        <span className="font-bold text-amber-500">{project.specs.capacityOrThroughput}</span>
                      </div>
                    </div>
                  </div>

                  {/* Short Bullet List of Engineering Highlights */}
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

              {/* Card Footer: Action Button */}
              <div className={`p-5 sm:p-6 pt-0 mt-2`}>
                <button
                  type="button"
                  onClick={() => handleConsultClick(project)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer border ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-sky-600 border-slate-700 hover:border-sky-500 text-white'
                      : 'bg-slate-50 hover:bg-sky-700 border-slate-300 hover:border-sky-700 text-slate-800 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Request Quote &amp; Site Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner: Procurement Hotline & Custom Infrastructure */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode 
            ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-sky-950/60 border-slate-800' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
              Need a Custom Turnkey Solution for Your Facility or Fleet?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Our engineering team conducts free on-site power load audits across Lagos, Abuja, Ogun, and regional commercial hubs.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xs font-bold whitespace-nowrap shadow-sm hover:shadow transition-all inline-flex items-center gap-2.5"
          >
            <span>Request Free Site Audit</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution Photo Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider">{selectedImage.category}</span>
                <h4 className="text-base font-bold font-display">{selectedImage.title}</h4>
              </div>
              <button 
                type="button" 
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-[75vh] flex items-center justify-center p-2 bg-black">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
