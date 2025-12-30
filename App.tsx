
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS, PROJECTS, EXPERIENCES } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import VideoModal from './components/VideoModal';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ko');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Simple IP/Locale based language detection
  useEffect(() => {
    const userLocale = navigator.language.toLowerCase();
    if (userLocale.includes('ko')) {
      setLang('ko');
    } else {
      setLang('en');
    }
  }, []);

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} />
        <Experience experiences={EXPERIENCES[lang]} t={t} />
        <Projects projects={PROJECTS[lang]} t={t} onVideoSelect={setActiveVideo} />
        <Skills t={t} />
      </main>

      <footer className="py-12 border-t border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
            {t.hero_subtitle}
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:mrs86@naver.com" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:010-3366-4848" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
          <p className="text-slate-600 text-[10px] font-medium tracking-tighter">
            {t.footer_text}
          </p>
        </div>
      </footer>

      <VideoModal 
        videoUrl={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </div>
  );
};

export default App;
