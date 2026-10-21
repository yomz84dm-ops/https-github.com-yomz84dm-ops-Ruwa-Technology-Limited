import React from 'react';

interface RuwaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'icon' | 'mark-only';
  styleTheme?: 'sovereign' | 'modern';
  darkMode?: boolean;
  showMeaningHint?: boolean;
  colorMode?: 'color' | 'monotone';
  monotoneColor?: string;
}

export const RuwaLogo: React.FC<RuwaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  styleTheme = 'sovereign',
  darkMode = false,
  showMeaningHint = false,
  colorMode = 'color',
  monotoneColor,
}) => {
  // Dimension definitions
  const dimensions = {
    sm: { icon: 32, text: 'text-base', subtext: 'text-[9px]' },
    md: { icon: 44, text: 'text-xl', subtext: 'text-[10px]' },
    lg: { icon: 58, text: 'text-2xl', subtext: 'text-xs' },
    xl: { icon: 72, text: 'text-3xl', subtext: 'text-sm' },
    '2xl': { icon: 104, text: 'text-4xl', subtext: 'text-base' },
  }[size];

  const isMonotone = colorMode === 'monotone';
  const ink = monotoneColor || (darkMode ? '#FFFFFF' : '#0F172A');
  const knockout = darkMode ? '#0F172A' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* 
        Official Ruwa Technology Limited Emblem:
        - Radiant Sun Shining (Clean Solar Renewable Energy)
        - Sprawling Fertile Farmland in Background (AgriTech & Food Sovereignty, NO Valleys)
        - Winding River Flowing Through Landscape ("Ruwa" = Water, Life, Energy Continuity)
        - Graceful White Dove Flying (Peace, Zero-Emissions, Clean Future & Ecological Harmony)
      */}
      <div 
        className="relative shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300"
        style={{ width: dimensions.icon, height: dimensions.icon }}
        title="Ruwa Technology Limited: Solar (Sun), AgriTech (Farmland), Hydro (River), Sustainability (White Dove) • Seamless Experience"
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md overflow-visible"
        >
          <defs>
            {/* Master Emblem Circular Clip */}
            <clipPath id="ruwaMasterClip">
              <circle cx="60" cy="60" r="54" />
            </clipPath>

            {/* Atmosphere Zenith to Horizon Sky Gradient */}
            <linearGradient id="skyZenithGrad" x1="60" y1="6" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="35%" stopColor="#38BDF8" />
              <stop offset="70%" stopColor="#BAE6FD" />
              <stop offset="90%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            {/* Radiant Sun Disc Radial Gradient */}
            <radialGradient id="sunDiscGrad" cx="42" cy="34" r="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#FFFBEB" />
              <stop offset="55%" stopColor="#FEF08A" />
              <stop offset="85%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </radialGradient>

            {/* Solar Corona Glow */}
            <radialGradient id="sunCoronaGrad" cx="42" cy="34" r="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#FEF08A" stopOpacity="0.45" />
              <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>

            {/* Distant Rolling Farmland Horizon */}
            <linearGradient id="farmlandDistantGrad" x1="60" y1="52" x2="60" y2="62" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#65A30D" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            {/* Golden Harvest Field (AgriTech) */}
            <linearGradient id="harvestFieldGrad" x1="16" y1="60" x2="52" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="60%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>

            {/* Verdant Crop Field (AgriTech) */}
            <linearGradient id="cropFieldGrad" x1="70" y1="58" x2="110" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#22C55E" />
              <stop offset="50%" stopColor="#16A34A" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>

            {/* Foreground Agricultural Pasture */}
            <linearGradient id="foregroundPastureGrad" x1="60" y1="78" x2="60" y2="116" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#16A34A" />
              <stop offset="100%" stopColor="#14532D" />
            </linearGradient>

            {/* River Flow ("Ruwa" = Water, Continuous Energy) */}
            <linearGradient id="riverStreamGrad" x1="60" y1="54" x2="60" y2="116" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="25%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="85%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>

            {/* River Specular Sunlight Reflection */}
            <linearGradient id="riverSunGlaze" x1="50" y1="65" x2="72" y2="114" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>

            {/* White Dove Plumage Soft Shading */}
            <linearGradient id="doveShadingGrad" x1="60" y1="12" x2="78" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#F8FAFC" />
              <stop offset="90%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Dove Drop Shadow */}
            <filter id="doveFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.25" />
            </filter>

            {/* Master Bezel Gradient */}
            <linearGradient id="masterBezelGrad" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="30%" stopColor="#38BDF8" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* ============================================================ */}
          {/* EMBLEM INTERIOR (Circular Masked)                            */}
          {/* ============================================================ */}
          <g clipPath="url(#ruwaMasterClip)">
            {isMonotone ? (
              /* ============================================================ */
              /* MONOTONE / 1-COLOR INDUSTRIAL PRINT & PRODUCT ENGRAVING MODE */
              /* ============================================================ */
              <g>
                {/* Clean Base Canvas */}
                <rect x="6" y="6" width="108" height="108" fill={knockout} />

                {/* 1. RADIANT SUN (Monotone Solid Disc + Knockout Ring + Rays) */}
                <circle cx="42" cy="34" r="12" fill={ink} />
                <circle cx="42" cy="34" r="15.5" stroke={knockout} strokeWidth="2.5" fill="none" />
                <g stroke={ink} strokeWidth="1.8" strokeLinecap="round">
                  <path d="M 42 14 L 42 19" />
                  <path d="M 24 21 L 28 24.5" />
                  <path d="M 60 21 L 56 24.5" />
                  <path d="M 16 34 L 22 34" />
                  <path d="M 68 34 L 62 34" />
                  <path d="M 24 47 L 28 44" />
                  <path d="M 60 47 L 56 44" />
                </g>

                {/* 2. FARMLAND IN BACKGROUND (Monotone Graphic Furrows & Horizon) */}
                <path
                  d="M 6 56 
                     C 24 53, 44 57, 60 55 
                     C 76 53, 96 56, 114 54 
                     L 114 116 
                     L 6 116 Z"
                  fill={ink}
                  opacity="0.15"
                />
                {/* Stylized Perspective Field Divides */}
                <path d="M 12 60 C 30 64, 48 70, 56 82" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />
                <path d="M 8 72 C 24 76, 42 84, 50 96" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />
                <path d="M 6 86 C 18 90, 32 98, 42 112" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />
                <path d="M 108 60 C 90 64, 72 70, 64 82" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />
                <path d="M 112 72 C 96 76, 78 84, 70 96" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />
                <path d="M 114 86 C 102 90, 88 98, 78 112" stroke={ink} strokeWidth="1.4" fill="none" opacity="0.6" />

                {/* 3. FLOWING RIVER (Solid Ink Channel with Knockout Flow Waves) */}
                <path
                  d="M 60 55 
                     C 64 62, 68 68, 63 76 
                     C 56 84, 46 92, 30 116 
                     L 90 116 
                     C 74 92, 66 84, 73 76 
                     C 78 68, 68 62, 62 55 Z"
                  fill={ink}
                />
                {/* River Boundary Knockout Separation */}
                <path
                  d="M 60 55 
                     C 64 62, 68 68, 63 76 
                     C 56 84, 46 92, 30 116"
                  stroke={knockout}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M 62 55 
                     C 68 62, 78 68, 73 76 
                     C 66 84, 74 92, 90 116"
                  stroke={knockout}
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Ripple Cuts inside River */}
                <path d="M 58 73 C 62 76, 67 76, 68 73" stroke={knockout} strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 53 84 C 60 88, 70 88, 74 84" stroke={knockout} strokeWidth="2.4" strokeLinecap="round" fill="none" />
                <path d="M 44 98 C 54 104, 72 104, 82 98" stroke={knockout} strokeWidth="2.8" strokeLinecap="round" fill="none" />

                {/* 4. FLYING DOVE (Smaller, Scaled, Monotone Cutout Silhouette) */}
                <g transform="translate(19, 10) scale(0.72)">
                  {/* Far Wing */}
                  <path
                    d="M 66 22 
                       C 63 15, 54 10, 48 9 
                       C 53 14, 58 18, 62 23 Z"
                    fill={ink}
                    opacity="0.8"
                  />
                  {/* Tail Feathers */}
                  <path
                    d="M 56 29 
                       C 48 31, 40 33, 34 35 
                       C 39 37, 45 37.5, 52 35 
                       L 56 31 Z"
                    fill={ink}
                  />
                  <path d="M 34 35 C 41 35.5, 48 34.5, 54 32" stroke={knockout} strokeWidth="1" fill="none" />

                  {/* Body & Head */}
                  <path
                    d="M 74 20 
                       C 76 18.5, 78 18, 80 18.5 
                       C 81 19, 81.5 20, 80.5 21 
                       C 78 23, 75 25, 72 27 
                       C 68 30, 62 32, 56 30 
                       C 54 28, 58 26, 62 25 
                       C 66 24, 70 22, 74 20 Z"
                    fill={ink}
                  />

                  {/* Fore Wing */}
                  <path
                    d="M 66 24 
                       C 68 18, 73 11, 84 7 
                       C 80 12, 77 17, 76 21 
                       C 74 23, 72 25, 70 26 Z"
                    fill={ink}
                  />
                  {/* Wing Feather Knockout Slits */}
                  <path d="M 84 7 C 80 12, 77 16, 75 21" stroke={knockout} strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  <path d="M 79 12 C 76 16, 73 19, 71 23" stroke={knockout} strokeWidth="1" strokeLinecap="round" fill="none" />

                  {/* Beak & Olive Sprig */}
                  <path d="M 80.5 19.5 L 84 19 L 81 20.8 Z" fill={ink} />
                  <path d="M 83.5 19.2 C 86 19, 88 18, 89 17 C 88 19, 86 20, 84 19.8 Z" fill={ink} />

                  {/* Eye Knockout */}
                  <circle cx="78.5" cy="19.2" r="0.8" fill={knockout} />
                </g>
              </g>
            ) : (
              <g>
                {/* 1. SKY & HORIZON ATMOSPHERE */}
                <rect x="6" y="6" width="108" height="108" fill="url(#skyZenithGrad)" />

            {/* 2. RADIANT SUN SHINING IN SKY */}
            {/* Sun Corona Glow */}
            <circle cx="42" cy="34" r="30" fill="url(#sunCoronaGrad)" />
            {/* Sun Core Disc */}
            <circle cx="42" cy="34" r="14" fill="url(#sunDiscGrad)" />

            {/* Radiant Sunbeams Shining Across Farmlands & River */}
            <g opacity="0.65">
              <path d="M 42 12 L 42 19" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
              <path d="M 23 20 L 28 24" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
              <path d="M 61 20 L 56 24" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
              <path d="M 14 34 L 21 34" stroke="#FEF08A" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 70 34 L 63 34" stroke="#FEF08A" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 22 47 L 27 44" stroke="#FDE68A" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M 62 47 L 57 44" stroke="#FDE68A" strokeWidth="1.6" strokeLinecap="round" />
              {/* Downward Warm Sunlight Wash */}
              <path d="M 42 49 L 42 55" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* 3. EXPANSIVE ROLLING FARMLAND IN THE BACKGROUND (NO VALLEYS!) */}
            {/* Distant Low Rolling Farmland Horizon */}
            <path
              d="M 6 56 
                 C 24 53, 44 57, 60 55 
                 C 76 53, 96 56, 114 54 
                 L 114 66 
                 L 6 66 Z"
              fill="url(#farmlandDistantGrad)"
            />

            {/* Distant Windbreak Trees & Green Hedge Rows along horizon */}
            <g opacity="0.75">
              <circle cx="20" cy="54" r="2.2" fill="#166534" />
              <circle cx="24" cy="54.5" r="1.8" fill="#14532D" />
              <circle cx="36" cy="55.5" r="2" fill="#166534" />
              <circle cx="86" cy="54" r="2.2" fill="#14532D" />
              <circle cx="92" cy="53.5" r="2" fill="#166534" />
              <circle cx="102" cy="54" r="1.8" fill="#14532D" />
            </g>

            {/* Left Farmland: Golden Harvest Crops with Cultivated Furrows */}
            <path
              d="M 6 62 
                 C 22 60, 42 63, 56 64 
                 L 46 86 
                 L 6 92 Z"
              fill="url(#harvestFieldGrad)"
            />
            {/* Golden Harvest Crop Furrow Lines (AgriTech) */}
            <path d="M 6 64 C 22 62, 38 65, 52 66" stroke="#FEF08A" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
            <path d="M 6 71 C 20 69, 36 72, 48 74" stroke="#FDE047" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
            <path d="M 6 78 C 18 76, 32 79, 44 82" stroke="#FEF08A" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
            <path d="M 6 86 C 16 84, 28 87, 40 90" stroke="#CA8A04" strokeWidth="1.3" strokeLinecap="round" opacity="0.75" />

            {/* Right Farmland: Verdant Green Agro-Plantation with Perspective Crop Rows */}
            <path
              d="M 114 60 
                 C 98 59, 78 62, 64 64 
                 L 74 86 
                 L 114 92 Z"
              fill="url(#cropFieldGrad)"
            />
            {/* Emerald Crop Furrow Lines (AgriTech) */}
            <path d="M 114 62 C 100 61, 84 63, 68 66" stroke="#86EFAC" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
            <path d="M 114 69 C 98 68, 80 71, 70 74" stroke="#BBF7D0" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
            <path d="M 114 77 C 96 75, 80 78, 68 82" stroke="#86EFAC" strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
            <path d="M 114 85 C 94 84, 82 87, 72 90" stroke="#4ADE80" strokeWidth="1.3" strokeLinecap="round" opacity="0.75" />

            {/* Midground & Foreground Fertile Pasture Base */}
            <path
              d="M 6 88 
                 C 20 86, 34 89, 44 92 
                 L 30 116 
                 L 6 116 Z"
              fill="url(#foregroundPastureGrad)"
            />
            <path
              d="M 114 88 
                 C 100 86, 86 89, 76 92 
                 L 90 116 
                 L 114 116 Z"
              fill="url(#foregroundPastureGrad)"
            />

            {/* 4. A RIVER FLOWING THROUGH THE LANDSCAPE ("Ruwa" = Water, Life, Hydro Continuous Flow) */}
            {/* Winding gracefully from the distant farmland horizon and expanding into the foreground */}
            <path
              d="M 58 55 
                 C 64 62, 68 68, 63 76 
                 C 56 84, 46 92, 30 116 
                 L 90 116 
                 C 74 92, 66 84, 73 76 
                 C 78 68, 68 62, 62 55 Z"
              fill="url(#riverStreamGrad)"
            />

            {/* Hydrodynamic Sun Glaze & Flow Currents */}
            <path
              d="M 60 56 
                 C 65 63, 67 69, 62 76 
                 C 57 82, 49 90, 38 108 
                 C 46 104, 55 96, 61 88 
                 C 68 80, 68 70, 62 62 Z"
              fill="url(#riverSunGlaze)"
            />

            {/* River Flow Ripples (Water in Motion) */}
            <path d="M 59 63 C 62 65, 65 65, 63 68" stroke="#BAE6FD" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 58 73 C 62 76, 67 76, 68 73" stroke="#E0F2FE" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M 53 84 C 60 88, 70 88, 74 84" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.95" />
            <path d="M 44 98 C 54 104, 72 104, 82 98" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.9" />
            <path d="M 38 109 C 50 114, 76 114, 88 109" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />

            {/* 5. A WHITE DOVE FLYING (Clean Skies, Zero Emissions, Peace, Freedom & Hope) */}
            {/* Scaled down to fit properly with generous margins inside the circular boundary */}
            <g filter="url(#doveFilter)" transform="translate(19, 10) scale(0.72)">
              {/* Back / Far Wing (Reaching into the upper sky) */}
              <path
                d="M 66 22 
                   C 63 15, 54 10, 48 9 
                   C 53 14, 58 18, 62 23 Z"
                fill="#F1F5F9"
              />
              <path
                d="M 48 9 
                   C 51 12, 54 16, 56 19 
                   C 53 17, 50 14, 48 9 Z"
                fill="#E2E8F0"
                opacity="0.7"
              />

              {/* Dove Fan Tail Feathers */}
              <path
                d="M 56 29 
                   C 48 31, 40 33, 34 35 
                   C 39 37, 45 37.5, 52 35 
                   L 56 31 Z"
                fill="#FFFFFF"
              />
              {/* Tail feather separations */}
              <path d="M 34 35 C 41 35.5, 48 34.5, 54 32" stroke="#E2E8F0" strokeWidth="0.8" fill="none" />

              {/* Dove Main Body, Chest & Head */}
              <path
                d="M 74 20 
                   C 76 18.5, 78 18, 80 18.5 
                   C 81 19, 81.5 20, 80.5 21 
                   C 78 23, 75 25, 72 27 
                   C 68 30, 62 32, 56 30 
                   C 54 28, 58 26, 62 25 
                   C 66 24, 70 22, 74 20 Z"
                fill="url(#doveShadingGrad)"
              />

              {/* Fore / Near Wing (Sweeping high with layered primary & secondary feathers) */}
              <path
                d="M 66 24 
                   C 68 18, 73 11, 84 7 
                   C 80 12, 77 17, 76 21 
                   C 74 23, 72 25, 70 26 Z"
                fill="#FFFFFF"
              />
              {/* Primary Wing Feathers Details */}
              <path
                d="M 84 7 
                   C 81 11, 79 16, 78 20 
                   L 75 22 
                   C 76 18, 78 14, 81 10 Z"
                fill="#F8FAFC"
              />
              {/* Subtle Wing Feather Accents */}
              <path d="M 84 7 C 80 12, 77 16, 75 21" stroke="#E2E8F0" strokeWidth="0.9" fill="none" />
              <path d="M 79 12 C 76 16, 73 19, 71 23" stroke="#E2E8F0" strokeWidth="0.8" fill="none" />

              {/* Dove Beak & Golden Olive Sprig (Peace & Agrarian Life) */}
              {/* Tiny Golden Beak */}
              <path d="M 80.5 19.5 L 84 19 L 81 20.8 Z" fill="#F59E0B" />
              {/* Tiny Green Olive Leaf Sprig in Beak */}
              <path d="M 83.5 19.2 C 86 19, 88 18, 89 17 C 88 19, 86 20, 84 19.8 Z" fill="#22C55E" />
              <circle cx="89" cy="17" r="0.8" fill="#15803D" />

              {/* Gentle Eye Dot */}
              <circle cx="78.5" cy="19.2" r="0.7" fill="#0F172A" />
            </g>
          </g>
        )}
      </g>

          {/* ============================================================ */}
          {/* EXECUTIVE BEZEL (STREAMLINED & PRINT-READY - NO 4 DOTS)     */}
          {/* ============================================================ */}
          {isMonotone ? (
            <g>
              {/* Outer Monotone Bezel */}
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke={ink}
                strokeWidth="2.8"
                fill="none"
              />
              {/* Inner Precision Line */}
              <circle
                cx="60"
                cy="60"
                r="50.8"
                stroke={ink}
                strokeWidth="1"
                strokeOpacity="0.4"
                fill="none"
              />
            </g>
          ) : (
            <g>
              {/* Outer Dual Inset Bezel */}
              <circle
                cx="60"
                cy="60"
                r="54"
                stroke="url(#masterBezelGrad)"
                strokeWidth="3.2"
                fill="none"
              />
              {/* Inner Precision Bevel Ring */}
              <circle
                cx="60"
                cy="60"
                r="50.8"
                stroke={darkMode ? '#1E293B' : '#FFFFFF'}
                strokeWidth="1.2"
                strokeOpacity="0.85"
                fill="none"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Typography Lockup */}
      {variant === 'full' && (
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-1.5 leading-none flex-wrap">
            <span
              className={`font-display font-black tracking-tight ${dimensions.text} ${
                isMonotone ? '' : darkMode ? 'text-white' : 'text-slate-900'
              }`}
              style={isMonotone ? { color: ink } : undefined}
            >
              RUWA
            </span>
            <span 
              className={`font-display font-bold tracking-tight text-xs sm:text-sm md:${dimensions.text} ${
                isMonotone ? '' : 'text-sky-600 dark:text-sky-400'
              }`}
              style={isMonotone ? { color: ink } : undefined}
            >
              TECHNOLOGY LIMITED
            </span>
          </div>
          <span
            className={`font-semibold tracking-wider italic mt-0.5 ${dimensions.subtext} ${
              isMonotone ? 'opacity-90' : darkMode ? 'text-amber-400' : 'text-amber-600'
            }`}
            style={isMonotone ? { color: ink } : undefined}
          >
            “Seamless Experience”
          </span>
          {showMeaningHint && (
            <span 
              className={`text-[9px] font-semibold tracking-wide mt-0.5 flex items-center gap-2 ${
                isMonotone ? 'opacity-80' : 'text-slate-400'
              }`}
              style={isMonotone ? { color: ink } : undefined}
            >
              <span 
                className="inline-block w-1.5 h-1.5 rounded-full shrink-0" 
                style={{ backgroundColor: isMonotone ? ink : '#F59E0B' }}
              ></span>
              Clean Solar • AgriTech • Water • Mobility
            </span>
          )}
        </div>
      )}
    </div>
  );
};


