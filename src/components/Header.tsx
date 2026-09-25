import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Star } from 'lucide-react';
import { studioAudio } from '../utils/audio';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = studioAudio.toggle();
    setIsAudioPlaying(active);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#235347] via-[#8EB69B] to-[#DAF1DE] z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled 
            ? 'bg-[#051F20]/90 backdrop-blur-md border-b border-[#235347]/80 py-3 shadow-[0_10px_30px_rgba(5,31,32,0.8)]' 
            : 'bg-gradient-to-b from-[#051F20]/95 via-[#051F20]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <a 
            href="#" 
            className="group flex items-center gap-2.5 text-[#DAF1DE] hover:text-[#8EB69B] transition-colors duration-300"
          >
            <div className="w-8 h-8 rounded-full border border-[#235347] flex items-center justify-center bg-[#163832] group-hover:border-[#8EB69B] group-hover:bg-[#235347] group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <span className="font-cinzel text-xs font-bold text-[#DAF1DE]">TM</span>
            </div>
            <span className="font-cinzel text-base sm:text-lg font-extrabold tracking-wider whitespace-nowrap">
              TATTOO MEMORY <span className="text-[#8EB69B] font-normal text-sm ml-1 group-hover:text-[#DAF1DE] transition-colors duration-300">INDORE</span>
            </span>
          </a>

          {/* Zone 2: Clean Text Navigation Links with Smooth Animated Underline */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider text-[#8EB69B] uppercase">
            <a 
              href="#work" 
              className="relative py-1 hover:text-[#DAF1DE] transition-colors duration-300 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8EB69B] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              Work
            </a>
            <a 
              href="#gallery" 
              className="relative py-1 hover:text-[#DAF1DE] transition-colors duration-300 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8EB69B] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              Artistry & Flash
            </a>
            <a 
              href="#reviews" 
              className="relative py-1 hover:text-[#DAF1DE] transition-colors duration-300 whitespace-nowrap flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8EB69B] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <span>Reviews</span>
              <span className="text-[#DAF1DE] text-[10px] bg-[#163832] border border-[#235347] px-2 py-0.5 rounded-full group-hover:border-[#8EB69B] transition-colors">5.0★</span>
            </a>
            <a 
              href="#location" 
              className="relative py-1 hover:text-[#DAF1DE] transition-colors duration-300 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#8EB69B] hover:after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              Studio & Map
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3">
            {/* Ambient Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              title={isAudioPlaying ? "Mute Studio Ambient Sound" : "Enable Ambient Studio Soundscape"}
              className="p-2.5 rounded-full border border-[#235347] bg-[#163832] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(22,56,50,0.5)] active:translate-y-0 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] relative group"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-[#DAF1DE] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] text-[#DAF1DE] bg-[#0B2B26] border border-[#235347] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md">
                {isAudioPlaying ? "Mute Atmosphere" : "Studio Sound"}
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#235347] bg-[#163832] text-[#DAF1DE] hover:text-[#8EB69B] hover:border-[#8EB69B] active:scale-95 transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B2B26]/98 backdrop-blur-lg border-b border-x border-[#235347] rounded-b-[24px] px-6 py-6 mt-3 space-y-4 shadow-[0_20px_40px_rgba(5,31,32,0.9)] animate-in slide-in-from-top-2 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center gap-2 text-xs text-[#8EB69B] pb-2 border-b border-[#235347]">
              <Star className="w-3.5 h-3.5 fill-[#8EB69B] text-[#8EB69B]" />
              <span>5.0 Star Rated (323+ Reviews) • Somani Nagar, Indore</span>
            </div>
            
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#DAF1DE] hover:text-[#8EB69B] py-2 transition-colors duration-200"
            >
              Our Studio Work
            </a>
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#DAF1DE] hover:text-[#8EB69B] py-2 transition-colors duration-200"
            >
              Artistry & Flash Gallery
            </a>
            <a 
              href="#reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#DAF1DE] hover:text-[#8EB69B] py-2 transition-colors duration-200"
            >
              Client Reviews & Stories
            </a>
            <a 
              href="#location" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#DAF1DE] hover:text-[#8EB69B] py-2 transition-colors duration-200"
            >
              Location, Hours & Directions
            </a>

            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 text-center text-xs font-bold tracking-wider uppercase text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-xl shadow-lg"
              >
                Book Studio Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
