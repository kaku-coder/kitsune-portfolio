import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({
  children,
  as: Tag = 'h1',
  className = '',
  delay = 0,
  stagger = 0.03,
  once = true,
}) {
  const ref = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent;
    el.textContent = '';
    el.style.visibility = 'visible';

    const chars = text.split('').map((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(40px) rotateX(-40deg)';
      span.style.transformOrigin = 'bottom';
      el.appendChild(span);
      return span;
    });

    tweenRef.current = gsap.to(chars, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger,
      delay,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once,
      },
    });

    return () => {
      if (tweenRef.current) {
        tweenRef.current.scrollTrigger?.kill();
        tweenRef.current.kill();
      }
      el.textContent = text;
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ visibility: 'hidden', perspective: '600px' }}
    >
      {children}
    </Tag>
  );
}
