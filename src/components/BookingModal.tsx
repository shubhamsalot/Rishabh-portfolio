import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  X, 
  Send, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Clock, 
  Mail, 
  User, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'brief' | 'call'>('brief');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Brand Identity',
    budget: '$3k - $6k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E8332E', '#ffffff', '#222222', '#ff4d47']
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      email: '',
      service: 'Brand Identity',
      budget: '$3k - $6k',
      message: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-2xl bg-[#141414] border border-white/15 rounded-[32px] overflow-hidden shadow-2xl z-10 my-auto"
        >
          {/* Top Header */}
          <div className="p-6 sm:p-7 border-b border-white/10 flex items-center justify-between bg-[#181818]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-red/15 border border-brand-red/30 flex items-center justify-center text-brand-red shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-tight text-white flex items-center gap-2">
                  <span>Start a Project</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-brand-red/20 text-brand-red font-sans font-semibold">
                    with Rishabh
                  </span>
                </h3>
                <p className="text-xs text-neutral-400">
                  {portfolioData.designer.status}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 flex items-center justify-center text-neutral-300 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="px-6 pt-5 flex gap-2">
            <button
              onClick={() => setActiveTab('brief')}
              className={`flex-1 py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                activeTab === 'brief'
                  ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/30'
                  : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Project Brief</span>
            </button>

            <button
              onClick={() => setActiveTab('call')}
              className={`flex-1 py-3 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 border ${
                activeTab === 'call'
                  ? 'bg-brand-red text-white border-brand-red shadow-lg shadow-brand-red/30'
                  : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 20-min Discovery</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold font-display text-white uppercase">
                  Brief Received by Rishabh!
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Rishabh will personally review your brief and get back to you at <span className="text-brand-red font-semibold">{form.email || 'your email'}</span> within 24 hours with next steps.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-7 py-3 rounded-full bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold transition-all shadow-lg"
                  >
                    Done & Return to Portfolio
                  </button>
                </div>
              </div>
            ) : activeTab === 'brief' ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-red" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 focus:border-brand-red rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-red" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 focus:border-brand-red rounded-2xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Service Scope
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 focus:border-brand-red rounded-2xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Brand Identity">Brand Identity & Visual System</option>
                      <option value="UI/UX Design">UI/UX & Product Design</option>
                      <option value="Packaging Design">Packaging & Label Architecture</option>
                      <option value="Design Strategy">Full-Stack Design Strategy</option>
                      <option value="Digital Creatives">Omnichannel Digital Creatives</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 focus:border-brand-red rounded-2xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="$1.5k - $3k">$1,500 – $3,000</option>
                      <option value="$3k - $6k">$3,000 – $6,000</option>
                      <option value="$6k - $12k">$6,000 – $12,000</option>
                      <option value="$12k+">$12,000+ (Full System)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Project Overview & Timeline
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your brand, current challenges, and targeted launch date..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#181818] border border-white/10 focus:border-brand-red rounded-2xl p-4 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-brand-red/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Brief to Rishabh</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Cal.com Direct Booking Mock Embed View */
              <div className="space-y-6 text-center py-4">
                <div className="p-6 rounded-2xl bg-[#181818] border border-white/10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/15 text-brand-red text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>20-Minute Video Call with Rishabh</span>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    Select a time slot that works for you
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                    We'll discuss your brand objectives, scope requirements, and determine the exact roadmap.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {['Tomorrow, 3:00 PM', 'Tomorrow, 5:30 PM', 'Next Mon, 11:00 AM', 'Next Mon, 2:00 PM', 'Next Tue, 4:00 PM', 'Next Wed, 6:00 PM'].map((slot, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSubmitted(true);
                          try {
                            confetti({ particleCount: 60, spread: 70 });
                          } catch {}
                        }}
                        className="p-3.5 rounded-2xl bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 text-xs font-semibold text-neutral-300 transition-all text-center group"
                      >
                        <span>{slot}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-neutral-500 flex items-center justify-center gap-1">
                  <span>Direct booking powered by Cal.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
