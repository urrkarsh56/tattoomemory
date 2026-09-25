import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ThumbsUp, Share2, Plus, X, Check, Heart } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  badge?: string;
  timeAgo: string;
  rating: number;
  tags: string[];
  content: string;
  likes: number;
  ownerResponse?: string;
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sulbha Borasi',
    badge: 'Local Guide · 39 reviews · 71 photos',
    timeAgo: 'a year ago',
    rating: 5,
    tags: ['detailing', 'friendly nature'],
    content: 'I had an amazing experience getting my tattoo done from this place. The attention to detail in their work is outstanding—clean lines, smooth shading. Their steady hand and artistic vision truly set them apart. On top of that, the shop was spotless, and hygiene was clearly a top priority. Professional, and friendly tattoo artist.',
    likes: 12,
    ownerResponse: 'Thank you so much Sulbha ji for your kind words! Hygiene and detailed fine line work are always our top priorities. 💖🙏'
  },
  {
    id: '2',
    author: 'Anaya Thakur',
    badge: '1 review · New',
    timeAgo: '3 weeks ago',
    rating: 5,
    tags: ['hand work design', 'humble artist'],
    content: 'I swear my experience was very amazing at the tattoo memory indore! Price was so affordable and the quality of work exceeded all expectations 💯. Highly recommended for anyone in Indore looking for custom tattoo art.',
    likes: 8,
    ownerResponse: 'Thank you Anaya! So glad you loved your tattoo experience with us! 💖🔥'
  },
  {
    id: '3',
    author: 'Pawan Rao',
    badge: '1 review',
    timeAgo: '11 months ago',
    rating: 5,
    tags: ['humble artist', 'detailing'],
    content: 'An incredible experience and a stunning tattoo! The artist is an absolute pro; the detail on my piece is flawless. They were friendly, professional, and made sure I was comfortable the entire time. The studio was clean, and I felt completely relaxed.',
    likes: 15,
    ownerResponse: '💖💖❤️🔥🙏'
  },
  {
    id: '4',
    author: 'Rohit Sharma',
    badge: 'Local Guide · 14 reviews',
    timeAgo: '2 months ago',
    rating: 5,
    tags: ['hand work design', 'friendly nature'],
    content: 'Got my Shiva trishul custom backpiece done here. The hand work design and shading precision are top-notch. Truly the best tattoo studio on 60 Feet Road, Somani Nagar!',
    likes: 6,
    ownerResponse: 'Thank you Rohit! It was a pleasure crafting your Shiva design. 🙏'
  }
];

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [writeModalOpen, setWriteModalOpen] = useState(false);

  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newContent, setNewContent] = useState('');
  const [newTag, setNewTag] = useState('detailing');

  const filteredReviews = reviews.filter(r => 
    selectedTag === 'all' ? true : r.tags.includes(selectedTag)
  );

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const created: Review = {
      id: Date.now().toString(),
      author: newAuthor,
      badge: 'Verified Client',
      timeAgo: 'Just now',
      rating: newRating,
      tags: [newTag],
      content: newContent,
      likes: 1,
      ownerResponse: 'Thank you for visiting Tattoo Memory Indore! 💖🙏'
    };

    setReviews([created, ...reviews]);
    setWriteModalOpen(false);
    setNewAuthor('');
    setNewContent('');
  };

  return (
    <section id="reviews" className="py-24 bg-[#0B2B26] relative">
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
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8EB69B] uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-[#8EB69B] text-[#8EB69B]" />
              <span>5.0 Star Rated • 323 Verified Google Reviews</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#DAF1DE]">
              Client Stories & Feedback
            </h2>
          </div>

          <button
            onClick={() => setWriteModalOpen(true)}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(35,83,71,0.5)] active:translate-y-0 active:scale-[0.98] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center gap-2 shadow-md group"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            <span>Write a Review</span>
          </button>
        </motion.div>

        {/* Filter Tags Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {[
            { id: 'all', label: 'All Reviews (323)' },
            { id: 'humble artist', label: 'Humble Artist (2)' },
            { id: 'hand work design', label: 'Hand Work Design (2)' },
            { id: 'detailing', label: 'Detailing (2)' },
            { id: 'friendly nature', label: 'Friendly Nature (2)' },
          ].map(tag => (
            <button
              key={tag.id}
              onClick={() => setSelectedTag(tag.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95 ${
                selectedTag === tag.id
                  ? 'bg-[#235347] text-[#DAF1DE] border border-[#8EB69B]/60 shadow-sm'
                  : 'bg-[#163832] border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B]/40'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </motion.div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#163832] border border-[#235347] rounded-[24px] p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#8EB69B]/70 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-10px_rgba(5,31,32,0.95),0_0_24px_rgba(35,83,71,0.3)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-sm text-[#DAF1DE] flex items-center gap-2">
                      {rev.author}
                    </h3>
                    <div className="text-[11px] text-[#8EB69B] font-sans mt-0.5">
                      {rev.badge} · {rev.timeAgo}
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 text-[#DAF1DE]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#8EB69B] text-[#8EB69B]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#DAF1DE]/90 leading-relaxed font-sans mb-4">
                  "{rev.content}"
                </p>

                {/* Tag Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {rev.tags.map(t => (
                    <span key={t} className="text-[10px] text-[#DAF1DE] bg-[#235347] px-2.5 py-0.5 rounded-full border border-[#8EB69B]/30 capitalize">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="pt-3 border-t border-[#235347] text-xs bg-[#0B2B26] p-4 rounded-2xl">
                  <div className="font-semibold text-[#DAF1DE] text-[11px] mb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 fill-[#8EB69B] text-[#8EB69B]" />
                    <span>Response from Tattoo Memory Indore</span>
                  </div>
                  <p className="text-[#8EB69B] font-sans text-xs leading-relaxed">
                    {rev.ownerResponse}
                  </p>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {writeModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#051F20]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div className="relative w-full max-w-lg bg-[#0B2B26] border border-[#235347] rounded-[28px] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(5,31,32,0.95)]">
            <button
              onClick={() => setWriteModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#163832] border border-[#235347] text-[#8EB69B] hover:text-[#DAF1DE] hover:border-[#8EB69B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-cinzel text-xl font-bold text-[#DAF1DE] mb-4">
              Write Studio Review
            </h3>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] placeholder:text-[#8EB69B]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Rating</label>
                <div className="flex gap-1 text-[#DAF1DE]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewRating(s)}
                      className="p-1 hover:scale-110 active:scale-95 transition-transform"
                    >
                      <Star className={`w-5 h-5 ${s <= newRating ? 'fill-[#8EB69B] text-[#8EB69B]' : 'text-[#235347]'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Highlight Tag</label>
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] transition-colors"
                >
                  <option value="detailing">Detailing & Fine Line</option>
                  <option value="humble artist">Humble & Professional Artist</option>
                  <option value="hand work design">Hand Work Design</option>
                  <option value="friendly nature">Friendly Studio Environment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8EB69B] mb-1">Review Experience</label>
                <textarea
                  required
                  rows={3}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="Tell us about your tattoo/piercing experience..."
                  className="w-full bg-[#163832] border border-[#235347] rounded-xl p-2.5 text-xs text-[#DAF1DE] focus:outline-none focus:border-[#8EB69B] placeholder:text-[#8EB69B]/50 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-[#051F20] bg-[#DAF1DE] rounded-xl hover:bg-[#8EB69B] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              >
                Submit Studio Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
