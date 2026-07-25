import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CounterAnimation({ end, suffix = '', duration = 2, delay = 0 }) {
  const num = parseFloat(end);
  const isNumeric = !isNaN(num);
  const [value, setValue] = useState(isNumeric ? 0 : end);
  const started = useRef(false);

  useEffect(() => {
    if (!isNumeric || started.current) return;
    started.current = true;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: num,
      duration,
      delay,
      ease: 'power2.out',
      onUpdate: () => setValue(Math.floor(obj.val)),
    });
  }, [num, isNumeric, duration, delay]);

  return <span>{isNumeric ? value : end}{suffix}</span>;
}
