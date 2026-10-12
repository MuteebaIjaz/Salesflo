import React from 'react';
import {
  ArrowUpRight,
  Workflow,
  Cpu,
  Database,
  CheckCircle2,
  Activity,
  GitBranch,
  Terminal,
} from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

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
            <ScrollReveal variant="fade-in" delay={180}>
              <p className="text-[#50647A] text-[17px] leading-[1.7] max-w-[520px] mb-9 font-normal">
                From intelligent automation to custom digital products, we engineer
                solutions that solve real operational challenges.
              </p>
            </ScrollReveal>

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

            {/* Technical Capability Proof Points */}
            <ScrollReveal
              variant="fade-up"
              delay={360}
              className="pt-8 border-t border-[#E7E4DD] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4"
            >
              <div>
                <div className="font-mono text-xs text-[#B88C46] uppercase font-semibold mb-1">
                  01 // Systems
                </div>
                <div className="font-heading text-[15px] font-bold text-[#101E2D]">
                  Custom Web & Mobile
                </div>
                <p className="text-[13px] text-[#55687E] leading-relaxed mt-0.5">
                  Full-stack React & Next.js
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-[#B88C46] uppercase font-semibold mb-1">
                  02 // Autonomy
                </div>
                <div className="font-heading text-[15px] font-bold text-[#101E2D]">
                  Workflow Automation
                </div>
                <p className="text-[13px] text-[#55687E] leading-relaxed mt-0.5">
                  n8n, API & AI Agents
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-[#B88C46] uppercase font-semibold mb-1">
                  03 // Insights
                </div>
                <div className="font-heading text-[15px] font-bold text-[#101E2D]">
                  Telemetry & Data
                </div>
                <p className="text-[13px] text-[#55687E] leading-relaxed mt-0.5">
                  Real-time Analytics
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sophisticated Technical Orchestration Interface Visual */}
          <ScrollReveal
            variant="slide-right"
            delay={220}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-[500px]">
              {/* Outer Architectural Frame */}
              <div className="relative rounded-2xl bg-[#101E2D] p-5 sm:p-6 shadow-2xl border border-[#1E324B] text-white">
                {/* Interface Header Bar */}
                <div className="flex items-center justify-between border-b border-[#1E324B] pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="font-mono text-xs text-[#CBD5E1] ml-2">
                      orchestration.core.ts
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#182C40] border border-[#1E324B] text-[11px] font-mono text-[#B88C46]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PIPELINE
                  </div>
                </div>

                {/* Automation Workflow Node Architecture */}
                <div className="space-y-3.5 mb-5">
                  {/* Node 1: Ingestion Webhook */}
                  <div className="bg-[#182C40] border border-[#253C58] rounded-xl p-3.5 flex items-center justify-between shadow-xs hover:border-[#B88C46]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#101E2D] border border-[#253C58] flex items-center justify-center text-[#B88C46]">
                        <Workflow className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading text-[13.5px] font-bold text-white flex items-center gap-1.5">
                          Ingestion Webhook
                          <span className="text-[11px] font-mono font-normal text-emerald-400">
                            200 OK
                          </span>
                        </div>
                        <div className="font-mono text-[11.5px] text-[#CBD5E1]">
                          POST /api/v1/lead-intake → Validate payload
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>

                  {/* Connecting visual beam */}
                  <div className="flex items-center justify-center -my-2 relative z-10">
                    <div className="w-px h-5 bg-gradient-to-b from-[#B88C46] to-[#253C58]" />
                  </div>

                  {/* Node 2: AI Neural Reasoning Agent */}
                  <div className="bg-[#182C40] border border-[#B88C46]/60 rounded-xl p-3.5 flex items-center justify-between shadow-md relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#B88C46]/10 rounded-full blur-xl pointer-events-none" />
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#B88C46] flex items-center justify-center text-white shadow-xs">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading text-[13.5px] font-bold text-white flex items-center gap-1.5">
                          AI Reasoning Agent
                          <span className="text-[10px] font-mono uppercase bg-[#101E2D] text-[#B88C46] px-1.5 py-0.5 rounded">
                            n8n + LLM
                          </span>
                        </div>
                        <div className="font-mono text-[11.5px] text-[#CBD5E1]">
                          Score intent & synthesize business context
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#B88C46] font-semibold">
                      142ms
                    </span>
                  </div>

                  {/* Connecting visual beam */}
                  <div className="flex items-center justify-center -my-2 relative z-10">
                    <div className="w-px h-5 bg-gradient-to-b from-[#B88C46] to-[#253C58]" />
                  </div>

                  {/* Node 3: Database & Multi-Channel Dispatch */}
                  <div className="bg-[#182C40] border border-[#253C58] rounded-xl p-3.5 flex items-center justify-between shadow-xs hover:border-[#B88C46]/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#101E2D] border border-[#253C58] flex items-center justify-center text-[#B88C46]">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-heading text-[13.5px] font-bold text-white flex items-center gap-1.5">
                          Enterprise Telemetry Sync
                        </div>
                        <div className="font-mono text-[11.5px] text-[#CBD5E1]">
                          PostgreSQL write + notification dispatch
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  </div>
                </div>

                {/* Bottom Real-time Telemetry Metrics Bar */}
                <div className="pt-3.5 border-t border-[#1E324B] flex items-center justify-between text-xs font-mono text-[#CBD5E1]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    99.98% SLA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-[#B88C46]" />
                    Zero Data Loss
                  </span>
                  <span className="flex items-center gap-1.5 text-white font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-[#CBD5E1]" />
                    v3.4.2
                  </span>
                </div>
              </div>

              {/* Decorative engineering corner stamp */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-[#E7E4DD] rounded-xl py-2 px-3.5 shadow-card flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#B88C46]" />
                <span className="font-mono text-xs font-bold text-[#101E2D]">
                  HIGH-THROUGHPUT ARCHITECTURE
                </span>
              </div>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};
