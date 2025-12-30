
import React, { useState } from 'react';
import { Project, Translation } from '../types';
import { getYoutubeThumbnail } from '../data';

interface ProjectsProps {
  projects: Project[];
  t: Translation;
  onVideoSelect: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, t, onVideoSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 4;
  const hasMore = projects.length > initialCount;
  const currentProjects = isExpanded ? projects : projects.slice(0, initialCount);

  return (
    <section id="projects" className="py-20 px-6 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-blue-500 font-bold tracking-[0.3em] uppercase mb-2">{t.projects_label}</p>
          <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white uppercase italic">{t.projects_title}</h3>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">{t.projects_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700">
          {currentProjects.map((project, idx) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/80 hover:border-blue-500/50 transition-all duration-500 cursor-pointer shadow-xl animate-fadeInCard"
              onClick={() => onVideoSelect(project.videoUrl)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={getYoutubeThumbnail(project.videoUrl)} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>

              <div className="p-6 text-left">
                <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2 block">{project.company}</span>
                <h4 className="text-sm font-bold text-white mb-3 line-clamp-1 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2 h-8">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-12 py-4 rounded-2xl border border-blue-500/20 bg-blue-600/5 hover:bg-blue-600/10 hover:border-blue-500/50 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl"
            >
              <span>{isExpanded ? t.minimize_history : t.explore_projects}</span>
              <svg 
                className={`w-4 h-4 transform transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes fadeInCard {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeInCard { animation: fadeInCard 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Projects;
