export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  whatWeCoordinate: string[];
  exampleUseCases: string[];
  image: string;
  category: 'core' | 'wellbeing' | 'practical' | 'specialist';
}

export interface SupportPlan {
  id: string;
  name: string;
  badge: string;
  highlight?: string;
  isPopular?: boolean;
  audience: string;
  features: string[];
  ctaLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  city: string;
  bio: string;
  image: string;
  specialty?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  country: string;
  flag: string;
  relationship: string;
  quote: string;
  parentLocation: string;
  videoPoster?: string;
  videoDuration?: string;
  isPlaceholder?: boolean;
}

export interface CareTrack {
  id: string;
  title: string;
  description: string;
  keySupport: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  location: string;
  familyLocation: string;
  problem: string;
  whatVayoshCoordinated: string;
  familyUpdate: string;
  outcome: string;
  status: 'verified' | 'upcoming';
}
