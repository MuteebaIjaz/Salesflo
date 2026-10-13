import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';
import heroBannerImg from '../assets/hero-banner.jpg';

interface HeroProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F6F4EF]"
      aria-label="Hero Section"
    >
      {/* Subtle architectural engineering grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `linear-gradient(#101E2D 1px, transparent 1px), linear-gradient(to right, #101E2D 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Atmospheric ambient lighting */}
      <div className="absolute top-12 left-1/3 w-[500px] h-[500px] bg-[#B88C46]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-[#DCE4E7]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollRevealGroup
          immediate={true}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center"
        >
          {/* Left Column: Bold Editorial Typography & Strategic Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Technical Eyebrow Label */}
            <ScrollReveal variant="fade-in" delay={0}>
             
            </ScrollReveal>

            {/* Dominant Editorial Headline: 68px Desktop / 52px Tablet / 38-42px Mobile */}
            <ScrollReveal variant="fade-up" delay={90}>
              <h1 className="font-heading font-extrabold text-[38px] sm:text-[42px] md:text-[52px] lg:text-[68px] text-[#101E2D] leading-[1.08] tracking-[-0.045em] mb-7">
                We Build Software <br className="hidden sm:inline" />
                That Moves Businesses{' '}
                <span className="text-[#B88C46] underline decoration-[#B88C46]/30 underline-offset-8">
                  Forward.
                </span>
              </h1>
            </ScrollReveal>

            {/* Supporting Copy: 17px, line-height 1.7, max-width ~520px, improved contrast */}
         

            {/* Primary & Secondary Call to Actions */}
            <ScrollReveal
              variant="fade-up"
              delay={270}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-[#101E2D] hover:bg-[#182C40] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B88C46] border border-[#101E2D]"
              >
                <span>Discuss Your Project</span>
                <span className="w-6 h-6 rounded-full bg-[#B88C46] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-sm sm:text-base font-semibold text-[#101E2D] bg-white border border-[#E7E4DD] hover:border-[#101E2D] hover:bg-[#F6F4EF] transition-all duration-200 shadow-2xs hover:shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#101E2D]"
              >
                Explore Our Work
              </button>
            </ScrollReveal>

        
         
              
          </div>

          {/* Right Column: Hero Visual Banner */}
          <ScrollReveal
            variant="slide-right"
            delay={220}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Subtle ambient lighting behind frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B88C46]/20 via-[#101E2D]/10 to-[#B88C46]/10 rounded-3xl blur-xl -z-10 opacity-70" />

              {/* Main Image Architectural Frame */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#101E2D] p-2 sm:p-2.5 shadow-2xl border border-[#1E324B]/70 group">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] bg-[#101E2D]">
                  <img
                    src={heroBannerImg}
                    alt="SalesFlo Engineering & Automation Team in modern collaborative workspace"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle inner gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101E2D]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};
