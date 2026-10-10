import React from 'react';
import {
  BrainCircuit,
  Code2,
  BarChart3,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { siteConfig } from '../config/site';

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
      className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#F8F7F3]"
      aria-label="Hero Section"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#F4E8D3]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#B58B48]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#B58B48]">
                {siteConfig.hero.eyebrow}
              </span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] text-[#142438] leading-[1.14] tracking-tight mb-5">
              {siteConfig.hero.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {siteConfig.hero.supportingText}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-[#B58B48] hover:bg-[#A0793A] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B58B48]"
              >
                <span>{siteConfig.hero.primaryCta}</span>
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-[#142438] bg-white border border-[#E7E4DD] hover:border-[#142438] hover:bg-[#F8F7F3] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#142438]"
              >
                {siteConfig.hero.secondaryCta}
              </button>
            </div>

            {/* Bottom 3 Service Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 pt-6 border-t border-[#E7E4DD]">
              <div className="flex items-start gap-3 sm:pr-4">
                <div className="w-8 h-8 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142438]">
                    AI Automation
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-tight">
                    Save time & reduce costs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:px-4 sm:border-l sm:border-[#E7E4DD]">
                <div className="w-8 h-8 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0 mt-0.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142438]">
                    Modern Development
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-tight">
                    Web & Mobile Apps
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:pl-4 sm:border-l sm:border-[#E7E4DD]">
                <div className="w-8 h-8 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48] shrink-0 mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142438]">
                    Data Analytics
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-tight">
                    Turn data into decisions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Laptop, Dark Dashboard & Floating Badge Pills */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              {/* Plant decorative element to match the inspiration */}
              <div className="absolute -left-6 bottom-8 z-20 hidden sm:block">
                <div className="w-14 h-16 relative">
                  {/* Ceramic pot */}
                  <div className="absolute bottom-0 left-2 w-10 h-10 bg-[#EFECE4] border border-[#E7E4DD] rounded-b-xl rounded-t-sm shadow-md" />
                  {/* Stylized plant leaves */}
                  <svg className="w-14 h-14 absolute -top-4 -left-1" viewBox="0 0 50 50">
                    <path d="M22 35 C15 28, 10 15, 20 8 C25 15, 25 28, 22 35 Z" fill="#6B8E23" opacity="0.8" />
                    <path d="M25 35 C32 26, 38 12, 30 5 C23 12, 23 26, 25 35 Z" fill="#556B2F" opacity="0.85" />
                    <path d="M24 35 C18 20, 26 12, 24 5" stroke="#3E5420" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              </div>

              {/* Laptop Mockup Wrapper */}
              <div className="relative mx-auto rounded-2xl bg-gradient-to-b from-[#E2E8F0] to-[#CBD5E1] p-2.5 shadow-2xl border border-[#94A3B8]/30">
                {/* Camera dot */}
                <div className="w-1.5 h-1.5 bg-[#475569] rounded-full mx-auto mb-1.5 opacity-60" />
                
                {/* Laptop Screen (Dark Analytics Dashboard) */}
                <div className="relative bg-[#101E2D] rounded-lg overflow-hidden border border-[#1E324B] aspect-[16/10] text-white p-5 flex flex-col justify-between shadow-inner">
                  {/* Subtle top screen bar */}
                  <div className="flex items-center justify-between border-b border-[#1E324B]/80 pb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#EF4444]/70" />
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]/70" />
                      <div className="w-2 h-2 rounded-full bg-[#10B981]/70" />
                      <span className="text-[10px] text-[#94A3B8] ml-2 font-mono">salesflo.analytics</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#1E324B] text-[#B58B48] font-semibold">
                      Live AI Engine
                    </span>
                  </div>

                  {/* Dashboard Content */}
                  <div className="my-auto py-2">
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-[#B58B48] mb-1">
                      INTELLIGENT SYSTEMS
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                      Build. Automate. Grow.
                    </h3>

                    {/* Chart Visualization */}
                    <div className="relative h-20 sm:h-24 w-full pt-2">
                      {/* Metric highlights */}
                      <div className="flex justify-between text-[11px] text-[#94A3B8] mb-1">
                        <span>Automation Efficiency</span>
                        <span className="text-[#10B981] font-semibold flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" /> +148%
                        </span>
                      </div>
                      
                      <svg className="w-full h-16 overflow-visible" viewBox="0 0 300 70" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#B58B48" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#B58B48" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        {/* Area fill */}
                        <path
                          d="M0 60 Q 50 55, 90 40 T 170 30 T 230 15 T 300 5 L 300 70 L 0 70 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Glow Line */}
                        <path
                          d="M0 60 Q 50 55, 90 40 T 170 30 T 230 15 T 300 5"
                          fill="none"
                          stroke="#B58B48"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        {/* Data point dot */}
                        <circle cx="300" cy="5" r="4" fill="#F4E8D3" stroke="#B58B48" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom mini status bar */}
                  <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 border-t border-[#1E324B]/60">
                    <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Workflows Synchronized
                    </span>
                    <span className="font-mono text-[#94A3B8]">v2.4 Ready</span>
                  </div>
                </div>

                {/* Laptop Base and Notch */}
                <div className="w-full h-3 bg-gradient-to-r from-[#CBD5E1] via-[#E2E8F0] to-[#CBD5E1] rounded-b-md mt-1 flex justify-center items-center shadow-md">
                  <div className="w-16 h-1 bg-[#94A3B8]/60 rounded-full" />
                </div>
              </div>

              {/* Three Floating White Pill Badges (Exact arrangement matching the UI inspiration) */}
              <div className="absolute -top-3 -right-2 sm:-right-6 flex flex-col gap-3 z-30 pointer-events-none">
                {/* Floating Badge 1: AI Automation */}
                <div className="bg-white/95 backdrop-blur-md border border-[#E7E4DD] rounded-full py-2 px-3.5 shadow-lg flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                  <div className="w-6 h-6 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48]">
                    <BrainCircuit className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#142438] pr-1">
                    AI Automation
                  </span>
                </div>

                {/* Floating Badge 2: Web & App Development */}
                <div className="bg-white/95 backdrop-blur-md border border-[#E7E4DD] rounded-full py-2 px-3.5 shadow-lg flex items-center gap-2.5 ml-3 sm:ml-4 transition-transform duration-300 hover:scale-105">
                  <div className="w-6 h-6 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48]">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#142438] pr-1">
                    Web & App Development
                  </span>
                </div>

                {/* Floating Badge 3: Data Analytics */}
                <div className="bg-white/95 backdrop-blur-md border border-[#E7E4DD] rounded-full py-2 px-3.5 shadow-lg flex items-center gap-2.5 ml-1 sm:ml-2 transition-transform duration-300 hover:scale-105">
                  <div className="w-6 h-6 rounded-full bg-[#F4E8D3] flex items-center justify-center text-[#B58B48]">
                    <BarChart3 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#142438] pr-1">
                    Data Analytics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
