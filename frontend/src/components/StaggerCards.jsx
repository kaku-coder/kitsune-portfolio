import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StaggerCards({ children, className = '', stagger = 0.12 }) {
  const ref = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.children;
    if (!cards.length) return;

    tweenRef.current = gsap.fromTo(
      cards,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    );

    return () => {
      if (tweenRef.current) {
        tweenRef.current.scrollTrigger?.kill();
        tweenRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
