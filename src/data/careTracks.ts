import type { CareTrack } from '../types';

export const careTracksData: CareTrack[] = [
  {
    id: 'diabetes-support',
    title: 'Diabetes Support',
    description: 'Coordinating periodic fasting/HbA1c blood tests, diabetic footwear checks, nutritionist consults, and medication refills.',
    keySupport: 'Monitoring & Nutrition Coordination'
  },
  {
    id: 'dementia-support',
    title: 'Dementia Support',
    description: 'Sensitive companionship, vetted memory-care attendants through partners, cognitive stimulation, and safe home adaptation.',
    keySupport: 'Gentle Structure & Memory Care Liaison'
  },
  {
    id: 'chronic-kidney-care',
    title: 'Chronic Kidney Care',
    description: 'Coordinating reliable transport to dialysis centers, accompanying during sessions, and tracking renal panel lab results.',
    keySupport: 'Dialysis Escort & Nephrology Liaison'
  },
  {
    id: 'stroke-recovery-support',
    title: 'Stroke Recovery Support',
    description: 'Arranging licensed neuro-physiotherapists, speech therapists, and home mobility equipment for progressive rehabilitation.',
    keySupport: 'Therapist Liaison & Mobility Aid Logistics'
  },
  {
    id: 'arthritis-support',
    title: 'Arthritis Support',
    description: 'Pain management clinic visits, orthopaedic consultations, joint mobility exercises with certified physical therapists.',
    keySupport: 'Joint Care & Home Fall-Prevention'
  },
  {
    id: 'heart-health-support',
    title: 'Heart Health Support',
    description: 'Routine ECG/Echo scheduling, blood pressure monitoring tracking, cardiologist appointment accompaniment, and low-sodium diet liaison.',
    keySupport: 'Cardiology Accompaniment & BP Logging'
  },
  {
    id: 'cancer-care-coordination',
    title: 'Cancer Care Coordination',
    description: 'Compassionate assistance for chemotherapy and radiation appointments, report aggregation, and nursing partner coordination.',
    keySupport: 'Oncology Visits & Compassionate Escort'
  },
  {
    id: 'emotional-wellbeing',
    title: 'Emotional Wellbeing',
    description: 'Regular conversational visits, mental stimulation, engaging hobbies, and reconnecting with community activities.',
    keySupport: 'Companionship & Active Social Connection'
  },
  {
    id: 'caregiver-support',
    title: 'Caregiver Support',
    description: 'Providing respite coordination for primary family caregivers in India who need temporary rest or assistance.',
    keySupport: 'Respite Liaison & Relief Coordination'
  },
  {
    id: 'errands-appointment-support',
    title: 'Errands & Appointment Support',
    description: 'Dedicated accompaniment for government offices, pension life certificates, banking, passport renewal, and local registrations.',
    keySupport: 'Physical Bureaucratic Accompaniment'
  }
];

export const careTracksDisclaimer =
  'Services are coordinated according to family needs and local partner availability. Medical treatment is provided by qualified healthcare professionals, not by Vayosh itself.';
