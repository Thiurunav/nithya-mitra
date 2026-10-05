import type { SupportPlan } from '../types';

export const supportPlansData: SupportPlan[] = [
  {
    id: 'advanced',
    name: 'Vayosh Advanced',
    badge: 'ESSENTIAL SUPPORT',
    audience: 'For independent parents who mainly need regular wellbeing checks, local coordination and a reliable point of contact.',
    features: [
      'Scheduled wellbeing check-ins (bi-weekly)',
      'Parent visits and basic home check-ins',
      'Emergency coordination with 24/7 escalation link',
      'Doctor & hospital appointment coordination',
      'Access to healthcare and physiotherapy partner network',
      'Help with local errands and essential domestic tasks',
      'Regular photo & activity updates to NRI family abroad',
      'Direct WhatsApp channel with your dedicated coordinator'
    ],
    ctaLabel: 'Enquire about Advanced'
  },
  {
    id: 'premium',
    name: 'Vayosh Premium',
    badge: 'ENHANCED SUPPORT',
    highlight: 'MOST COMPREHENSIVE',
    isPopular: true,
    audience: 'For parents who need more frequent coordination, proactive healthcare support and hands-on assistance.',
    features: [
      'Everything in Advanced plan',
      'More frequent wellbeing check-ins (weekly visits)',
      'Priority healthcare coordination & clinic liaison',
      'Doctor teleconsultation setup & tech assistance',
      'Diagnostics and home lab-test coordination',
      'Hospitalisation support and overseas family liaison',
      'Digital health-record maintenance & report archiving',
      'Home safety inspection and fall-risk evaluations',
      'Access to verified carers / attendants through vetted partners',
      'Physical accompaniment support for hospital visits & essential errands'
    ],
    ctaLabel: 'Enquire about Premium'
  },
  {
    id: 'elite',
    name: 'Vayosh Elite',
    badge: 'HIGH-TOUCH SUPPORT',
    audience: 'For families managing complex health, mobility or high-frequency day-to-day support needs from abroad.',
    features: [
      'Everything in Premium plan',
      'High-frequency wellbeing coordination (custom rhythm)',
      'Priority emergency coordination with rapid on-ground response',
      'Ongoing doctor, specialist and surgeon liaison',
      'Physiotherapy, nursing and palliative homecare partner coordination',
      'Regular companion check-ins & dedicated social accompaniment',
      'Hospital admission, daily updates and discharge logistics',
      'Prescription refill management and medication administration tracking',
      'Bi-weekly structured family video updates with overseas children',
      'Customised coordination tailored to complex multi-city or ancestral needs'
    ],
    ctaLabel: 'Enquire about Elite'
  }
];
