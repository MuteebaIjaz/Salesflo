import { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('AI Automation');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  // Smooth scroll helper with header offset
  const scrollToSection = (sectionId: string, focusInput = false) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (focusInput) {
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 600);
      }
    }
  };

  // Service Card click handler: preselects service & smoothly scrolls to Contact
  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('contact', true);
  };

  // Intersection observer to track current visible section for active navbar link
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'about', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F4EF] text-[#101E2D] flex flex-col selection:bg-[#B88C46]/20 selection:text-[#101E2D]">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        {/* 1. HERO BANNER */}
        <Hero
          onStartProject={() => scrollToSection('contact', true)}
          onExploreServices={() => scrollToSection('portfolio')}
        />

        {/* 2. SERVICES (Asymmetric Bento Grid) */}
        <Services onSelectService={handleSelectService} />

        {/* 3. SELECTED WORK / PORTFOLIO (Large Case Studies) */}
        <Portfolio
          onExploreProject={(serviceName) => {
            if (serviceName) setSelectedService(serviceName);
            scrollToSection('contact', true);
          }}
        />

        {/* 4. ABOUT SALESFLO (Authentic Editorial Narrative) */}
        <About
          onLearnMore={() => scrollToSection('contact', true)}
        />

        {/* 5. HOW WE WORK (Engineering Timeline) */}
        <Process />

        {/* 6. CONTACT / INQUIRY FORM - STRICTLY LOCKED COMPONENT */}
        <Contact
          selectedService={selectedService}
          nameInputRef={nameInputRef}
        />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
