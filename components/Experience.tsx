
import React, { useState, useEffect } from 'react';
import { Experience as ExpType, Translation } from '../types.ts';

interface ExperienceProps {
  experiences: ExpType[];
  t: Translation;
}

const TypingEffect: React.FC<{ lines: string[] }> = ({ lines }) => {
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayLines(prev => {
            const next = [...prev];
            if (!next[lineIndex]) next[lineIndex] = "";
            next[lineIndex] += lines[lineIndex][charIndex];
            return next;
          });
          setCharIndex(c => c + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setLineIndex(l => l + 1);
        setCharIndex(0);
      }
    }
  }, [lineIndex, charIndex, lines]);

  return (
    <div className="space-y-3">
      {displayLines.map((line, i) => (
        <div key={i} className="flex items-start text-slate-800 text-sm font-bold animate-fadeIn text-left">
          <span className="text-blue-600 mr-2 shrink-0">›</span>
          <p>{line}</p>
        </div>
      ))}
    </div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ experiences, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const initialCount = 6;

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
    <section id="experience" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">{t.experience_label}</p>
          <h3 className="text-4xl font-black mb-4 tracking-tight text-white uppercase italic">{t.experience_title}</h3>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{t.exp_hover_hint}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700">
          {(isExpanded ? experiences : experiences.slice(0, initialCount)).map((exp, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl animate-fadeIn cursor-help overflow-hidden flex flex-col min-h-[220px] shadow-xl"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex flex-col mb-6 relative z-10 text-left">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] px-4 py-1.5 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{exp.company}</span>
                </div>
                <h4 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                  {exp.role}
                </h4>
              </div>
              
              <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mt-auto relative z-10 border-t border-white/5 pt-4 text-left">
                {exp.highlights[0]}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Floating Popover */}
        {hoveredIdx !== null && (
          <div 
            className="fixed z-[200] pointer-events-none transition-all duration-100 ease-out"
            style={{ 
              left: Math.min(mousePos.x + 25, window.innerWidth - 425), 
              top: Math.min(mousePos.y + 25, window.innerHeight - 380),
            }}
          >
            <div className="bg-white text-slate-900 p-10 rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] w-[380px] border-l-[14px] border-blue-600 animate-postitIn relative overflow-hidden">
              <div className="absolute top-[-10px] right-[-10px] text-[80px] font-black text-slate-100 select-none leading-none opacity-40">RESUME</div>
              <div className="relative z-10 text-left">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <div className="text-[10px] font-black uppercase text-blue-600 mb-1 tracking-widest">{experiences[hoveredIdx].period}</div>
                  <h5 className="font-black text-2xl uppercase tracking-tighter leading-none text-slate-950 mb-1">
                    {experiences[hoveredIdx].company}
                  </h5>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{experiences[hoveredIdx].role}</div>
                </div>
                <TypingEffect lines={experiences[hoveredIdx].highlights} />
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group px-12 py-5 rounded-full border border-slate-700 bg-slate-900/50 hover:border-blue-500 transition-all duration-300 relative overflow-hidden shadow-2xl mx-auto flex items-center justify-center space-x-3"
          >
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white transition-colors">
              {isExpanded ? t.minimize_history : t.view_history}
            </span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes postitIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px) rotate(-1deg); }
          to { opacity: 1; transform: scale(1) translateY(0) rotate(0deg); }
        }
        .animate-postitIn { animation: postitIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
};

export default Experience;
