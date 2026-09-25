import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Droplets, Sun, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export const AftercareGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tattoo' | 'piercing'>('tattoo');

  return (
    <section className="py-24 bg-[#051F20] border-t border-[#235347] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-2">
            <Droplets className="w-4 h-4 text-[#8EB69B]" />
            <span>Studio Care Standards</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#DAF1DE] mb-3">
            Aftercare & Healing Protocol
          </h2>
          <p className="text-[#8EB69B] text-sm sm:text-base font-sans">
            Proper healing ensures vibrant black ink retention and crisp line work. Follow our proven 14-day studio healing roadmap.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="flex p-1.5 bg-[#0B2B26] border border-[#235347] rounded-2xl shadow-sm">
            <button
              onClick={() => setActiveTab('tattoo')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95 ${
                activeTab === 'tattoo'
                  ? 'bg-[#DAF1DE] text-[#051F20] shadow-md shadow-[#235347]/30'
                  : 'text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832]/60'
              }`}
            >
              Tattoo Healing Timeline
            </button>
            <button
              onClick={() => setActiveTab('piercing')}
              className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95 ${
                activeTab === 'piercing'
                  ? 'bg-[#DAF1DE] text-[#051F20] shadow-md shadow-[#235347]/30'
                  : 'text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832]/60'
              }`}
            >
              Piercing Care Guide
            </button>
          </div>
        </motion.div>

        {activeTab === 'tattoo' ? (
          /* Tattoo Timeline Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Phase 1',
                days: 'Days 1 - 3',
                title: 'Sterile Wrap & Gentle Clean',
                desc: 'Keep second-skin bandage on for 24h. Wash gently with warm water and fragrance-free antibacterial soap. Pat dry with clean paper towel.',
                icon: ShieldAlert,
              },
              {
                step: 'Phase 2',
                days: 'Days 4 - 7',
                title: 'Peeling & Light Ointment',
                desc: 'Apply a very thin layer of tattoo ointment 2x daily. Do not pick or scratch peeling flakes—let skin shed naturally.',
                icon: Droplets,
              },
              {
                step: 'Phase 3',
                days: 'Days 8 - 14',
                title: 'Hydration & Lock-in',
                desc: 'Switch to a fragrance-free lotion. The tattoo will look slightly dull or dry as new skin forms over the deep ink layer.',
                icon: Sparkles,
              },
              {
                step: 'Phase 4',
                days: 'Day 15+',
                title: 'Long-term UV Defense',
                desc: 'Apply SPF 50 sunscreen over healed tattoo before sun exposure in Indore heat to keep blacks jet dark for years.',
                icon: Sun,
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#163832] border border-[#235347] rounded-[24px] p-6 sm:p-7 shadow-xl relative flex flex-col justify-between hover:border-[#8EB69B]/70 hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95),0_0_24px_rgba(35,83,71,0.3)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-[#DAF1DE] bg-[#235347] border border-[#8EB69B]/30 px-3 py-1 rounded-full uppercase">
                      {phase.days}
                    </span>
                    <phase.icon className="w-5 h-5 text-[#8EB69B] group-hover:scale-110 group-hover:text-[#DAF1DE] group-hover:rotate-6 transition-all duration-300" />
                  </div>
                  
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#DAF1DE] mb-2 group-hover:text-[#8EB69B] transition-colors duration-300">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-[#8EB69B] leading-relaxed font-sans">
                    {phase.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#235347] text-[11px] text-[#8EB69B] flex items-center gap-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-[#8EB69B]" />
                  <span>{phase.step}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Piercing Care Cards */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Nostril & Septum Piercing',
                time: '6 - 12 Weeks Healing',
                dos: 'Clean 2x daily with sterile saline solution. Rotate titanium jewelry only during cleaning.',
                donts: 'Do not touch with unwashed hands, avoid swimming pools for 2 weeks.',
              },
              {
                title: 'Ear Helix & Tragus Piercing',
                time: '3 - 6 Months Healing',
                dos: 'Sleep on a travel pillow to avoid pressure. Spray saline rinse front and back gently.',
                donts: 'Avoid tight headphones or hair snagging during initial 30 days.',
              },
              {
                title: 'Belly / Navel Piercing',
                time: '4 - 9 Months Healing',
                dos: 'Wear loose breathable cotton clothing. Keep clean and dry after showers.',
                donts: 'Do not wear high-waisted tight denim waistbands over fresh piercing.',
              },
            ].map((p, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#163832] border border-[#235347] rounded-[24px] p-6 sm:p-7 shadow-xl space-y-4 hover:border-[#8EB69B]/70 hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95),0_0_24px_rgba(35,83,71,0.3)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#DAF1DE] group-hover:text-[#8EB69B] transition-colors duration-300">{p.title}</h3>
                  <span className="text-[10px] text-[#DAF1DE] bg-[#235347] border border-[#8EB69B]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {p.time}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-sans">
                  <div className="text-[#DAF1DE]">
                    <strong className="text-[#8EB69B]">✓ Do:</strong> <span className="text-[#DAF1DE]/90">{p.dos}</span>
                  </div>
                  <div className="text-[#8EB69B]">
                    <strong className="text-[#DAF1DE]">✕ Avoid:</strong> <span className="text-[#8EB69B]">{p.donts}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
