
import React, { useState, useEffect } from 'react';
import { Experience as ExpType, Translation } from '../types';

interface ExperienceProps {
  experiences: ExpType[];
  t: Translation;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const initialCount = 4;
  const hasMore = experiences.length > initialCount;

  // Track mouse position globally for the tooltip
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (hoveredIdx !== null) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredIdx]);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-4 tracking-tight text-white uppercase">{t.experience_title}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative">
          {experiences.map((exp, idx) => {
            const isHidden = !isExpanded && idx >= initialCount;
            // Condensed highlights for the card preview
            const previewHighlights = exp.highlights.slice(0, 2);

            return (
              <div 
                key={idx} 
                className={`group p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-yellow-400/50 transition-all duration-500 backdrop-blur-sm cursor-help transform ${
                  isHidden ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100 relative'
                }`}
                style={{ 
                  display: isHidden ? 'none' : 'block',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{exp.period}</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-800 rounded-md">{exp.company}</span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-4">{exp.role}</h4>
                
                {/* Preview Highlights inside the card */}
                <ul className="space-y-2 mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  {previewHighlights.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-[11px] leading-snug line-clamp-1">
                      <span className="w-1 h-1 bg-slate-600 rounded-full mt-1.5 mr-2 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                  {exp.highlights.length > 2 && (
                    <li className="text-[9px] text-blue-500/70 font-bold italic ml-3">+ {exp.highlights.length - 2} more details...</li>
                  )}
                </ul>

                <div className="mt-auto text-[10px] text-slate-500 font-bold uppercase tracking-widest flex items-center pt-2 border-t border-slate-800/50 group-hover:border-yellow-400/30">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                  Hover for Full Details
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Post-it Popup with FULL Highlights */}
        {hoveredIdx !== null && (
          <div 
            className="fixed z-[200] pointer-events-none transition-transform duration-100 ease-out"
            style={{ 
              left: Math.min(mousePos.x + 20, window.innerWidth - 380), 
              top: Math.min(mousePos.y + 20, window.innerHeight - 400),
              transform: 'rotate(-0.5deg)'
            }}
          >
            <div className="bg-yellow-200 text-slate-900 p-6 rounded-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] min-w-[300px] max-w-[380px] relative animate-postitIn border-b-8 border-yellow-400/30">
              {/* Tape visual effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-white/40 rotate-1 backdrop-blur-sm"></div>
              
              <div className="mb-4 pb-2 border-b border-slate-900/10">
                <div className="text-[10px] font-black uppercase text-slate-500 mb-1">{experiences[hoveredIdx].period}</div>
                <h5 className="font-black text-sm uppercase tracking-tighter">
                  {experiences[hoveredIdx].company} - {experiences[hoveredIdx].role}
                </h5>
              </div>

              <ul className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {experiences[hoveredIdx].highlights.map((highlight, i) => (
                  <li 
                    key={i} 
                    className="text-[13px] font-medium leading-tight opacity-0 animate-writingIn"
                    style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
                  >
                    <span className="mr-1.5 font-bold">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <div className="absolute bottom-1 right-2 text-[8px] font-black opacity-20 uppercase">Resume Snippet</div>
              {/* Post-it folded corner look */}
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-400/40 rounded-tl-full"></div>
            </div>
          </div>
        )}

        {hasMore && (
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative px-10 py-4 rounded-full overflow-hidden border border-slate-700 bg-slate-900/50 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center space-x-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-white">
                <span>{isExpanded ? "Minimize History" : "Full Career Timeline"}</span>
                <svg 
                  className={`w-4 h-4 transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes postitIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px) rotate(2deg); }
          to { opacity: 1; transform: scale(1) translateY(0) rotate(-0.5deg); }
        }
        @keyframes writingIn {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-postitIn {
          animation: postitIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-writingIn {
          animation: writingIn 0.3s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.1);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Experience;
