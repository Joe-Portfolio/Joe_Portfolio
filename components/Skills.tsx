
import React from 'react';
import { SKILLS } from '../data';
import { Translation } from '../types';

interface SkillsProps {
  t: Translation;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-green-500 font-bold tracking-[0.3em] uppercase mb-2">{t.skills_label}</p>
          <h3 className="text-4xl font-black mb-4 tracking-tight text-white uppercase">{t.skills_title}</h3>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all backdrop-blur-md shadow-inner text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-400 mb-8 border-b border-white/5 pb-4">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`px-4 py-2 rounded-xl text-[11px] font-bold transition-all ${
                      skillGroup.category === 'Gen-AI' 
                        ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/30' 
                        : 'bg-slate-800/50 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
