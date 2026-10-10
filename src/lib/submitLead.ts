import type { ContactFormData, LeadPayload, SubmissionResult } from '../types/lead';

/**
 * Submits lead data to the configured n8n Webhook URL.
 * 
 * Target n8n node: Webhook node (HTTP Method: POST, Path: e.g. /webhook/lead-capture)
 * Payload format: JSON containing:
 * {
 *   "name": string,
 *   "email": string,
 *   "phone": string | null,
 *   "company": string,
 *   "service": string,
 *   "budget_range": string | null,
 *   "message": string,
 *   "lead_source": "Website"
 * }
 */
export async function submitLead(formData: ContactFormData): Promise<SubmissionResult> {
  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  // Clear notice if webhook URL is not set yet in .env
  if (!webhookUrl || webhookUrl.trim() === '') {
    console.warn(
      '[SalesFlo n8n Integration] VITE_N8N_WEBHOOK_URL is not set in environment variables. ' +
      'Please create a .env file based on .env.example with your n8n Production Webhook URL.'
    );
    return {
      success: false,
      message: 'Integration Setup Required: VITE_N8N_WEBHOOK_URL is not configured yet in .env. Please configure your n8n webhook URL to submit inquiries.',
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
    consent: formData.consent,
  };

  try {
    const response = await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        `[SalesFlo n8n Integration] Webhook returned HTTP status ${response.status}: ${response.statusText}`
      );
      return {
        success: false,
        message: 'We couldn’t submit your inquiry right now. Please try again in a moment or contact us directly.',
      };
    }

    // Safely attempt to parse response body if available (n8n may return empty or JSON)
    try {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        console.info('[SalesFlo n8n Integration] Received n8n response:', data);
      } else {
        const text = await response.text();
        if (text) {
          console.info('[SalesFlo n8n Integration] Received text response:', text);
        }
      }
    } catch {
      // Non-JSON or empty response from n8n is completely standard for HTTP 200
    }

    return {
      success: true,
      message: 'Thank you for reaching out! Your inquiry has been submitted successfully. We’ll be in touch soon.',
    };
  } catch (err: unknown) {
    console.error('[SalesFlo n8n Integration] Network or CORS error when reaching webhook:', err);
    return {
      success: false,
      message: 'Network error: Unable to connect to the server. Please verify your connection or CORS configuration in n8n and try again.',
    };
  }
}
