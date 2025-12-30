
import React from 'react';

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  // Ensure autoplay is enabled and controls are visible
  const embedUrl = `${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-fadeIn overflow-hidden">
      {/* Background Dim Layer */}
      <div 
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl cursor-pointer"
        onClick={onClose}
      />
      
      {/* Centered Video Frame */}
      <div className="relative w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] animate-zoomIn bg-black ring-1 ring-white/5">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-4 bg-white/5 hover:bg-white/10 text-white rounded-full backdrop-blur-xl transition-all border border-white/10 active:scale-90"
          aria-label="Close Video"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="w-full h-full">
          <iframe 
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.95) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default VideoModal;
