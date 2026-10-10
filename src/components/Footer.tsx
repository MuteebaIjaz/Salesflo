import React, { useState } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import { LegalModal } from './LegalModal';
import { SocialIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms' | null;
  }>({
    isOpen: false,
    type: null,
  });

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
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
      <footer className="bg-[#101E2D] text-[#CBD5E1] border-t border-[#1E324B]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Footer Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-[#1E324B]/80 text-center md:text-left">
            {/* Left: Brand & Tagline */}
            <div className="max-w-sm flex flex-col items-center md:items-start">
              <Logo isDarkTheme={true} className="mb-3" />
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Center: Navigation Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm" aria-label="Footer Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#CBD5E1] hover:text-[#B58B48] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right: Social Media Links */}
            <div className="flex items-center gap-3">
              {siteConfig.contact.social
                .filter((s) => s.configured)
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#142438] border border-[#1E324B] flex items-center justify-center text-[#CBD5E1] hover:text-white hover:bg-[#B58B48] hover:border-[#B58B48] transition-all duration-200"
                    aria-label={`SalesFlo on ${social.name}`}
                  >
                    <SocialIcon name={social.name} className="w-4 h-4" />
                  </a>
                ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
            <p>© {currentYear} SalesFlo. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setModalState({ isOpen: true, type: 'privacy' })}
                className="hover:text-[#CBD5E1] transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setModalState({ isOpen: true, type: 'terms' })}
                className="hover:text-[#CBD5E1] transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
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
