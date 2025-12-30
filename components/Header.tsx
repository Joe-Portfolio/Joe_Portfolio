
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
  const [isMusicOn, setIsMusicOn] = useState(true); 
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const safePlay = async () => {
    if (bgMusicRef.current && isMusicOn) {
      try {
        // 이미 진행 중인 play 요청이 있다면 기다림
        if (playPromiseRef.current) await playPromiseRef.current;
        playPromiseRef.current = bgMusicRef.current.play();
        await playPromiseRef.current;
      } catch (error) {
        console.log("BGM Playback interrupted or blocked:", error);
      }
    }
  };

  const safePause = async () => {
    if (bgMusicRef.current) {
      if (playPromiseRef.current) {
        try {
          await playPromiseRef.current;
        } catch (e) {
          // play 요청이 중단되어도 무시하고 중지 진행
        }
      }
      bgMusicRef.current.pause();
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const musicUrl = initialLang === 'ko' 
      ? 'https://files.catbox.moe/uozrce.mp3' 
      : 'https://files.catbox.moe/9f99i4.mp3';
      
    const audio = new Audio(musicUrl);
    audio.loop = true;
    bgMusicRef.current = audio;

    const startAudio = () => {
      if (isMusicOn) safePlay();
      window.removeEventListener('click', startAudio);
    };
    window.addEventListener('click', startAudio);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', startAudio);
      safePause();
      bgMusicRef.current = null;
    };
  }, []);

  const toggleMusic = async () => {
    if (!bgMusicRef.current) return;
    if (isMusicOn) {
      setIsMusicOn(false);
      await safePause();
    } else {
      setIsMusicOn(true);
      // setIsMusicOn이 비동기이므로 직접 safePlay를 호출하기 위해 상태를 반영한 함수 구조 사용
      setTimeout(() => {
          if (bgMusicRef.current) {
              playPromiseRef.current = bgMusicRef.current.play();
          }
      }, 0);
    }
  };

  const handleTts = async () => {
    if (isSpeaking) {
      setIsSpeaking(false);
      if (isMusicOn) safePlay();
      return;
    }

    setIsSpeaking(true);
    // TTS 시작 시 BGM 일시정지
    await safePause();

    const textToSpeak = document.body.innerText.replace(/\n/g, ' ').substring(0, 1500);

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
          // TTS 종료 후 BGM 설정이 켜져있다면 다시 재생
          if (isMusicOn) safePlay();
        };
        source.start();
      } else {
        setIsSpeaking(false);
        if (isMusicOn) safePlay();
      }
    } catch (e) {
      console.error("TTS Error:", e);
      setIsSpeaking(false);
      if (isMusicOn) safePlay();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism shadow-xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter gradient-text">
          CHW.
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#home" className="hover:text-white transition-colors">{t.nav_home}</a>
          <a href="#experience" className="hover:text-white transition-colors">{t.nav_experience}</a>
          <a href="#projects" className="hover:text-white transition-colors">{t.nav_projects}</a>
          <a href="#skills" className="hover:text-white transition-colors">{t.nav_skills}</a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-1.5 bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-full p-1 shadow-inner ring-1 ring-white/10">
            <button 
              onClick={toggleMusic}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isMusicOn ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'}`}
              title="BGM Toggle"
            >
              {isMusicOn ? (
                <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-4z"/></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
              )}
            </button>
            <div className="w-px h-4 bg-white/10"></div>
            <button 
              onClick={handleTts}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isSpeaking ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20' : 'text-slate-500 hover:text-white'}`}
              title="Site Narration"
            >
              {isSpeaking ? (
                <div className="flex items-end space-x-0.5 h-2.5">
                  <div className="w-0.5 bg-white animate-[bar_0.8s_infinite]"></div>
                  <div className="w-0.5 bg-white animate-[bar_0.8s_0.2s_infinite]"></div>
                  <div className="w-0.5 bg-white animate-[bar_0.8s_0.4s_infinite]"></div>
                </div>
              ) : (
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              )}
            </button>
          </div>

          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="px-5 py-2 border border-slate-700/50 rounded-full text-[10px] font-black hover:bg-slate-800 transition-all flex items-center space-x-2 bg-slate-900/40 backdrop-blur-md text-slate-300"
          >
            <span className={lang === 'ko' ? 'text-blue-400' : 'text-slate-600'}>KO</span>
            <span className="text-slate-700">/</span>
            <span className={lang === 'en' ? 'text-blue-400' : 'text-slate-600'}>EN</span>
          </button>
        </div>
      </div>
      <style>{`
        @keyframes bar { 0%, 100% { height: 3px; } 50% { height: 10px; } }
      `}</style>
    </nav>
  );
};

export default Header;
