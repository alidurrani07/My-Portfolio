import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProjectGrid from './components/ProjectGrid';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Experience from './components/Experience';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'services', 'experience', 'contact'];

    const handleScroll = () => {
      // Offset for sticky navigation bar
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary text-white overflow-hidden selection:bg-accent-secondary/30 selection:text-white">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 grid-overlay opacity-50 pointer-events-none z-0" />
      <div className="absolute inset-0 noise-overlay opacity-[0.15] pointer-events-none z-0" />

      {/* Futuristic Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Nav */}
      <Navbar activeSection={activeSection} />

      {/* Main Container limiting maximum width to 1400px and centering layout */}
      <main className="relative z-10 max-w-[1400px] mx-auto overflow-hidden">
        <Hero />
        <Marquee />
        <ProjectGrid />
        <Services />
        <Process />
        <About />
        <Experience />
        <FAQ />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

