import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Compass, Navigation, Heart, ExternalLink, Activity } from 'lucide-react';

export const StudioInfoMap: React.FC = () => {
  const [selectedDay] = useState<string>('Fridays');

  // Popular times data matching Google Maps prompt
  const popularTimes = [
    { time: '6a', level: 15 },
    { time: '9a', level: 35 },
    { time: '12p', level: 65 },
    { time: '3p', level: 85 },
    { time: '6p', level: 98 }, // Peak hours
    { time: '9p', level: 90 },
    { time: '12a', level: 45 },
    { time: '3a', level: 20 },
  ];

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Tattoo+Memory+Indore+60+Feet+Rd+Somani+Nagar+Indore',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="location" className="py-24 bg-[#0B2B26] border-t border-[#235347] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4 text-[#8EB69B]" />
            <span>Somani Nagar, Indore</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#DAF1DE] mb-3">
            Studio Location & Hours
          </h2>
          <p className="text-[#8EB69B] text-sm sm:text-base font-sans">
            Visit us in Somani Nagar on 60 Feet Road. We operate 24 hours a day to accommodate walk-ins and custom night sessions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Studio Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 bg-[#163832] border border-[#235347] rounded-[28px] p-6 sm:p-8 shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95)] space-y-6 hover:border-[#8EB69B]/60 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            
            {/* Address Block */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#0B2B26]/50 transition-colors duration-300">
                <div className="w-9 h-9 rounded-2xl bg-[#235347] border border-[#8EB69B]/40 text-[#DAF1DE] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#DAF1DE] mb-0.5">
                    Studio Address
                  </h3>
                  <p className="text-xs text-[#8EB69B] leading-relaxed font-sans">
                    60 Feet Rd, Somani Nagar, Indore, Madhya Pradesh 452005
                  </p>
                  <p className="text-[11px] text-[#DAF1DE] font-mono mt-1">
                    Plus Code: PRHF+H9 Indore, MP
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#0B2B26]/50 transition-colors duration-300">
                <div className="w-9 h-9 rounded-2xl bg-[#235347] border border-[#8EB69B]/40 text-[#DAF1DE] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#8EB69B] uppercase font-semibold">Direct Studio Call</div>
                  <a href="tel:08839265959" className="text-xs text-[#DAF1DE] hover:text-[#8EB69B] font-bold">
                    088392 65959
                  </a>
                </div>
              </div>

              {/* Hours & Pride Badge */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#0B2B26]/50 transition-colors duration-300">
                <div className="w-9 h-9 rounded-2xl bg-[#235347] border border-[#8EB69B]/40 text-[#DAF1DE] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#8EB69B] uppercase font-semibold">Opening Schedule</div>
                  <span className="text-xs font-bold text-[#DAF1DE] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#8EB69B] animate-ping" />
                    Open 24 Hours (7 Days a Week)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 text-xs text-[#DAF1DE] bg-[#235347] p-3.5 rounded-2xl border border-[#8EB69B]/30">
                <Heart className="w-4 h-4 fill-[#8EB69B] text-[#8EB69B] shrink-0" />
                <span>Identifies as a <strong>Women-Owned Studio</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#235347] space-y-2">
              <button
                onClick={handleDirections}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 fill-[#051F20] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span>Get Google Maps Directions</span>
              </button>
            </div>

          </motion.div>

          {/* Map Preview & Popular Times Column */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Interactive Map Embed Container */}
            <div className="relative w-full h-64 sm:h-80 rounded-[28px] border border-[#235347] overflow-hidden shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95)] bg-[#051F20] flex flex-col items-center justify-center group hover:border-[#8EB69B]/60 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <iframe
                title="Tattoo Memory Indore Location"
                src="https://maps.google.com/maps?q=60+Feet+Rd,+Somani+Nagar,+Indore,+Madhya+Pradesh+452005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full filter grayscale contrast-125 invert opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
              />

              <button
                onClick={handleDirections}
                className="absolute bottom-4 right-4 bg-[#0B2B26]/90 backdrop-blur-md border border-[#235347] text-[#DAF1DE] hover:bg-[#163832] hover:border-[#8EB69B] hover:-translate-y-0.5 px-4 py-2 rounded-xl text-xs font-bold uppercase flex items-center gap-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Full Map</span>
              </button>
            </div>

            {/* Popular Times Graph */}
            <div className="bg-[#163832] border border-[#235347] rounded-[26px] p-6 sm:p-7 shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95)] space-y-4 hover:border-[#8EB69B]/60 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DAF1DE]">
                  <Activity className="w-4 h-4 text-[#8EB69B]" />
                  <span>Popular Times: {selectedDay}</span>
                </div>
                <span className="text-[10px] text-[#DAF1DE] bg-[#235347] border border-[#8EB69B]/30 px-2.5 py-1 rounded-full">
                  Peak: 6 PM - 9 PM
                </span>
              </div>

              {/* Bar Chart with Motion animation */}
              <div className="flex items-end justify-between gap-2 h-28 pt-4 border-b border-[#235347] px-2">
                {popularTimes.map((pt, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${pt.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className={`w-full rounded-t-lg transition-colors duration-300 ${
                        pt.level > 80 
                          ? 'bg-[#DAF1DE] shadow-[0_0_12px_rgba(218,241,222,0.4)]' 
                          : 'bg-[#235347] group-hover:bg-[#8EB69B]'
                      }`}
                    />
                    <span className="text-[10px] text-[#8EB69B] font-mono">{pt.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-[#8EB69B] font-sans">
                💡 Tip: Book appointments early for weekend afternoon and evening slots.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
