import React from 'react';
import { ArrowUpRight, FolderCheck, Smile, Clock, ShieldCheck, Terminal, Compass, Users } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

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
          {/* Left Column: Authentic Architectural Blueprint & Engineering Philosophy Visual */}
          <ScrollReveal
            variant="slide-left"
            delay={100}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl bg-[#101E2D] p-8 sm:p-10 border border-[#1E324B] shadow-elevated text-white overflow-hidden">
              {/* Gold gradient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88C46]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1E324B] pb-4 mb-6">
                <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider uppercase">
                  ENGINEERING PHILOSOPHY
                </span>
                <span className="font-mono text-[11px] text-[#CBD5E1]">
                  DOC: 2026.04
                </span>
              </div>

              {/* Core Principles */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#182C40] border border-[#253C58] flex items-center justify-center text-[#B88C46] shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15px] font-bold text-white mb-1">
                      Direct Senior Engineer Access
                    </h4>
                    <p className="text-[13.5px] text-[#CBD5E1] leading-[1.6]">
                      No intermediaries or account managers. You collaborate directly with the engineers building your systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#182C40] border border-[#253C58] flex items-center justify-center text-[#B88C46] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15px] font-bold text-white mb-1">
                      Production Resilience
                    </h4>
                    <p className="text-[13.5px] text-[#CBD5E1] leading-[1.6]">
                      We engineer software for edge cases, error handling, and mission-critical uptime, not just sunny-day demos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#182C40] border border-[#253C58] flex items-center justify-center text-[#B88C46] shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15px] font-bold text-white mb-1">
                      Practical Business Utility
                    </h4>
                    <p className="text-[13.5px] text-[#CBD5E1] leading-[1.6]">
                      Every workflow, integration, and interface must deliver measurable operational efficiency or clear commercial impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Studio stamp */}
              <div className="pt-4 border-t border-[#1E324B] flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                <span className="flex items-center gap-1.5 text-white">
                  <Users className="w-3.5 h-3.5 text-[#B88C46]" />
                  SalesFlo Core Team
                </span>
                <span className="text-emerald-400">Verified Practice</span>
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
