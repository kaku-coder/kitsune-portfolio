import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  className = '',
  y = 50,
  opacity = 0,
  duration = 0.8,
  delay = 0,
  stagger = 0,
  once = true,
  ease = 'power3.out',
}) {
  const ref = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.children : el;

    tweenRef.current = gsap.fromTo(
      targets,
      { y, opacity },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        stagger: stagger || 0,
        ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once,
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
