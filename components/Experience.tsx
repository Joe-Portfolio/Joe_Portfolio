
import React from 'react';
import { Experience as ExpType, Translation } from '../types';

interface ExperienceProps {
  experiences: ExpType[];
  t: Translation;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, t }) => {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h3 className="text-4xl font-black mb-6 tracking-tight text-white">{t.experience_title}</h3>
          <div className="w-20 h-1 bg-purple-600 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-12 border-l-2 border-slate-800 hover:border-purple-600 transition-colors">
              <div className="absolute top-0 -left-[11px] w-5 h-5 bg-slate-900 border-2 border-slate-700 rounded-full transition-colors group-hover:border-purple-600"></div>
              
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h4>
                <span className="px-4 py-1 bg-slate-800 rounded-full text-xs font-bold text-slate-400">{exp.period}</span>
              </div>
              
              <div className="text-lg font-bold text-purple-400 mb-6">{exp.company}</div>
              
              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
