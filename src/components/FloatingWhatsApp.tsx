import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Fade in gracefully after scrolling down 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Tattoo Memory Indore, I would like to inquire about booking a tattoo / piercing session.");
    window.open(`https://wa.me/918839265959?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside 
      aria-label="Contact options"
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={openWhatsApp}
        aria-label="Direct Studio WhatsApp Chat"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-[#0B2B26]/90 backdrop-blur-md border border-[#235347] text-[#DAF1DE] shadow-[0_12px_32px_rgba(5,31,32,0.7)] hover:border-[#8EB69B]/70 hover:bg-[#163832] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(5,31,32,0.9),0_0_24px_rgba(35,83,71,0.4)] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
      >
        {/* Pulsing subtle green beacon ring */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8EB69B] opacity-70" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8EB69B]" />
        </span>

        {/* WhatsApp Icon with smooth subtle rotation on hover */}
        <MessageCircle className="w-5 h-5 text-[#DAF1DE] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />

        {/* Text Label */}
        <div className="text-left pr-1 hidden sm:block">
          <div className="text-xs font-bold tracking-wide uppercase text-[#DAF1DE]">
            WhatsApp Us
          </div>
          <div className="text-[10px] text-[#8EB69B] font-medium leading-none">
            Direct 24/7 Studio Chat
          </div>
        </div>
      </button>
    </aside>
  );
};
