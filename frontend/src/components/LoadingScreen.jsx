import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('split');
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#09090B]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center gap-6">

            {/* Logo — splits into two halves */}
            <div className="relative w-24 h-24">
              {/* Top half — goes up */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'inset(0 0 50% 0)' }}
                animate={phase === 'split' ? { y: '-120vh', opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <img src={logoImg} alt="" className="w-24 h-24 object-contain" />
              </motion.div>

              {/* Bottom half — goes down */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'inset(50% 0 0 0)' }}
                animate={phase === 'split' ? { y: '120vh', opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                <img src={logoImg} alt="" className="w-24 h-24 object-contain" />
              </motion.div>

              {/* Full logo — visible during loading, hides on split */}
              <motion.div
                className="absolute inset-0"
                animate={phase === 'split' ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <img src={logoImg} alt="Logo" className="w-24 h-24 object-contain" />
              </motion.div>
            </div>

            {/* Loading Bar */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-purple-500 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading Text */}
            <motion.span
              className="text-[10px] text-gray-500 font-mono tracking-[0.3em] uppercase"
              animate={phase === 'split' ? { opacity: 0 } : { opacity: 1 }}
            >
              {phase === 'loading' ? 'Loading' : 'Welcome'}
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
