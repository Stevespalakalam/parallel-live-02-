
import React from 'react';
import LiveStream from './components/LiveStream';
import TopOverlay from './components/TopOverlay';
import CommentList from './components/CommentList';

const App: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden select-none">
      {/* Full Screen Camera Layer */}
      <LiveStream />

      {/* Top Controls & Info */}
      <TopOverlay />

      {/* Scrolling Comments & Bottom Interactions */}
      <CommentList />

      {/* Right Sidebar Interaction Icons */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-6 z-50 pointer-events-auto">
          <button className="flex flex-col items-center group active:scale-90 transition-transform">
            <div className="bg-black/20 backdrop-blur-sm p-2.5 rounded-full border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
          </button>
          <button className="flex flex-col items-center group active:scale-90 transition-transform">
            <div className="bg-black/20 backdrop-blur-sm p-2.5 rounded-full border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
            </div>
          </button>
          <button className="flex flex-col items-center group active:scale-90 transition-transform">
            <div className="bg-black/20 backdrop-blur-sm p-2.5 rounded-full border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
          </button>
      </div>
    </div>
  );
};

export default App;
