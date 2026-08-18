import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Palette, Terminal } from 'lucide-react';
import { SERVICES } from '../data';

// Map icon strings to actual Lucide component objects
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code: Code,
  Smartphone: Smartphone,
  Palette: Palette,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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

  return (
    <section id="services" className="py-24 md:py-32 relative bg-bg-primary/20">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full glow-blob-2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono font-semibold tracking-wider text-accent-hover uppercase"
          >
            <Terminal className="w-3.5 h-3.5" />
            My Offerings
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Professional <span className="gradient-text-blue-accent">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            From interfaces to full-stack, I build modern digital products that are scalable, accessible, and user-friendly.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((srv) => {
            const IconComponent = ICON_MAP[srv.iconName] || Code;
            return (
              <motion.div
                key={srv.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-[24px] p-8 glass-panel border border-white/5 hover:border-accent-primary/30 shadow-premium hover-glow transition-all duration-300 flex flex-col justify-between items-start text-left h-full cursor-pointer"
              >
                {/* Soft blue glow mesh corner behind icon */}
                <div className="absolute top-0 left-0 w-24 h-24 rounded-br-full bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors duration-300 -z-10" />

                <div className="space-y-6">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-secondary group-hover:bg-accent-primary/20 group-hover:border-accent-primary/40 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-accent-hover transition-colors">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Aesthetic minimal bottom design bar */}
                <div className="w-12 h-1 bg-accent-primary/30 group-hover:w-full group-hover:bg-accent-secondary rounded-full mt-8 transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Removed statistics strip as per user request */}

      </div>
    </section>
  );
}
