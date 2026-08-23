import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-brand-red selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Subtle Grain Overlay */}
      <div className="noise-bg" />

      {/* Top Sticky Glassmorphism Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Latest Projects Section */}
        <Projects onOpenBooking={handleOpenBooking} />

        {/* 3. Services ("What I help you to Shape") */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. About & Experience Section */}
        <About />

        {/* 5. Testimonials Marquee Section */}
        <Testimonials />

        {/* 6. FAQ Section */}
        <FAQ onOpenBooking={handleOpenBooking} />
      </main>

      {/* 7. Final CTA & Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking & Discovery Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
};

export default App;
