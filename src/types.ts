export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  tags: string[];
  color: string;
}

export interface RoadmapPhase {
  phase: string;
  period: string;
  status: 'pipeline' | 'active' | 'upcoming' | 'planned';
  statusLabel: string;
  title: string;
  description: string;
  milestones: string[];
}

export interface CorePillar {
  id: string;
  tag: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  stats: { value: string; label: string };
  highlights: string[];
  ctaText: string;
}

export interface SolutionArchetype {
  id: string;
  title: string;
  tagline: string;
  description: string;
  typicalLoad: string;
  estimatedDieselDisplacement: string;
  recommendedSystem: string;
  keyBenefits: string[];
  caseStudyContext: string;
}

export type ProductCategory = 'all' | 'solar-packages' | 'solar-storage' | 'consumer-solar' | 'ev-mobility' | 'agritech' | 'enterprise-it';

export interface SolarInstallmentPackage {
  id: string;
  sku: string;
  name: string;
  tagline: string;
  description: string;
  battery: string;
  inverter: string;
  panels: string;
  totalPrice: number;
  totalPriceFormatted: string;
  paymentPlan6M: {
    upfrontPct: string;
    upfrontAmount: number;
    upfrontFormatted: string;
    monthlyAmount: number;
    monthlyFormatted: string;
  };
  paymentPlan12M: {
    upfrontPct: string;
    upfrontAmount: number;
    upfrontFormatted: string;
    monthlyAmount: number;
    monthlyFormatted: string;
  };
  appliances: string[];
  posterImageUrl: string;
  badge?: string;
  isPopular?: boolean;
}

export interface RuwaProduct {
  id: string;
  sku: string;
  category: 'solar-packages' | 'solar-storage' | 'consumer-solar' | 'ev-mobility' | 'agritech' | 'enterprise-it';
  categoryLabel: string;
  name: string;
  tagline: string;
  description: string;
  rating: number;
  specs: {
    capacityOrRating: string;
    voltageOrInput: string;
    cycleLifeOrEfficiency: string;
    warranty: string;
  };
  keyFeatures: string[];
  idealFor: string;
  availability: 'Immediate Dispatch' | 'Built to Order' | 'Pipeline Reservation';
  badge?: string;
  technicalDocument: string;
  imageUrl?: string;
  hardwareModel?: 'powerbank' | 'speaker' | 'battery-wall' | 'inverter' | 'ev-charger' | 'swap-depot' | 'cold-room' | 'sensor-hub' | 'laptop' | 'ups' | 'solar-package';
  pricing?: {
    total: string;
    installment6M?: string;
    installment12M?: string;
  };
}

export interface LiveDieselPriceData {
  nationalAverage: number;
  lagosPrice: number;
  abujaPrice: number;
  effectiveDate: string;
  source: string;
  lastUpdated: string;
  trend: 'up' | 'down' | 'stable';
  changePct: string;
  isLive: boolean;
}

