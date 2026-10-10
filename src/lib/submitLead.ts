import type { ContactFormData, LeadPayload, SubmissionResult } from '../types/lead';

/**
 * Default Webhook URL configured from .env or fallback endpoint
 */
export const WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ||
  'https://muteebaijaz.app.n8n.cloud/webhook-test/salesflo-lead-capture';

/**
 * Submits lead data to the configured n8n Webhook URL.
 * 
 * Target n8n node: Webhook node (HTTP Method: POST)
 * Payload format: JSON containing:
 * {
 *   "name": string,
 *   "email": string,
 *   "phone": string | null,
 *   "company": string,
 *   "service": string,
 *   "budget_range": string | null,
 *   "message": string,
 *   "lead_source": "Website",
 *   "source": "website-contact-form",
 *   "consent": boolean
 * }
 */
export async function submitLead(formData: ContactFormData): Promise<SubmissionResult> {
  const webhookUrl = WEBHOOK_URL;

  // Clear notice if webhook URL is missing
  if (!webhookUrl || webhookUrl.trim() === '' || webhookUrl === 'PASTE_YOUR_N8N_URL_HERE') {
    console.warn(
      '[SalesFlo n8n Integration] VITE_N8N_WEBHOOK_URL is not set. ' +
      'Please configure your n8n Production Webhook URL in .env.'
    );
    return {
      success: false,
      message: 'Integration Setup Required: Please set your n8n webhook URL in .env.',
      isConfigurationError: true,
    };
  }

  // Sanitize & normalize fields to match the exact n8n workflow expectations
  const payload: LeadPayload = {
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone && formData.phone.trim().length > 0 ? formData.phone.trim() : null,
    company: formData.company.trim(),
    service: formData.service,
    budget_range: formData.budget_range && formData.budget_range.trim().length > 0 ? formData.budget_range.trim() : null,
    message: formData.message.trim(),
    lead_source: 'Website',
    source: 'website-contact-form',
    consent: formData.consent,
  };

  try {
    const response = await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    // Safely parse response if JSON is returned
    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.info('[SalesFlo n8n Integration] Received response:', data);
      }
    } catch {
      // Standard 200 response without body
    }

    return {
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    };
  } catch (err: unknown) {
    console.error('[SalesFlo n8n Integration] Error submitting inquiry:', err);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
