import React, { useMemo } from 'react';

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function Petal({ theme }) {
  const colors = theme === 'light'
    ? { bg: 'linear-gradient(135deg, #f97316, #eab308, #ef4444)', shadow: '#f97316' }
    : { bg: 'linear-gradient(135deg, #f472b6, #c084fc, #a855f7)', shadow: '#c084fc' };

  const s = useMemo(() => ({
    position: 'absolute',
    left: `${rand(5, 90)}%`,
    width: `${rand(12, 18)}px`,
    height: `${rand(7, 11)}px`,
    borderRadius: '80% 10% 80% 10%',
    background: colors.bg,
    boxShadow: `0 0 10px ${colors.shadow}`,
    pointerEvents: 'none',
    animation: `imgFallPetal ${rand(4, 8)}s ease-in-out ${rand(0, 5)}s infinite`,
  }), [theme]);
  return <div style={s} />;
}

function Leaf({ theme }) {
  const colors = theme === 'light'
    ? { bg: 'linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)', shadow: '#ef4444' }
    : { bg: 'linear-gradient(135deg, #c084fc, #a855f7, #7c3aed)', shadow: '#a855f7' };

  const s = useMemo(() => ({
    position: 'absolute',
    left: `${rand(5, 90)}%`,
    width: `${rand(6, 9)}px`,
    height: `${rand(4, 6)}px`,
    borderRadius: '80% 10% 80% 10%',
    background: colors.bg,
    boxShadow: `0 0 6px ${colors.shadow}`,
    pointerEvents: 'none',
    animation: `imgFallLeaf ${rand(5, 10)}s ease-in-out ${rand(0, 5)}s infinite`,
  }), [theme]);
  return <div style={s} />;
}

export default function ImagePetals({ theme = 'dark' }) {
  const particles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 12; i++) items.push({ type: 'petal', key: `p-${i}` });
    for (let i = 0; i < 8; i++) items.push({ type: 'leaf', key: `l-${i}` });
    return items;
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 10,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 'inherit',
      }}
    >
      {particles.map((p) => {
        if (p.type === 'petal') return <Petal key={p.key} theme={theme} />;
        return <Leaf key={p.key} theme={theme} />;
      })}
    </div>
  );
}
