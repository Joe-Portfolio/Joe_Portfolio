
import React, { useState, useEffect } from 'react';
import { Language } from './types.ts';
import { TRANSLATIONS, PROJECTS, EXPERIENCES } from './data.ts';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import VideoModal from './components/VideoModal.tsx';
import InteractiveBackground from './components/InteractiveBackground.tsx';
import AIGallery from './components/AIGallery.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ko');
  const [initialLang, setInitialLang] = useState<Language | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const userLocale = navigator.language.toLowerCase();
    const l = userLocale.includes('ko') ? 'ko' : 'en';
    setLang(l);
    setInitialLang(l);
  }, []);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white bg-[#0f172a] text-slate-200 overflow-x-hidden">
      <InteractiveBackground />
      
      <div className="relative z-10">
        {initialLang && <Header lang={lang} setLang={setLang} t={t} initialLang={initialLang} />}
        
        <main>
          <Hero t={t} />
          <Experience experiences={EXPERIENCES[lang]} t={t} />
          <Projects projects={PROJECTS[lang]} t={t} onVideoSelect={setActiveVideo} />
          <Skills t={t} />
          <AIGallery t={t} lang={lang} />
        </main>

        <footer className="py-24 border-t border-slate-800 bg-slate-950/80 backdrop-blur-xl text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-2xl font-black gradient-text mb-2">CHW.</div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-12 max-w-lg mx-auto leading-relaxed">
              Senior Game Planner & Manager Portfolio<br/>
              Expertise in Global Service & Gen-AI
            </p>
            <div className="flex justify-center space-x-12 mb-12">
              <a href="mailto:mrs86@naver.com" className="group">
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors mb-2">Email</div>
                <div className="text-xs font-bold text-slate-600 group-hover:text-slate-300">mrs86@naver.com</div>
              </a>
              <a href="tel:010-3366-4848" className="group">
                <div className="text-slate-400 group-hover:text-blue-400 transition-colors mb-2">Call</div>
                <div className="text-xs font-bold text-slate-600 group-hover:text-slate-300">010-3366-4848</div>
              </a>
            </div>
            <p className="text-slate-700 text-[9px] font-black tracking-widest uppercase">
              {t.footer_text}
            </p>
          </div>
        </footer>
      </div>

      <VideoModal 
        videoUrl={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </div>
  );
};

export default App;
