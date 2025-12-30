
import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data.ts';
import { Translation, Language } from '../types.ts';

interface AIGalleryProps {
  t: Translation;
  lang: Language;
}

const AIGallery: React.FC<AIGalleryProps> = ({ t, lang }) => {
  const baseItems = GALLERY_ITEMS[lang];
  const [items, setItems] = useState([...baseItems, ...baseItems, ...baseItems]);
  const [activeIndex, setActiveIndex] = useState(baseItems.length);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Large sizing for "Cover Flow" effect
  const cardWidth = 500;
  const gap = 20;

  useEffect(() => {
    if (!isHovered && !selectedImage) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isHovered, activeIndex, selectedImage]);

  const handleNext = () => {
    setIsTransitioning(true);
    setActiveIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (activeIndex >= baseItems.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseItems.length);
      }, 1000);
    } else if (activeIndex < baseItems.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseItems.length * 2 - 1);
      }, 1000);
    }
  }, [activeIndex, baseItems.length]);

  const handleItemClick = (idx: number, result: string) => {
    if (activeIndex !== idx) {
      setIsTransitioning(true);
      setActiveIndex(idx);
    } else {
      setSelectedImage(result);
    }
  };

  return (
    <section id="gallery" className="py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="text-5xl font-black mb-6 tracking-tight text-white uppercase italic">
          {t.gallery_title}
        </h3>
        <div className="w-24 h-2 bg-blue-600 rounded-full mb-8"></div>
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          {t.gallery_description}
        </p>
      </div>

      <div 
        className="relative w-full overflow-hidden py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`flex items-center ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1)' : ''}`}
          style={{ 
            transform: `translateX(calc(50% - ${activeIndex * (cardWidth + gap) + (cardWidth / 2)}px))` 
          }}
        >
          {items.map((item, idx) => {
            const isCenter = activeIndex === idx;
            return (
              <div 
                key={`${item.id}-${idx}`} 
                className={`flex-shrink-0 relative rounded-[3rem] overflow-hidden cursor-pointer transform transition-all duration-1000 ${
                  isCenter 
                    ? 'z-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] scale-100 opacity-100' 
                    : 'scale-75 opacity-20 blur-[3px]'
                }`}
                style={{ 
                  width: `${cardWidth}px`, 
                  height: '600px', 
                  margin: `0 ${gap/2}px`,
                  perspective: '1000px'
                }}
                onClick={() => handleItemClick(idx, item.result)}
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
                
                {isCenter && (
                   <div className="absolute top-10 left-10 z-30">
                     <span className="px-5 py-2 bg-black/50 backdrop-blur-xl rounded-full border border-white/20 text-xs font-black text-white uppercase tracking-widest">
                       {t.gallery_label_ai}
                     </span>
                   </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-12">
                  <h5 className="text-white font-black text-3xl mb-2">{item.name}</h5>
                  <div className="text-blue-400 text-sm font-bold tracking-widest uppercase">Click to Enlarge</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center items-center space-x-4">
        {baseItems.map((_, i) => (
          <button 
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setActiveIndex(baseItems.length + i);
            }}
            className={`h-2 transition-all duration-500 rounded-full ${activeIndex % baseItems.length === i ? 'w-16 bg-blue-500' : 'w-4 bg-slate-800'}`}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-slate-950/98 backdrop-blur-3xl animate-fadeIn cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-white opacity-50 hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={selectedImage} className="max-w-full max-h-full rounded-3xl shadow-2xl animate-zoomIn border border-white/10" alt="Zoom View" />
        </div>
      )}
    </section>
  );
};

export default AIGallery;
