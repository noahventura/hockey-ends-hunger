import React from 'react';

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.25,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  'aria-hidden': true,
  focusable: false,
};

export const CalendarIcon = () => (
  <svg {...base}>
    <path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" />
  </svg>
);

export const PinIcon = () => (
  <svg {...base}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const CloseIcon = () => (
  <svg {...base}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const ChevronLeft = () => (
  <svg {...base}>
    <path d="M15 5l-7 7 7 7" />
  </svg>
);

export const ChevronRight = () => (
  <svg {...base}>
    <path d="M9 5l7 7-7 7" />
  </svg>
);

export const MailIcon = () => (
  <svg {...base}>
    <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
  </svg>
);

export const ExpandIcon = () => (
  <svg {...base}>
    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
  </svg>
);
