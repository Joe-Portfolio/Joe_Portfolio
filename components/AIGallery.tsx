
import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Translation, Language } from '../types';

interface AIGalleryProps {
  t: Translation;
  lang: Language;
}

const AIGallery: React.FC<AIGalleryProps> = ({ t, lang }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const items = GALLERY_ITEMS[lang];

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex(idx => (idx + 1) % items.length);
      }, 3500);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isHovered, items.length]);

  return (
    <section id="gallery" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white uppercase italic">
          {t.gallery_title}
        </h3>
        <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-8"></div>
        <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
          {t.gallery_description}
        </p>
      </div>

      {/* Horizontal Slider - Full Width */}
      <div 
        className="relative w-full overflow-hidden py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="flex transition-transform duration-1000 ease-in-out px-[10%] md:px-[30%]"
          style={{ transform: `translateX(-${activeIndex * 320}px)` }}
        >
          {items.map((item, idx) => (
            <div 
              key={item.id} 
              className={`flex-shrink-0 w-80 h-96 mx-4 relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 transform group ${
                activeIndex === idx ? 'scale-110 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] rotate-0' : 'scale-90 opacity-40 blur-[1px] rotate-2'
              }`}
              onClick={() => setSelectedImage(activeIndex === idx ? item.result : null)}
            >
              {/* Overlapping Animation Sketch to Result */}
              <div className="absolute inset-0">
                <img 
                  src={item.sketch} 
                  alt="Sketch"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === idx ? 'opacity-0' : 'opacity-100'}`}
                />
                <img 
                  src={item.result} 
                  alt="AI Result"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Labels */}
              <div className="absolute top-6 left-6 z-30">
                 <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                   {activeIndex === idx ? t.gallery_label_ai : t.gallery_label_sketch}
                 </span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h5 className="text-white font-bold text-lg">{item.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Nav */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center space-x-6">
        <div className="flex space-x-2">
          {items.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-12 bg-blue-500' : 'w-4 bg-slate-800 hover:bg-slate-600'}`}
            />
          ))}
        </div>
        <div className="text-[11px] font-black text-slate-600 uppercase tracking-widest">
          {activeIndex + 1} / {items.length}
        </div>
      </div>

      {/* Image Zoom Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-20 bg-slate-950/95 backdrop-blur-3xl animate-fadeIn cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full rounded-2xl shadow-2xl animate-zoomIn border border-white/10"
            alt="Zoom View"
          />
        </div>
      )}

      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-zoomIn { animation: zoomIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

export default AIGallery;
