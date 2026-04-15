import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CurvedConnector — Desktop only.
 * Draws an animated curved SVG arrow from the bottom of the Paket3 card
 * to the top-left of the GBP section, visually merging two sections.
 *
 * The SVG is positioned absolutely relative to the document (top/left in px).
 * overflow: visible ensures nothing is clipped by the SVG boundary.
 */
export default function CurvedConnector({ sourceRef, targetRef, lang }) {
  const [coords, setCoords] = useState(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const calculate = () => {
      if (!sourceRef?.current || !targetRef?.current) return;

      const src = sourceRef.current.getBoundingClientRect();
      const tgt = targetRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;

      // Source: bottom-center of Package 3 card
      const srcX = src.left + src.width / 2;
      const srcY = src.bottom + scrollY;

      // Target: top area of GBP section, slightly left of center
      const tgtX = tgt.left + tgt.width * 0.42;
      const tgtY = tgt.top + scrollY + 55;

      // Control points for flowing S-curve
      const cp1x = srcX + (tgtX - srcX) * 0.1;
      const cp1y = srcY + (tgtY - srcY) * 0.55;
      const cp2x = tgtX - (tgtX - srcX) * 0.1;
      const cp2y = tgtY - (tgtY - srcY) * 0.3;

      // Pill midpoint — ~40% along the bezier (approximate)
      const t = 0.4;
      const pillX = Math.pow(1-t,3)*srcX + 3*Math.pow(1-t,2)*t*cp1x + 3*(1-t)*Math.pow(t,2)*cp2x + Math.pow(t,3)*tgtX;
      const pillY = Math.pow(1-t,3)*srcY + 3*Math.pow(1-t,2)*t*cp1y + 3*(1-t)*Math.pow(t,2)*cp2y + Math.pow(t,3)*tgtY;

      // Arrow tip angle
      const dx = tgtX - cp2x;
      const dy = tgtY - cp2y;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setCoords({ srcX, srcY, tgtX, tgtY, cp1x, cp1y, cp2x, cp2y, pillX, pillY, dx, dy, angle });
    };

    let raf = requestAnimationFrame(() => {
      calculate();
      setTimeout(calculate, 600);
    });

    window.addEventListener('resize', calculate);
    window.addEventListener('scroll', calculate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', calculate);
      window.removeEventListener('scroll', calculate);
    };
  }, [sourceRef, targetRef]);

  if (!coords) return null;

  const { srcX, srcY, tgtX, tgtY, cp1x, cp1y, cp2x, cp2y, pillX, pillY, angle } = coords;

  // SVG is a single large overlay covering the entire document
  // We use a fixed-positioned transparent full-page SVG so nothing clips
  const path = `M ${srcX} ${srcY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${tgtX} ${tgtY}`;

  // Pill dimensions
  const pillW = 200;
  const pillH = 34;
  const pillRx = pillX - pillW / 2;
  const pillRy = pillY - pillH / 2;

  return (
    <svg
      ref={svgRef}
      className="hidden xl:block pointer-events-none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: `${Math.max(srcY, tgtY) + 200}px`,
        zIndex: 5,
        overflow: 'visible',
      }}
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="1" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <style>{`
          @keyframes dashMove {
            to { stroke-dashoffset: -40; }
          }
          .dash-animated {
            animation: dashMove 1.2s linear infinite;
          }
        `}</style>
      </defs>

      {/* Glow trail */}
      <motion.path
        d={path}
        fill="none"
        stroke="#16a34a"
        strokeWidth="6"
        strokeOpacity="0.15"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Main line */}
      <motion.path
        d={path}
        fill="none"
        stroke="url(#arrowGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />

      {/* Animated dashes */}
      <motion.path
        d={path}
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 34"
        className="dash-animated"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />

      {/* Arrowhead */}
      <motion.g
        transform={`translate(${tgtX}, ${tgtY}) rotate(${angle})`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.3, ease: 'backOut' }}
      >
        <polygon points="-10,-6 0,0 -10,6" fill="#16a34a" filter="url(#glow)" />
      </motion.g>

      {/* Label pill — rendered as SVG shapes so it can never be clipped */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        {/* Pill background */}
        <rect
          x={pillRx}
          y={pillRy}
          width={pillW}
          height={pillH}
          rx={pillH / 2}
          fill="#16a34a"
          filter="url(#glow)"
        />
        {/* Dot */}
        <circle cx={pillRx + 18} cy={pillY} r={4} fill="rgba(255,255,255,0.7)" />
        {/* Text */}
        <text
          x={pillRx + 30}
          y={pillY + 4}
          fill="white"
          fontSize="10"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.1em"
          textAnchor="start"
          style={{ textTransform: 'uppercase' }}
        >
          {lang === 'id' ? 'Termasuk di Paket 3' : 'Included in Package 3'}
        </text>
      </motion.g>
    </svg>
  );
}