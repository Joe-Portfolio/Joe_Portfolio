
import React from 'react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-4xl w-full text-center relative z-10 mt-20">
        <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] text-blue-400 mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
          {t.hero_subtitle}
        </h2>
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-tight tracking-tighter text-white opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          {t.hero_title}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
          {t.hero_description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          <a href="#projects" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
            {t.projects_title}
          </a>
          <button 
            onClick={() => window.open('https://youtu.be/mlGaxMZkyx8', '_blank')}
            className="px-10 py-4 border border-slate-700 hover:border-slate-500 text-white rounded-full font-bold transition-all"
          >
            {t.view_portfolio_video}
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
