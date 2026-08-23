import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Globe, 
  Briefcase, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, BehanceIcon } from './SocialIcons';

export const About: React.FC = () => {
  const [showAllHistory, setShowAllHistory] = useState(false);

  const displayedHistory = showAllHistory
    ? portfolioData.workHistory
    : portfolioData.workHistory.slice(0, 2);

  return (
    <section id="about" className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Background Glow */}
      <div className="red-ambient-spot w-[550px] h-[550px] bg-brand-red bottom-10 right-1/4 blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white"
        >
          Designing experiences that <span className="text-brand-red">make sense.</span>
        </motion.h2>
      </div>

      {/* Side-By-Side Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Profile Card (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="rounded-[24px] bg-[#141316] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden group text-center">
            {/* Profile Photo */}
            <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1.5 bg-gradient-to-b from-brand-red/40 to-transparent shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
                <img
                  src={portfolioData.designer.aboutPhoto}
                  alt={portfolioData.designer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                {portfolioData.designer.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-neutral-300 max-w-xs mx-auto">
                {portfolioData.designer.title}
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-3">
              <a
                href={portfolioData.designer.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.designer.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.designer.socialLinks.behance}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.designer.socialLinks.dribbble}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Dribbble"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio (4 paragraphs) + Work History (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Bio text */}
          <div className="rounded-[24px] bg-[#141316] border border-white/10 p-7 sm:p-8 space-y-4 shadow-xl">
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              {portfolioData.bioParagraphs.map((para, index) => (
                <p key={index} className="opacity-95">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Work History Timeline */}
          <div className="rounded-[24px] bg-[#141316] border border-white/10 p-7 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-red" />
                <span>My work history</span>
              </h3>
            </div>

            <div className="space-y-5 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-white/10">
              <AnimatePresence>
                {displayedHistory.map((item, idx) => (
                  <motion.div
                    key={item.company + item.period}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="relative pl-8 group"
                  >
                    {/* Bullet */}
                    <div
                      className={`absolute left-2 top-2 w-3 h-3 rounded-full -translate-x-1/2 border ${
                        item.highlight
                          ? 'bg-brand-red border-brand-red ring-4 ring-brand-red/20'
                          : 'bg-[#141316] border-neutral-400'
                      }`}
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-brand-red transition-colors">
                          {item.company}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {item.role}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {item.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Show all button */}
            <div className="pt-2 text-center">
              <button
                onClick={() => setShowAllHistory(!showAllHistory)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>{showAllHistory ? 'Show less' : 'Show all'}</span>
                {showAllHistory ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
