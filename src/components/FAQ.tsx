import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Plus, ArrowUpRight } from 'lucide-react';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-4 mb-16 flex-wrap">
        <div className="flex items-center gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white"
          >
            FAQs
          </motion.h2>

          {/* Small Avatar Chip labeled "Rishab P." */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18171A] border border-white/10 shadow-md">
            <img
              src={portfolioData.designer.avatar}
              alt={portfolioData.designer.name}
              className="w-5 h-5 rounded-full object-cover ring-1 ring-brand-red"
            />
            <span className="text-xs font-semibold text-neutral-200">
              {portfolioData.designer.name}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Numbered Accordion List (8 cols) */}
        <div className="lg:col-span-8 space-y-3.5">
          {portfolioData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-[20px] transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#18171A] border border-brand-red/40'
                    : 'bg-[#141316] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isOpen ? 'text-brand-red' : 'text-neutral-500'
                      }`}
                    >
                      {faq.number}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Rotating Plus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? 'bg-brand-red text-white'
                        : 'bg-white/5 border border-white/10 text-neutral-400'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 pl-14 sm:pl-16">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Floating Red Discovery Call Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <div className="rounded-[24px] bg-gradient-to-br from-[#200c0a] to-[#140b0b] border border-brand-red/50 p-7 sm:p-8 space-y-5 shadow-2xl shadow-brand-red/20 relative overflow-hidden">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white leading-snug">
                Still not sure? <br />
                <span className="text-brand-red">Book a free discovery call.</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                It should make your brand clear, strong, and easy to trust. If that’s what you’re aiming for, we should talk.
              </p>
            </div>

            {/* Schedule Now Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-brand-red/30 flex items-center justify-center gap-2"
            >
              <span>Schedule Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
