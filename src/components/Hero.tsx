import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, ShieldCheck, Clock, Phone, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);
  const scaleText = useTransform(scrollY, [0, 400], [1, 0.96]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#051F20]">
      {/* Parallax Background Media Container */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#051F20] via-[#051F20]/75 to-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051F20] via-transparent to-[#051F20] z-10" />
        
        {/* Hero Image Asset */}
        <img 
          src="/src/assets/images/hero_tattoo_studio_1790319756247.jpg" 
          alt="Tattoo Memory Indore Studio Work"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.15]"
        />

        {/* Ambient Subtle Green Glow Mesh */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#235347]/30 rounded-full blur-[120px] pointer-events-none animate-glow z-10" />
      </motion.div>

      {/* Main Hero Content Frame */}
      <motion.div 
        style={{ scale: scaleText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        {/* Unboxed Metadata Header Row */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#8EB69B] font-medium mb-6 bg-[#0B2B26]/60 backdrop-blur-sm border border-[#235347]/80 px-4 py-1.5 rounded-full shadow-sm"
        >
          <span className="flex items-center gap-1 text-[#DAF1DE] font-semibold">
            <Star className="w-4 h-4 fill-[#8EB69B] text-[#8EB69B]" />
            5.0 Rating
          </span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span>323 Google Reviews</span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8EB69B]" />
            Open 24 Hours
          </span>
          <span aria-hidden="true" className="text-[#235347]">·</span>
          <span className="text-[#DAF1DE] font-medium">Somani Nagar, Indore</span>
        </motion.div>

        {/* Dominant Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#DAF1DE] mb-6 leading-[1.1] max-w-4xl text-wrap-balance"
        >
          TATTOO MEMORY <br className="hidden sm:inline" />
          <span className="text-[#8EB69B]">
            INDORE
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#8EB69B] text-sm sm:text-base max-w-2xl font-sans font-normal leading-relaxed mb-12"
        >
          Spotless hygienic environment, master fine-line detailing, custom mythological work, and piercing artistry by Indore's premier women-owned studio.
        </motion.p>

        {/* Adjacency Proof Bar with Rounded Feature Containers */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 text-xs"
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0B2B26]/80 backdrop-blur-sm border border-[#235347] text-[#DAF1DE] hover:border-[#8EB69B]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(5,31,32,0.6)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-default">
            <ShieldCheck className="w-4 h-4 text-[#8EB69B] group-hover:scale-110 group-hover:text-[#DAF1DE] transition-all duration-300 shrink-0" />
            <span className="font-medium text-[#DAF1DE]">100% Sterile Medical-Grade Hygiene</span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0B2B26]/80 backdrop-blur-sm border border-[#235347] text-[#DAF1DE] hover:border-[#8EB69B]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(5,31,32,0.6)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-default">
            <Compass className="w-4 h-4 text-[#8EB69B] group-hover:rotate-45 group-hover:text-[#DAF1DE] transition-all duration-300 shrink-0" />
            <span className="font-medium text-[#DAF1DE]">Women-Owned & Safe Studio Space</span>
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0B2B26]/80 backdrop-blur-sm border border-[#235347] text-[#DAF1DE] hover:border-[#8EB69B]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(5,31,32,0.6)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group">
            <Phone className="w-4 h-4 text-[#8EB69B] group-hover:scale-110 group-hover:text-[#DAF1DE] transition-all duration-300 shrink-0" />
            <a href="tel:08839265959" className="font-medium text-[#DAF1DE] hover:text-[#8EB69B] transition-colors">
              Direct: 088392 65959
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};
