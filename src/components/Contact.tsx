import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ContactForm } from './ContactForm';
import { SocialIcon } from './SocialIcons';

interface ContactProps {
  selectedService?: string;
  nameInputRef?: React.RefObject<HTMLInputElement | null>;
}

export const Contact: React.FC<ContactProps> = ({
  selectedService,
  nameInputRef,
}) => {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F8F7F3] border-t border-[#E7E4DD]"
      aria-label="Contact Section"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58B48] block mb-3">
                {siteConfig.contact.eyebrow}
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#142438] tracking-tight leading-tight mb-5">
                {siteConfig.contact.headline}
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-10 max-w-md">
                {siteConfig.contact.description}
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 mb-12">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 group text-[#142438] hover:text-[#B58B48] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Email
                    </div>
                    <div className="text-base font-semibold group-hover:underline">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group text-[#142438] hover:text-[#B58B48] transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Phone
                    </div>
                    <div className="text-base font-semibold group-hover:underline">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-[#142438]">
                  <div className="w-12 h-12 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Location
                    </div>
                    <div className="text-base font-semibold">
                      {siteConfig.contact.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {siteConfig.contact.social
                  .filter((s) => s.configured)
                  .map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-[#E7E4DD] flex items-center justify-center text-[#142438] hover:text-white hover:bg-[#B58B48] hover:border-[#B58B48] transition-all duration-200 shadow-xs"
                      aria-label={`SalesFlo on ${social.name}`}
                    >
                      <SocialIcon name={social.name} className="w-4 h-4" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <ContactForm
              selectedService={selectedService}
              nameInputRef={nameInputRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
