import React, { useEffect, useState, useId } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import type { ContactFormData, SubmissionResult } from '../types/lead';
import {
  contactFormSchema,
  ServiceOptions,
  BudgetOptions,
} from '../types/lead';
import { submitLead } from '../lib/submitLead';

interface ContactFormProps {
  selectedService?: string;
  nameInputRef?: React.RefObject<HTMLInputElement | null>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedService,
  nameInputRef,
}) => {
  const formId = useId();
  const [submissionState, setSubmissionState] = useState<{
    isSubmitting: boolean;
    result: SubmissionResult | null;
  }>({
    isSubmitting: false,
    result: null,
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      service: 'AI Automation',
      budget_range: 'Not decided yet',
      message: '',
      consent: false,
      lead_source: 'Website',
    },
  });

  // When selectedService prop changes from an external click (e.g. ServiceCard), update the dropdown
  useEffect(() => {
    if (selectedService) {
      const matched = ServiceOptions.find(
        (opt) => opt.toLowerCase() === selectedService.toLowerCase()
      );
      if (matched) {
        setValue('service', matched);
      }
    }
  }, [selectedService, setValue]);

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setSubmissionState({ isSubmitting: true, result: null });

    const res = await submitLead(data);

    setSubmissionState({ isSubmitting: false, result: res });

    if (res.success) {
      reset({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'AI Automation',
        budget_range: 'Not decided yet',
        message: '',
        consent: false,
        lead_source: 'Website',
      });
    }
  };

  const hasConfigNotice =
    submissionState.result?.isConfigurationError ||
    !import.meta.env.VITE_N8N_WEBHOOK_URL;

  return (
    <div className="bg-white rounded-2xl border border-[#E7E4DD] p-6 sm:p-8 shadow-card relative">
      {/* Dev Configuration Banner if Webhook URL is missing */}
      {hasConfigNotice && (
        <div className="mb-6 p-4 rounded-xl bg-[#F4E8D3]/60 border border-[#B58B48]/30 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-[#B58B48] shrink-0 mt-0.5" />
          <div className="text-xs text-[#142438] leading-relaxed">
            <span className="font-semibold text-[#142438] block mb-0.5">
              Ready for n8n Webhook:
            </span>
            Add your n8n Production Webhook URL to <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-[11px] border border-[#E7E4DD]">.env</code> as <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-[11px] border border-[#E7E4DD]">VITE_N8N_WEBHOOK_URL</code> to test live lead ingestion.
          </div>
        </div>
      )}

      {/* Success Banner */}
      {submissionState.result?.success && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5 animate-fadeIn"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-heading font-bold text-sm text-emerald-900 mb-1">
              Inquiry Submitted Successfully
            </h4>
            <p className="text-xs text-emerald-800 leading-relaxed mb-3">
              {submissionState.result.message}
            </p>
            <button
              type="button"
              onClick={() => setSubmissionState({ isSubmitting: false, result: null })}
              className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {submissionState.result && !submissionState.result.success && !submissionState.result.isConfigurationError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 animate-shake"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs text-red-800 leading-relaxed">
            <span className="font-semibold block mb-0.5">Submission Failed</span>
            {submissionState.result.message}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="SalesFlo Lead Inquiry Form"
        className="space-y-4 sm:space-y-5"
      >
        {/* Row 1: Full Name & Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-name`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Full Name <span className="text-[#B58B48]">*</span>
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              placeholder="Your full name"
              {...register('name')}
              ref={(e) => {
                register('name').ref(e);
                if (nameInputRef) {
                  (nameInputRef as React.MutableRefObject<HTMLInputElement | null>).current = e;
                }
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#142438] placeholder-[#94A3B8] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48] ${
                errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E7E4DD]'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Business Email <span className="text-[#B58B48]">*</span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              placeholder="you@company.com"
              {...register('email')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#142438] placeholder-[#94A3B8] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48] ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E7E4DD]'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Company Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-company`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Company Name <span className="text-[#B58B48]">*</span>
            </label>
            <input
              id={`${formId}-company`}
              type="text"
              placeholder="Your company name"
              {...register('company')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#142438] placeholder-[#94A3B8] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48] ${
                errors.company ? 'border-red-400 bg-red-50/20' : 'border-[#E7E4DD]'
              }`}
            />
            {errors.company && (
              <p className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-phone`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Phone Number <span className="text-[#64748B] font-normal text-[11px]">(Optional)</span>
            </label>
            <input
              id={`${formId}-phone`}
              type="tel"
              placeholder="+92 300 1234567"
              {...register('phone')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E4DD] text-sm text-[#142438] placeholder-[#94A3B8] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48]"
            />
          </div>
        </div>

        {/* Row 3: Service Interested In & Budget Range */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formId}-service`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Service Interested In <span className="text-[#B58B48]">*</span>
            </label>
            <select
              id={`${formId}-service`}
              {...register('service')}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#142438] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48] ${
                errors.service ? 'border-red-400' : 'border-[#E7E4DD]'
              }`}
            >
              {ServiceOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-[11px] text-red-600 font-medium">
                {errors.service.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${formId}-budget`}
              className="block text-xs font-semibold text-[#142438] mb-1.5"
            >
              Budget Range <span className="text-[#64748B] font-normal text-[11px]">(Optional)</span>
            </label>
            <select
              id={`${formId}-budget`}
              {...register('budget_range')}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E7E4DD] text-sm text-[#142438] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48]"
            >
              {BudgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Project Details / Message */}
        <div>
          <label
            htmlFor={`${formId}-message`}
            className="block text-xs font-semibold text-[#142438] mb-1.5"
          >
            Project Details / Message <span className="text-[#B58B48]">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            rows={4}
            placeholder="Tell us about your project, business challenge, requirements, or automation goals..."
            {...register('message')}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-[#142438] placeholder-[#94A3B8] bg-white transition focus:outline-none focus:ring-2 focus:ring-[#B58B48]/20 focus:border-[#B58B48] resize-y min-h-[96px] ${
              errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E7E4DD]'
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="pt-1">
          <label className="block text-xs font-semibold text-[#142438] mb-2">
            Consent <span className="text-red-500">*</span>
          </label>
          <div className="flex items-start gap-2.5">
            <input
              id={`${formId}-consent`}
              type="checkbox"
              {...register('consent')}
              className={`w-4 h-4 mt-0.5 rounded border text-[#B58B48] focus:ring-[#B58B48]/30 focus:ring-2 cursor-pointer transition ${
                errors.consent ? 'border-red-400 bg-red-50/20' : 'border-[#CBD5E1]'
              }`}
            />
            <label
              htmlFor={`${formId}-consent`}
              className="text-xs text-[#64748B] hover:text-[#142438] cursor-pointer select-none leading-relaxed"
            >
              I agree to be contacted about my inquiry.
            </label>
          </div>
          {errors.consent && (
            <p className="mt-1 text-[11px] text-red-600 font-medium">
              {errors.consent.message}
            </p>
          )}
        </div>

        {/* Hidden lead_source field */}
        <input type="hidden" value="Website" {...register('lead_source')} />

        {/* Full-width Submit CTA */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submissionState.isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-[#B58B48] hover:bg-[#A0793A] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B58B48]"
          >
            {submissionState.isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Inquiry...</span>
              </>
            ) : (
              <>
                <span>Send Inquiry</span>
                <Send className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-[#94A3B8] text-center pt-1">
          By submitting, you agree to our confidential inquiry handling. We never share your data.
        </p>
      </form>
    </div>
  );
};
