import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-bg-secondary/20">
      {/* Background glowing blob */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full glow-blob-2 -translate-y-1/2 -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono font-semibold tracking-wider text-accent-hover uppercase"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Support center
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Frequently Asked <span className="gradient-text-blue-accent">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            Clear and concise answers to common questions about my design, coding, and workflow setup.
          </motion.p>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4 text-left">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? 'bg-[#111827]/80 border-accent-primary/40 shadow-premium'
                    : 'bg-[#111827]/40 border-white/5 hover:border-white/15'
                }`}
              >
                {/* Header / Question button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent-secondary rounded-[20px]"
                >
                  <span className="font-display font-bold text-base md:text-lg text-white group-hover:text-accent-hover transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-accent-primary/10 border-accent-primary/20 text-accent-secondary' : 'text-text-muted'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer block (collapsible) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:pb-8 pt-2 border-t border-white/5 text-sm md:text-base text-text-secondary leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
