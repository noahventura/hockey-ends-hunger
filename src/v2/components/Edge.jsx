import React, { useId } from 'react';

// shaped paper edges drawn as a repeating SVG pattern, so each tooth keeps its size at any width.
// Each shape hangs down from the top of its strip; `flip` turns it to face up.
const shapes = {
  zigzag: { w: 18, h: 10, el: <path d="M0 0H18L9 10Z" /> },
  scallop: { w: 28, h: 14, el: <path d="M0 0H28A14 14 0 0 1 0 0Z" /> },
  'scallop-lg': { w: 100, h: 26, el: <path d="M0 0H100A50 26 0 0 1 0 0Z" /> },
  perf: { w: 14, h: 8, el: <circle cx="7" cy="4" r="3" /> },
};

const Edge = ({ kind = 'zigzag', flip = false, color, className = '' }) => {
  const id = `edge-${useId().replace(/[^a-zA-Z0-9-]/g, '')}`;
  const s = shapes[kind];
  return (
    <svg
      className={`edge ${flip ? 'edge-flip' : ''} ${className}`}
      style={{ height: s.h, color }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={id} width={s.w} height={s.h} patternUnits="userSpaceOnUse">
          <g fill="currentColor">{s.el}</g>
        </pattern>
      </defs>
      <rect width="100%" height={s.h} fill={`url(#${id})`} />
    </svg>
  );
};

export default Edge;
