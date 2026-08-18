import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Calendar } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const handleBookCall = (e: React.MouseEvent) => {
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
    <section id="process" className="py-24 md:py-32 relative">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full glow-blob-3 -translate-x-1/2 -translate-y-1/2 -z-10" />

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
            <HelpCircle className="w-3.5 h-3.5" />
            Execution Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            My Development <span className="gradient-text-blue-accent">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            A clear, results-driven workflow powers every single milestone - from research to launch and post-launch scaling.
          </motion.p>
        </div>

        {/* 3-Step Process Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {PROCESS_STEPS.map((stepItem) => (
            <motion.div
              key={stepItem.step}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-[24px] p-8 md:p-10 bg-[#111827]/70 border border-white/5 hover:border-accent-primary/30 hover-glow transition-all duration-300 flex flex-col justify-between h-full overflow-hidden cursor-pointer"
            >
              {/* Massive background semi-transparent number */}
              <div className="absolute top-4 right-6 font-display font-black text-8xl md:text-9xl text-accent-primary/5 group-hover:text-accent-secondary/15 select-none transition-colors duration-300 pointer-events-none">
                {stepItem.step}
              </div>

              <div className="space-y-4 relative z-10 pt-8">
                <span className="font-mono text-xs font-bold text-accent-secondary uppercase tracking-widest bg-accent-primary/10 px-3 py-1 rounded-md">
                  Phase {stepItem.step}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-accent-hover transition-all pt-2">
                  {stepItem.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                  {stepItem.description}
                </p>
              </div>

              {/* Aesthetic indicator line */}
              <div className="w-12 h-[3px] bg-white/10 group-hover:bg-accent-secondary group-hover:w-full transition-all duration-500 rounded-full mt-8" />
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[24px] p-8 md:p-12 glass-panel-heavy border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="font-display font-bold text-xl md:text-2xl text-white">
              Build reliable, user-focused products with expert code.
            </h4>
            <p className="font-sans text-sm md:text-base text-text-secondary font-light">
              Are you ready to create something exceptional? Let's connect.
            </p>
          </div>

          <button
            onClick={handleBookCall}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-display font-bold text-white gradient-btn-primary hover-glow cursor-pointer transition-all duration-300 select-none shrink-0"
          >
            <Calendar className="w-5 h-5" />
            Book a call
          </button>
        </motion.div>

      </div>
    </section>
  );
}
