
import React, { useState, useEffect } from 'react';
import { INITIAL_VIEWER_COUNT, LIVE_HANDLE, VerifiedBadge, CloseIcon, CameraSwitchIcon } from '../constants';

const TopOverlay: React.FC = () => {
  const [viewers, setViewers] = useState(INITIAL_VIEWER_COUNT);

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 300) - 100;
      setViewers(prev => Math.max(5000, prev + delta));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatViewers = (count: number) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k';
    }
    return count.toString();
  };

  return (
    <div className="fixed top-0 inset-x-0 p-4 flex items-start justify-between z-50 pointer-events-none">
      <div className="flex items-center space-x-2.5 pointer-events-auto">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full animate-pulse-slow" />
          <img 
            src={`https://picsum.photos/seed/${LIVE_HANDLE}/150/150`} 
            alt="Profile" 
            className="relative w-9 h-9 rounded-full border-2 border-black object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-white font-bold text-sm drop-shadow-md">{LIVE_HANDLE}</span>
            <VerifiedBadge />
            <svg className="w-3 h-3 text-white/60 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
          <div className="flex items-center space-x-2">
             <div className="bg-pink-600 text-[9px] font-black text-white px-1 py-0.5 rounded-sm uppercase tracking-tighter leading-none">
                LIVE
             </div>
             <div className="bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-sm flex items-center space-x-1 border border-white/10">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.523 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white text-[11px] font-bold">{formatViewers(viewers)}</span>
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 pointer-events-auto">
        <button className="p-2 bg-black/20 backdrop-blur-sm rounded-full active:scale-90 transition-transform">
            <CameraSwitchIcon />
        </button>
        <button className="p-2 bg-black/20 backdrop-blur-sm rounded-full active:scale-90 transition-transform">
            <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default TopOverlay;
