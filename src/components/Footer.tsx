import React, { useState } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import { LegalModal } from './LegalModal';
import { SocialIcon } from './SocialIcons';
import { ScrollReveal, ScrollRevealGroup } from './ScrollReveal';

export const Footer: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const currentYear = 2026;

  const navLinks = [
    { name: 'Home', href: '#home', num: '01' },
    { name: 'Services', href: '#services', num: '02' },
    { name: 'Portfolio', href: '#portfolio', num: '03' },
    { name: 'About', href: '#about', num: '04' },
    { name: 'Process', href: '#process', num: '05' },
    { name: 'Contact', href: '#contact', num: '06' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 84;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <footer className="bg-[#101E2D] text-[#CBD5E1] border-t border-[#1E324B] overflow-hidden">
        <ScrollRevealGroup
          threshold={0.15}
          className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        >
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E324B]/80">
            {/* Left Brand Column (Spans 5) */}
            <ScrollReveal
              variant="fade-up"
              delay={0}
              className="md:col-span-5 flex flex-col items-start"
            >
              <Logo isDarkTheme={true} className="mb-4" />
              {/* Description: 14px, Line-height 1.6 */}
              <p className="text-[14px] text-[#CBD5E1] leading-[1.6] max-w-sm mb-6">
                Boutique digital engineering studio building AI automation, resilient web applications, and enterprise cloud architecture.
              </p>



            </ScrollReveal>

            {/* Center Navigation Links (Spans 4) */}
            <ScrollReveal
              variant="fade-up"
              delay={100}
              as="nav"
              className="md:col-span-4 flex flex-col"
              aria-label="Footer Navigation"
            >
              {/* Section Label: 12px IBM Plex Mono, uppercase, font-semibold */}
              <div className="font-mono text-xs uppercase tracking-widest text-[#B88C46] mb-4 font-semibold">
                SITEMAP NAVIGATION
              </div>
              <div className="grid grid-cols-2 gap-3 text-[14px]">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group text-[#CBD5E1] hover:text-white transition-colors flex items-center gap-1.5 py-1 font-medium"
                  >

                    <span>{link.name}</span>

                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Right Social & Studio Inquiries (Spans 3) */}
            <ScrollReveal
              variant="fade-up"
              delay={200}
              className="md:col-span-3 flex flex-col"
            >
              {/* Section Label: 12px IBM Plex Mono, uppercase, font-semibold */}
              <div className="font-mono text-xs uppercase tracking-widest text-[#B88C46] mb-4 font-semibold">
                CONNECT & INQUIRE
              </div>
              <p className="text-[13.5px] text-[#CBD5E1] leading-relaxed mb-4">
                Have a project or integration requirement?
              </p>
              <div className="flex items-center gap-2.5 mb-6">
                {siteConfig.contact.social
                  .filter((s) => s.configured)
                  .map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#182C40] border border-[#253C58] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:bg-[#B88C46] hover:border-[#B88C46] transition-all duration-200"
                      aria-label={`SalesFlo on ${social.name}`}
                    >
                      <SocialIcon name={social.name} className="w-4 h-4" />
                    </a>
                  ))}
              </div>
              <a
                href="mailto:hello@salesflo.dev"
                className="font-mono text-[13px] text-[#CBD5E1] hover:text-white transition-colors"
              >
                hello@salesflo.dev
              </a>
            </ScrollReveal>
          </div>

          {/* Bottom Copyright & Legal Links Row: 12.5px IBM Plex Mono */}
          <ScrollReveal
            variant="fade-up"
            delay={300}
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] font-mono text-[#CBD5E1]"
          >
            <p>© {currentYear} SalesFlo Studio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalState({ isOpen: true, type: 'terms' })}
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="hidden md:inline text-[#253C58]">|</span>
              <span className="hidden md:inline text-[#CBD5E1]">Karachi, Pakistan</span>
            </div>
          </ScrollReveal>
        </ScrollRevealGroup>
      </footer>

      {/* Accessible Policy & Terms Dialog */}
      <LegalModal
        isOpen={modalState.isOpen}
        type={modalState.type}
        onClose={() => setModalState({ isOpen: false, type: null })}
      />
    </>
  );
};
