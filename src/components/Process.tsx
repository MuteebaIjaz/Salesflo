import React from 'react';
import { CheckCircle2, Search, Compass, Hammer, Rocket } from 'lucide-react';
import { siteConfig } from '../config/site';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

export const Process: React.FC = () => {
  const stepIcons = [Search, Compass, Hammer, Rocket];

  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[#F6F4EF] border-t border-[#E7E4DD]"
      aria-label="Our Process and Methodology"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Consistent 44px Desktop / 30-34px Mobile Scale */}
        <ScrollRevealGroup
          threshold={0.15}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <ScrollReveal variant="fade-in" delay={0}>
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#B88C46] block mb-3">
                05 // METHODOLOGY
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80}>
              <h2 className="font-heading font-bold text-[30px] sm:text-[34px] lg:text-[44px] text-[#101E2D] tracking-[-0.035em] leading-[1.15]">
                How We Work.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-in" delay={160} className="max-w-md">
            <p className="text-[#50647A] text-[16px] leading-[1.65]">
              A transparent, milestone-driven engineering process designed to eliminate guesswork, reduce risk, and deliver production-ready software.
            </p>
          </ScrollReveal>
        </ScrollRevealGroup>

        {/* Refined Horizontal Engineering Timeline Layout */}
        <ScrollRevealGroup threshold={0.15} stagger={100} className="relative">
          {/* Desktop Connecting Horizontal Track Line */}
          <div className="hidden lg:block absolute top-[38px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#DCE4E7] via-[#B88C46]/50 to-[#DCE4E7] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {siteConfig.process.steps.map((item, index) => {
              const StepIcon = stepIcons[index] || Search;

              return (
                <ScrollReveal
                  key={item.step}
                  variant="fade-up"
                  delay={100 + index * 100}
                  className="flex flex-col items-start bg-white lg:bg-transparent rounded-2xl p-6 lg:p-0 border lg:border-none border-[#E7E4DD] shadow-2xs lg:shadow-none hover:shadow-card lg:hover:shadow-none transition-all duration-300 group"
                >
                  {/* Step Milestone Node */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-6 w-full">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-[#E7E4DD] shadow-card flex items-center justify-center text-[#101E2D] group-hover:bg-[#101E2D] group-hover:text-white group-hover:border-[#101E2D] transition-all duration-300 shrink-0 relative">
                      <StepIcon className="w-6 h-6 stroke-[1.8] group-hover:text-[#B88C46] transition-colors" />
                      {/* Active Node Pulse dot */}
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#B88C46] border-2 border-white" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[11px] font-semibold text-[#B88C46] tracking-wider uppercase mb-1">
                        PHASE {item.step}
                      </span>
                      {/* Stage Title: 19-20px, Weight 700 */}
                      <h3 className="font-heading font-bold text-[19px] sm:text-[20px] text-[#101E2D] tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step Description: 14-15px, Line-height 1.6 */}
                  <p className="text-[#50647A] text-[14px] sm:text-[15px] leading-[1.6] mb-4">
                    {item.description}
                  </p>

                  {/* Concrete Milestone Output Badge: 12px IBM Plex Mono */}
                  <div className="mt-auto pt-3 border-t border-[#E7E4DD] w-full flex items-center gap-2 text-[12px] font-mono text-[#101E2D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B88C46] shrink-0" />
                    <span>
                      {index === 0 && 'Architecture Scope'}
                      {index === 1 && 'Technical Roadmap'}
                      {index === 2 && 'Sprint Deployments'}
                      {index === 3 && 'Production Handoff'}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};
