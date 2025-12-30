
import React, { useState } from 'react';
import { Experience as ExpType, Translation } from '../types.ts';

interface ExperienceProps {
  experiences: ExpType[];
  t: Translation;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 4;

  return (
    <section id="experience" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h3 className="text-4xl font-black mb-6 tracking-tight text-white uppercase">{t.experience_title}</h3>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700">
          {experiences.map((exp, idx) => {
            const isShown = isExpanded || idx < initialCount;
            if (!isShown) return null;
            
            return (
              <div 
                key={idx} 
                className="group relative p-10 rounded-[2rem] bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl animate-fadeIn"
                style={{ animationDelay: `${(idx % initialCount) * 0.1}s` }}
              >
                <div className="flex flex-col mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">{exp.company}</span>
                  </div>
                  <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors duration-300">
                    {exp.role}
                  </h4>
                </div>
                
                <ul className="space-y-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group px-12 py-5 rounded-full border border-slate-700 bg-slate-900/50 hover:border-blue-500 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-white">
              {isExpanded ? t.minimize_history : t.view_history}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
