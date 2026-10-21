import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstallmentPackagesSection } from './components/InstallmentPackagesSection';
import { DieselRoiCalculator } from './components/DieselRoiCalculator';
import { InfrastructureGrid } from './components/InfrastructureGrid';
import { PillarsSection } from './components/PillarsSection';
import { ProductsSection } from './components/ProductsSection';
import { SolutionFinder } from './components/SolutionFinder';
import { RoadmapNDIS } from './components/RoadmapNDIS';
import { TeamSection } from './components/TeamSection';
import { EnergyAuditForm } from './components/EnergyAuditForm';
import { Footer } from './components/Footer';
import { RuwaProduct, SolarInstallmentPackage } from './types';

export default function App() {
  // Theme is strictly dependent on the user's OS/system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Sync with initial match
    setDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Cross-component state forwarding for frictionless lead conversion
  const [prefilledSystem, setPrefilledSystem] = useState<{
    systemName: string;
    kva: number;
    monthlySpend: number;
  } | null>(null);

  const [prefilledSolution, setPrefilledSolution] = useState<string | null>(null);
  const [prefilledProduct, setPrefilledProduct] = useState<RuwaProduct | null>(null);
  const [prefilledPackage, setPrefilledPackage] = useState<{
    pkg: SolarInstallmentPackage;
    plan: string;
  } | null>(null);

  const handleSelectPackageForOrder = (pkg: SolarInstallmentPackage, plan: '6-month' | '12-month' | 'outright') => {
    setPrefilledPackage({ pkg, plan });
    setPrefilledSystem(null);
    setPrefilledSolution(null);
    setPrefilledProduct(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSystemForAudit = (systemName: string, kva: number, monthlySpend: number) => {
    setPrefilledSystem({ systemName, kva, monthlySpend });
    setPrefilledSolution(null);
    setPrefilledProduct(null);
    setPrefilledPackage(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillar = (pillarTitle: string) => {
    setPrefilledSolution(pillarTitle);
    setPrefilledSystem(null);
    setPrefilledProduct(null);
    setPrefilledPackage(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (solutionTitle: string) => {
    setPrefilledSolution(solutionTitle);
    setPrefilledSystem(null);
    setPrefilledProduct(null);
    setPrefilledPackage(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProductForQuote = (product: RuwaProduct) => {
    setPrefilledProduct(product);
    setPrefilledSystem(null);
    setPrefilledSolution(null);
    setPrefilledPackage(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectTitle: string) => {
    setPrefilledSolution(`Infrastructure Project RFP: ${projectTitle}`);
    setPrefilledSystem(null);
    setPrefilledProduct(null);
    setPrefilledPackage(null);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          darkMode={darkMode} 
        />

        {/* Ready-to-Order Turnkey Solar Packages (Pay in Installments) with Official Marketing Posters */}
        <InstallmentPackagesSection
          darkMode={darkMode}
          onSelectPackageForOrder={handleSelectPackageForOrder}
        />

        <DieselRoiCalculator 
          darkMode={darkMode} 
          onSelectSystemForAudit={handleSelectSystemForAudit} 
        />

        <InfrastructureGrid
          darkMode={darkMode}
          onSelectProjectForAudit={handleSelectProject}
        />

        <PillarsSection 
          darkMode={darkMode} 
          onSelectPillar={handleSelectPillar} 
        />

        <ProductsSection 
          darkMode={darkMode} 
          onSelectProductForQuote={handleSelectProductForQuote} 
        />

        <SolutionFinder 
          darkMode={darkMode} 
          onSelectSolution={handleSelectSolution} 
        />

        <RoadmapNDIS 
          darkMode={darkMode} 
        />

        <TeamSection 
          darkMode={darkMode} 
        />

        <EnergyAuditForm 
          darkMode={darkMode} 
          prefilledSystem={prefilledSystem} 
          prefilledSolution={prefilledSolution} 
          prefilledProduct={prefilledProduct}
          prefilledPackage={prefilledPackage}
        />
      </main>

      {/* Footer */}
      <Footer 
        darkMode={darkMode} 
      />
    </div>
  );
}
