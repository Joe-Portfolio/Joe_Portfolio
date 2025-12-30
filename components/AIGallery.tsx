
import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data';
import { Translation, Language } from '../types';

interface AIGalleryProps {
  t: Translation;
  lang: Language;
}

const AIGallery: React.FC<AIGalleryProps> = ({ t, lang }) => {
  const baseItems = GALLERY_ITEMS[lang];
  // Create a tripled list for seamless looping (previous, current, next)
  const [items, setItems] = useState([...baseItems, ...baseItems, ...baseItems]);
  const [activeIndex, setActiveIndex] = useState(baseItems.length);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3500);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isHovered, activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex(prev => prev + 1);
  };

  // Reset to middle set when reaching the ends for seamless loop
  useEffect(() => {
    if (activeIndex >= baseItems.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseItems.length);
      }, 1000); // match transition duration
    } else if (activeIndex < baseItems.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseItems.length * 2 - 1);
      }, 1000);
    }
  }, [activeIndex, baseItems.length]);

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

      <div 
        className="relative w-full overflow-hidden py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''} px-[10%] md:px-[35%]`}
          style={{ transform: `translateX(-${activeIndex * 336}px)` }}
        >
          {items.map((item, idx) => {
            const isCenter = activeIndex === idx;
            return (
              <div 
                key={`${item.id}-${idx}`} 
                className={`flex-shrink-0 w-80 h-96 mx-2 relative rounded-3xl overflow-hidden cursor-pointer transform group ${
                  isCenter ? 'scale-110 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] rotate-0' : 'scale-90 opacity-30 blur-[1px] rotate-2'
                } transition-all duration-700`}
                onClick={() => setSelectedImage(isCenter ? item.result : null)}
              >
                <div className="absolute inset-0">
                  <img 
                    src={item.sketch} 
                    alt="Sketch"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isCenter ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img 
                    src={item.result} 
                    alt="AI Result"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isCenter ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>

                <div className="absolute top-6 left-6 z-30">
                   <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                     {isCenter ? t.gallery_label_ai : t.gallery_label_sketch}
                   </span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <h5 className="text-white font-bold text-lg">{item.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 flex items-center space-x-6">
        <div className="flex space-x-2">
          {baseItems.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setActiveIndex(baseItems.length + i);
              }}
              className={`h-1 transition-all duration-500 rounded-full ${activeIndex % baseItems.length === i ? 'w-12 bg-blue-500' : 'w-4 bg-slate-800 hover:bg-slate-600'}`}
            />
          ))}
        </div>
        <div className="text-[11px] font-black text-slate-600 uppercase tracking-widest">
          {(activeIndex % baseItems.length) + 1} / {baseItems.length}
        </div>
      </div>

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
