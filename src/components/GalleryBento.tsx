import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, X, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'fineline' | 'realism' | 'mythological' | 'piercing';
  categoryLabel: string;
  imageUrl: string;
  placement: string;
  timeSpent: string;
  technique: string;
  description: string;
  spanClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Sacred Mandala Forearm Sleeve',
    category: 'fineline',
    categoryLabel: 'Fine Line & Mandala',
    imageUrl: '/src/assets/images/tattoo_flash_mandala_1790319772699.jpg',
    placement: 'Forearm Outer',
    timeSpent: '3.5 Hours',
    technique: 'Single Needle Fine Line & Dotwork',
    description: 'Ultra-precise geometric symmetry with custom dotwork gradient shading.',
    spanClass: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: '2',
    title: 'Lord Shiva & Cosmic Trishul',
    category: 'mythological',
    categoryLabel: 'Traditional Mythological',
    imageUrl: '/src/assets/images/tattoo_flash_shiva_1790319787354.jpg',
    placement: 'Upper Bicep',
    timeSpent: '4.0 Hours',
    technique: 'Black & Grey Smooth Realism',
    description: 'Devotional Lord Shiva portrait crafted with subtle contrast and smoke textures.',
    spanClass: 'col-span-1 row-span-2'
  },
  {
    id: '3',
    title: 'Minimalist Unalome Lotus',
    category: 'fineline',
    categoryLabel: 'Fine Line & Mandala',
    imageUrl: '/src/assets/images/tattoo_flash_fineline_1790319806043.jpg',
    placement: 'Inner Wrist',
    timeSpent: '1.5 Hours',
    technique: 'Micro Fine Line',
    description: 'Elegant botanical lotus combined with spiritual unalome pathway.',
    spanClass: 'col-span-1 row-span-1'
  },
  {
    id: '4',
    title: 'Sterile Titanium Septum & Tragus',
    category: 'piercing',
    categoryLabel: 'Piercing Studio',
    imageUrl: '/src/assets/images/piercing_studio_work_1790319818518.jpg',
    placement: 'Septum / Ear Tragus',
    timeSpent: '20 Minutes',
    technique: 'Surgical Titanium Needle Piercing',
    description: 'Hypoallergenic implant-grade titanium studs applied with zero-touch sterile equipment.',
    spanClass: 'col-span-1 row-span-1'
  },
  {
    id: '5',
    title: 'Sacred Geometric Om Trishul',
    category: 'mythological',
    categoryLabel: 'Traditional Mythological',
    imageUrl: '/src/assets/images/tattoo_flash_mandala_1790319772699.jpg',
    placement: 'Spine / Upper Back',
    timeSpent: '3.0 Hours',
    technique: 'Geometric Line Art',
    description: 'High-contrast spiritual iconography customized for upper back placement.',
    spanClass: 'col-span-1 row-span-1'
  },
  {
    id: '6',
    title: 'Micro Realism Portrait Shading',
    category: 'realism',
    categoryLabel: 'Black & Grey Realism',
    imageUrl: '/src/assets/images/tattoo_flash_shiva_1790319787354.jpg',
    placement: 'Calf / Shin',
    timeSpent: '4.5 Hours',
    technique: 'Multi-Pass Blackwork Shading',
    description: 'Seamless shadow transitions designed to hold crisp detail for decades.',
    spanClass: 'col-span-1 md:col-span-2 row-span-1'
  }
];

interface GalleryBentoProps {
  onOpenBooking: () => void;
}

export const GalleryBento: React.FC<GalleryBentoProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedLightbox, setSelectedLightbox] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-24 bg-[#051F20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-2">
              Studio Showcase & Portfolio
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#DAF1DE]">
              Precision Artistry & Flash
            </h2>
          </div>

          {/* Interactive Filter Buttons (Functional Buttons, Segmented Control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0B2B26] border border-[#235347] rounded-2xl shadow-sm">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'fineline', label: 'Fine Line & Mandala' },
              { id: 'realism', label: 'Realism' },
              { id: 'mythological', label: 'Mythological' },
              { id: 'piercing', label: 'Piercing' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap active:scale-95 ${
                  activeFilter === tab.id 
                    ? 'bg-[#DAF1DE] text-[#051F20] shadow-md shadow-[#235347]/30' 
                    : 'text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedLightbox(item)}
              className={`group relative rounded-[26px] border border-[#235347] overflow-hidden bg-[#163832] hover:border-[#8EB69B]/70 hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95),0_0_24px_rgba(35,83,71,0.35)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${item.spanClass}`}
            >
              {/* Media Image */}
              <div className="w-full h-full min-h-[280px] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-90 group-hover:brightness-100"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051F20]/95 via-[#051F20]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Trigger Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B2B26]/85 backdrop-blur-sm border border-[#235347] flex items-center justify-center text-[#DAF1DE] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-md">
                <Maximize2 className="w-4 h-4 text-[#DAF1DE]" />
              </div>

              {/* Card Metadata */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-1.5">
                <div className="text-[11px] font-medium text-[#8EB69B] flex items-center gap-2">
                  <span>{item.categoryLabel}</span>
                  <span aria-hidden="true" className="text-[#235347]">·</span>
                  <span>{item.placement}</span>
                </div>
                
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#DAF1DE] group-hover:text-[#8EB69B] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#8EB69B] line-clamp-2 font-sans font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedLightbox && (
        <div className="fixed inset-0 z-50 bg-[#051F20]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="relative w-full max-w-4xl bg-[#0B2B26] border border-[#235347] rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(5,31,32,0.95)] grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedLightbox(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#163832]/90 backdrop-blur-sm border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="relative h-64 md:h-full bg-[#051F20] flex items-center justify-center overflow-hidden">
              <img
                src={selectedLightbox.imageUrl}
                alt={selectedLightbox.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Details Panel */}
            <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-1">
                  {selectedLightbox.categoryLabel}
                </div>
                
                <h3 className="font-cinzel text-2xl font-bold text-[#DAF1DE] mb-3">
                  {selectedLightbox.title}
                </h3>

                <p className="text-sm text-[#DAF1DE]/90 leading-relaxed font-sans mb-6">
                  {selectedLightbox.description}
                </p>

                {/* Technical Metadata */}
                <div className="space-y-3 pt-4 border-t border-[#235347] text-xs">
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Body Placement:</span>
                    <strong className="text-[#DAF1DE]">{selectedLightbox.placement}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Execution Technique:</span>
                    <strong className="text-[#DAF1DE]">{selectedLightbox.technique}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Session Duration:</span>
                    <strong className="text-[#DAF1DE]">{selectedLightbox.timeSpent}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Hygiene Protocol:</span>
                    <strong className="text-[#DAF1DE] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8EB69B]" /> 100% Sterile Single-Use Needles
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#235347]">
                <button
                  onClick={() => {
                    setSelectedLightbox(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Similar Design Session</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};
