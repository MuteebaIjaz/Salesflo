import { z } from 'zod';

export const ServiceOptions = [
  'AI Automation',
  'Web & App Development',
  'Data Analytics',
  'Cloud & DevOps',
  'Other',
] as const;

export type ServiceType = (typeof ServiceOptions)[number];

export const BudgetOptions = [
  'Not decided yet',
  'Under $500',
  '$500–$2,000',
  '$2,000–$5,000',
  '$5,000+',
] as const;

export type BudgetType = (typeof BudgetOptions)[number];

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid business email address.' }),
  company: z
    .string()
    .trim()
    .min(1, { message: 'Company name is required.' }),
  phone: z
    .string()
    .trim()
    .optional(),
  service: z
    .enum(ServiceOptions),
  budget_range: z
    .string()
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters describing your project.' }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to be contacted about your inquiry.',
    }),
  lead_source: z
    .literal('Website'),
});

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: ServiceType;
  budget_range?: string;
  message: string;
  consent: boolean;
  lead_source: 'Website';
};

export interface LeadPayload {
  name: string;
  email: string;
  phone: string | null;
  company: string;
  service: string;
  budget_range?: string | null;
  message: string;
  lead_source: 'Website';
  source?: string;
  consent?: boolean;
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  isConfigurationError?: boolean;
}
