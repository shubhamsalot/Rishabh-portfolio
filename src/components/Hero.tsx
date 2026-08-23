import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Star, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Red Ambient Glows */}
      <div className="red-ambient-spot w-[600px] h-[600px] bg-brand-red top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[160px]" />
      <div className="red-ambient-spot w-[350px] h-[350px] bg-brand-red bottom-10 right-10 blur-[130px]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-brand-red/40 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-sm shadow-brand-red" />
          <span className="text-xs font-medium tracking-wide text-neutral-300">
            {portfolioData.designer.status}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-brand-red" />
        </motion.div>

        {/* Large Bold Split Headline: THINK CREATIVELY (No 3D Face/Avatar at all) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full select-none"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.92] uppercase font-display flex flex-col items-center">
            <span className="text-white drop-shadow-sm">
              THINK
            </span>
            <span className="text-brand-red drop-shadow-[0_10px_40px_rgba(232,51,46,0.4)]">
              CREATIVELY
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 text-base sm:text-xl md:text-2xl text-neutral-300 max-w-2xl font-normal leading-relaxed tracking-tight"
        >
          {portfolioData.designer.tagline}
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(232, 51, 46, 0.5)' }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-bold text-base transition-all duration-300 shadow-xl shadow-brand-red/30 flex items-center justify-center gap-2.5 group"
          >
            <Calendar className="w-4 h-4 text-white/90" />
            <span>Book a call with me</span>
            <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Overlapping Client Avatars + Happy Clients Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 inline-flex items-center gap-3.5 px-5 py-2.5 rounded-full bg-[#141316] border border-white/10 shadow-lg"
        >
          <div className="flex -space-x-2.5 overflow-hidden items-center">
            {portfolioData.clientAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client avatar ${i + 1}`}
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#141316] object-cover"
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-left">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white">
              {portfolioData.designer.happyClients} Happy clients
            </span>
          </div>
        </motion.div>

        {/* Grayscale Client Brand Logos Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 w-full pt-10 border-t border-white/5"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 opacity-50 hover:opacity-100 transition-opacity duration-300">
            {portfolioData.clientBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-default"
              >
                <span className="text-brand-red font-bold text-sm">{brand.symbol}</span>
                <span className="font-display font-bold tracking-wider text-xs sm:text-sm uppercase">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
