import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { GalleryBento } from './components/GalleryBento';
import { ReviewsSection } from './components/ReviewsSection';
import { AftercareGuide } from './components/AftercareGuide';
import { StudioInfoMap } from './components/StudioInfoMap';
import { Footer } from './components/Footer';
import { BookingSection } from './components/BookingSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenGeneralBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#051F20] text-[#DAF1DE] font-sans selection:bg-[#235347] selection:text-[#DAF1DE]">
      
      {/* Premium Header */}
      <Header
        onOpenBooking={handleOpenGeneralBooking}
      />

      <main>
        {/* Parallax Hero Section */}
        <Hero
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Real Studio Work Section */}
        <WorkSection
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Artistry & Flash Bento Gallery */}
        <GalleryBento
          onOpenBooking={handleOpenGeneralBooking}
        />

        {/* Real Client Reviews (5.0 Stars, 323 Reviews) */}
        <ReviewsSection />

        {/* Aftercare & Healing Protocol */}
        <AftercareGuide />

        {/* Location, Directions & Popular Times */}
        <StudioInfoMap />
      </main>

      {/* Animated Marquee Footer */}
      <Footer
        onOpenBooking={handleOpenGeneralBooking}
      />

      {/* Booking Appointment Modal & WhatsApp Trigger */}
      <BookingSection
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Floating Interactive WhatsApp CTA */}
      <FloatingWhatsApp />

    </div>
  );
}
