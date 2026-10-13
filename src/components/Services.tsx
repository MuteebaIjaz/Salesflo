import React from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  BarChart3,
  Cloud,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-white border-t border-[#E7E4DD]"
      aria-label="Our Services"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Consistent 44px Desktop / 30-34px Mobile Typographic Scale */}
        <ScrollRevealGroup
          threshold={0.15}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <ScrollReveal variant="fade-in" delay={0}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#B88C46]">
                  02 // CAPABILITIES
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80}>
              <h2 className="font-heading font-bold text-[30px] sm:text-[34px] lg:text-[44px] text-[#101E2D] tracking-[-0.035em] leading-[1.15]">
                What We Build.
              </h2>
            </ScrollReveal>
          </div>

        </ScrollRevealGroup>

        {/* Asymmetric Bento Grid Layout with Enhanced Typography */}
        <ScrollRevealGroup
          threshold={0.15}
          stagger={100}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Card 1 (FEATURED LARGE BENTO): 01 — AI Automation (Midnight Navy Surface, Spans 7 Cols) */}
          <ScrollReveal
            variant="fade-up"
            delay={100}
            className="md:col-span-7 bg-[#101E2D] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-elevated border border-[#1E324B] hover:border-[#B88C46]/60 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            onClick={() => onSelectService('AI Automation')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService('AI Automation');
              }
            }}
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B88C46]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Number & Directional Arrow */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider">
                    01 // FEATURED
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#182C40] text-[11px] font-mono text-[#CBD5E1]">
                    <Sparkles className="w-3 h-3 text-[#B88C46]" /> Autonomous Systems
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#182C40] border border-[#253C58] flex items-center justify-center text-white group-hover:bg-[#B88C46] group-hover:border-[#B88C46] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              {/* Icon Circle */}
              <div className="w-14 h-14 rounded-2xl bg-[#182C40] border border-[#253C58] flex items-center justify-center text-[#B88C46] mb-6 group-hover:scale-105 transition-transform">
                <BrainCircuit className="w-7 h-7" />
              </div>

              {/* Title: 22-24px, Weight 700, Line-height 1.25 */}
              <h3 className="font-heading font-bold text-[22px] sm:text-[24px] text-white mb-3 tracking-tight leading-[1.25]">
                AI Automation & Intelligent Agents
              </h3>
              {/* Description: 15-16px, Line-height 1.65 */}
              <p className="text-[#CBD5E1] text-[15px] sm:text-[16px] leading-[1.65] max-w-lg mb-8">
                Streamline repetitive operations with custom AI agents, automated n8n workflows, natural language CRM intake, and zero-touch operational pipelines.
              </p>
            </div>

            {/* Bottom Capabilities Tags: 11-12px, font-medium */}
            <div className="pt-6 border-t border-[#1E324B]/80 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#182C40] text-[11.5px] font-mono font-medium text-[#CBD5E1]">
                n8n Orchestration
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#182C40] text-[11.5px] font-mono font-medium text-[#CBD5E1]">
                Multi-Agent Systems
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#182C40] text-[11.5px] font-mono font-medium text-[#CBD5E1]">
                API & Webhook Integrations
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#182C40] text-[11.5px] font-mono font-medium text-[#CBD5E1]">
                Custom Tool Calling
              </span>
            </div>
          </ScrollReveal>

          {/* Card 2: 02 — Web & App Development (Warm Ivory Surface, Spans 5 Cols) */}
          <ScrollReveal
            variant="fade-up"
            delay={200}
            className="md:col-span-5 bg-[#F6F4EF] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#E7E4DD] shadow-card hover:shadow-card-hover hover:border-[#B88C46]/50 transition-all duration-300 group cursor-pointer"
            onClick={() => onSelectService('Web & App Development')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService('Web & App Development');
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider">
                  02 // ENGINEERING
                </span>
                <div className="w-10 h-10 rounded-full bg-white border border-[#E7E4DD] flex items-center justify-center text-[#101E2D] group-hover:bg-[#B88C46] group-hover:text-white group-hover:border-[#B88C46] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E7E4DD] flex items-center justify-center text-[#B88C46] mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                <Code2 className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-[22px] sm:text-[24px] text-[#101E2D] mb-3 tracking-tight leading-[1.25]">
                Modern Web & App Development
              </h3>
              <p className="text-[#50647A] text-[15px] sm:text-[16px] leading-[1.65] mb-6">
                Fast, responsive, and resilient full-stack applications built with modern frameworks, robust APIs, and state-of-the-art UX.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7E4DD] flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                React & Next.js
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                REST & GraphQL
              </span>
            </div>
          </ScrollReveal>

          {/* Card 3: 03 — Data Analytics (Pure White Surface, Spans 5 Cols) */}
          <ScrollReveal
            variant="fade-up"
            delay={300}
            className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#E7E4DD] shadow-card hover:shadow-card-hover hover:border-[#B88C46]/50 transition-all duration-300 group cursor-pointer"
            onClick={() => onSelectService('Data Analytics')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService('Data Analytics');
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider">
                  03 // TELEMETRY
                </span>
                <div className="w-10 h-10 rounded-full bg-[#F6F4EF] border border-[#E7E4DD] flex items-center justify-center text-[#101E2D] group-hover:bg-[#B88C46] group-hover:text-white group-hover:border-[#B88C46] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-[#F6F4EF] border border-[#E7E4DD] flex items-center justify-center text-[#B88C46] mb-6 group-hover:scale-105 transition-transform">
                <BarChart3 className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-[22px] sm:text-[24px] text-[#101E2D] mb-3 tracking-tight leading-[1.25]">
                Data Analytics & Dashboards
              </h3>
              <p className="text-[#50647A] text-[15px] sm:text-[16px] leading-[1.65] mb-6">
                Turn fragmented business data into actionable executive dashboards, revenue telemetry, and automated operational reporting.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7E4DD] flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-[#F6F4EF] text-[11.5px] font-mono font-medium text-[#101E2D]">
                Interactive Telemetry
              </span>
              <span className="px-3 py-1 rounded-md bg-[#F6F4EF] text-[11.5px] font-mono font-medium text-[#101E2D]">
                Automated KPI Reports
              </span>
            </div>
          </ScrollReveal>

          {/* Card 4: 04 — Cloud & DevOps (Warm Ivory Surface, Spans 7 Cols) */}
          <ScrollReveal
            variant="fade-up"
            delay={400}
            className="md:col-span-7 bg-[#F6F4EF] rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#E7E4DD] shadow-card hover:shadow-card-hover hover:border-[#B88C46]/50 transition-all duration-300 group cursor-pointer"
            onClick={() => onSelectService('Cloud & DevOps')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectService('Cloud & DevOps');
              }
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider">
                  04 // INFRASTRUCTURE
                </span>
                <div className="w-10 h-10 rounded-full bg-white border border-[#E7E4DD] flex items-center justify-center text-[#101E2D] group-hover:bg-[#B88C46] group-hover:text-white group-hover:border-[#B88C46] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E7E4DD] flex items-center justify-center text-[#B88C46] mb-6 group-hover:scale-105 transition-transform shadow-2xs">
                <Cloud className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-[22px] sm:text-[24px] text-[#101E2D] mb-3 tracking-tight leading-[1.25]">
                Cloud Architecture & DevOps
              </h3>
              <p className="text-[#50647A] text-[15px] sm:text-[16px] leading-[1.65] max-w-lg mb-6">
                Secure, highly scalable infrastructure architectures with automated CI/CD deployment pipelines and minimal ongoing maintenance costs.
              </p>
            </div>

            <div className="pt-6 border-t border-[#E7E4DD] flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                AWS & GCP
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                Docker Containers
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                Zero-Downtime CI/CD
              </span>
              <span className="px-3 py-1 rounded-md bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D]">
                Automated Monitoring
              </span>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};
