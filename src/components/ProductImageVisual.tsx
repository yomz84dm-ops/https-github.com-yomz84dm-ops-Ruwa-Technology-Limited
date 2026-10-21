import React, { useEffect, useState } from 'react';
import { RuwaLogo } from './RuwaLogo';
import { Maximize2, X, ZoomIn } from 'lucide-react';

interface ProductImageVisualProps {
  imageUrl?: string;
  name: string;
  sku: string;
  darkMode: boolean;
  className?: string;
  badgeText?: string;
  hardwareModel?: 'powerbank' | 'speaker' | 'battery-wall' | 'inverter' | 'ev-charger' | 'swap-depot' | 'cold-room' | 'sensor-hub' | 'laptop' | 'ups' | 'solar-package';
}

export const ProductImageVisual: React.FC<ProductImageVisualProps> = ({
  imageUrl,
  name,
  sku,
  darkMode,
  className = '',
  hardwareModel,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close the lightbox with the Escape key and lock page scroll while it is open
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen]);

  const fallbackUrl = "/products/solar-power-bank.jpg";
  const displaySrc = (!imgError && imageUrl) ? imageUrl : fallbackUrl;
  const isPoster = displaySrc.includes('aistudio') || hardwareModel === 'solar-package';

  return (
    <>
      <div className={`relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden group/img border select-none transition-all duration-300 ${
        darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
      } ${className}`}>

        {/* Clean Product Photography or Marketing Poster */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={displaySrc}
            alt={name}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`w-full h-full ${isPoster ? 'object-cover object-top' : 'object-cover object-center'} transition-all duration-500 ease-out group-hover/img:scale-105 filter ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            } ${darkMode ? 'brightness-95 contrast-105' : 'brightness-100'}`}
          />

          {/* Loading Skeleton */}
          {!imgLoaded && (
            <div className="absolute inset-0 bg-slate-800/30 animate-pulse flex items-center justify-center">
              <span className="text-xs font-mono text-slate-400">Loading...</span>
            </div>
          )}

          {/* Discreet Monochrome Ruwa Logo Mark directly on hardware (skipped on posters as they already feature the full emblem) */}
          {!isPoster && (
            <div 
              className="absolute top-3 left-3 z-10 pointer-events-none p-1.5 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center"
              title="Ruwa Official Monochrome Mark"
            >
              <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
            </div>
          )}

          {/* High-Resolution Zoom Action Button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            title="Zoom into high-resolution photo"
            aria-label={`Zoom view for ${name}`}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-slate-950/70 hover:bg-slate-900 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all opacity-100 sm:opacity-0 sm:group-hover/img:opacity-100 focus-visible:opacity-100 shadow-md cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox / High-Resolution Photo Zoom Modal */}
      {lightboxOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2.5">
                <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                <div>
                  <h4 className="text-sm font-bold text-white font-display">{name}</h4>
                  <p className="text-[10px] font-mono text-sky-400">{sku} • Commercial Product Overview</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Expanded Clean Photo View with Discreet Monochrome Logo Mark */}
            <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-black/90 p-2 sm:p-4">
              <img
                src={displaySrc}
                alt={`${name} - Detailed View`}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
              {/* Subtle Monochrome Logo on Lightbox Image */}
              {!isPoster && (
                <div className="absolute bottom-5 right-5 pointer-events-none p-1.5 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center">
                  <RuwaLogo size="sm" variant="mark-only" colorMode="monotone" monotoneColor="#FFFFFF" darkMode={true} />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2.5">
                <ZoomIn className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Commercial production unit • Ruwa Technology Limited, Lagos</span>
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer text-xs"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
