import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

function Petal({ delay }) {
  const cfg = useMemo(() => ({
    left: Math.random() * 100,
    size: 14 + Math.random() * 6,
    dur: 5 + Math.random() * 6,
    drift: (Math.random() - 0.5) * 100,
  }), []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: cfg.left + '%',
        top: -20,
        width: cfg.size,
        height: cfg.size * 0.6,
        borderRadius: '80% 10% 80% 10%',
        background: 'linear-gradient(135deg, #f472b6, #c084fc, #a855f7)',
        boxShadow: '0 0 12px #c084fc',
        pointerEvents: 'none',
      }}
      initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: ['0%', '110%'],
        x: [0, cfg.drift * 0.5, cfg.drift],
        rotate: [0, 180, 360],
        opacity: [0, 0.9, 0.9, 0],
      }}
      transition={{
        duration: cfg.dur,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

function Rain({ delay }) {
  const cfg = useMemo(() => ({
    left: Math.random() * 100,
    h: 30 + Math.random() * 30,
    dur: 0.4 + Math.random() * 0.4,
  }), []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: cfg.left + '%',
        top: -cfg.h,
        width: 2,
        height: cfg.h,
        borderRadius: 2,
        background: 'linear-gradient(to bottom, transparent, #e9d5ff, #c084fc, transparent)',
        boxShadow: '0 0 8px #c084fc',
        pointerEvents: 'none',
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, 700],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: cfg.dur,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function AtmosphereLayer({ rect }) {
  const petals = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);
  const rain = useMemo(() => Array.from({ length: 40 }, (_, i) => i), []);

  if (!rect || rect.width === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        zIndex: 50,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 20,
      }}
    >
      {rain.map((i) => <Rain key={`r-${i}`} delay={Math.random() * 2} />)}
      {petals.map((i) => <Petal key={`p-${i}`} delay={i * 0.3} />)}
    </div>
  );
}
