import React, { useState } from 'react';
import { RUWA_PRODUCTS } from '../data/ruwaContent';
import { RuwaProduct, ProductCategory } from '../types';
import { ProductImageVisual } from './ProductImageVisual';
import { 
  Cpu, 
  BatteryCharging, 
  Zap, 
  Car, 
  Sprout, 
  Check, 
  Download, 
  ArrowRight, 
  SlidersHorizontal, 
  ShieldCheck, 
  Layers, 
  FileText,
  Search,
  Sparkles,
  Radio,
  CreditCard
} from 'lucide-react';

interface ProductsSectionProps {
  darkMode: boolean;
  onSelectProductForQuote?: (product: RuwaProduct) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  darkMode,
  onSelectProductForQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSpecModal, setActiveSpecModal] = useState<RuwaProduct | null>(null);

  const categories: { id: ProductCategory; label: string; icon: React.ReactNode; count: number }[] = [
    { 
      id: 'all', 
      label: 'All Products', 
      icon: <Layers className="w-4 h-4 shrink-0" />,
      count: RUWA_PRODUCTS.length 
    },
    { 
      id: 'solar-packages', 
      label: 'Solar Packages (Pay in Installments)', 
      icon: <CreditCard className="w-4 h-4 text-amber-500 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'solar-packages').length 
    },
    { 
      id: 'consumer-solar', 
      label: 'Solar Power Banks & Audio', 
      icon: <Radio className="w-4 h-4 text-amber-500 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'consumer-solar').length 
    },
    { 
      id: 'solar-storage', 
      label: 'Commercial Battery Storage', 
      icon: <BatteryCharging className="w-4 h-4 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'solar-storage').length 
    },
    { 
      id: 'ev-mobility', 
      label: 'EV Fleet Chargers & Depots', 
      icon: <Car className="w-4 h-4 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'ev-mobility').length 
    },
    { 
      id: 'agritech', 
      label: 'Solar Cold Rooms & Farm Tech', 
      icon: <Sprout className="w-4 h-4 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'agritech').length 
    },
    { 
      id: 'enterprise-it', 
      label: 'Solar Inverters & Power', 
      icon: <Cpu className="w-4 h-4 shrink-0" />,
      count: RUWA_PRODUCTS.filter(p => p.category === 'enterprise-it').length 
    },
  ];

  const filteredProducts = RUWA_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className={`py-20 transition-colors border-t scroll-mt-24 ${
      darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-500 border border-sky-500/20">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Products &amp; Equipment Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Commercial Clean Energy Systems &amp; Equipment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Tested and proven for Nigerian conditions. Every system delivers continuous power, low maintenance, and is backed by local engineers in Lagos and Abuja.
            </p>
          </div>

          {/* Quick Stats or Specs pill */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className={`p-3.5 rounded-xl border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
            }`}>
              <span className="block text-slate-400 text-[10px] uppercase font-sans">Full Warranty</span>
              <span className="font-bold text-sky-500">Up to 10 Years Covered</span>
            </div>
            <div className={`p-3.5 rounded-xl border ${
              darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-xs'
            }`}>
              <span className="block text-slate-400 text-[10px] uppercase font-sans">Field Delivery</span>
              <span className="font-bold text-amber-500">Fast Nigeria-Wide Dispatch</span>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map(cat => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2.5 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                        : darkMode
                        ? 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                        : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      isSelected 
                        ? 'bg-sky-700 text-white' 
                        : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input with generous icon padding */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 shrink-0 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products, solar, battery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border transition-all outline-none ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-sky-500'
                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-sky-500 shadow-xs'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => {
            return (
              <div
                key={product.id}
                className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden relative group hover:border-sky-500/50 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-slate-900/90 border-slate-800' 
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                {/* Real Product Photography with Stamped Ruwa Logo */}
                <div className="p-3 pb-0">
                  <ProductImageVisual
                    imageUrl={product.imageUrl}
                    name={product.name}
                    sku={product.sku}
                    darkMode={darkMode}
                    badgeText={product.availability}
                    hardwareModel={product.hardwareModel}
                  />
                </div>

                {/* Header Banner with Category Tag & Badge */}
                <div className="p-5 sm:p-6 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-sky-500 font-semibold">
                      {product.sku}
                    </span>
                    {product.badge && (
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium mt-0.5">
                    {product.tagline}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlight Specs Grid */}
                  <div className={`mt-4 p-3.5 rounded-xl border grid grid-cols-2 gap-2.5 text-[11px] ${
                    darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-sans">Power / Capacity</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{product.specs.capacityOrRating}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-sans">Voltage &amp; Input</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{product.specs.voltageOrInput}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-sans">Expected Lifespan</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{product.specs.cycleLifeOrEfficiency}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-sans">Warranty</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{product.specs.warranty}</span>
                    </div>
                  </div>

                  {/* Pricing and Installment Badge for Packages */}
                  {product.pricing && (
                    <div className="mt-3.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">Total Price</span>
                        <span className="font-display font-extrabold text-base text-slate-900 dark:text-white">{product.pricing.total}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Installments</span>
                        <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400">{product.pricing.installment12M || product.pricing.installment6M}</span>
                      </div>
                    </div>
                  )}

                  {/* Bullet Highlights */}
                  <div className="mt-4 space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className={`p-4 border-t flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950/50 border-slate-800/80' : 'bg-slate-50/80 border-slate-200'
                }`}>
                  <button
                    onClick={() => setActiveSpecModal(product)}
                    className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-500 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{product.category === 'solar-packages' ? 'View Poster & Specs' : 'View Specifications'}</span>
                  </button>

                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectProductForQuote) {
                        onSelectProductForQuote(product);
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all flex items-center gap-2.5 shadow-xs cursor-pointer ${
                      product.category === 'solar-packages' 
                        ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold' 
                        : 'bg-sky-600 hover:bg-sky-500'
                    }`}
                  >
                    <span>{product.category === 'solar-packages' ? 'Order Package' : 'Request Quote'}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 p-6 rounded-2xl border border-dashed border-slate-700">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-300">No hardware found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-500 mt-1">Try searching by category or reset search filters</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Procurement Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 border border-sky-800/40 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center justify-center md:justify-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Bulk Institutional Supply &amp; Custom Sizing</span>
            </span>
            <h4 className="text-xl font-bold font-display">Need a custom capacity battery bank or complete facility solar plant?</h4>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Our engineering team sizes, delivers, installs, and warranties custom commercial solar plants and battery systems for businesses, campuses, and agricultural estates across Nigeria.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            Speak to an Engineer
          </a>
        </div>
      </div>

      {/* Technical Spec Sheet Modal */}
      {activeSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
          }`}>
            <button
              onClick={() => setActiveSpecModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 border border-sky-500/20 font-bold">
                  {activeSpecModal.sku}
                </span>
                <span className="text-xs text-slate-400">
                  {activeSpecModal.categoryLabel}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display">{activeSpecModal.name}</h3>
                <p className="text-xs text-sky-500 font-medium">{activeSpecModal.tagline}</p>
              </div>

              {/* Real Hardware Photography inside modal with stamped mark */}
              <div className="w-full">
                <ProductImageVisual
                  imageUrl={activeSpecModal.imageUrl}
                  name={activeSpecModal.name}
                  sku={activeSpecModal.sku}
                  darkMode={darkMode}
                  className="h-56 sm:h-64"
                  badgeText={activeSpecModal.availability}
                  hardwareModel={activeSpecModal.hardwareModel}
                />
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeSpecModal.description}
              </p>

              {/* Specs Table */}
              <div className="border rounded-xl overflow-hidden border-slate-700 text-xs">
                <div className="p-3 bg-slate-800 text-slate-200 font-bold border-b border-slate-700">
                  Product Specifications &amp; Details
                </div>
                <div className="divide-y divide-slate-700/60">
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Capacity / Rated Output</span>
                    <span className="font-semibold">{activeSpecModal.specs.capacityOrRating}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Operating Voltage / Bus</span>
                    <span className="font-semibold">{activeSpecModal.specs.voltageOrInput}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Cycle Life / Efficiency</span>
                    <span className="font-semibold">{activeSpecModal.specs.cycleLifeOrEfficiency}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Warranty Coverage</span>
                    <span className="font-semibold text-emerald-400">{activeSpecModal.specs.warranty}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Target Application</span>
                    <span className="font-semibold">{activeSpecModal.idealFor}</span>
                  </div>
                  <div className="grid grid-cols-2 p-2.5">
                    <span className="text-slate-400">Availability</span>
                    <span className="font-semibold text-amber-400">{activeSpecModal.availability}</span>
                  </div>
                </div>
              </div>

              {/* Complete Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Product Benefits &amp; Features</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {activeSpecModal.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-end gap-3 border-t border-slate-700">
                <button
                  onClick={() => {
                    setActiveSpecModal(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => {
                    if (onSelectProductForQuote) {
                      onSelectProductForQuote(activeSpecModal);
                    }
                    setActiveSpecModal(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
                >
                  Request Official Quotation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
