
import React, { useState, useEffect } from 'react';
import { Language, Translation } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism shadow-xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter gradient-text">
          CHW.
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-slate-300">
          <a href="#home" className="hover:text-white transition-colors">{t.nav_home}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav_experience}</a>
          <a href="#projects" className="hover:text-white transition-colors">{t.nav_projects}</a>
          <a href="#skills" className="hover:text-white transition-colors">{t.nav_skills}</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="px-4 py-1.5 border border-slate-700 rounded-full text-xs font-bold hover:bg-slate-800 transition-all flex items-center space-x-2"
          >
            <span className={lang === 'ko' ? 'text-blue-400' : 'text-slate-500'}>KO</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
