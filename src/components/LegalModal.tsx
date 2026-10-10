import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  type,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] flex flex-col shadow-2xl border border-[#E7E4DD] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E7E4DD]">
          <h3
            id="legal-modal-title"
            className="font-heading font-bold text-lg text-[#142438]"
          >
            {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#142438] hover:bg-[#F8F7F3]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-sm text-[#64748B] space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                At <strong>SalesFlo</strong>, we respect your privacy and are committed to safeguarding business communications and inquiries submitted through our website.
              </p>
              <h4 className="font-semibold text-[#142438]">1. Information We Collect</h4>
              <p>
                When you submit an inquiry through our contact form, we collect the details you provide: your name, business email, company name, phone number, service interest, and project description.
              </p>
              <h4 className="font-semibold text-[#142438]">2. How We Use Your Information</h4>
              <p>
                Your information is used strictly to evaluate your project requirements, communicate proposals, and initiate software development collaborations. We do not sell or rent inquiry data to third parties.
              </p>
              <h4 className="font-semibold text-[#142438]">3. Data Protection</h4>
              <p>
                We maintain secure internal protocols and automated pipelines to ensure inquiry confidentiality and integrity.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026
              </p>
              <p>
                Welcome to <strong>SalesFlo</strong>. By accessing our website and inquiring about our custom software engineering and AI automation services, you agree to these standard terms.
              </p>
              <h4 className="font-semibold text-[#142438]">1. Professional Services Scope</h4>
              <p>
                Information and metrics provided on this site are for exploratory and illustrative purposes. Formal engineering engagements, milestones, and deliverable commitments are defined under tailored master services agreements (MSAs).
              </p>
              <h4 className="font-semibold text-[#142438]">2. Intellectual Property</h4>
              <p>
                All trademarks, brand assets, code samples, and designs displayed on this website are the property of SalesFlo or its licensors.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E7E4DD] bg-[#F8F7F3] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#B58B48] hover:bg-[#A0793A] transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
