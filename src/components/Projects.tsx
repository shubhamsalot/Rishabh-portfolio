import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Quote
} from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenBooking: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenBooking }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Background Glow */}
      <div className="red-ambient-spot w-[550px] h-[550px] bg-brand-red top-1/4 -left-32 blur-[160px]" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white uppercase"
        >
          Latest <span className="text-brand-red">Projects</span>
        </motion.h2>
      </div>

      {/* Projects Grid Container with Floating Testimonial */}
      <div className="relative">
        {/* 2x2 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-[24px] bg-[#141316] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col p-4 sm:p-5 shadow-2xl"
            >
              {/* Thumbnail Image */}
              <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-neutral-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-medium text-neutral-200">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-red px-4 py-2 rounded-full shadow-lg">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="pt-5 pb-1 px-2 flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white group-hover:text-brand-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-brand-red transition-colors">
                  <span>View Project</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-red group-hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Testimonial Quote Card overlapping the grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 lg:mt-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 w-full max-w-lg mx-auto"
        >
          <div className="rounded-3xl bg-[#18171A]/95 backdrop-blur-xl border border-brand-red/50 p-6 sm:p-7 shadow-2xl shadow-brand-red/20 relative overflow-hidden group">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-brand-red/15 border border-brand-red/30 text-brand-red shrink-0">
                <Quote className="w-5 h-5 fill-brand-red" />
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-neutral-200 italic font-medium leading-relaxed">
                  {portfolioData.floatingTestimonial.quote}
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <img
                    src={portfolioData.floatingTestimonial.avatar}
                    alt={portfolioData.floatingTestimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-red/40"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {portfolioData.floatingTestimonial.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400">
                      {portfolioData.floatingTestimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* View All Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10 hover:border-brand-red/50 text-sm font-semibold transition-all duration-300 group"
        >
          <span>View all my projects</span>
          <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Interactive Project Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onBookCall={onOpenBooking}
      />
    </section>
  );
};
