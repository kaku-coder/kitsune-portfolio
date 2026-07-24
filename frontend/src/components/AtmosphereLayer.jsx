import React, { useMemo } from 'react';

/* ─── 1. Glowing Purple Sakura Petal Component ─── */
function PetalItem({ index }) {
  const cfg = useMemo(() => {
    const left = (index * 3.5 + Math.random() * 3) % 100;
    const size = 16 + (index % 5) * 3; // 16px to 28px
    const duration = 5 + (index % 4) * 1.5; // 5s to 9.5s
    const delay = (index * 0.25) % 4; // staggered start
    return { left, size, duration, delay };
  }, [index]);

  return (
    <div
      className="absolute pointer-events-none animate-petal"
      style={{
        left: `${cfg.left}%`,
        top: 0,
        width: cfg.size,
        height: cfg.size * 0.65,
        borderRadius: '80% 10% 80% 10%',
        background: 'linear-gradient(135deg, #f472b6, #c084fc, #a855f7)',
        boxShadow: '0 0 16px #c084fc, 0 0 8px #ffffff',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.7))',
        animationDuration: `${cfg.duration}s`,
        animationDelay: `${cfg.delay}s`,
      }}
    />
  );
}

/* ─── 2. Glowing Emerald Green Leaf Component ─── */
function LeafItem({ index }) {
  const cfg = useMemo(() => {
    const left = (index * 5.2 + Math.random() * 4) % 100;
    const width = 22 + (index % 4) * 4; // 22px to 34px
    const height = 11 + (index % 4) * 2; // 11px to 17px
    const duration = 6 + (index % 5) * 1.5; // 6s to 12s
    const delay = (index * 0.35 + 0.1) % 5;
    return { left, width, height, duration, delay };
  }, [index]);

  return (
    <div
      className="absolute pointer-events-none animate-leaf"
      style={{
        left: `${cfg.left}%`,
        top: 0,
        width: cfg.width,
        height: cfg.height,
        borderRadius: '100% 0% 100% 0%',
        background: 'linear-gradient(135deg, #34d399, #10b981, #059669)',
        boxShadow: '0 0 16px #34d399, 0 0 8px #ffffff',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.7))',
        animationDuration: `${cfg.duration}s`,
        animationDelay: `${cfg.delay}s`,
      }}
    />
  );
}

/* ─── 3. Glowing Rain Streak Component ─── */
function RainItem({ index }) {
  const cfg = useMemo(() => {
    const left = (index * 1.8 + Math.random() * 2) % 100;
    const height = 35 + (index % 5) * 10; // 35px to 75px
    const duration = 0.5 + (index % 3) * 0.2; // 0.5s to 0.9s
    const delay = (index * 0.08) % 2;
    return { left, height, duration, delay };
  }, [index]);

  return (
    <div
      className="absolute pointer-events-none animate-rain"
      style={{
        left: `${cfg.left}%`,
        top: 0,
        width: '2.5px',
        height: cfg.height,
        borderRadius: '2px',
        background: 'linear-gradient(to bottom, transparent, #e9d5ff, #c084fc, transparent)',
        boxShadow: '0 0 12px #c084fc',
        animationDuration: `${cfg.duration}s`,
        animationDelay: `${cfg.delay}s`,
      }}
    />
  );
}

/* ─── Main Fixed Full-Screen Atmosphere Component ─── */
export default function AtmosphereLayer() {
  const petals = useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);
  const leaves = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  const rain = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 9999 }}
    >
      {/* Heavy Rain Streaks */}
      {rain.map((i) => <RainItem key={`rain-${i}`} index={i} />)}

      {/* Falling Glowing Purple Sakura Petals */}
      {petals.map((i) => <PetalItem key={`petal-${i}`} index={i} />)}

      {/* Falling Glowing Emerald Green Leaves */}
      {leaves.map((i) => <LeafItem key={`leaf-${i}`} index={i} />)}
    </div>
  );
}
