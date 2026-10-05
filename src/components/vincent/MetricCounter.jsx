import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export default function MetricCounter({ prefix = '', target, suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, target, duration, mv]);

  return (
    <span ref={ref} className="font-tech text-3xl md:text-4xl font-semibold text-[#f0f0f0] tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}