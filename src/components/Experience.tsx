import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Download, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES, RESUME_TIMELINE, PERSONAL_INFO } from '../data';

export default function Experience() {
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate a polished professional resume download
    const dummyResumeContent = `${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.role}\n\nEmail: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}\n\nPROFESSIONAL SUMMARY:\n${PERSONAL_INFO.bio}\n\nEDUCATION:\n- COMSATS University Islamabad, Abbottabad Campus (BS in Software Engineering)\n\nSKILLS:\n- Game Engines: Unity, Unreal Engine 5\n- Programming Languages: C#, C++, C, Python\n- Tools: Git, GitHub, VS Code, Blender 3D, Particle Systems`;
    
    const blob = new Blob([dummyResumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-bg-secondary/40">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full glow-blob-3 -z-10" />

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
            <Briefcase className="w-3.5 h-3.5" />
            History &amp; Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Experience &amp; <span className="gradient-text-blue-accent">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            My professional career timeline, technical history, and academic achievements.
          </motion.p>
        </div>

        {/* Timeline Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* Left Column: Professional Career Timeline */}
          <div className="space-y-8">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-accent-secondary" />
              Professional Experience
            </h3>

            {/* Vertical timeline track */}
            <div className="relative border-l-2 border-white/5 pl-6 sm:pl-8 ml-3 space-y-10 py-2">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={exp.id}
                  className="relative group"
                >
                  {/* Timeline dot marker node */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#050816] border-2 border-accent-secondary group-hover:border-accent-hover shadow-[0_0_10px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all">
                    <span className="w-2 h-2 rounded-full bg-accent-secondary group-hover:bg-accent-hover transition-colors" />
                  </span>

                  {/* Card Container */}
                  <div className="rounded-2xl p-6 bg-[#111827]/60 border border-white/5 group-hover:border-accent-primary/20 shadow-lg hover:shadow-premium transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-accent-hover transition-colors">
                          {exp.role}
                        </h4>
                        <div className="font-sans text-sm text-text-secondary">
                          <span className="font-semibold text-white">{exp.company}</span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-accent-hover bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20">
                        {exp.duration}
                      </span>
                    </div>

                    {/* Responsibilities lists */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary font-light">
                          <CheckCircle2 className="w-4 h-4 text-accent-secondary/50 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tag list */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-lg bg-white/5 font-mono text-[11px] text-text-muted hover:text-white transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline & PDF Download */}
          <div className="space-y-8">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent-secondary" />
              Education &amp; Credentials
            </h3>

            {/* Vertical timeline track for education */}
            <div className="relative border-l-2 border-white/5 pl-6 sm:pl-8 ml-3 space-y-10 py-2">
              {RESUME_TIMELINE.map((edu, index) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={edu.id}
                  className="relative group"
                >
                  {/* Timeline dot marker node */}
                  <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#050816] border-2 border-accent-secondary group-hover:border-accent-hover shadow-[0_0_10px_rgba(59,130,246,0.3)] flex items-center justify-center transition-all">
                    <span className="w-2 h-2 rounded-full bg-accent-secondary group-hover:bg-accent-hover transition-colors" />
                  </span>

                  {/* Card Container */}
                  <div className="rounded-2xl p-6 bg-[#111827]/60 border border-white/5 group-hover:border-accent-primary/20 shadow-lg hover:shadow-premium transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display font-bold text-lg text-white group-hover:text-accent-hover transition-colors">
                          {edu.title}
                        </h4>
                        <div className="font-sans text-sm text-text-secondary font-semibold">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="font-mono text-xs text-accent-hover bg-accent-primary/10 px-3 py-1 rounded-full border border-accent-primary/20">
                        {edu.year}
                      </span>
                    </div>

                    {/* Achievements bullets */}
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary font-light">
                          <CheckCircle2 className="w-4 h-4 text-accent-secondary/50 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume download box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 border border-dashed border-white/15 bg-white/5 hover:bg-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-accent-secondary/15 flex items-center justify-center text-accent-secondary shrink-0">
                  <Award className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">Full Resume Document</h4>
                  <p className="font-sans text-xs text-text-muted">Available in standard PDF format (TXT fallback)</p>
                </div>
              </div>
              
              <button
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs text-white gradient-btn-primary hover-glow cursor-pointer select-none"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
