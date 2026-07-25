import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.5,
        ease: 'power3.out',
      });
      gsap.to(dot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const addMagnetic = (el) => {
      const handleEnter = () => {
        gsap.to(cursor, { scale: 2.5, opacity: 0.5, duration: 0.3 });
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.3,
        });
      };
      const handleMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      const handleLeave = () => {
        gsap.to(cursor, { scale: 1, opacity: 0.8, duration: 0.3 });
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      };

      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mousemove', handleMove);
      el.addEventListener('mouseleave', handleLeave);

      return () => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mousemove', handleMove);
        el.removeEventListener('mouseleave', handleLeave);
      };
    };

    window.addEventListener('mousemove', moveCursor);

    const selectors = 'a, button, [data-magnetic]';
    let cleanups = [];
    const refresh = () => {
      cleanups.forEach((fn) => fn());
      cleanups = [];
      document.querySelectorAll(selectors).forEach((el) => {
        cleanups.push(addMagnetic(el));
      });
    };

    refresh();
    const interval = setInterval(refresh, 2000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearInterval(interval);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-400/50 pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-purple-400 pointer-events-none z-[99999] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
