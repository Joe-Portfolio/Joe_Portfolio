
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
  const [showResult, setShowResult] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const items = GALLERY_ITEMS[lang];

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        setShowResult(prev => {
          if (prev) {
            setActiveIndex(idx => (idx + 1) % items.length);
            return false;
          }
          return true;
        });
      }, 3000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isHovered, activeIndex, items.length]);

  const currentItem = items[activeIndex];

  return (
    <section id="gallery" className="py-32 px-6 relative z-10 bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white uppercase italic">
            {t.gallery_title}
          </h3>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            {t.gallery_description}
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto aspect-[16/10] group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-2 gap-4 h-full">
            <div 
              className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 cursor-zoom-in transition-all duration-500 hover:border-blue-500/30"
              onClick={() => setSelectedImage(currentItem.sketch)}
            >
              <img 
                src={currentItem.sketch} 
                alt="Sketch"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                {t.gallery_label_sketch}
              </div>
            </div>

            <div 
              className={`relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 cursor-zoom-in transition-all duration-1000 transform ${showResult ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4 scale-95'} hover:border-purple-500/30`}
              onClick={() => setSelectedImage(currentItem.result)}
            >
              <img 
                src={currentItem.result} 
                alt="AI Result"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">
                {t.gallery_label_ai}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
            {items.map((_, i) => (
              <button 
                key={i}
                onClick={() => { setActiveIndex(i); setShowResult(false); }}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-blue-500' : 'bg-slate-700 hover:bg-slate-500'}`}
              />
            ))}
          </div>

          <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center">
             <div className="h-32 w-px bg-slate-800 relative">
               <div 
                className="absolute top-0 left-0 w-full bg-blue-500 transition-all duration-100"
                style={{ height: `${((activeIndex + 1) / items.length) * 100}%` }}
               ></div>
             </div>
             <span className="mt-4 text-[10px] font-black text-slate-600 uppercase tracking-tighter rotate-90 origin-left whitespace-nowrap">
               {lang === 'ko' ? '프로젝트' : 'Project'} {activeIndex + 1} / {items.length}
             </span>
          </div>
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
      `}</style>
    </section>
  );
};

export default AIGallery;
