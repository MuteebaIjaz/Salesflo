import { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
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
      const navHeight = 80;
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
    const sections = ['home', 'services', 'about', 'portfolio', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          // If in portfolio or process, report matching nav highlight
          setActiveSection(sectionId === 'process' ? 'services' : sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#142438] flex flex-col selection:bg-[#B58B48]/20 selection:text-[#142438]">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main className="flex-grow">
        {/* SECTION 2: HERO BANNER */}
        <Hero
          onStartProject={() => scrollToSection('contact', true)}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* SECTION 3: SERVICES */}
        <Services onSelectService={handleSelectService} />

        {/* SECTION 4: ABOUT SALESFLO */}
        <About
          onLearnMore={() => scrollToSection('contact')}
          onExploreProject={(serviceName) => {
            if (serviceName) setSelectedService(serviceName);
            scrollToSection('contact', true);
          }}
        />

        {/* SECTION 5: OUR PROCESS */}
        <Process />

        {/* SECTION 6: CONTACT / INQUIRY FORM */}
        <Contact
          selectedService={selectedService}
          nameInputRef={nameInputRef}
        />
      </main>

      {/* SECTION 7: FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
