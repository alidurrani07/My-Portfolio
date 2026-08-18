import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative">
      {/* Background radial glowing grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-blob-1 -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono font-semibold tracking-wider text-accent-hover uppercase"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Client <span className="gradient-text-blue-accent">Testimonials</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            Feedback from clients and collaborators, reflecting my commitment to quality and reliability.
          </motion.p>
        </div>

        {/* Testimonials Carousel Wrapper */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-[24px] p-8 md:p-12 glass-panel border border-white/5 shadow-premium text-center overflow-hidden min-h-[320px] flex flex-col justify-between items-center"
        >
          {/* Aesthetic background watermarks */}
          <div className="absolute top-4 left-6 text-9xl font-display font-black text-white/2 select-none pointer-events-none">
            “
          </div>
          <div className="absolute bottom-4 right-6 text-9xl font-display font-black text-white/2 select-none pointer-events-none">
            ”
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 md:space-y-8 flex flex-col items-center"
            >
              {/* Star ratings */}
              <div className="flex items-center gap-1">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-sans text-lg md:text-xl text-text-secondary font-light italic leading-relaxed max-w-3xl">
                "{TESTIMONIALS[activeIndex].review}"
              </blockquote>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 text-left">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-white/10 shadow-md object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-text-muted">
                    {TESTIMONIALS[activeIndex].role} at{' '}
                    <span className="text-accent-hover font-semibold">
                      {TESTIMONIALS[activeIndex].company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation indicators */}
          <div className="flex items-center gap-2 mt-8 z-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'bg-accent-secondary w-6 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Side arrow buttons */}
          <div className="absolute inset-y-0 left-2 md:left-4 flex items-center">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-muted hover:text-white transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 md:right-4 flex items-center">
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-accent-primary/20 hover:border-accent-primary/40 text-text-muted hover:text-white transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
