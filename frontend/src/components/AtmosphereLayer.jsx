import React, { useMemo } from 'react';

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function Petal() {
  const s = useMemo(() => ({
    position: 'absolute',
    left: `${rand(0, 100)}%`,
    top: '-20px',
    width: `${rand(14, 20)}px`,
    height: `${rand(8, 12)}px`,
    borderRadius: '80% 10% 80% 10%',
    background: 'linear-gradient(135deg, #f472b6, #c084fc, #a855f7)',
    boxShadow: '0 0 12px #c084fc',
    pointerEvents: 'none',
    animation: `fallPetal ${rand(5, 11)}s ease-in-out ${rand(0, 8)}s infinite`,
  }), []);
  return <div style={s} />;
}

function Leaf() {
  const s = useMemo(() => ({
    position: 'absolute',
    left: `${rand(0, 100)}%`,
    top: '-15px',
    width: `${rand(6, 9)}px`,
    height: `${rand(4, 6)}px`,
    borderRadius: '80% 10% 80% 10%',
    background: 'linear-gradient(135deg, #c084fc, #a855f7, #7c3aed)',
    boxShadow: '0 0 8px #a855f7',
    pointerEvents: 'none',
    animation: `fallLeaf ${rand(12, 18)}s ease-in-out ${rand(0, 8)}s infinite`,
  }), []);
  return <div style={s} />;
}

function Rain() {
  const s = useMemo(() => ({
    position: 'absolute',
    left: `${rand(0, 100)}%`,
    top: `-${rand(40, 80)}px`,
    width: '1.5px',
    height: `${rand(15, 30)}px`,
    borderRadius: '2px',
    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)',
    boxShadow: '0 0 4px rgba(255,255,255,0.4)',
    pointerEvents: 'none',
    animation: `fallRain ${rand(2, 3.5)}s linear ${rand(0, 2)}s infinite`,
  }), []);
  return <div style={s} />;
}

export default function AtmosphereLayer() {
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) items.push({ type: 'petal', key: `p-${i}` });
    for (let i = 0; i < 15; i++) items.push({ type: 'leaf', key: `l-${i}` });
    for (let i = 0; i < 40; i++) items.push({ type: 'rain', key: `r-${i}` });
    return items;
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 50,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}
    >
      {particles.map((p) => {
        if (p.type === 'petal') return <Petal key={p.key} />;
        if (p.type === 'leaf') return <Leaf key={p.key} />;
        return <Rain key={p.key} />;
      })}
    </div>
  );
}
