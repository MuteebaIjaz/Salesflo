import React from 'react';
import {
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Cloud,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

interface PortfolioProps {
  onExploreProject: (serviceName?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onExploreProject }) => {
  const projects = [
    {
      id: 'ai-lead-engine',
      num: '01 / 03',
      category: 'AI Automation & n8n',
      title: 'Enterprise AI Lead Qualification Engine',
      description:
        'Architected an autonomous lead ingestion and scoring pipeline connecting webhook endpoints directly to multi-step LLM analysis and instant CRM enrichment.',
      outcome:
        'Reduced lead response time from 4 hours to under 60 seconds with automated qualification and zero manual triage.',
      tags: ['n8n Orchestration', 'OpenAI Agents', 'Webhook Intake', 'PostgreSQL', 'Slack Dispatch'],
      serviceKey: 'AI Automation',
      visual: (
        <div className="w-full h-full bg-[#101E2D] rounded-2xl p-6 border border-[#1E324B] flex flex-col justify-between text-white relative overflow-hidden group/visual">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#B88C46]/10 rounded-full blur-2xl pointer-events-none" />
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#1E324B] pb-3 text-xs font-mono text-[#CBD5E1]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              lead_evaluator.engine
            </span>
            <span className="text-[#B88C46]">99.9% Accuracy</span>
          </div>

          {/* Workflow Graph Representation */}
          <div className="my-5 space-y-2.5">
            <div className="p-3 rounded-xl bg-[#182C40] border border-[#253C58] flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 text-[#CBD5E1]">
                <Zap className="w-3.5 h-3.5 text-[#B88C46]" /> Webhook Ingestion Event
              </span>
              <span className="text-emerald-400 font-semibold">&lt; 18ms</span>
            </div>

            <div className="p-3 rounded-xl bg-[#182C40] border border-[#B88C46]/40 flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="flex items-center gap-2 text-white font-medium">
                <Cpu className="w-3.5 h-3.5 text-[#B88C46]" /> Intent & Budget Scoring Agent
              </span>
              <span className="text-[#B88C46] font-semibold">Tier 1 Qualified</span>
            </div>

            <div className="p-3 rounded-xl bg-[#182C40] border border-[#253C58] flex items-center justify-between text-xs font-mono">
              <span className="flex items-center gap-2 text-[#CBD5E1]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> CRM Synced & Rep Notified
              </span>
              <span className="text-white">Instant</span>
            </div>
          </div>

          {/* Metric Bottom Banner */}
          <div className="pt-3 border-t border-[#1E324B] flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
            <span>Average Response: 42s</span>
            <span className="text-emerald-400 font-semibold">+340% Pipeline Velocity</span>
          </div>
        </div>
      ),
    },
    {
      id: 'saas-analytics-dash',
      num: '02 / 03',
      category: 'Full-Stack Web Application',
      title: 'SaaS Analytics & Telemetry Dashboard',
      description:
        'Engineered a high-performance web dashboard handling multi-tenant event ingestion, real-time revenue telemetry, and automated executive report generation.',
      outcome:
        'Handles 1M+ daily telemetry events with sub-100ms dashboard queries and instant executive export.',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'TimescaleDB', 'Redis Caching'],
      serviceKey: 'Web & App Development',
      visual: (
        <div className="w-full h-full bg-[#101E2D] rounded-2xl p-6 border border-[#1E324B] flex flex-col justify-between text-white relative overflow-hidden group/visual">
          <div className="flex items-center justify-between border-b border-[#1E324B] pb-3 text-xs font-mono text-[#CBD5E1]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              revenue_telemetry.realtime
            </span>
            <span className="text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +184.2% YoY
            </span>
          </div>

          {/* Chart SVG Visualization */}
          <div className="my-4">
            <div className="flex justify-between text-xs text-[#CBD5E1] mb-2 font-mono">
              <span>Monthly Recurring Volume</span>
              <span className="text-white font-bold">$482,900 ARR</span>
            </div>
            <div className="relative h-24 w-full pt-1">
              <svg className="w-full h-20 overflow-visible" viewBox="0 0 320 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradCase" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B88C46" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#B88C46" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 50 Q 60 45, 110 32 T 210 20 T 270 12 T 320 4 L 320 60 L 0 60 Z"
                  fill="url(#chartGradCase)"
                />
                <path
                  d="M0 50 Q 60 45, 110 32 T 210 20 T 270 12 T 320 4"
                  fill="none"
                  stroke="#B88C46"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="320" cy="4" r="4" fill="#F4E8D3" stroke="#B88C46" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E324B] flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
            <span>1,020,400 daily events</span>
            <span className="text-white">p99 Latency: 48ms</span>
          </div>
        </div>
      ),
    },
    {
      id: 'multicloud-pipeline',
      num: '03 / 03',
      category: 'Cloud Architecture & DevOps',
      title: 'Multi-Cloud Automation Pipeline',
      description:
        'Designed and provisioned infrastructure-as-code deployment pipelines across multi-region environments with zero-downtime rollback capabilities.',
      outcome:
        'Cut infrastructure expenditure by 35% while slashing deployment cycles from 2 hours to under 4 minutes.',
      tags: ['Terraform', 'Docker', 'AWS ECS', 'GitHub Actions', 'Prometheus'],
      serviceKey: 'Cloud & DevOps',
      visual: (
        <div className="w-full h-full bg-[#101E2D] rounded-2xl p-6 border border-[#1E324B] flex flex-col justify-between text-white relative overflow-hidden group/visual">
          <div className="flex items-center justify-between border-b border-[#1E324B] pb-3 text-xs font-mono text-[#CBD5E1]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              ci_cd_deployment.status
            </span>
            <span className="text-[#B88C46] font-mono">100% Automated</span>
          </div>

          {/* Deployment pipeline stages */}
          <div className="my-5 grid grid-cols-3 gap-2 text-center text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#182C40] border border-[#253C58]">
              <div className="text-[10px] text-[#CBD5E1] mb-1">STAGE 1</div>
              <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Build
              </div>
              <div className="text-[10px] text-[#CBD5E1] mt-1">42s</div>
            </div>

            <div className="p-3 rounded-xl bg-[#182C40] border border-[#253C58]">
              <div className="text-[10px] text-[#CBD5E1] mb-1">STAGE 2</div>
              <div className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Tests
              </div>
              <div className="text-[10px] text-[#CBD5E1] mt-1">1m 12s</div>
            </div>

            <div className="p-3 rounded-xl bg-[#182C40] border border-[#B88C46]/50">
              <div className="text-[10px] text-[#B88C46] mb-1">STAGE 3</div>
              <div className="text-white font-semibold flex items-center justify-center gap-1">
                <Cloud className="w-3.5 h-3.5 text-[#B88C46]" /> Deploy
              </div>
              <div className="text-[10px] text-emerald-400 mt-1">Active</div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E324B] flex items-center justify-between text-[11px] font-mono text-[#CBD5E1]">
            <span>Zero-Downtime Rollout</span>
            <span className="text-emerald-400 font-semibold">-35% Cloud Cost</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 bg-[#F6F4EF] border-t border-[#E7E4DD]"
      aria-label="Selected Work and Case Studies"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 44px Desktop / 30-34px Mobile with clean leading and tracking */}
        <ScrollRevealGroup
          threshold={0.15}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
        >
          <div>
            <ScrollReveal variant="fade-in" delay={0}>
              <span className="font-mono text-xs font-semibold tracking-widest uppercase text-[#B88C46] block mb-3">
                03 // SELECTED WORK
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80}>
              <h2 className="font-heading font-bold text-[30px] sm:text-[34px] lg:text-[44px] text-[#101E2D] tracking-[-0.035em] leading-[1.15]">
                Case Studies & Systems.
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal variant="fade-in" delay={160} className="max-w-md">
            <p className="text-[#50647A] text-[16px] leading-[1.65]">
              A curated look at high-impact digital systems, autonomous workflows, and cloud applications we have engineered for serious businesses.
            </p>
          </ScrollReveal>
        </ScrollRevealGroup>

        {/* Alternating Editorial Case Study Rows */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <ScrollRevealGroup
                key={project.id}
                threshold={0.15}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-[#E7E4DD] p-8 sm:p-10 lg:p-12 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Text Content Column */}
                <ScrollReveal
                  variant={isEven ? 'slide-right' : 'slide-left'}
                  delay={100}
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Category & Project Index Labels: 11-12px IBM Plex Mono uppercase */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-semibold text-[#B88C46] tracking-wider uppercase">
                      {project.num}
                    </span>
                    <span className="text-[#A2B0C0] text-xs font-medium">/</span>
                    <span className="font-mono text-xs text-[#50647A] uppercase tracking-wider font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title: 26-30px, Weight 700, Line-height 1.2 */}
                  <h3 className="font-heading font-bold text-[26px] sm:text-[28px] lg:text-[30px] text-[#101E2D] mb-4 tracking-[-0.025em] leading-[1.2]">
                    {project.title}
                  </h3>

                  {/* Description: 15-16px, Line-height 1.7 */}
                  <p className="text-[#50647A] text-[15px] sm:text-[16px] leading-[1.7] mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Highlighted Outcome Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F4EF] border border-[#E7E4DD] mb-6">
                    <div className="text-[11.5px] font-mono text-[#B88C46] uppercase font-semibold mb-1">
                      Key Engineering Outcome
                    </div>
                    <div className="text-[14.5px] font-semibold text-[#101E2D] leading-snug">
                      {project.outcome}
                    </div>
                  </div>

                  {/* Technology Tags: 11-12px IBM Plex Mono, Medium weight */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white border border-[#E7E4DD] text-[11.5px] font-mono font-medium text-[#101E2D] shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action */}
                  <div>
                    <button
                      type="button"
                      onClick={() => onExploreProject(project.serviceKey)}
                      className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-[#101E2D] hover:bg-[#182C40] transition-all duration-200 shadow-xs hover:shadow active:scale-[0.98]"
                    >
                      <span>Inquire About Similar Build</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B88C46] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </ScrollReveal>

                {/* Visual Showcase Column */}
                <ScrollReveal
                  variant={isEven ? 'slide-left' : 'slide-right'}
                  delay={180}
                  className={`lg:col-span-6 aspect-[4/3] sm:aspect-[16/11] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {project.visual}
                </ScrollReveal>
              </ScrollRevealGroup>
            );
          })}
        </div>
      </div>
    </section>
  );
};
