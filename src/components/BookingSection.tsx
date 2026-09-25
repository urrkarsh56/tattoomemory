import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, Send, CheckCircle2, X, Sparkles, MapPin, MessageCircle } from 'lucide-react';

interface BookingSectionProps {
  isOpen: boolean;
  onClose: () => void;
  presetConceptTitle?: string;
  presetConceptDetails?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  isOpen,
  onClose,
  presetConceptTitle = '',
  presetConceptDetails = ''
}) => {
  const [service, setService] = useState('Tattoo Session');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('14:00');
  const [placement, setPlacement] = useState('Forearm');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (presetConceptTitle) {
      setNotes(`AI Stencil Concept: ${presetConceptTitle}\n${presetConceptDetails}`);
    }
  }, [presetConceptTitle, presetConceptDetails]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Format WhatsApp message
    const message = `Hello Tattoo Memory Indore! I would like to book a studio session.
📌 Name: ${name}
📞 Contact: ${phone}
🎨 Service: ${service}
📍 Placement: ${placement}
📅 Preferred Date & Time: ${date} at ${time}
💡 Design Concept: ${notes || 'Custom design discussion'}`;

    const whatsappUrl = `https://wa.me/918839265959?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#051F20]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#0B2B26] border border-[#235347] rounded-[32px] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(5,31,32,0.95)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-[#163832] border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4 text-[#8EB69B]" />
                <span>Somani Nagar, Indore • Open 24 Hours</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#DAF1DE]">
                Book Studio Appointment
              </h3>
              <p className="text-xs text-[#8EB69B] font-sans mt-1">
                Lock your session with Indore's 5.0-star rated tattoo & piercing studio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Type */}
              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1.5">Service Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Tattoo Session', 'Piercing Session', 'Touch-Up / Custom'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`py-2.5 px-3 text-xs font-medium rounded-xl border text-center transition-all duration-200 active:scale-95 ${
                        service === s
                          ? 'bg-[#DAF1DE] text-[#051F20] font-bold border-[#DAF1DE] shadow-sm'
                          : 'bg-[#163832] border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B]/50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Verma"
                    className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] placeholder:text-[#8EB69B]/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 088392 65959"
                    className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] placeholder:text-[#8EB69B]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Time Slot (Open 24/7)</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] transition-colors"
                  >
                    <option value="11:00">11:00 AM (Morning Session)</option>
                    <option value="14:00">02:00 PM (Afternoon Session)</option>
                    <option value="17:00">05:00 PM (Evening Session)</option>
                    <option value="20:00">08:00 PM (Night Session)</option>
                    <option value="00:00">12:00 AM (Late Night / 24h Slot)</option>
                  </select>
                </div>
              </div>

              {/* Body Placement */}
              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Body Placement</label>
                <select
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value)}
                  className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] transition-colors"
                >
                  <option value="Forearm">Forearm</option>
                  <option value="Bicep / Arm">Bicep / Arm</option>
                  <option value="Wrist / Ankle">Wrist / Ankle</option>
                  <option value="Chest / Ribs">Chest / Ribs</option>
                  <option value="Back / Shoulder">Back / Shoulder</option>
                  <option value="Ear / Nose Piercing">Ear / Nose Piercing</option>
                </select>
              </div>

              {/* Design Idea Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Design Idea / Notes</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your design, reference ideas, size or placement preference..."
                  className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] placeholder:text-[#8EB69B]/40 resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-2xl flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <MessageCircle className="w-4 h-4 fill-[#051F20] group-hover:rotate-12 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span>Confirm & Open WhatsApp Instant Booking</span>
              </button>
            </form>
          </>
        ) : (
          /* Confirmation Success State */
          <div className="py-8 text-center space-y-4 animate-in zoom-in duration-200">
            <div className="w-14 h-14 rounded-full bg-[#235347] border border-[#8EB69B] text-[#DAF1DE] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-cinzel text-xl font-bold text-[#DAF1DE]">
              Studio Booking Request Sent!
            </h3>

            <p className="text-xs text-[#8EB69B] font-sans max-w-sm mx-auto leading-relaxed">
              Opening WhatsApp with your prefilled appointment details to <strong>088392 65959</strong>. We will confirm your exact time slot right away!
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 text-xs font-bold uppercase text-[#DAF1DE] bg-[#235347] hover:bg-[#163832] border border-[#235347] rounded-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
