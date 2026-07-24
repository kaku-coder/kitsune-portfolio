import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* ─── 1. Falling Sakura Petal (Purple Glowing Petals) ─── */
function SakuraPetal({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 105; // 0% to 105%
    const driftX = (Math.random() - 0.5) * 120; // horizontal drift px
    return {
      startX,
      driftX,
      size: 10 + Math.random() * 14,
      duration: 5 + Math.random() * 6,
      rotateEnd: 360 + Math.random() * 720,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${cfg.startX}%`,
        width: cfg.size,
        height: cfg.size * 0.6,
        borderRadius: '80% 10% 80% 10%',
        background: 'linear-gradient(135deg, rgba(233,213,255,1), rgba(192,132,252,0.9), rgba(168,85,247,0.7))',
        boxShadow: '0 0 12px rgba(192,132,252,0.9), 0 0 4px rgba(255,255,255,0.8)',
        zIndex: 25,
      }}
      initial={{ top: '-8%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        top: ['-8%', '112%'],
        x: [0, cfg.driftX * 0.4, cfg.driftX * 0.8, cfg.driftX],
        rotate: [0, cfg.rotateEnd * 0.4, cfg.rotateEnd * 0.7, cfg.rotateEnd],
        opacity: [0, 0.95, 1, 0.9, 0],
      }}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/* ─── 2. Falling Green Bamboo/Autumn Leaf ─── */
function FallingLeaf({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 105;
    const driftX = (Math.random() - 0.5) * 150;
    return {
      startX,
      driftX,
      width: 16 + Math.random() * 10,
      height: 8 + Math.random() * 6,
      duration: 6 + Math.random() * 7,
      rotateEnd: -360 - Math.random() * 540,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${cfg.startX}%`,
        width: cfg.width,
        height: cfg.height,
        borderRadius: '100% 0% 100% 0%',
        background: 'linear-gradient(135deg, rgba(52,211,153,0.95), rgba(16,185,129,0.85), rgba(5,150,105,0.7))',
        boxShadow: '0 0 10px rgba(52,211,153,0.8)',
        zIndex: 25,
      }}
      initial={{ top: '-8%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        top: ['-8%', '112%'],
        x: [0, -cfg.driftX * 0.3, cfg.driftX * 0.6, cfg.driftX],
        rotate: [0, cfg.rotateEnd * 0.3, cfg.rotateEnd * 0.7, cfg.rotateEnd],
        opacity: [0, 0.9, 0.95, 0.85, 0],
      }}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/* ─── 3. Diagonal Rain Streak ─── */
function RainDrop({ delay }) {
  const cfg = useMemo(() => ({
    left: Math.random() * 115 - 5,
    duration: 0.5 + Math.random() * 0.4,
    height: 35 + Math.random() * 35,
    windOffset: -50 - Math.random() * 40,
  }), []);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${cfg.left}%`,
        width: 2,
        height: cfg.height,
        borderRadius: 2,
        background: 'linear-gradient(to bottom, transparent, rgba(233,213,255,0.95), rgba(192,132,252,0.8), transparent)',
        boxShadow: '0 0 8px rgba(192,132,252,0.8)',
        zIndex: 25,
      }}
      initial={{ top: '-12%', x: 0, opacity: 0 }}
      animate={{
        top: ['-12%', '112%'],
        x: [0, cfg.windOffset],
        opacity: [0, 0.85, 0.85, 0],
      }}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/* ─── 4. Drifting Fog Layer ─── */
function FogCloud({ index }) {
  const cfg = useMemo(() => ({
    fromRight: index % 2 === 0,
    width: 350 + Math.random() * 300,
    height: 100 + Math.random() * 100,
    top: 10 + Math.random() * 50,
    duration: 22 + Math.random() * 18,
  }), [index]);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: cfg.width,
        height: cfg.height,
        top: `${cfg.top}%`,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.12), rgba(168,85,247,0.04), transparent 70%)',
        filter: 'blur(20px)',
        zIndex: 15,
      }}
      initial={{ left: cfg.fromRight ? '110%' : '-40%' }}
      animate={{ left: cfg.fromRight ? '-40%' : '110%' }}
      transition={{
        duration: cfg.duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/* ─── Main Atmosphere Layer Export ─── */
export default function AtmosphereLayer() {
  const sakuraPetals = useMemo(() => Array.from({ length: 25 }, (_, i) => i), []);
  const greenLeaves = useMemo(() => Array.from({ length: 15 }, (_, i) => i), []);
  const rainDrops = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);
  const fogClouds = useMemo(() => Array.from({ length: 4 }, (_, i) => i), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {/* Fog Clouds */}
      {fogClouds.map((i) => <FogCloud key={`fog-${i}`} index={i} />)}

      {/* Rain Drops */}
      {rainDrops.map((i) => <RainDrop key={`rain-${i}`} delay={Math.random() * 2} />)}

      {/* Glowing Purple Sakura Petals */}
      {sakuraPetals.map((i) => <SakuraPetal key={`sakura-${i}`} delay={i * 0.25} />)}

      {/* Emerald Green Leaves */}
      {greenLeaves.map((i) => <FallingLeaf key={`leaf-${i}`} delay={i * 0.4 + 0.1} />)}
    </div>
  );
}
