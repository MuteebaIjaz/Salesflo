import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#F8F7F3] border-t border-[#E7E4DD]"
      aria-label="Our Process"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58B48] block mb-3">
            {siteConfig.process.eyebrow}
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#142438] tracking-tight mb-4">
            {siteConfig.process.headline}
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed">
            {siteConfig.process.subheadline}
          </p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {siteConfig.process.steps.map((item, index) => {
              const isLast = index === siteConfig.process.steps.length - 1;
              return (
                <div key={item.step} className="relative flex flex-col items-center text-center group">
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] font-heading font-extrabold text-lg shadow-sm group-hover:scale-105 group-hover:bg-[#B58B48] group-hover:text-white transition-all duration-300">
                      {item.step}
                    </div>

                    {/* Desktop Connector Arrow between steps */}
                    {!isLast && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 z-10 text-[#CBD5E1]">
                        <ArrowRight className="w-5 h-5 text-[#B58B48]/60" />
                      </div>
                    )}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-lg text-[#142438] mb-2 group-hover:text-[#B58B48] transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[#64748B] text-sm leading-relaxed max-w-[220px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
