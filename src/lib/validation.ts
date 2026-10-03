import { z } from 'zod';

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters)' })
    .max(100),
  whatsappNumber: z
    .string()
    .min(7, { message: 'Please enter a valid phone or WhatsApp number with country code' })
    .max(25),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address for consultation details' }),
  currentCountry: z
    .string()
    .min(1, { message: 'Please specify the country where you currently reside' }),
  familyLocationInIndia: z
    .string()
    .min(2, { message: 'Please specify the city/town in India where your family lives (e.g. Chennai)' }),
  whoToSupport: z.enum(
    ['Parents', 'One parent', 'Parents + other family members', 'Other'],
    { message: 'Please select whom you would like Nithya Mitra to support' }
  ),
  supportTypes: z
    .array(z.string())
    .min(1, { message: 'Please select at least one type of support you are interested in' }),
  selectedPlan: z
    .string()
    .optional(),
  additionalNotes: z
    .string()
    .max(1500)
    .optional(),
  preferredContact: z.enum(['WhatsApp', 'Phone call', 'Email'], {
    message: 'Please select your preferred contact method'
  }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
