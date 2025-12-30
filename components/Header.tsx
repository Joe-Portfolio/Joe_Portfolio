
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { Language, Translation } from '../types.ts';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
  initialLang: 'ko' | 'en';
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t, initialLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Setup persistent BGM based on INITIAL language
    const musicUrl = initialLang === 'ko' 
      ? 'https://files.catbox.moe/uozrce.mp3' 
      : 'https://files.catbox.moe/9f99i4.mp3';
      
    const audio = new Audio(musicUrl);
    audio.loop = true;
    bgMusicRef.current = audio;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (!bgMusicRef.current) return;
    if (isMusicOn) {
      bgMusicRef.current.pause();
    } else {
      bgMusicRef.current.play();
    }
    setIsMusicOn(!isMusicOn);
  };

  const handleTts = async () => {
    if (isSpeaking) {
      setIsSpeaking(false);
      if (isMusicOn && bgMusicRef.current) bgMusicRef.current.play();
      return;
    }

    setIsSpeaking(true);
    if (bgMusicRef.current) bgMusicRef.current.pause();

    const textToSpeak = document.body.innerText.replace(/\n/g, ' ').substring(0, 1000);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: textToSpeak }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        const binary = atob(base64Audio);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        
        const dataInt16 = new Int16Array(bytes.buffer);
        const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
        const channelData = buffer.getChannelData(0);
        for (let i = 0; i < dataInt16.length; i++) channelData[i] = dataInt16[i] / 32768.0;

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => {
          setIsSpeaking(false);
          if (isMusicOn && bgMusicRef.current) bgMusicRef.current.play();
        };
        source.start();
      }
    } catch (e) {
      console.error(e);
      setIsSpeaking(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism shadow-xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-start">
        <div className="text-2xl font-black tracking-tighter gradient-text mt-2">
          CHW.
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-slate-300 mt-4">
          <a href="#home" className="hover:text-white transition-colors">{t.nav_home}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav_experience}</a>
          <a href="#projects" className="hover:text-white transition-colors">{t.nav_projects}</a>
          <a href="#skills" className="hover:text-white transition-colors">{t.nav_skills}</a>
        </div>

        <div className="flex flex-col items-end space-y-3">
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="px-4 py-1.5 border border-slate-700 rounded-full text-xs font-bold hover:bg-slate-800 transition-all flex items-center space-x-2 bg-slate-900/40 backdrop-blur-md"
          >
            <span className={lang === 'ko' ? 'text-blue-400' : 'text-slate-500'}>KO</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-500'}>EN</span>
          </button>

          {/* Audio/TTS Capsule - Hidden on mobile, fixed under lang switcher */}
          <div className="hidden md:flex items-center space-x-2 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-lg ring-1 ring-white/10">
            <button 
              onClick={toggleMusic}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isMusicOn ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              {isMusicOn ? (
                <svg className="w-3.5 h-3.5 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-4z"/></svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
              )}
            </button>
            <div className="w-px h-4 bg-white/10"></div>
            <button 
              onClick={handleTts}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSpeaking ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {isSpeaking ? (
                <div className="flex items-end space-x-0.5 h-2">
                  <div className="w-0.5 bg-white animate-[bar_0.8s_infinite]"></div>
                  <div className="w-0.5 bg-white animate-[bar_0.8s_0.2s_infinite]"></div>
                  <div className="w-0.5 bg-white animate-[bar_0.8s_0.4s_infinite]"></div>
                </div>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bar { 0%, 100% { height: 2px; } 50% { height: 8px; } }
      `}</style>
    </nav>
  );
};

export default Header;
