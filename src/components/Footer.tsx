import React from 'react';
import { Star, MapPin, Phone, Heart, ArrowUp, Calendar, Clock, Compass } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051F20] border-t border-[#235347] relative overflow-hidden text-[#8EB69B] font-sans">
      
      {/* Animated Marquee Ribbon Top Border */}
      <div className="w-full bg-[#0B2B26] py-3 border-y border-[#235347] overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#DAF1DE] flex items-center gap-8">
          <span>TATTOO MEMORY INDORE</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>5.0 STAR RATED (323 REVIEWS)</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>SOMANI NAGAR 60 FEET RD</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>OPEN 24 HOURS</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>WOMEN-OWNED STUDIO</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>FINE LINE & HYPER REALISM</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>TATTOO MEMORY INDORE</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>5.0 STAR RATED (323 REVIEWS)</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>SOMANI NAGAR 60 FEET RD</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>OPEN 24 HOURS</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>WOMEN-OWNED STUDIO</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#235347] flex items-center justify-center bg-[#163832]">
                <span className="font-cinzel text-xs font-bold text-[#DAF1DE]">TM</span>
              </div>
              <span className="font-cinzel text-xl font-extrabold text-[#DAF1DE] tracking-wider">
                TATTOO MEMORY <span className="text-[#8EB69B]">INDORE</span>
              </span>
            </div>

            <p className="text-xs text-[#8EB69B] leading-relaxed max-w-sm">
              Indore’s premier custom ink and precision piercing studio. Dedicated to spotless hygiene standards, intricate mythological work, fine line geometry, and micro realism.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#DAF1DE]">
              <Star className="w-4 h-4 fill-[#8EB69B] text-[#8EB69B]" />
              <span className="font-bold">5.0 Rating</span>
              <span className="text-[#235347]">·</span>
              <span className="text-[#8EB69B]">323 Verified Google Reviews</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#DAF1DE] uppercase tracking-wider mb-2">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-[#DAF1DE] transition-colors">Our Studio Work</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#DAF1DE] transition-colors">Artistry & Flash Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DAF1DE] transition-colors">Client Testimonials & Stories</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#DAF1DE] transition-colors">Studio Location & Hours</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-cinzel text-sm font-bold text-[#DAF1DE] uppercase tracking-wider mb-2">
              Studio Details
            </h4>
            <p className="text-[#8EB69B]">
              📍 60 Feet Rd, Somani Nagar, Indore, MP 452005
            </p>
            <p className="text-[#DAF1DE] font-bold">
              📞 Direct Call: <a href="tel:08839265959" className="hover:text-[#8EB69B] transition-colors underline">088392 65959</a>
            </p>
            <p className="text-[#DAF1DE] font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8EB69B]" />
              Open 24 Hours (7 Days a Week)
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm"
              >
                Book Studio Session
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#235347] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8EB69B] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tattoo Memory Indore. All rights reserved.</span>
            <span>·</span>
            <span className="text-[#DAF1DE] flex items-center gap-1.5 bg-[#0B2B26] border border-[#235347] px-3 py-1 rounded-full">
              <Heart className="w-3 h-3 fill-[#8EB69B] text-[#8EB69B]" /> Women-Owned Studio
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-[#235347] bg-[#163832] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
