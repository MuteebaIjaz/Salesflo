import React from 'react';
import { ArrowUpRight, FolderCheck, Smile, Clock } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';
import aboutImg from '../assets/about.jpg';

interface AboutProps {
  onLearnMore: () => void;
  onExploreProject?: (serviceName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white border-t border-[#E7E4DD] overflow-hidden"
      aria-label="About SalesFlo"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealGroup
          threshold={0.15}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Authentic Engineering Team & Architecture Workspace Visual */}
          <ScrollReveal
            variant="slide-left"
            delay={100}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Ambient lighting glow behind frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B88C46]/20 via-[#101E2D]/10 to-[#B88C46]/10 rounded-3xl blur-xl -z-10 opacity-70" />

              {/* Main Image Architectural Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101E2D] p-2 sm:p-2.5 shadow-2xl border border-[#1E324B]/70 group">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] bg-[#101E2D]">
                  <img
                    src={aboutImg}
                    alt="SalesFlo Engineering Team collaborating on whiteboard architecture and code"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle inner gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101E2D]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Editorial Narrative & Verified Telemetry Metrics */}
          <ScrollReveal
            variant="slide-right"
            delay={150}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#B88C46] block mb-3">
              04 // ABOUT US
            </span>

            {/* Section Heading: 44px Desktop / 30-34px Mobile, balanced line break */}
            <h2 className="font-heading font-bold text-[30px] sm:text-[34px] lg:text-[44px] text-[#101E2D] tracking-[-0.035em] leading-[1.15] mb-6">
              Small Team. <br className="hidden sm:inline" />
              <span className="text-[#B88C46]">Serious Engineering.</span>
            </h2>

            {/* Paragraphs: ~16px font size, line-height 1.7, ~60-65ch comfortable max reading width */}
            <p className="text-[#50647A] text-[16px] leading-[1.7] max-w-[620px] mb-5 font-normal">
              We combine technical expertise with a practical understanding of how businesses operate, building digital solutions designed to solve meaningful problems.
            </p>

            <p className="text-[#50647A] text-[16px] leading-[1.7] max-w-[620px] mb-10 font-normal">
              Rather than spreading ourselves across hundreds of clients, we partner with a select group of scale-ups and established enterprises to engineer automated systems, web platforms, and data pipelines that genuinely transform how they run.
            </p>

            {/* Verified Statistics Grid: Visually prominent numbers via typography */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {siteConfig.about.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-[#F6F4EF] rounded-2xl border border-[#E7E4DD] p-6 flex flex-col justify-between shadow-2xs hover:shadow-card hover:border-[#B88C46]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-[#E7E4DD] flex items-center justify-center text-[#B88C46] mb-4 shadow-2xs">
                    {idx === 0 && <FolderCheck className="w-4 h-4" />}
                    {idx === 1 && <Smile className="w-4 h-4" />}
                    {idx === 2 && <Clock className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-[36px] sm:text-[40px] text-[#101E2D] tracking-tight leading-none">
                      {metric.value}
                    </div>
                    <div className="text-[13px] font-medium text-[#50647A] mt-2">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={onLearnMore}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#101E2D] hover:bg-[#182C40] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C46]"
              >
                <span>Discuss Your Project With Us</span>
                <span className="w-5 h-5 rounded-full bg-[#B88C46] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </span>
              </button>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};
