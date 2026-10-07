import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'family-parent-support',
    number: '01',
    title: 'Family & Parent Support',
    tagline: 'Help coordinate everyday needs, visits, errands and local assistance.',
    description:
      'A steady, dependable local presence for your parents in India. From checking in on daily routines to stepping in when a situation requires someone in person, we bridge the miles between your home abroad and theirs.',
    whatWeCoordinate: [
      'Scheduled in-person visits and welfare checks',
      'Assistance with grocery, prescription, and local procurement',
      'Assisting with household setup, utility management, and tech assistance',
      'Immediate escalation point when parents need help with unexpected domestic needs'
    ],
    exampleUseCases: [
      'Your parents need someone to accompany them to a bank or pension verification office.',
      'Checking in after a monsoon storm or sudden power disruption to ensure safety and provisions.',
      'Setting up a new smartphone or television so your parents can stay on video calls with your children.'
    ],
    image: '/vayosh-hero-story.jpg',
    category: 'core'
  },
  {
    id: 'healthcare-coordination',
    number: '02',
    title: 'Healthcare Coordination',
    tagline: 'Coordinate appointments, clinic visits and communication with trusted healthcare partners.',
    description:
      'Navigating India’s healthcare landscape remotely is stressful. Nithya Mitra acts as your on-the-ground coordinator—scheduling consultations, ensuring your parents are accompanied, and transmitting doctor briefings back to you clearly.',
    whatWeCoordinate: [
      'Appointment bookings with vetted specialists, geriatricians, and diagnostics labs',
      'Compassionate physical accompaniment to doctor consultations and diagnostic clinics',
      'Collection and structured digital sharing of test reports and medical summaries',
      'Medication procurement, dosage organization, and regular refill monitoring'
    ],
    exampleUseCases: [
      'Your mother has a scheduled cardiologist appointment in another neighbourhood and needs safe transport and accompaniment.',
      'Obtaining second opinions and coordinating with trusted local diagnostic centers for blood tests at home.',
      'Ensuring you receive an objective post-consultation summary rather than relying on fragmented phone calls.'
    ],
    image: '/vayosh-service-healthcare.jpg',
    category: 'wellbeing'
  },
  {
    id: 'home-property-assistance',
    number: '03',
    title: 'Home & Property Assistance',
    tagline: 'Coordinate inspections, maintenance and local service providers so issues do not remain unattended.',
    description:
      'Family homes in India need regular upkeep, repairs, and seasonal maintenance. We coordinate verified technicians, supervise necessary works, and ensure your parents are never left negotiating with unknown handymen alone.',
    whatWeCoordinate: [
      'Coordination of verified plumbers, electricians, carpenters, and appliance service agents',
      'Supervised physical presence during repair works inside your parents’ home',
      'Periodic physical walkthroughs of vacant ancestral properties or rented apartments',
      'Detailed photographic and video updates before and after maintenance completion'
    ],
    exampleUseCases: [
      'An air conditioning unit or water purifier breaks down in the middle of summer.',
      'Waterproofing or roof repairs needed before the monsoon season begins.',
      'Periodic structural inspection and tenant coordination for your family property in India.'
    ],
    image: '/vayosh-service-property.jpg',
    category: 'practical'
  },
  {
    id: 'courier-parcel-management',
    number: '04',
    title: 'International Courier & Parcel Management',
    tagline: 'Receive items in India, coordinate packing/dispatch and help send them to the preferred destination.',
    description:
      'Seamless handling of physical goods between countries. Whether it is shipping specialty homemade snacks and heirlooms to you abroad or delivering vital goods directly into your parents’ hands.',
    whatWeCoordinate: [
      'Secure doorstep receipt, safe holding, and re-packing of packages in India',
      'Coordination with international courier partners (DHL, FedEx, India Post) for custom clearances',
      'Dispatch of cultural items, homemade delicacies, clothing, and legal document packets',
      'Delivery verification and end-to-end milestone tracking directly to your mobile'
    ],
    exampleUseCases: [
      'Your parents want to send traditional festival sweets and family heirloom textiles to your home in Dallas or London.',
      'Receiving overseas deliveries that require customs payment or local signature verification in India.',
      'Dispatching physical tax filings or property document original files safely across borders.'
    ],
    image: '/international-courier-parcel-service.jpg',
    category: 'practical'
  },
  {
    id: 'documents-local-errands',
    number: '05',
    title: 'Documents & Local Errands',
    tagline: 'Coordinate practical tasks that are difficult to manage remotely.',
    description:
      'Indian bureaucratic, municipal, and institutional tasks often demand physical queues and local representation. We coordinate the on-ground visits so you do not have to fly down for routine paperwork.',
    whatWeCoordinate: [
      'Coordination with local chartered accountants, notary officers, and legal representatives',
      'Assistance with life certificates (Jeevan Pramaan), pension submissions, and municipal forms',
      'Physical bill payments, utility registry updates, and localized bank documentation assistance',
      'Safe courier transfer of certified documents'
    ],
    exampleUseCases: [
      'Assisting your father in renewing his senior citizen transport pass or digital life certificate.',
      'Procuring certified physical copies of municipal tax receipts or land registry documentation.',
      'Coordinating document verification with local banks for account updates.'
    ],
    image: '/vayosh-service-documents.jpg',
    category: 'practical'
  },
  {
    id: 'emergency-coordination',
    number: '06',
    title: 'Emergency Coordination',
    tagline: 'When something unexpected happens, Nithya Mitra provides a local point of contact to help coordinate next steps.',
    description:
      'The 3 AM phone call is every NRI’s quiet fear. In sudden crises, Nithya Mitra provides an immediate, calm, reliable point of contact on the ground to coordinate ambulance dispatch, hospital liaison, and family communication.',
    whatWeCoordinate: [
      'Immediate liaison with pre-designated private ambulance services and emergency departments',
      'Dispatch of a Nithya Mitra coordination representative to the emergency hospital reception',
      'Real-time, level-headed updates to overseas family members regarding hospital admissions',
      'Liaison with attending hospital staff regarding initial formalities and emergency deposit logistics'
    ],
    exampleUseCases: [
      'A sudden fall or acute medical crisis in the middle of the night requiring immediate hospital triage.',
      'Your parents are admitted to the emergency ward and need a responsible local person by their side while you board your flight.',
      'Coordinating admission formalities, medicine procurement, and hospital administration when hours count.'
    ],
    image: '/apollo-hospital-chennai.jpg',
    category: 'specialist'
  },
  {
    id: 'wellbeing-visits',
    number: '07',
    title: 'Wellbeing Visits',
    tagline: 'Scheduled visits/check-ins focused on both practical wellbeing and human connection.',
    description:
      'Thoughtful, unhurried visits that go far beyond a superficial checklist. We sit with your parents, listen to how they are genuinely feeling, check living comforts, and share a warm, reassuring update with you.',
    whatWeCoordinate: [
      'Regularly scheduled, unhurried visits at an agreed rhythm (weekly, bi-weekly, or monthly)',
      'Gentle observation of living conditions, pantry stocks, medication adherence, and home hazards',
      'Detailed, dignified family reports with fresh photographs and personal notes',
      'Direct feedback on whether further help or adjustments are needed'
    ],
    exampleUseCases: [
      'A bi-weekly Saturday afternoon visit over chai to talk about books, news, and everyday life.',
      'Observing that your mother is struggling with stair steps and recommending a ground-floor transition.',
      'Providing peace of mind through detailed photo updates showing your parents smiling and well-supported.'
    ],
    image: '/vayosh-hero-story.jpg',
    category: 'wellbeing'
  },
  {
    id: 'companionship',
    number: '08',
    title: 'Companionship',
    tagline: 'Coordinate appropriate companion support for walks, appointments, errands or social connection.',
    description:
      'Solitude is often the heaviest unspoken burden of ageing. We arrange trusted companion time—for an evening stroll in the neighbourhood park, a visit to a temple or music concert, or simply pleasant conversation.',
    whatWeCoordinate: [
      'Dedicated, respectful companions for walks in parks, community walks, or garden strolls',
      'Accompanying parents to classical music concerts, cultural events, lectures, or family gatherings',
      'Reading out regional newspapers, books, or engaging in shared conversational interests',
      'Assisting parents to attend social clubs, laughter yoga groups, or religious visits'
    ],
    exampleUseCases: [
      'Your father misses his morning park strolls because he fears losing balance when alone.',
      'Your mother would love to visit the neighbourhood temple on Friday mornings with a respectful escort.',
      'A friendly face to share conversation over filter coffee once a week so the house does not feel so quiet.'
    ],
    image: '/vayosh-hero-story.jpg',
    category: 'wellbeing'
  },
  {
    id: 'specialist-partner-coordination',
    number: '09',
    title: 'Specialist Partner Coordination',
    tagline: 'Coordinate appropriate doctors, physiotherapy, carers, attendants and other qualified partners where required.',
    description:
      'When your family’s needs exceed daily coordination, we connect you with vetted, licensed specialist partners. Nithya Mitra does not provide medical or clinical care itself—we identify, vet, and coordinate accountable partner providers.',
    whatWeCoordinate: [
      'Liaison with vetted geriatric homecare nursing and attendant agencies',
      'Coordination of certified home physiotherapists and occupational therapists',
      'Sourcing qualified nutritionists for diabetic or post-operative meal planning',
      'Liaison with mobility equipment providers (wheelchairs, hospital beds, oxygen concentrators)'
    ],
    exampleUseCases: [
      'Post-surgery rehabilitation requiring a certified physiotherapist to visit 3 times a week at home.',
      'Vetting and supervising a reliable 12-hour or 24-hour attendant agency for post-operative recovery.',
      'Coordinating rental and doorstep installation of an ergonomic patient bed or mobility ramp.'
    ],
    image: '/vayosh-service-specialist.jpg',
    category: 'specialist'
  }
];
