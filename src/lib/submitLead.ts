import type { ContactFormData, LeadPayload, SubmissionResult } from '../types/lead';

/**
 * Submits lead data securely via the Netlify serverless function proxy:
 * /.netlify/functions/submit-lead
 * 
 * The function holds the real webhook URL and API key on the server,
 * removing CORS restrictions and keeping n8n credentials private.
 */
export async function submitLead(formData: ContactFormData): Promise<SubmissionResult> {
  // Sanitize & normalize fields
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
    const response = await fetch('/.netlify/functions/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.info('[SalesFlo Submission] Serverless response:', data);
      }
    } catch {
      // Standard 200 response
    }

    return {
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    };
  } catch (err: unknown) {
    console.error('[SalesFlo Submission] Error submitting inquiry:', err);
    return {
      success: false,
      message: 'Something went wrong. Please try again.',
    };
  }
}
