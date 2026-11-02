export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  businessValue: string;
  technicalCapabilities: string[];
  architectureFocus: string;
  iconName: string;
  metrics: string;
}

export interface IntelligenceComponent {
  id: 'software' | 'ai' | 'cloud' | 'security';
  name: string;
  tagline: string;
  headline: string;
  description: string;
  metrics: { label: string; value: string }[];
  keyProtocols: string[];
  status: 'ACTIVE' | 'OPTIMIZED' | 'ONLINE';
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  challenges: string[];
  solutionApproach: string;
  technicalArchitecture: string;
  highlightedMetrics: string;
  badge: string;
}

export interface CaseStudyItem {
  id: string;
  code: string;
  title: string;
  category: string;
  isConcept: boolean;
  problem: string;
  solution: string;
  techStack: string[];
  verifiedOutcome: string;
  engineeringHighlight: string;
  architectureDetails: {
    dataIngestion: string;
    processingEngine: string;
    securityLayer: string;
    scalabilityMetric: string;
  };
}

export interface ProcessStage {
  step: string;
  title: string;
  phase: string;
  description: string;
  clientReceives: string[];
  durationEstimate: string;
  keyArtifacts: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend & Platforms' | 'Systems & Backend' | 'AI & Data Intelligence' | 'Cloud & Distributed' | 'Cybersecurity';
  level: 'Core Tier' | 'Enterprise Standard' | 'Specialized';
  description: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  abstract: string;
  content: string[];
  keyTakeaways: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  education: string;
  degreeBadge: string;
  experienceHighlight: string;
  specialization: string[];
  bio: string;
  verifiedDeliveries: string;
  happyClientsCount: string;
  metrics: { label: string; value: string }[];
}

