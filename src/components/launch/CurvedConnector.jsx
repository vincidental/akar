import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CurvedConnector — Desktop only.
 * Draws an animated curved SVG arrow from the bottom of the Paket3 card
 * to the top-left of the GBP section, visually merging two sections.
 */
export default function CurvedConnector({ sourceRef, targetRef, lang }) {
  const [path, setPath] = useState(null);
  const [dims, setDims] = useState({ width: 0, height: 0, offsetTop: 0, offsetLeft: 0 });
  const svgRef = useRef(null);

  useEffect(() => {
    const calculate = () => {
      if (!sourceRef?.current || !targetRef?.current) return;

      const src = sourceRef.current.getBoundingClientRect();
      const tgt = targetRef.current.getBoundingClientRect();

      // Source point: bottom-center of Paket 3 card
      const srcX = src.left + src.width / 2;
      const srcY = src.bottom;

      // Target point: top-center-left of GBP section (slightly left of center for elegance)
      const tgtX = tgt.left + tgt.width * 0.42;
      const tgtY = tgt.top + 60;

      // SVG container spans from just above srcY to tgtY
      const padding = 40;
      const svgLeft = Math.min(srcX, tgtX) - padding;
      const svgTop = srcY - padding;
      const svgWidth = Math.abs(srcX - tgtX) + padding * 2 + 120;
      const svgHeight = tgtY - srcY + padding * 2 + 60;

      // Translate to local SVG coords
      const x1 = srcX - svgLeft;
      const y1 = srcY - svgTop;
      const x2 = tgtX - svgLeft;
      const y2 = tgtY - svgTop;

      // Cubic bezier control points for a flowing S-curve
      const cp1x = x1 + (x2 - x1) * 0.1;
      const cp1y = y1 + (y2 - y1) * 0.55;
      const cp2x = x2 - (x2 - x1) * 0.1;
      const cp2y = y2 - (y2 - y1) * 0.3;

      setPath(`M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
      setDims({
        width: svgWidth,
        height: svgHeight,
        offsetTop: svgTop + window.scrollY,
        offsetLeft: svgLeft,
        arrowTipX: x2,
        arrowTipY: y2,
        // angle at tip for arrowhead
        dx: x2 - cp2x,
        dy: y2 - cp2y,
      });
    };

    // Use rAF to ensure layout is fully painted before measuring
    let raf = requestAnimationFrame(() => {
      calculate();
      // Secondary pass for webfonts / images that shift layout
      setTimeout(calculate, 500);
    });

    window.addEventListener('resize', calculate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', calculate);
    };
  }, [sourceRef, targetRef]);

  if (!path) return null;

  // Arrowhead angle
  const angle = Math.atan2(dims.dy, dims.dx) * (180 / Math.PI);

  return (
    <svg
      ref={svgRef}
      className="hidden xl:block pointer-events-none"
      style={{
        position: 'absolute',
        top: dims.offsetTop,
        left: dims.offsetLeft,
        width: dims.width,
        height: dims.height,
        zIndex: 5,
        overflow: 'hidden',
      }}
    >
      <defs>
        <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Animated dash */}
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

      {/* Main curved line */}
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

      {/* Animated dashes flowing along the curve */}
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

      {/* Arrowhead at tip */}
      <motion.g
        transform={`translate(${dims.arrowTipX}, ${dims.arrowTipY}) rotate(${angle})`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.3, ease: 'backOut' }}
      >
        <polygon
          points="-10,-6 0,0 -10,6"
          fill="#16a34a"
          filter="url(#glow)"
        />
      </motion.g>

      {/* Label pill on the curve (approx midpoint) */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
      >
        {/* Position the pill roughly at 45% along the path — approximate midpoint */}
        <foreignObject
          x={dims.width * 0.28}
          y={dims.height * 0.38}
          width="180"
          height="36"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              background: '#16a34a',
              borderRadius: '999px',
              padding: '6px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 20px rgba(22,163,74,0.35)',
              whiteSpace: 'nowrap',
              fontSize: '10px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'white',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', animation: 'pulse 2s infinite' }} />
            {lang === 'id' ? 'Termasuk di Paket 3' : 'Included in Package 3'}
          </div>
        </foreignObject>
      </motion.g>
    </svg>
  );
}