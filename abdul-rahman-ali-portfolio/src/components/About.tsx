import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Globe, Award, Sparkles, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { PERSONAL_INFO, LEO_PORTRAIT_URL } from '../data';

const TECH_PILLS = [
  'Unity Engine',
  'C# Scripting',
  'Unreal Engine 5',
  'C++',
  'C Programming',
  'Python',
  'Git & GitHub',
  'VS Code & VS Studio',
  'Blender 3D Modeling',
  'OOP & Data Structures',
  'Software Engineering'
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-blob-1 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono font-semibold tracking-wider text-accent-hover uppercase"
          >
            <User className="w-3.5 h-3.5" />
            About {PERSONAL_INFO.name.split(' ')[0]}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            About <span className="gradient-text-blue-accent">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            I build intuitive digital products - scalable, high-performing, and made through collaboration.
          </motion.p>
        </div>

        {/* About Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Stylized Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-[24px] overflow-hidden glass-panel border border-white/5 p-6 md:p-8 flex flex-col items-center text-center gap-6 shadow-premium"
          >
            {/* Portrait Photo Container */}
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/20 to-transparent opacity-60 z-10" />
              <img
                src={LEO_PORTRAIT_URL}
                alt={`${PERSONAL_INFO.name} Portrait Inside Card`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_18%] group-hover:scale-105 transition-all duration-500 grayscale-[10%]"
              />
              {/* Pulse status badge */}
              <span className="absolute bottom-3 left-3 z-20 px-3 py-1 rounded-lg bg-bg-primary/95 backdrop-blur-md border border-white/10 flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest shadow-md select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            </div>

            {/* Profile bio summary */}
            <div className="space-y-2">
              <h3 className="font-display font-bold text-2xl text-white">{PERSONAL_INFO.name}</h3>
              <p className="font-sans text-sm text-text-secondary font-light max-w-xs">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Social profiles row */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleScrollToContact}
              className="w-full text-center py-3.5 rounded-xl font-display font-bold text-sm text-white gradient-btn-primary hover-glow cursor-pointer transition-all duration-300 select-none"
            >
              Let's Connect
            </button>
          </motion.div>

          {/* Right Column: Bio Facts & Technology Pills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Bio introduction blocks */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                Hi! I'm <span className="text-accent-hover">{PERSONAL_INFO.name}</span>.
              </h3>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                {PERSONAL_INFO.bio}
              </p>
              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                {PERSONAL_INFO.subBio}
              </p>
            </div>

            {/* Quick Fact Metric Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-white/5 py-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider">Location</div>
                  <div className="text-sm font-sans font-semibold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider">Languages</div>
                  <div className="text-sm font-sans font-semibold text-white">{PERSONAL_INFO.languages.join(', ')}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider">Education</div>
                  <div className="text-sm font-sans font-semibold text-white">BS in Software Engineering</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-medium text-text-muted uppercase tracking-wider">Background</div>
                  <div className="text-sm font-sans font-semibold text-white">Fresh Graduate (COMSATS)</div>
                </div>
              </div>

            </div>

            {/* Tech Stack Pills List */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-base text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                My Core Tech Stack
              </h4>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {TECH_PILLS.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-accent-primary/30 text-xs md:text-sm text-text-secondary hover:text-white transition-all cursor-pointer select-none"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
