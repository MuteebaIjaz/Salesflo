import React from 'react';
import { siteConfig } from '../config/site';
import { ServiceCard } from './ServiceCard';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#F8F7F3]"
      aria-label="Our Services"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58B48] block mb-3">
            OUR SERVICES
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#142438] tracking-tight mb-4">
            Solutions for Every Stage of Your Growth
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            From intelligent automation to powerful digital products, we provide end-to-end technology solutions tailored to your business needs.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
