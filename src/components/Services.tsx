import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Compass, 
  Flame, 
  Layers, 
  Package, 
  Layout, 
  ArrowUpRight,
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

interface ServiceCardItemProps {
  service: typeof portfolioData.services[0];
  index: number;
  onOpenBooking: () => void;
}

const ServiceCardItem: React.FC<ServiceCardItemProps> = ({
  service,
  index,
  onOpenBooking
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    const iconClass = isHovered ? "w-6 h-6 text-white" : "w-6 h-6 text-brand-red";
    switch (service.id) {
      case 'strategy':
        return <Compass className={iconClass} />;
      case 'brand-identity':
        return <Flame className={iconClass} />;
      case 'ui-ux':
        return <Layers className={iconClass} />;
      case 'packaging':
        return <Package className={iconClass} />;
      case 'digital-design':
        return <Layout className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div 
      className="relative w-full h-[75vh] min-h-[580px] max-w-4xl mx-auto"
      style={{
        // Give enough scroll track so the card stays pinned before the next one catches up
        zIndex: 10 + index
      }}
    >
      {/* Sticky Card - Pins at top: 120px while user scrolls through this track */}
      <div 
        className="sticky w-full"
        style={{ 
          top: `calc(100px + ${index * 12}px)`,
          zIndex: 10 + index
        }}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full rounded-[28px] p-8 sm:p-10 md:p-12 transition-all duration-300 shadow-2xl relative overflow-hidden ${
            isHovered
              ? 'bg-[#E8332E] text-white border-2 border-white/40 shadow-[0_25px_80px_rgba(232,51,46,0.6)]'
              : 'bg-[#151418] text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-brand-red/50'
          }`}
          style={{
            // 100% Solid opaque background to prevent text bleed-through
            backgroundColor: isHovered ? '#E8332E' : '#151418'
          }}
        >
          {/* Top Row: Pills & Icon */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-sm sm:text-base font-bold px-3 py-1 rounded-full border transition-colors ${
                  isHovered
                    ? 'bg-black/30 text-white border-white/30'
                    : 'bg-white/5 text-neutral-400 border-white/10'
                }`}
              >
                {service.number}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  isHovered
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'bg-brand-red/10 text-brand-red border border-brand-red/20'
                }`}
              >
                ✦ Active Service
              </span>
            </div>

            {/* Top-Right Icon */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                isHovered
                  ? 'bg-white/20 text-white border border-white/30'
                  : 'bg-white/5 text-brand-red border border-white/10'
              }`}
            >
              {getIcon()}
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display uppercase tracking-tight text-white mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl transition-colors ${
              isHovered ? 'text-white/95' : 'text-neutral-300'
            }`}
          >
            {service.tagline}
          </p>

          {/* Bottom Row: Pill Tags & Action Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
            {/* Pill Tags */}
            <div className="flex flex-wrap gap-2">
              {service.items.map((item, i) => (
                <span
                  key={i}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    isHovered
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/5 text-neutral-300 border border-white/10'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Get Started Button */}
            <button
              onClick={onOpenBooking}
              className={`px-6 py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 shadow-xl flex items-center gap-1.5 shrink-0 ${
                isHovered
                  ? 'bg-white text-brand-red hover:bg-neutral-100'
                  : 'bg-brand-red hover:bg-brand-red-hover text-white shadow-brand-red/30'
              }`}
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  return (
    <section id="services" className="relative pt-20 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Background Ambient Glow */}
      <div className="red-ambient-spot w-[650px] h-[650px] bg-brand-red top-1/4 left-1/2 -translate-x-1/2 blur-[180px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white"
        >
          What I help you to <span className="text-brand-red">Shape…</span>
        </motion.h2>

        {/* Tools that I use ticker pill */}
        <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#151418] border border-white/10">
          <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            Tools:
          </span>
          {portfolioData.tools.map((tool) => (
            <span
              key={tool.name}
              className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-300"
            >
              {tool.name}
            </span>
          ))}
        </div>
      </div>

      {/* 5 Sequential Sticky Stacking Tracks */}
      <div className="relative flex flex-col items-center">
        {portfolioData.services.map((service, index) => (
          <ServiceCardItem
            key={service.id}
            service={service}
            index={index}
            onOpenBooking={onOpenBooking}
          />
        ))}
      </div>

      {/* Fixed Sticky Scroll Hint */}
      <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
        <span>Scroll to stack cards</span>
        <ArrowDown className="w-3.5 h-3.5 text-brand-red animate-bounce" />
      </div>
    </section>
  );
};
