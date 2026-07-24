import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* ─── 1. Falling Sakura Petal (Purple Glowing Petals) ─── */
function SakuraPetal({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 110 - 5; // -5% to 105%
    const endX = startX + (Math.random() * 40 - 20);
    return {
      startX,
      endX,
      size: 10 + Math.random() * 12,
      duration: 6 + Math.random() * 7,
      rotateEnd: 360 + Math.random() * 720,
      sway: 30 + Math.random() * 40,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{
        left: `${cfg.startX}%`,
        top: '-5%',
        width: cfg.size,
        height: cfg.size * 0.6,
        borderRadius: '80% 10% 80% 10%',
        background: 'linear-gradient(135deg, rgba(216,180,254,0.95), rgba(168,85,247,0.8), rgba(147,51,234,0.6))',
        boxShadow: '0 0 10px rgba(192,132,252,0.8), 0 0 4px rgba(255,255,255,0.6)',
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
      }}
      initial={{ y: '-5%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: ['-5%', '115%'],
        x: [0, cfg.sway, -cfg.sway, cfg.sway * 0.5, cfg.endX - cfg.startX],
        rotate: [0, cfg.rotateEnd * 0.3, cfg.rotateEnd * 0.7, cfg.rotateEnd],
        opacity: [0, 0.9, 0.95, 0.9, 0],
      }}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─── 2. Falling Green Bamboo/Autumn Leaf ─── */
function FallingLeaf({ delay }) {
  const cfg = useMemo(() => {
    const startX = Math.random() * 110 - 5;
    const endX = startX + (Math.random() * 60 - 30);
    return {
      startX,
      endX,
      width: 14 + Math.random() * 10,
      height: 7 + Math.random() * 6,
      duration: 7 + Math.random() * 8,
      rotateEnd: -540 - Math.random() * 360,
      sway: 40 + Math.random() * 50,
    };
  }, []);

  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{
        left: `${cfg.startX}%`,
        top: '-5%',
        width: cfg.width,
        height: cfg.height,
        borderRadius: '100% 0% 100% 0%',
        background: 'linear-gradient(135deg, rgba(52,211,153,0.9), rgba(16,185,129,0.7), rgba(5,150,105,0.5))',
        boxShadow: '0 0 8px rgba(52,211,153,0.6)',
      }}
      initial={{ y: '-5%', x: 0, rotate: 0, opacity: 0 }}
      animate={{
        y: ['-5%', '115%'],
        x: [0, -cfg.sway, cfg.sway, -cfg.sway * 0.5, cfg.endX - cfg.startX],
        rotate: [0, cfg.rotateEnd * 0.4, cfg.rotateEnd * 0.8, cfg.rotateEnd],
        opacity: [0, 0.85, 0.9, 0.85, 0],
      }}
      transition={{
        duration: cfg.duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─── 3. Diagonal Rain Streak ─── */
function RainDrop({ delay }) {
  const cfg = useMemo(() => ({
    left: Math.random() * 115 - 5,
    duration: 0.5 + Math.random() * 0.4,
    height: 30 + Math.random() * 35,
    windOffset: -40 - Math.random() * 30, // Diagonal fall
    opacity: 0.4 + Math.random() * 0.45,
  }), []);

  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{
        left: `${cfg.left}%`,
        top: '-10%',
        width: 1.8,
        height: cfg.height,
        borderRadius: 2,
        background: 'linear-gradient(to bottom, transparent, rgba(233,213,255,0.95), transparent)',
        boxShadow: '0 0 6px rgba(192,132,252,0.6)',
      }}
      initial={{ y: '-10%', x: 0, opacity: 0 }}
      animate={{
        y: ['-10%', '115%'],
        x: [0, cfg.windOffset],
        opacity: [0, cfg.opacity, cfg.opacity, 0],
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
    width: 350 + Math.random() * 350,
    height: 100 + Math.random() * 120,
    top: 5 + Math.random() * 50,
    duration: 25 + Math.random() * 20,
  }), [index]);

  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      style={{
        width: cfg.width,
        height: cfg.height,
        top: `${cfg.top}%`,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.08), rgba(147,51,234,0.03), transparent 70%)',
        filter: 'blur(25px)',
      }}
      initial={{ x: cfg.fromRight ? '120%' : '-40%' }}
      animate={{ x: cfg.fromRight ? '-40%' : '120%' }}
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
  const sakuraPetals = useMemo(() => Array.from({ length: 22 }, (_, i) => i), []);
  const greenLeaves = useMemo(() => Array.from({ length: 14 }, (_, i) => i), []);
  const rainDrops = useMemo(() => Array.from({ length: 55 }, (_, i) => i), []);
  const fogClouds = useMemo(() => Array.from({ length: 4 }, (_, i) => i), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
      {/* Fog Clouds */}
      {fogClouds.map((i) => <FogCloud key={`fog-${i}`} index={i} />)}

      {/* Rain Drops */}
      {rainDrops.map((i) => <RainDrop key={`rain-${i}`} delay={Math.random() * 2.5} />)}

      {/* Glowing Purple Sakura Petals */}
      {sakuraPetals.map((i) => <SakuraPetal key={`sakura-${i}`} delay={i * 0.35} />)}

      {/* Emerald Green Leaves */}
      {greenLeaves.map((i) => <FallingLeaf key={`leaf-${i}`} delay={i * 0.55 + 0.2} />)}
    </div>
  );
}
