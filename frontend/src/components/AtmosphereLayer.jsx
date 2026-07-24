import React, { useMemo } from 'react';

function PetalItem({ index }) {
  const cfg = useMemo(() => {
    const left = (index * 3.5 + Math.random() * 3) % 100;
    const size = 16 + (index % 5) * 3;
    const duration = 5 + (index % 4) * 1.5;
    const delay = (index * 0.25) % 4;
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

function RainItem({ index }) {
  const cfg = useMemo(() => {
    const left = (index * 1.8 + Math.random() * 2) % 100;
    const height = 35 + (index % 5) * 10;
    const duration = 0.5 + (index % 3) * 0.2;
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

export default function AtmosphereLayer({ rect }) {
  const petals = useMemo(() => Array.from({ length: 28 }, (_, i) => i), []);
  const rain = useMemo(() => Array.from({ length: 60 }, (_, i) => i), []);

  if (!rect || rect.width === 0) return null;

  return (
    <div
      className="pointer-events-none"
      style={{
        position: 'fixed',
        zIndex: 9999,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        borderRadius: '20px',
        overflow: 'hidden',
        border: '2px solid red',
        background: 'rgba(255,0,0,0.05)',
      }}
    >
      {rain.map((i) => <RainItem key={`rain-${i}`} index={i} />)}
      {petals.map((i) => <PetalItem key={`petal-${i}`} index={i} />)}
    </div>
  );
}
