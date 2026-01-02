
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

  const cardWidth = 550;
  const gap = 30;

  useEffect(() => {
    if (!isHovered && !selectedImage) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
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
      }, 1100);
    } else if (activeIndex < baseItems.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseItems.length * 2 - 1);
      }, 1100);
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
    <section id="gallery" className="py-20 relative z-10 overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">{t.gallery_label}</p>
        <h3 className="text-5xl font-black mb-4 tracking-tight text-white uppercase italic">
          {t.gallery_title}
        </h3>
        <div className="w-24 h-2 bg-blue-600 rounded-full mx-auto mb-6"></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {t.gallery_description}
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex items-center ${isTransitioning ? 'transition-transform duration-700 cubic-bezier(0.2, 0.8, 0.2, 1)' : ''}`}
          style={{
            transform: `translateX(calc(50% - ${activeIndex * (cardWidth + gap) + (cardWidth / 2)}px))`,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          {items.map((item, idx) => {
            const offset = idx - activeIndex;
            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            // iTunes Cover Flow logic
            let rotateY = 0;
            let translateX = 0;
            let translateZ = 0;
            let scale = 1;
            let zIndex = 20 - dist;
            let opacity = 1;

            if (dist === 0) {
              // Center item
              rotateY = 0;
              scale = 1;
              zIndex = 30;
              opacity = 1;
            } else {
              // Side items
              const direction = offset < 0 ? 1 : -1;
              rotateY = 50 * direction; // Face inwards
              scale = 0.8;
              translateZ = -200;
              // Squeeze them together
              translateX = 150 * direction;
              opacity = Math.max(0.2, 1 - (dist * 0.3));
            }

            // Only render visible items to improve performance/visuals if needed, 
            // but for smooth sliding we render all.
            // We can hide far items
            const isVisible = dist < 5;

            return (
              <div
                key={`${item.id}-${idx}`}
                className={`flex-shrink-0 relative rounded-[3.5rem] overflow-hidden cursor-pointer transition-all duration-700 ease-out
                  ${isCenter ? 'shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9)] ring-4 ring-white/10' : ''}
                `}
                style={{
                  width: `${cardWidth}px`,
                  height: '700px',
                  // We use absolute positioning modifiers via transform to achieve the stack effect
                  // But we are in a flex container, so we use margin or just transform
                  // If we use translateX in transform, it moves visually but takes same space.
                  // To stack, we might want negative margins?
                  // Let's rely on the flex container's natural spacing + translateX to pull them in.
                  margin: `0 ${gap / 2}px`,
                  transform: `
                    perspective(1000px)
                    translateX(${translateX}px)
                    translateZ(${translateZ}px)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  zIndex: zIndex,
                  opacity: isVisible ? opacity : 0,
                  transformStyle: 'preserve-3d'
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
                  <div className="absolute top-12 left-12 z-30">
                    <span className="px-6 py-2.5 bg-black/60 backdrop-blur-2xl rounded-full border border-white/20 text-xs font-black text-white uppercase tracking-widest shadow-2xl">
                      {t.gallery_label_ai}
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-16 text-left">
                  <h5 className="text-white font-black text-4xl mb-3 tracking-tighter">{item.name}</h5>
                  <div className="text-blue-400 text-sm font-bold tracking-widest uppercase flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                    View HD Masterpiece
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-xl mx-auto px-6 mt-12 flex items-center space-x-4">
        <span className="text-xs font-bold text-slate-600 transition-colors duration-300">01</span>
        <input
          type="range"
          min="0"
          max={baseItems.length - 1}
          value={activeIndex % baseItems.length}
          onChange={(e) => {
            setIsTransitioning(true);
            setActiveIndex(baseItems.length + parseInt(e.target.value));
          }}
          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer outline-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-12 [&::-webkit-slider-thumb]:h-1.5 
            [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(37,99,235,0.8)]
            hover:bg-slate-700 transition-colors"
        />
        <span className="text-xs font-bold text-slate-600 transition-colors duration-300">{String(baseItems.length).padStart(2, '0')}</span>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-12 bg-slate-950/98 backdrop-blur-3xl animate-fadeIn cursor-zoom-out" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img src={selectedImage} className="max-w-full max-h-full rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-zoomIn border border-white/5" alt="Zoom View" />
        </div>
      )}
    </section>
  );
};

export default AIGallery;
