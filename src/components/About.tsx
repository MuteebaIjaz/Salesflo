import React from 'react';
import { ArrowRight, FolderCheck, Smile, Clock } from 'lucide-react';
import { siteConfig } from '../config/site';

interface AboutProps {
  onLearnMore: () => void;
  onExploreProject: (serviceName?: string) => void;
}

export const About: React.FC<AboutProps> = ({
  onLearnMore,
  onExploreProject,
}) => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#F8F7F3] border-t border-[#E7E4DD]"
      aria-label="About SalesFlo"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Row: Text, Workspace Visual, and Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          {/* Left Column: Story & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#B58B48] block mb-3">
              {siteConfig.about.eyebrow}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#142438] tracking-tight leading-tight mb-5">
              {siteConfig.about.headline}
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              {siteConfig.about.description}
            </p>
            <div>
              <button
                type="button"
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#B58B48] hover:bg-[#A0793A] transition-all duration-200 shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B58B48]"
              >
                <span>{siteConfig.about.cta}</span>
              </button>
            </div>
          </div>

          {/* Center Column: Workspace Visual with signature gold outline decoration */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              {/* Decorative gold outline shape offset behind the image */}
              <div className="absolute -top-4 -left-4 w-4/5 h-4/5 rounded-3xl border-2 border-[#B58B48]/50 -z-0" />
              
              {/* Main Workspace Frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#E7E4DD] bg-white shadow-xl aspect-[4/5] flex flex-col">
                {/* SVG Illustration of minimalist modern tech workspace with laptop, coffee mug, and notebook */}
                <div className="w-full h-full bg-gradient-to-b from-[#F1EFEA] via-[#EAE6DE] to-[#DDD7CB] relative p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle window light reflection */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/40 rounded-full blur-2xl" />

                  {/* Top: Potted plant & lamp shadow */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-16 relative">
                      <div className="w-8 h-8 rounded-full bg-[#E5DEC9] border border-[#D9CDB2] absolute bottom-0 left-2" />
                      <div className="w-3 h-8 bg-[#526E2D] rounded-full absolute -top-1 left-4 rotate-12" />
                      <div className="w-3 h-7 bg-[#658738] rounded-full absolute top-1 left-2 -rotate-12" />
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/60 text-[10px] font-semibold text-[#142438] flex items-center gap-1 shadow-xs">
                      SalesFlo Studio
                    </div>
                  </div>

                  {/* Center: Open Laptop */}
                  <div className="relative my-auto flex flex-col items-center">
                    <div className="w-48 h-32 bg-[#101E2D] rounded-lg border-2 border-[#64748B]/40 shadow-xl p-2.5 flex flex-col justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="space-y-1.5 text-center">
                        <div className="text-[11px] font-mono text-[#CBD5E1]">
                          <span className="text-[#B58B48]">&lt;</span>SalesFlo<span className="text-[#B58B48]">/&gt;</span>
                        </div>
                        <div className="w-24 h-1 bg-[#B58B48]/40 rounded-full mx-auto" />
                        <div className="w-16 h-1 bg-[#64748B]/40 rounded-full mx-auto" />
                      </div>
                      <div className="text-[8px] font-mono text-emerald-400 flex justify-center">
                        ✓ All Workflows Nominal
                      </div>
                    </div>
                    {/* Laptop Keyboard Base */}
                    <div className="w-56 h-2.5 bg-gradient-to-r from-[#CBD5E1] via-[#E2E8F0] to-[#CBD5E1] rounded-b-md shadow-md mt-0.5" />
                  </div>

                  {/* Bottom: Coffee mug & notebook */}
                  <div className="flex justify-between items-end pt-2">
                    {/* Notebook */}
                    <div className="w-20 h-14 bg-white rounded-md border border-[#D9CDB2] shadow-sm p-1.5 rotate-[-6deg]">
                      <div className="w-full h-1 bg-[#E7E4DD] rounded-full mb-1" />
                      <div className="w-3/4 h-1 bg-[#E7E4DD] rounded-full mb-1" />
                      <div className="w-1/2 h-1 bg-[#B58B48]/50 rounded-full" />
                    </div>
                    {/* Coffee mug */}
                    <div className="w-9 h-10 rounded-b-xl rounded-t-sm bg-[#142438] border border-[#1E324B] shadow-sm relative mr-2">
                      <div className="w-3 h-5 border-2 border-[#142438] rounded-r-full absolute top-2 -right-3" />
                      <div className="w-6 h-1.5 bg-[#4B3621] rounded-full mx-auto mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Metric Cards */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {siteConfig.about.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E4DD] p-5 flex items-center gap-4 shadow-subtle hover:border-[#B58B48]/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0">
                  {idx === 0 && <FolderCheck className="w-5 h-5" />}
                  {idx === 1 && <Smile className="w-5 h-5" />}
                  {idx === 2 && <Clock className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-heading font-extrabold text-2xl text-[#142438] tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-[#64748B]">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
            <p className="text-[11px] text-[#94A3B8] italic text-center sm:text-left mt-1">
              * Design metric placeholders customizable for verified client telemetry.
            </p>
          </div>
        </div>

        {/* Portfolio / Selected Work Anchor Subsection */}
        <div id="portfolio" className="pt-12 border-t border-[#E7E4DD]/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#B58B48] block mb-2">
                FEATURED WORK
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#142438] tracking-tight">
                {siteConfig.portfolio.headline}
              </h3>
            </div>
            <p className="text-[#64748B] text-sm max-w-md mt-2 md:mt-0">
              {siteConfig.portfolio.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.portfolio.projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E4DD] p-6 flex flex-col justify-between hover:border-[#B58B48]/40 hover:shadow-card transition-all duration-300 group"
              >
                <div>
                  <div className="text-xs font-semibold text-[#B58B48] uppercase tracking-wider mb-2">
                    {proj.category}
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#142438] mb-3 group-hover:text-[#B58B48] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-[#64748B] text-xs leading-relaxed mb-4">
                    {proj.outcome}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onExploreProject(proj.category)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142438] hover:text-[#B58B48] transition-colors pt-2 border-t border-[#E7E4DD]/60"
                >
                  <span>Inquire About Similar Build</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
