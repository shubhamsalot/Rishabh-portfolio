import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeList = [...portfolioData.testimonials, ...portfolioData.testimonials];

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden scroll-mt-20">
      {/* Background Glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-brand-red/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[130px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-red font-bold mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Love & Trust</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white max-w-3xl mx-auto"
        >
          Hear from what my clients <span className="text-brand-red">have to say.</span>
        </motion.h2>

        {/* Repeat 99+ Happy Clients Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#141414] border border-white/10 shadow-lg"
        >
          <div className="flex -space-x-2.5 overflow-hidden">
            {portfolioData.clientAvatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Client"
                className="inline-block h-7 w-7 rounded-full ring-2 ring-[#141414] object-cover"
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">
              {portfolioData.designer.happyClients} Happy clients & counting
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee Container with Gradient edge masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max cursor-grab active:cursor-grabbing">
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[400px] shrink-0 rounded-[24px] bg-[#141414] border border-[#222222] hover:border-brand-red/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-neutral-600 group-hover:text-brand-red transition-colors" />
                </div>

                <p className="text-sm text-neutral-300 font-normal leading-relaxed line-clamp-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-brand-red/40 transition-all"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-white truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-400 truncate">
                    {item.role}, <span className="text-neutral-300 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
