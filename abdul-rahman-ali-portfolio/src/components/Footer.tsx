import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#050816] pt-16 pb-8 overflow-hidden select-none">
      {/* Background radial glowing circles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full glow-blob-1 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12">
        
        {/* Core elements: Logo, links, and socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Logo Info */}
          <div className="text-center md:text-left space-y-2">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="font-display font-bold text-xl md:text-2xl tracking-tight text-white flex items-center justify-center md:justify-start gap-2 cursor-pointer group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-[11px] font-mono font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-all">
                {PERSONAL_INFO.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()}
              </span>
              <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            </a>
            <p className="font-sans text-xs md:text-sm text-text-muted font-light">
              Crafting immersive high-fidelity interactive games.
            </p>
          </div>

          {/* Quick Footer Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="font-sans text-xs md:text-sm text-text-muted hover:text-white transition-colors cursor-pointer font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, '#about')}
              className="font-sans text-xs md:text-sm text-text-muted hover:text-white transition-colors cursor-pointer font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="font-sans text-xs md:text-sm text-text-muted hover:text-white transition-colors cursor-pointer font-medium"
            >
              Work
            </a>
            <a
              href="#faq"
              onClick={(e) => handleScrollTo(e, '#faq')}
              className="font-sans text-xs md:text-sm text-text-muted hover:text-white transition-colors cursor-pointer font-medium"
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="font-sans text-xs md:text-sm text-text-muted hover:text-white transition-colors cursor-pointer font-medium"
            >
              Contact
            </a>
          </div>

          {/* Social Profiles row */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-muted hover:text-white transition-all cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-muted hover:text-white transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-muted hover:text-white transition-all cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Massive back typography layout text logo */}
        <div className="w-full text-center py-4">
          <h2 className="font-display font-extrabold text-[12vw] tracking-[0.05em] leading-none text-white/5 uppercase select-none pointer-events-none filter blur-[0.5px]">
            {PERSONAL_INFO.name.toUpperCase()}
          </h2>
        </div>

        {/* Footer legalities and credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] md:text-xs text-text-muted font-light">
          <div className="text-center sm:text-left space-y-1">
            <div>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookies Settings</a>
              <a href="#license" className="hover:text-white transition-colors">License</a>
            </div>
          </div>

          <div className="flex items-center gap-1 text-center sm:text-right">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500 animate-pulse" />
            <span>by</span>
            <span className="font-medium text-white hover:text-accent-hover transition-colors cursor-pointer">
              {PERSONAL_INFO.name}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
