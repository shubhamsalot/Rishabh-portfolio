import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Copy, 
  Check, 
  Globe, 
  ArrowUp
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, BehanceIcon } from './SocialIcons';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.designer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080808] border-t border-white/10 pt-28 pb-14 overflow-hidden">
      {/* Ambient Red Glow */}
      <div className="red-ambient-spot w-[650px] h-[650px] bg-brand-red bottom-0 left-1/2 -translate-x-1/2 blur-[170px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Stacked Headline matching reference */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="select-none"
          >
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-display uppercase tracking-tighter leading-[0.9] flex flex-col space-y-1">
              <span className="text-white">
                Lets
              </span>
              <span className="text-brand-red inline-block drop-shadow-[0_10px_35px_rgba(232,51,46,0.35)]">
                design
              </span>
              <span className="text-white">
                build
              </span>
              <span className="text-white">
                create
              </span>
              <span className="text-neutral-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl lowercase font-normal italic tracking-normal font-sans pt-2">
                incredible work together.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Contact Info & Action Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-y border-white/10 items-center">
          
          {/* Left: Email */}
          <div className="lg:col-span-6 space-y-2">
            <p className="text-xs uppercase font-bold tracking-widest text-neutral-400">
              Email
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={`mailto:${portfolioData.designer.email}`}
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white hover:text-brand-red transition-colors underline decoration-white/20 underline-offset-8"
              >
                {portfolioData.designer.email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Call Me + Book Now */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-4">
            <div className="text-left sm:text-right">
              <p className="text-xs uppercase font-bold tracking-widest text-neutral-400">
                Call Me
              </p>
              <p className="text-sm font-semibold text-neutral-200">
                Book a 20-min strategy call
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-brand-red/30 flex items-center justify-center gap-2 shrink-0"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Middle Footer */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
              Social:
            </span>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.designer.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 border border-white/10 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.designer.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 border border-white/10 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.designer.socialLinks.behance}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 border border-white/10 transition-colors flex items-center justify-center"
                aria-label="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.designer.socialLinks.dribbble}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-neutral-300 border border-white/10 transition-colors flex items-center justify-center"
                aria-label="Dribbble"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors flex items-center gap-1 border border-white/10 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Faint Background Wordmark "MR. RISHAB" */}
        <div className="relative pt-12 pb-4 text-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.035] text-neutral-100">
            <span className="text-7xl sm:text-9xl md:text-[14rem] font-extrabold tracking-tighter uppercase font-display whitespace-nowrap">
              MR. RISHAB
            </span>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
            <p>© 2026 Rishab Designs. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Crafted with <span className="text-brand-red">♥</span> for visionary brands.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
