import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Maximize2, X, Calendar, ShieldCheck, Heart, Phone, ArrowUpRight } from 'lucide-react';
import workShiva from '../assets/images/work_shiva_trishul_1790321656497.jpg';
import workLotus from '../assets/images/work_lotus_mandala_1790321668563.jpg';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  placement: string;
  technique: string;
  duration: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

interface WorkSectionProps {
  onOpenBooking: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenBooking }) => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const workItems: WorkItem[] = [
    {
      id: 'shiva-trishul-infinity',
      title: 'Lord Shiva Trishul & Mor Pankh Infinity',
      category: 'Spiritual & Fine Line',
      placement: 'Inner Forearm',
      technique: 'Single-Pass Fine Line & Solid Blackwork',
      duration: '2.5 Hours',
      description: 'Custom mythological fusion featuring an infinity loop seamlessly intertwined with Lord Shiva\'s Trishul (trident), Lord Krishna\'s Mor Pankh (peacock feather), a crescent moon, and a radiant sun motif. Executed with crisp needle precision and deep black ink saturation.',
      imageUrl: workShiva,
      highlights: [
        'Lord Shiva\'s Sacred Trishul',
        'Peacock Feather Detailing',
        'Crescent Moon & Sun Dial',
        'Endless Infinity Symbolism'
      ]
    },
    {
      id: 'surya-lotus-mandala',
      title: 'Sacred Surya Sun & Blooming Lotus',
      category: 'Mandala & Sacred Geometry',
      placement: 'Upper Back / Nape',
      technique: 'Micro Dotwork, Geometric Contour & Crimson Wash',
      duration: '3.5 Hours',
      description: 'Harmonious upper back solar composition with swirling flame rays radiating from a sacred lotus flower center. Features delicate crimson petal accents and micro-dot stippling that gracefully aligns with the spine and neckline contour.',
      imageUrl: workLotus,
      highlights: [
        'Radiating Sun Flame Rays',
        'Crimson Lotus Petal Wash',
        'Micro Dotwork Gradient',
        'Perfect Spinal Alignment'
      ]
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#051F20] relative border-t border-[#235347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-[#8EB69B]" />
              <span>Direct From Studio Sessions</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#DAF1DE]">
              Our Studio Work
            </h2>
            <p className="text-[#8EB69B] text-sm sm:text-base max-w-2xl font-sans font-normal mt-2 leading-relaxed">
              Recent authentic client pieces crafted right here at Tattoo Memory Indore. Witness the sharp line weight, smooth dotwork, and pristine healed finish.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:08839265959"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#DAF1DE] bg-[#163832] border border-[#235347] hover:border-[#8EB69B] hover:text-[#DAF1DE] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#8EB69B]" />
              <span>088392 65959</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedWork(item)}
              className="group relative bg-[#0B2B26] border border-[#235347] rounded-[32px] overflow-hidden p-5 sm:p-7 shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95)] hover:border-[#8EB69B]/70 hover:-translate-y-2 hover:shadow-[0_25px_50px_-10px_rgba(5,31,32,0.98),0_0_24px_rgba(35,83,71,0.35)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full rounded-[24px] overflow-hidden bg-[#051F20] mb-6 border border-[#235347]/60">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] filter brightness-95 group-hover:brightness-100"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051F20]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Studio verification watermark badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#051F20]/80 backdrop-blur-md border border-[#235347] text-[11px] text-[#DAF1DE] font-medium flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8EB69B]" />
                  <span>Studio Client Verified</span>
                </div>

                {/* Fullscreen Magnifier icon button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0B2B26]/85 backdrop-blur-md border border-[#235347] flex items-center justify-center text-[#DAF1DE] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg">
                  <Maximize2 className="w-4 h-4 text-[#DAF1DE]" />
                </div>

                {/* Category & Placement Ribbon */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#163832]/90 backdrop-blur-md border border-[#235347] text-[#DAF1DE] font-semibold">
                    {item.placement}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#051F20]/80 backdrop-blur-md border border-[#235347] text-[#8EB69B] font-mono text-[11px]">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Work Details */}
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[#8EB69B] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <span>{item.category}</span>
                    <span className="text-[#235347]">·</span>
                    <span>Tattoo Memory Indore</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#DAF1DE] group-hover:text-[#8EB69B] transition-colors duration-300 flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#8EB69B] group-hover:text-[#DAF1DE] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 ml-2" />
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#8EB69B] line-clamp-3 font-sans font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#235347]/60">
                  {item.highlights.map((h, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-medium text-[#DAF1DE] bg-[#163832] border border-[#235347] px-3 py-1 rounded-full group-hover:border-[#8EB69B]/40 transition-colors"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox High-Resolution Inspection Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 bg-[#051F20]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="relative w-full max-w-4xl bg-[#0B2B26] border border-[#235347] rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(5,31,32,0.95)] grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#163832]/90 backdrop-blur-sm border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="relative h-72 md:h-full bg-[#051F20] flex items-center justify-center overflow-hidden">
              <img
                src={selectedWork.imageUrl}
                alt={selectedWork.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#051F20]/80 backdrop-blur-md border border-[#235347] px-3 py-1.5 rounded-full text-xs text-[#DAF1DE]">
                Studio Work · Somani Nagar Indore
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div>
                <div className="text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-1">
                  {selectedWork.category}
                </div>
                
                <h3 className="font-cinzel text-2xl font-bold text-[#DAF1DE] mb-3">
                  {selectedWork.title}
                </h3>

                <p className="text-sm text-[#DAF1DE]/90 leading-relaxed font-sans mb-6">
                  {selectedWork.description}
                </p>

                {/* Metadata Checklist */}
                <div className="space-y-3 pt-4 border-t border-[#235347] text-xs">
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Body Placement:</span>
                    <strong className="text-[#DAF1DE]">{selectedWork.placement}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Needle Technique:</span>
                    <strong className="text-[#DAF1DE]">{selectedWork.technique}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Session Time:</span>
                    <strong className="text-[#DAF1DE]">{selectedWork.duration}</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Studio Contact:</span>
                    <strong className="text-[#DAF1DE]">088392 65959 (Open 24/7)</strong>
                  </div>
                  <div className="flex justify-between text-[#8EB69B]">
                    <span>Hygiene Protocol:</span>
                    <strong className="text-[#DAF1DE] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8EB69B]" /> 100% Sterile Single-Use Equipment
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#235347] space-y-2">
                <button
                  onClick={() => {
                    setSelectedWork(null);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Custom Appointment</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
