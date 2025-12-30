
import React from 'react';
import { SKILLS } from '../data';
import { Translation } from '../types';

interface SkillsProps {
  t: Translation;
}

const Skills: React.FC<SkillsProps> = ({ t }) => {
  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-4xl font-black mb-6 tracking-tight text-white">{t.skills_title}</h3>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-8">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      skillGroup.category === 'Gen-AI' 
                        ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/20' 
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
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
