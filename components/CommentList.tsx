
import React, { useState, useEffect, useRef } from 'react';
import { Comment } from '../types';
import { generateRandomComment } from '../services/commentGenerator';
import { VerifiedBadge } from '../constants';

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="flex items-start space-x-3 mb-2.5 animate-float px-4">
    <img src={comment.profilePic} className="w-8 h-8 rounded-full border border-white/10 object-cover" alt={comment.username} />
    <div className="flex-1 min-w-0">
      <div className="flex items-center">
        <span className="text-white/60 text-[13px] font-bold drop-shadow-sm">{comment.username}</span>
        {comment.isVerified && <VerifiedBadge />}
      </div>
      <p className="text-white text-[14px] leading-tight drop-shadow-md">
        {comment.text}
      </p>
    </div>
  </div>
);

const HeartEffect: React.FC = () => {
    const [hearts, setHearts] = useState<{id: number, left: number, scale: number}[]>([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            setHearts(prev => [...prev.slice(-15), {
                id,
                left: Math.random() * 40 + 50, // Float on the right half
                scale: 0.4 + Math.random() * 0.6
            }]);
            
            setTimeout(() => {
                setHearts(prev => prev.filter(h => h.id !== id));
            }, 3000);
        }, 300);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute right-0 bottom-20 w-1/2 h-80 pointer-events-none overflow-hidden z-40">
            {hearts.map(heart => (
                <div 
                    key={heart.id}
                    className="absolute bottom-0 text-red-500 drop-shadow-sm"
                    style={{
                        left: `${heart.left}%`,
                        transform: `scale(${heart.scale})`,
                        animation: `heartFloat 3s cubic-bezier(0.1, 0.5, 0.5, 1) forwards`
                    }}
                >
                    <svg className="w-8 h-8 fill-current opacity-90" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
            ))}
            <style>{`
                @keyframes heartFloat {
                    0% { transform: translateY(0) rotate(0deg) scale(0.5); opacity: 0; }
                    15% { opacity: 0.9; }
                    100% { transform: translateY(-450px) rotate(${Math.random() > 0.5 ? 20 : -20}deg) scale(1.2); opacity: 0; }
                }
            `}</style>
        </div>
    );
}

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setComments(Array.from({ length: 6 }, generateRandomComment));

    const interval = setInterval(() => {
      setComments(prev => [...prev.slice(-30), generateRandomComment()]);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [comments]);

  return (
    <div className="fixed bottom-0 inset-x-0 h-2/3 pointer-events-none flex flex-col justify-end">
      <div 
        ref={scrollRef}
        className="overflow-y-auto max-h-[380px] mask-gradient pointer-events-auto pb-6 scroll-smooth"
      >
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      
      <HeartEffect />

      {/* Modern Interaction Bar */}
      <div className="safe-area-bottom pointer-events-auto px-4 pb-6 pt-4 bg-gradient-to-t from-black/80 to-transparent flex items-center space-x-3">
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 px-5 py-2.5 flex items-center group active:bg-white/20 transition-colors">
              <span className="text-white/60 text-sm font-medium">Add a comment...</span>
          </div>
          
          <div className="flex items-center space-x-4 pr-1">
            <button className="active:scale-90 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
            <button className="active:scale-90 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                </svg>
            </button>
            <button className="active:scale-90 transition-transform">
                <div className="relative">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black" />
                </div>
            </button>
          </div>
      </div>

      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to top, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to top, black 85%, transparent 100%);
        }
        .safe-area-bottom {
            padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  );
};

export default CommentList;
