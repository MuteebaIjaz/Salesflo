import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F4EF]/92 backdrop-blur-md shadow-subtle border-b border-[#E7E4DD]/80'
          : 'bg-[#F6F4EF]/75 backdrop-blur-sm'
      }`}
    >
      {/* Micro-interaction: Thin scroll progress indicator */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#B88C46] via-[#C8A05D] to-[#101E2D] origin-left transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <nav
        className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Logo & Studio Label */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C46] rounded-lg p-1"
            aria-label="SalesFlo Home"
          >
            <Logo />
          </a>
         
        </div>

        {/* Desktop Navigation Links: 14px, Weight 500, Letter spacing -0.01em */}
        <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.substring(1) ||
              (link.href === '#home' && activeSection === '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-[14px] font-medium tracking-[-0.01em] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C46] ${
                  isActive
                    ? 'text-[#101E2D] font-semibold bg-white shadow-xs border border-[#E7E4DD]'
                    : 'text-[#50647A] hover:text-[#101E2D] hover:bg-white/60'
                }`}
              >
                <span className="font-mono text-[11px] text-[#B88C46] mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                  {link.num}
                </span>
                <span>{link.name}</span>
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B88C46] ml-1.5 align-middle" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold text-white bg-[#101E2D] hover:bg-[#182C40] transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B88C46] border border-[#101E2D]"
          >
            <span>Get in Touch</span>
            <span className="w-5 h-5 rounded-full bg-[#B88C46] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#101E2D] bg-white border border-[#E7E4DD] hover:bg-[#F6F4EF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B88C46] shadow-2xs"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F4EF]/98 backdrop-blur-xl border-b border-[#E7E4DD] px-5 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#B88C46] mb-1 font-semibold">
              Menu Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[15px] font-medium py-3 px-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isActive
                      ? 'text-[#101E2D] bg-white border-[#B88C46]/40 font-semibold shadow-xs'
                      : 'text-[#50647A] hover:text-[#101E2D] hover:bg-white/60 border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#B88C46] font-semibold">{link.num}</span>
                    <span>{link.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#B88C46] opacity-70" />
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E7E4DD]">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[14.5px] font-semibold text-white bg-[#101E2D] hover:bg-[#182C40] transition shadow-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-[#B88C46]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
