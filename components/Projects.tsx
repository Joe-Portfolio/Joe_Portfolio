
import React from 'react';
import { Project, Translation } from '../types';

interface ProjectsProps {
  projects: Project[];
  t: Translation;
  onVideoSelect: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, t, onVideoSelect }) => {
  return (
    <section id="projects" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">{t.projects_title}</h3>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
              onClick={() => onVideoSelect(project.videoUrl)}
            >
              {/* Thumbnail Container */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{project.company}</span>
                    <h4 className="text-2xl font-bold text-white mt-1">{project.title}</h4>
                  </div>
                  <span className="text-sm font-medium text-slate-500">{project.year}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
