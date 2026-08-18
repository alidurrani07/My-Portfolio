import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Trophy, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, LEO_PORTRAIT_URL, STATS } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const floatVariants = (duration: number, yDistance: number = 10) => ({
    animate: {
      y: [0, -yDistance, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  });

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-36 overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-blob-1 -translate-x-1/2 -translate-y-1/2 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full glow-blob-2 translate-x-1/2 translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left column: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Tagline / status badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs md:text-sm font-medium text-accent-hover select-none shadow-[0_0_15px_rgba(37,99,235,0.15)] border border-accent-primary/20"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="tracking-wide">AVAILABLE FOR GLOBAL PROJECTS</span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-white">
              Hi, I'm <span className="gradient-text-blue font-bold">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] gradient-text-blue-accent">
              {PERSONAL_INFO.role}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-light"
          >
            {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio}
          </motion.p>

          {/* Core Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="w-full sm:w-auto text-center font-display font-bold text-white px-8 py-4 rounded-2xl gradient-btn-primary hover-glow cursor-pointer transition-all duration-300"
            >
              Let's Connect
            </button>
            <button
              onClick={() => handleScrollTo('#projects')}
              className="w-full sm:w-auto text-center font-display font-bold text-white px-8 py-4 rounded-2xl glass-panel hover:bg-white/10 hover:border-white/20 hover-glow cursor-pointer transition-all duration-300"
            >
              See My Work
            </button>
          </motion.div>

          {/* Mini Social Icons row */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
            <span className="text-xs font-mono tracking-widest text-text-muted select-none">CONNECT WITH ME:</span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-secondary hover:text-white transition-all cursor-pointer"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Beautiful Portrait layout with Floating Badge metrics */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px] lg:min-h-[550px] mt-12 lg:mt-0 select-none">
          
          {/* Animated Glow Rings / Circles in Background */}
          <div className="absolute w-[350px] sm:w-[420px] h-[350px] sm:h-[420px] rounded-full border border-accent-primary/10 animate-[spin_50s_linear_infinite]" />
          <div className="absolute w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full border-dashed border-accent-secondary/25 animate-[spin_35s_linear_infinite_reverse]" />
          <div className="absolute w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] rounded-full bg-accent-primary/10 filter blur-3xl opacity-70 animate-pulse" />

          {/* Floating Badges */}
          
          {/* Badge 1: Playtesting Hours (Top Right) */}
          <motion.div
            variants={floatVariants(6, 12)}
            animate="animate"
            className="absolute -top-4 -right-2 md:right-4 z-20 glass-panel hover:bg-white/10 hover-glow px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-white leading-tight">
                {STATS[3].value}{STATS[3].suffix}
              </div>
              <div className="text-[11px] font-mono font-medium text-text-muted uppercase tracking-wider">
                {STATS[3].label}
              </div>
            </div>
          </motion.div>

          {/* Badge 2: Lines of C# (Top Left) */}
          <motion.div
            variants={floatVariants(5.2, -10)}
            animate="animate"
            className="absolute top-1/4 -left-6 md:left-2 z-20 glass-panel hover:bg-white/10 hover-glow px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
              <span className="text-xs font-mono font-bold text-accent-hover">&lt;/&gt;</span>
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-white leading-tight">
                {STATS[2].value}{STATS[2].suffix}
              </div>
              <div className="text-[11px] font-mono font-medium text-text-muted uppercase tracking-wider">
                {STATS[2].label}
              </div>
            </div>
          </motion.div>

          {/* Badge 3: Game Projects (Bottom Left) */}
          <motion.div
            variants={floatVariants(6.8, 8)}
            animate="animate"
            className="absolute bottom-8 -left-4 md:-left-2 z-20 glass-panel hover:bg-white/10 hover-glow px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
              <span className="text-xs font-mono font-bold text-accent-hover">{STATS[1].value}+</span>
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-white leading-tight">
                {STATS[1].value}{STATS[1].suffix}
              </div>
              <div className="text-[11px] font-mono font-medium text-text-muted uppercase tracking-wider">
                {STATS[1].label}
              </div>
            </div>
          </motion.div>

          {/* Badge 4: Years Active (Bottom Right) */}
          <motion.div
            variants={floatVariants(5.8, -14)}
            animate="animate"
            className="absolute bottom-4 -right-4 md:right-0 z-20 glass-panel hover:bg-white/10 hover-glow px-4 py-3 rounded-2xl flex items-center gap-3 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 text-accent-secondary">
              <span className="text-xs font-mono font-bold text-accent-hover">{STATS[0].value}+</span>
            </div>
            <div>
              <div className="text-lg font-display font-extrabold text-white leading-tight">
                {STATS[0].value}{STATS[0].suffix}
              </div>
              <div className="text-[11px] font-mono font-medium text-text-muted uppercase tracking-wider">
                {STATS[0].label}
              </div>
            </div>
          </motion.div>

          {/* Core Profile Frame (with subtle gradient background and halo) */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="relative w-[280px] sm:w-[340px] h-[280px] sm:h-[340px] rounded-full overflow-hidden border-[6px] border-white/10 bg-[#0B1226] shadow-[0_25px_60px_rgba(0,0,0,0.6)] group hover:border-accent-secondary/50 transition-all duration-500 cursor-pointer"
          >
            {/* Soft background blue glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/30 to-transparent opacity-60 z-10" />
            <img
              src={LEO_PORTRAIT_URL}
              alt={`${PERSONAL_INFO.name} Portrait`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-[center_18%] grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}
