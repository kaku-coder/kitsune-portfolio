import { useState, useEffect } from 'react';
import logoImg from '../assets/logo.png';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8 + 2;
        if (next >= 100) {
          clearInterval(interval);
          setPhase('split');
          setTimeout(() => onComplete(), 900);
          return 100;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black ${phase === 'split' ? 'ls-exit' : ''}`}>

      {/* Background glow pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[120px] ls-pulse" />
      </div>

      <div className="flex flex-col items-center gap-8 relative">

        {/* Logo container */}
        <div className="relative w-28 h-28 ls-logo-in">

          {/* Top half clip */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0 0 50% 0)' }}>
            <img
              src={logoImg}
              alt=""
              className={`w-28 h-28 object-contain ${phase === 'split' ? 'ls-split-up' : ''}`}
            />
          </div>

          {/* Bottom half clip */}
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
            <img
              src={logoImg}
              alt=""
              className={`w-28 h-28 object-contain ${phase === 'split' ? 'ls-split-down' : ''}`}
            />
          </div>

          {/* Full logo during loading */}
          {phase === 'loading' && (
            <div className="absolute inset-0 ls-logo-glow">
              <img src={logoImg} alt="Logo" className="w-28 h-28 object-contain" />
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-52 h-[2px] bg-white/10 rounded-full overflow-hidden ls-fade-in">
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-fuchsia-400 rounded-full ls-bar-glow"
            style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.1s ease-out' }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2 ls-fade-in">
          <span className="text-[10px] text-white font-mono tracking-[0.35em] uppercase">
            {phase === 'loading' ? 'Loading' : 'Welcome'}
          </span>
          <span className="text-[9px] text-purple-400 font-mono tracking-[0.2em]">
            {Math.round(Math.min(progress, 100))}%
          </span>
        </div>

        {/* Bottom tagline */}
        <span className="text-[8px] text-purple-300/60 font-mono tracking-[0.4em] uppercase ls-fade-in-delay">
          Kitsune Developer
        </span>

      </div>
    </div>
  );
}
