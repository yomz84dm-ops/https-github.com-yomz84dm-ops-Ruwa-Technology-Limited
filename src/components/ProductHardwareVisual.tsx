import React from 'react';
import { RuwaLogo } from './RuwaLogo';

interface ProductHardwareVisualProps {
  model?: 'powerbank' | 'speaker' | 'battery-wall' | 'inverter' | 'ev-charger' | 'swap-depot' | 'cold-room' | 'sensor-hub' | 'laptop' | 'ups';
  darkMode: boolean;
  name: string;
  className?: string;
}

export const ProductHardwareVisual: React.FC<ProductHardwareVisualProps> = ({
  model = 'powerbank',
  darkMode,
  name,
  className = '',
}) => {
  return (
    <div className={`relative w-full h-48 sm:h-52 rounded-xl overflow-hidden flex items-center justify-center p-4 border select-none transition-all ${
      darkMode 
        ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-slate-800/80 shadow-inner' 
        : 'bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 border-slate-200 shadow-inner'
    } ${className}`}>
      
      {/* Studio Background Lighting Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
      
      {/* Model-specific Hardware Render */}
      {model === 'powerbank' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          {/* Power Bank Chassis */}
          <div className="relative w-36 h-40 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 p-2.5 shadow-2xl border border-slate-600/60 flex flex-col justify-between">
            {/* Solar Photovoltaic Surface Matrix */}
            <div className="w-full h-20 rounded-lg bg-gradient-to-b from-sky-950 to-slate-950 border border-sky-500/40 p-1 relative overflow-hidden shadow-inner flex flex-col justify-between">
              {/* Solar cell grid lines */}
              <div className="grid grid-cols-4 grid-rows-3 gap-0.5 w-full h-full opacity-70">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="bg-sky-900/60 border border-sky-400/20 rounded-[1px]" />
                ))}
              </div>
              <div className="absolute top-1 right-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[7px] font-mono text-emerald-300 font-bold">SOLAR ACTIVE</span>
              </div>
            </div>

            {/* Ruwa Official Logo Stamped on Rugged Lower Half */}
            <div className="flex items-center justify-between px-1 pt-1">
              <div className="flex items-center gap-1.5">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                <span className="text-[10px] font-black tracking-wider text-white font-display">
                  RUWA
                </span>
              </div>
              {/* LED Battery Power Indicators */}
              <div className="flex items-center gap-0.5 bg-slate-950/80 px-1.5 py-0.5 rounded-full border border-slate-700">
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                <span className="w-1 h-1 rounded-full bg-sky-400" />
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
              </div>
            </div>

            {/* Bottom I/O Ports: Fast Charge USB-C & USB-A */}
            <div className="flex items-center justify-center gap-2 pt-1 border-t border-slate-700/80">
              <span className="text-[8px] font-mono text-slate-400">PD 65W TYPE-C</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="text-[8px] font-mono text-amber-400 font-bold">QC 3.0</span>
            </div>
          </div>
        </div>
      )}

      {model === 'speaker' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          {/* Rugged Cylindrical / Polyhedral Speaker Enclosure */}
          <div className="relative w-44 h-36 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-2.5 shadow-2xl border border-slate-700 flex flex-col justify-between overflow-hidden">
            {/* Top Integrated Solar Canopy Panel */}
            <div className="w-full h-8 rounded-lg bg-gradient-to-b from-sky-950 via-slate-900 to-slate-950 border border-sky-400/40 p-1 flex items-center justify-between px-2">
              <div className="flex items-center gap-1 text-[8px] font-mono text-sky-300 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>SOLAR AUDIO CELL</span>
              </div>
              <span className="text-[8px] font-mono text-slate-400">IP67 WATERPROOF</span>
            </div>

            {/* Acoustic Mesh Grille with Ruwa Emblem in Center */}
            <div className="relative w-full h-18 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between px-3 overflow-hidden">
              {/* Speaker Driver Waves Left */}
              <div className="flex items-center gap-0.5 opacity-60">
                <span className="w-1 h-3 bg-sky-500 rounded-full animate-pulse" />
                <span className="w-1 h-6 bg-sky-400 rounded-full" />
                <span className="w-1 h-4 bg-sky-500 rounded-full" />
              </div>

              {/* Central Stamped Ruwa Logo */}
              <div className="flex items-center gap-1.5 bg-slate-900/90 px-2.5 py-1 rounded-full border border-slate-700 shadow-md">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                <span className="text-[10px] font-black tracking-widest text-white font-display">
                  RUWA
                </span>
              </div>

              {/* Speaker Driver Waves Right */}
              <div className="flex items-center gap-0.5 opacity-60">
                <span className="w-1 h-4 bg-sky-500 rounded-full" />
                <span className="w-1 h-6 bg-sky-400 rounded-full" />
                <span className="w-1 h-3 bg-sky-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Base Controls & Battery Indicator */}
            <div className="flex items-center justify-between px-1 text-[8px] font-mono text-slate-400">
              <span className="text-emerald-400 font-bold">24H PLAYTIME</span>
              <span>FM / BLUETOOTH 5.3</span>
              <span className="text-sky-400">TWS PAIR</span>
            </div>
          </div>
        </div>
      )}

      {model === 'battery-wall' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-36 h-40 rounded-xl bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-800 dark:to-slate-900 p-3 shadow-2xl border border-slate-400/40 dark:border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b pb-1.5 border-slate-400/30 dark:border-slate-700">
              <span className="text-[9px] font-mono font-bold text-slate-800 dark:text-slate-200">51.2V 100Ah</span>
              <span className="text-[8px] font-mono px-1 rounded bg-emerald-500/20 text-emerald-500 font-bold">LiFePO4</span>
            </div>
            <div className="flex flex-col items-center my-auto py-2">
              <RuwaLogo size="md" variant="mark-only" colorMode="monotone" monotoneColor={darkMode ? "#FFFFFF" : "#0F172A"} darkMode={darkMode} />
              <span className="text-[10px] font-extrabold tracking-widest text-slate-900 dark:text-white mt-1 font-display">
                RUWA TITANPOWER
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-slate-400/30 dark:border-slate-700">
              <div className="h-1 bg-emerald-500 rounded" />
              <div className="h-1 bg-emerald-500 rounded" />
              <div className="h-1 bg-emerald-500 rounded" />
              <div className="h-1 bg-emerald-500 rounded" />
            </div>
          </div>
        </div>
      )}

      {model === 'inverter' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 w-full">
          {/* Realistic 15kVA Three-Phase Hybrid Solar & Storage Inverter Wall-Mount Chassis */}
          <div className="relative w-52 h-44 rounded-2xl bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 p-2.5 shadow-2xl border-2 border-sky-500/40 flex flex-col justify-between">
            {/* Top Vent & Dual Heatsink Cooling Array */}
            <div className="flex items-center justify-between pb-1 border-b border-slate-300 dark:border-slate-800 text-[8px] font-mono">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-500 dark:text-emerald-400 font-bold">GRID-TIED & HYBRID</span>
              </div>
              <div className="flex gap-1 text-[7px] text-slate-500 dark:text-slate-400">
                <span className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">3-PHASE 400V</span>
                <span className="px-1 py-0.5 rounded bg-sky-500/10 text-sky-500 dark:text-sky-400 border border-sky-500/20 font-bold">15,000W</span>
              </div>
            </div>

            {/* Main Mid Section: Color LCD Monitoring Console & Ruwa Sovereign Branding */}
            <div className="flex-1 my-1.5 flex gap-2 items-stretch">
              {/* High-Resolution Dynamic LCD Display Panel */}
              <div className="flex-1 rounded-xl bg-slate-950 border border-cyan-500/40 p-2 flex flex-col justify-between shadow-inner relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[7px] font-mono border-b border-cyan-900/50 pb-1">
                  <span className="text-cyan-400 font-bold">HELIO-OS v3.2</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    SYNC 50.0Hz
                  </span>
                </div>

                {/* Real-Time Power Flow Readout */}
                <div className="grid grid-cols-3 gap-1 my-1 text-center font-mono">
                  <div className="bg-sky-950/60 rounded p-1 border border-sky-500/20">
                    <div className="text-[6px] text-slate-400">PV ARRAY</div>
                    <div className="text-[8px] font-bold text-amber-400">12.8 kW</div>
                    <div className="text-[6px] text-slate-400">620V MPPT</div>
                  </div>
                  <div className="bg-sky-950/60 rounded p-1 border border-sky-500/20">
                    <div className="text-[6px] text-slate-400">BATTERY</div>
                    <div className="text-[8px] font-bold text-emerald-400">96%</div>
                    <div className="text-[6px] text-slate-400">53.4V LFP</div>
                  </div>
                  <div className="bg-sky-950/60 rounded p-1 border border-sky-500/20">
                    <div className="text-[6px] text-slate-400">AC LOAD</div>
                    <div className="text-[8px] font-bold text-cyan-300">5.4 kW</div>
                    <div className="text-[6px] text-slate-400">3-Phase 36%</div>
                  </div>
                </div>

                {/* Efficiency & Diagnostics Ticker */}
                <div className="flex items-center justify-between text-[6px] font-mono text-slate-400 pt-0.5 border-t border-cyan-900/50">
                  <span className="text-sky-300 font-medium">EFF: 98.2% PURE SINE</span>
                  <span className="text-emerald-400">GEN AUTO-START READY</span>
                </div>
              </div>

              {/* Right Side Control Knob & Safety Isolator Switch */}
              <div className="w-14 rounded-xl bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-1.5 flex flex-col justify-between items-center text-center">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor={darkMode ? "#FFFFFF" : "#0F172A"} darkMode={darkMode} />
                
                {/* Heavy Duty Red/Yellow DC Isolator Rotary Switch */}
                <div className="relative my-0.5">
                  <div className="w-7 h-7 rounded-full bg-amber-500 dark:bg-amber-600 border-2 border-slate-900 flex items-center justify-center shadow-md">
                    <div className="w-4 h-1.5 bg-red-600 rounded-xs shadow-xs" />
                  </div>
                  <span className="text-[5px] font-mono font-bold text-slate-700 dark:text-slate-300 block mt-0.5">
                    DC ISOLATOR
                  </span>
                </div>

                <div className="text-[6px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  IP65 SEALED
                </div>
              </div>
            </div>

            {/* Bottom Terminal Bay: Dual MPPT, Battery Bus & AC Glands */}
            <div className="flex items-center justify-between pt-1 border-t border-slate-300 dark:border-slate-800 px-1 text-[7px] font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-900 dark:text-white font-extrabold tracking-wider font-display">
                  RUWA HELIOMAX™
                </span>
                <span className="text-sky-600 dark:text-sky-400 font-bold">15kVA</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-[6px]">DUAL MPPT • RS485/CAN • Wi-Fi</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {model === 'ev-charger' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-28 h-42 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-2.5 shadow-2xl border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[8px] font-mono text-emerald-400 font-bold">CCS2 DUAL</span>
            </div>
            <div className="flex flex-col items-center py-2 text-center">
              <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
              <span className="text-[9px] font-black text-white tracking-wider mt-1">RUWA VOLTAPORT</span>
              <span className="text-[8px] font-mono text-sky-400 font-bold">60kW – 120kW</span>
            </div>
            {/* Tap RFID Pad */}
            <div className="w-full p-1 rounded bg-slate-800 text-center border border-slate-700">
              <span className="text-[7px] font-mono text-slate-400">NFC / RFID TAP</span>
            </div>
          </div>
        </div>
      )}

      {model === 'swap-depot' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-44 h-36 rounded-xl bg-slate-900 p-2.5 shadow-2xl border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-between px-1">
              <span className="text-[8px] font-mono text-amber-400 font-bold">OGBA DEPOT</span>
              <div className="flex items-center gap-1">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                <span className="text-[8px] font-black text-white">RAPIDSWAP</span>
              </div>
            </div>
            {/* 8-Bay Battery Grid */}
            <div className="grid grid-cols-4 gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-8 rounded bg-slate-800 border border-slate-700 flex flex-col items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[6px] font-mono text-slate-400">BAY {i + 1}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-[7px] font-mono text-slate-400">
              90-SEC AUTOMATED BATTERY EXCHANGE
            </div>
          </div>
        </div>
      )}

      {model === 'cold-room' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 w-full">
          {/* Insulated Solar Cold Storage Chamber Pod */}
          <div className="relative w-48 h-40 rounded-xl bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 p-2 shadow-2xl border-2 border-cyan-500/40 flex flex-col justify-between">
            {/* Top Roof: Rooftop Monocrystalline Solar Panel Array & PCM Chiller */}
            <div className="w-full h-7 rounded-md bg-slate-950 border border-cyan-500/50 p-0.5 relative overflow-hidden flex items-center justify-between px-1.5 shadow-inner">
              <div className="grid grid-cols-6 gap-0.5 w-24 h-full opacity-80">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-sky-900 border border-sky-400/40 rounded-[1px]" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[7px] font-mono text-cyan-300 font-bold">SOLAR CHILL 3.5°C</span>
              </div>
            </div>

            {/* Heavy Insulated Cold Room Door & Temperature Telemetry */}
            <div className="flex-1 my-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-1.5 flex gap-2 items-center">
              {/* Heavy Walk-In Refrigeration Door with Commercial Lever Latch */}
              <div className="w-16 h-full rounded border-2 border-slate-400 dark:border-slate-700 bg-slate-200 dark:bg-slate-900 flex flex-col justify-between p-1 relative shadow-sm">
                <div className="w-full h-1 bg-slate-400 dark:bg-slate-700 rounded-xs" />
                <div className="w-2 h-4 bg-amber-400 dark:bg-amber-500 rounded-xs ml-auto shadow-xs" />
                <span className="text-[6px] font-mono text-slate-500 dark:text-slate-400 font-bold">WALK-IN</span>
              </div>

              {/* Produce Storage Chamber Interior & Digital Chiller Control */}
              <div className="flex-1 flex flex-col justify-between h-full py-0.5">
                <div className="flex items-center gap-1">
                  <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor={darkMode ? "#FFFFFF" : "#0F172A"} darkMode={darkMode} />
                  <span className="text-[8px] font-black text-slate-900 dark:text-white font-display">
                    ARCTICHARVEST
                  </span>
                </div>
                <div className="flex items-center justify-between text-[7px] font-mono text-slate-700 dark:text-slate-300 bg-cyan-500/10 dark:bg-cyan-950/50 px-1.5 py-0.5 rounded border border-cyan-500/20">
                  <span>CHAMBER TEMP</span>
                  <span className="font-bold text-cyan-500 dark:text-cyan-400">4°C CONSTANT</span>
                </div>
                <div className="text-[6px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span>● 36HR PCM THERMAL ICE BUFFER</span>
                </div>
              </div>
            </div>

            {/* Bottom Base Skid */}
            <div className="flex items-center justify-between px-1 text-[7px] font-mono text-slate-500 dark:text-slate-400">
              <span>FARM-GATE COLD POD</span>
              <span>10–30 TONS</span>
            </div>
          </div>
        </div>
      )}

      {model === 'sensor-hub' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-36 h-36 rounded-2xl bg-slate-900 p-3 shadow-2xl border border-slate-700 flex flex-col justify-between items-center text-center">
            {/* Mini Solar Top */}
            <div className="w-16 h-5 rounded bg-sky-950 border border-sky-400/40" />
            <div className="my-1">
              <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
              <div className="text-[9px] font-bold text-white mt-1">RUWA TERRASENSE</div>
              <div className="text-[7px] font-mono text-sky-400">LORA 15KM TELEMETRY</div>
            </div>
            {/* Stainless Ground Probe */}
            <div className="w-2 h-8 bg-slate-400 rounded-b" />
          </div>
        </div>
      )}

      {model === 'laptop' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-44 h-32 rounded-xl bg-slate-900 p-2 shadow-2xl border border-slate-700 flex flex-col justify-between">
            {/* Screen */}
            <div className="w-full h-20 rounded bg-slate-950 border border-slate-800 p-2 flex flex-col items-center justify-center text-center">
              <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
              <span className="text-[8px] font-bold text-white mt-0.5">EDUVANGUARD PRO</span>
              <span className="text-[6px] font-mono text-slate-400">INSTITUTIONAL STEM LINUX/WINDOWS</span>
            </div>
            {/* Keyboard base */}
            <div className="w-full h-6 rounded-b bg-slate-800 border-t border-slate-700 flex items-center justify-center">
              <span className="text-[7px] font-mono text-slate-400">DROP &amp; SPILL RESISTANT</span>
            </div>
          </div>
        </div>
      )}

      {model === 'ups' && (
        <div className="relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-44 h-28 rounded-lg bg-slate-900 p-2.5 shadow-2xl border border-slate-700 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-sky-400">ONLINE 2U RACK</span>
              <span className="text-[8px] font-mono text-slate-400">3000VA / 3000W</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-slate-950 rounded border border-slate-800">
              <div className="flex items-center gap-1.5">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                <span className="text-[9px] font-bold text-white">NETSENTRY</span>
              </div>
              <span className="text-[8px] font-mono text-emerald-400 font-bold">0ms TRANSFER</span>
            </div>
            <div className="text-center text-[7px] font-mono text-slate-400">
              HOT-SWAPPABLE LiFePO4 CARTRIDGE
            </div>
          </div>
        </div>
      )}

      {/* Product Tag overlay */}
      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-xs border border-slate-800 text-[9px] font-mono text-slate-300 font-semibold flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        <span>Hardware Preview • Stamped Emblem</span>
      </div>
    </div>
  );
};
