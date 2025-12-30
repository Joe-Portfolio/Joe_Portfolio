
import React, { useState, useEffect } from 'react';
import { Experience as ExpType, Translation } from '../types.ts';

interface ExperienceProps {
  experiences: ExpType[];
  t: Translation;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const initialCount = 4;

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
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-4xl font-black mb-6 tracking-tight text-white uppercase italic">{t.experience_title}</h3>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700">
          {experiences.map((exp, idx) => {
            const isShown = isExpanded || idx < initialCount;
            if (!isShown) return null;
            
            return (
              <div 
                key={idx} 
                className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl animate-fadeIn cursor-help overflow-hidden flex flex-col"
                style={{ animationDelay: `${(idx % initialCount) * 0.1}s` }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex flex-col mb-6 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] px-4 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                    {exp.role}
                  </h4>
                </div>
                
                <ul className="space-y-3 mb-8 relative z-10">
                  {exp.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-auto group-hover:text-blue-400 transition-colors flex items-center relative z-10">
                  <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  Hover to Expand
                </div>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Hover Floating Popover (Post-it Style) */}
        {hoveredIdx !== null && (
          <div 
            className="fixed z-[200] pointer-events-none transition-transform duration-75 ease-out"
            style={{ 
              left: Math.min(mousePos.x + 25, window.innerWidth - 425), 
              top: Math.min(mousePos.y + 25, window.innerHeight - 380),
            }}
          >
            <div className="bg-white text-slate-900 p-8 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] min-w-[340px] max-w-[420px] border-l-[12px] border-blue-600 animate-postitIn relative overflow-hidden">
              <div className="absolute top-[-20px] right-[-20px] text-[120px] font-black text-slate-100 select-none leading-none opacity-50">”</div>
              
              <div className="relative z-10">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <div className="text-[10px] font-black uppercase text-blue-600 mb-1 tracking-widest">{experiences[hoveredIdx].period}</div>
                  <h5 className="font-black text-xl uppercase tracking-tight leading-tight text-slate-950">
                    {experiences[hoveredIdx].company}
                  </h5>
                  <div className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-wider">{experiences[hoveredIdx].role}</div>
                </div>
                <ul className="space-y-4">
                  {experiences[hoveredIdx].highlights.map((highlight, i) => (
                    <li key={i} className="text-sm font-semibold leading-relaxed flex items-start text-slate-700">
                      <span className="mr-3 text-blue-500 font-black mt-0.5">›</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group px-12 py-5 rounded-full border border-slate-700 bg-slate-900/50 hover:border-blue-500 transition-all duration-300 relative overflow-hidden shadow-2xl"
          >
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors">
              {isExpanded ? t.minimize_history : t.view_history}
            </span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes postitIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px) rotate(-1.5deg); }
          to { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
        }
        .animate-postitIn { animation: postitIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Experience;
