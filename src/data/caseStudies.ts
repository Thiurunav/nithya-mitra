import type { TestimonialItem, CaseStudyItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'placeholder-1',
    clientName: 'NRI Family Member',
    country: 'United States (California)',
    flag: '🇺🇸',
    relationship: 'Son supporting parents in Mylapore, Chennai',
    quote: 'Real family stories will appear here as Vayosh begins supporting families. We protect our families’ privacy and only publish reflections with written consent.',
    parentLocation: 'Chennai, India',
    videoPoster: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    videoDuration: '1:45',
    isPlaceholder: true
  },
  {
    id: 'placeholder-2',
    clientName: 'NRI Family Member',
    country: 'United Kingdom (London)',
    flag: '🇬🇧',
    relationship: 'Daughter supporting mother in Adyar, Chennai',
    quote: 'Documentary customer interviews are recorded in high-definition video with full permission. Stay tuned as our first cohort of family journeys is documented.',
    parentLocation: 'Chennai, India',
    videoPoster: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    videoDuration: '2:10',
    isPlaceholder: true
  },
  {
    id: 'placeholder-3',
    clientName: 'NRI Family Member',
    country: 'Canada (Toronto)',
    flag: '🇨🇦',
    relationship: 'Son supporting parents in Coimbatore',
    quote: 'Verified NRI family reflections focusing on peace of mind, transparent updates, and genuine human connection across timezones.',
    parentLocation: 'Coimbatore, India',
    videoPoster: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=800&q=80',
    videoDuration: '1:30',
    isPlaceholder: true
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-1',
    title: 'Routine Health Accompaniment & Home Safety Audit',
    location: 'San Jose, USA',
    familyLocation: 'Chennai (Anna Nagar)',
    problem: 'An overseas software architect was unable to travel during parent’s scheduled orthopaedic review and cataract follow-up, while parents were apprehensive about hospital crowds.',
    whatNithyaMitraCoordinated: 'Arranged accompanied transportation with our care lead, hospital check-in facilitation, consultation note transcription, and post-visit prescription delivery.',
    familyUpdate: 'Overseas family received a structured audio note, typed prescription breakdown, and next review date within 90 minutes of clinic conclusion.',
    outcome: 'Eliminated remote anxiety; family did not need to take emergency unpaid leave.',
    status: 'upcoming'
  },
  {
    id: 'case-2',
    title: 'Post-Monsoon Ancestral Home Maintenance & Verification',
    location: 'London, UK',
    familyLocation: 'Coimbatore (RS Puram)',
    problem: 'Water seepage detected around electrical distribution boards in an elderly mother’s home while children were living in London.',
    whatNithyaMitraCoordinated: 'Vetted licensed electrical and civil masonry specialists, supervised on-site repair work over 3 days, and ensured mother was not inconvenienced.',
    familyUpdate: 'Daily high-resolution photo logs and video walkthrough before approving technician payment invoices.',
    outcome: 'Resolved structural risk safely without elderly mother having to negotiate with contractors.',
    status: 'upcoming'
  }
];
