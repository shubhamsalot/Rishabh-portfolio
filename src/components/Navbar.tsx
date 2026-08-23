import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 px-5 shadow-2xl shadow-black/80'
            : 'bg-[#141414]/70 backdrop-blur-md border border-white/10 py-3.5 px-6'
        } flex items-center justify-between`}
      >
        {/* Left: Avatar + Name "Rishabh" */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Rishabh - Homepage"
        >
          <div className="relative">
            <img
              src={portfolioData.designer.avatar}
              alt={portfolioData.designer.name}
              className="w-9 h-9 rounded-full object-cover border border-white/20 group-hover:border-brand-red transition-colors duration-300"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0A0A0A] animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-brand-red transition-colors flex items-center gap-1.5">
              {portfolioData.designer.name}
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-neutral-300 font-normal">
                Pro
              </span>
            </span>
            <span className="text-[11px] text-neutral-400 hidden sm:inline">
              Brand & UI Designer
            </span>
          </div>
        </a>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-black/30 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Contact Pill CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpenBooking}
            className="relative group overflow-hidden bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-brand-red/25 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/80 group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 max-w-6xl mx-auto rounded-3xl bg-[#141414] border border-white/10 p-5 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-brand-red text-white py-3 rounded-full text-sm font-semibold text-center hover:bg-brand-red-hover transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-neutral-400 pt-1">
                {portfolioData.designer.status}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
