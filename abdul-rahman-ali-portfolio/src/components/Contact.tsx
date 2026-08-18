import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validations
    if (!formData.name.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please write a brief message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending email api callback with absolute reliability
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background radial glowing circles and mesh layers */}
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full glow-blob-1 translate-x-1/2 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full glow-blob-3 -translate-x-1/2 -z-10" />

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
            <MessageSquare className="w-3.5 h-3.5" />
            GET IN TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Let's Build Something <span className="gradient-text-blue-accent">Amazing Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            Have an innovative concept, product requirements, or general career opportunities? Drop a line below!
          </motion.p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-[24px] p-8 bg-[#111827]/70 border border-white/5 shadow-premium text-left space-y-8">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white">Contact Information</h3>
              <p className="font-sans text-sm md:text-base text-text-secondary font-light leading-relaxed">
                Feel free to email me directly or schedule a brief meeting. I am typically available for client discussions during West Coast work hours.
              </p>

              <div className="space-y-6">
                {/* Email detail */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-secondary shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider">Email Address</h4>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-base font-sans font-semibold text-white hover:text-accent-hover transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-secondary shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider">Office Coordinates</h4>
                    <span className="text-base font-sans font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Reply detail */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-secondary shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-text-muted uppercase tracking-wider">Response Frequency</h4>
                    <span className="text-base font-sans font-semibold text-white">
                      Within 24 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick call CTA wrapper */}
            <div className="rounded-[24px] p-6 border border-dashed border-white/10 bg-white/2 hover:bg-white/5 text-left flex items-center justify-between gap-4 transition-all">
              <div>
                <h4 className="font-display font-bold text-sm text-white">Interactive Book Meeting</h4>
                <p className="font-sans text-xs text-text-muted">Schedule a discovery call via Cal.com</p>
              </div>
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-display font-bold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                Book 15m Chat
              </a>
            </div>
          </motion.div>

          {/* Right Column: Complete Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[24px] p-8 md:p-10 bg-[#111827]/70 border border-white/5 shadow-premium text-left relative min-h-[460px]">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="name-input" className="font-display font-bold text-xs text-text-secondary uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all font-sans text-sm"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label htmlFor="email-input" className="font-display font-bold text-xs text-text-secondary uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all font-sans text-sm"
                        />
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label htmlFor="subject-input" className="font-display font-bold text-xs text-text-secondary uppercase tracking-wider">
                        Project Subject
                      </label>
                      <input
                        id="subject-input"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Web Application Redesign"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all font-sans text-sm"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-2">
                      <label htmlFor="message-input" className="font-display font-bold text-xs text-text-secondary uppercase tracking-wider">
                        Message Details *
                      </label>
                      <textarea
                        id="message-input"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Describe your vision or project goals here..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[#050816]/60 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-accent-secondary focus:ring-1 focus:ring-accent-secondary transition-all font-sans text-sm resize-none"
                      />
                    </div>

                    {/* Form submissions validation errors feedback */}
                    {errorMsg && (
                      <div className="text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg text-center font-mono">
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      id="contact-form-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-display font-bold text-white gradient-btn-primary hover-glow cursor-pointer transition-all duration-300 disabled:opacity-50 select-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Secure Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  // Success Message Panel
                  <motion.div
                    key="success-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <CheckCircle2 className="w-8 h-8 animate-bounce" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">Message Dispatched!</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm font-light">
                      Thank you for connecting! Your message has been routed to {PERSONAL_INFO.name}. A secure response will be dispatched within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2 rounded-xl font-display font-semibold text-xs text-text-muted hover:text-white border border-white/10 hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
