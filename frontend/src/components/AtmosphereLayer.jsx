import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* ─── 1. Falling Sakura Petal (Vibrant Purple Glowing Petals) ─── */
function SakuraPetal({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 105; // 0% to 105%
    const driftX = (Math.random() - 0.5) * 140; // horizontal drift px
    return {
      startX,
      driftX,
      size: 14 + Math.random() * 12, // Bigger size for clear visibility
      duration: 4.5 + Math.random() * 5,
      rotateEnd: 360 + Math.random() * 720,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: `${cfg.startX}%`,
        width: cfg.size,
        height: cfg.size * 0.65,
        borderRadius: '80% 10% 80% 10%',
        background: 'linear-gradient(135deg, #f0abfc, #c084fc, #a855f7)',
        boxShadow: '0 0 16px rgba(216,180,254,1), 0 0 8px rgba(255,255,255,0.9)',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
      }}
      initial={{ top: '-8%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        top: ['-8%', '112%'],
        x: [0, cfg.driftX * 0.4, cfg.driftX * 0.8, cfg.driftX],
        rotate: [0, cfg.rotateEnd * 0.4, cfg.rotateEnd * 0.7, cfg.rotateEnd],
        opacity: [0, 1, 1, 0.95, 0],
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

/* ─── 2. Falling Green Bamboo/Autumn Leaf (Vibrant Glowing Green Leaves) ─── */
function FallingLeaf({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 105;
    const driftX = (Math.random() - 0.5) * 160;
    return {
      startX,
      driftX,
      width: 20 + Math.random() * 12, // Bigger green leaves
      height: 10 + Math.random() * 7,
      duration: 5.5 + Math.random() * 6,
      rotateEnd: -360 - Math.random() * 540,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: `${cfg.startX}%`,
        width: cfg.width,
        height: cfg.height,
        borderRadius: '100% 0% 100% 0%',
        background: 'linear-gradient(135deg, #34d399, #10b981, #059669)',
        boxShadow: '0 0 14px rgba(52,211,153,0.9), 0 0 6px rgba(255,255,255,0.6)',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.6))',
      }}
      initial={{ top: '-8%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        top: ['-8%', '112%'],
        x: [0, -cfg.driftX * 0.3, cfg.driftX * 0.6, cfg.driftX],
        rotate: [0, cfg.rotateEnd * 0.3, cfg.rotateEnd * 0.7, cfg.rotateEnd],
        opacity: [0, 1, 1, 0.95, 0],
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
    duration: 0.45 + Math.random() * 0.35,
    height: 40 + Math.random() * 35,
    windOffset: -50 - Math.random() * 40,
  }), []);

  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: `${cfg.left}%`,
        width: 2.2,
        height: cfg.height,
        borderRadius: 2,
        background: 'linear-gradient(to bottom, transparent, #e9d5ff, #c084fc, transparent)',
        boxShadow: '0 0 10px rgba(192,132,252,0.9)',
      }}
      initial={{ top: '-12%', x: 0, opacity: 0 }}
      animate={{
        top: ['-12%', '112%'],
        x: [0, cfg.windOffset],
        opacity: [0, 0.9, 0.9, 0],
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
      className="absolute pointer-events-none z-10"
      style={{
        width: cfg.width,
        height: cfg.height,
        top: `${cfg.top}%`,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.14), rgba(168,85,247,0.05), transparent 70%)',
        filter: 'blur(22px)',
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
  const sakuraPetals = useMemo(() => Array.from({ length: 30 }, (_, i) => i), []);
  const greenLeaves = useMemo(() => Array.from({ length: 20 }, (_, i) => i), []);
  const rainDrops = useMemo(() => Array.from({ length: 65 }, (_, i) => i), []);
  const fogClouds = useMemo(() => Array.from({ length: 4 }, (_, i) => i), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {/* Fog Clouds */}
      {fogClouds.map((i) => <FogCloud key={`fog-${i}`} index={i} />)}

      {/* Rain Drops */}
      {rainDrops.map((i) => <RainDrop key={`rain-${i}`} delay={Math.random() * 2} />)}

      {/* Glowing Purple Sakura Petals */}
      {sakuraPetals.map((i) => <SakuraPetal key={`sakura-${i}`} delay={i * 0.2} />)}

      {/* Emerald Green Leaves */}
      {greenLeaves.map((i) => <FallingLeaf key={`leaf-${i}`} delay={i * 0.3 + 0.1} />)}
    </div>
  );
}
