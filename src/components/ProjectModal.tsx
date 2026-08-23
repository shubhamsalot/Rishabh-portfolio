import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/portfolioData';
import { 
  X, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Building2 
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookCall: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookCall }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  if (!project) return null;

  const allImages = [project.heroImage, ...(project.galleryImages || [])];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Reframed Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-[#121212] border border-white/15 rounded-[32px] overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#181818]/95 sticky top-0 z-30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider shadow-sm shadow-brand-red/40">
                {project.category}
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                {project.year} • {project.client}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 flex items-center justify-center text-neutral-300 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
            
            {/* Title & Quick Info Ribbon */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-3xl sm:text-5xl font-extrabold font-display uppercase tracking-tight text-white">
                  {project.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-brand-red" />
                  <span>{project.client}</span>
                </div>
              </div>
              
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>

            {/* Featured Image Viewer with Thumbnails */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-neutral-950 h-72 sm:h-96">
                <img
                  src={allImages[activeImageIndex] || project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />

                {project.metrics && (
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-brand-red/40 px-4 py-2 rounded-full text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                    <Sparkles className="w-4 h-4 text-brand-red" />
                    <span>{project.metrics}</span>
                  </div>
                )}
              </div>

              {/* Multi-image thumbnail switcher if multiple images */}
              {allImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`h-16 w-24 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === i
                          ? 'border-brand-red ring-2 ring-brand-red/30'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Challenge vs Solution Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wide">
                  <Layers className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Solution</span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tags & Deliverables */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                <span>Scope of Execution & Deliverables</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Bottom Action Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-brand-red/20 via-[#181818] to-[#181818] border border-brand-red/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-white">Need high-impact design for your brand?</p>
                <p className="text-xs text-neutral-300">Book a quick discovery call with Rishab P. to discuss your timeline.</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBookCall();
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-brand-red/30 shrink-0"
              >
                <span>Book a Call with Rishab</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
