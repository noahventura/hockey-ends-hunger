import React, { useEffect, useState } from 'react';

// blue down arrow for phones, shows until the visitor scrolls
const ScrollHint = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: 'smooth' })}
      className="md:hidden fixed bottom-5 left-1/2 z-20 -translate-x-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg ring-1 ring-frost animate-fade-in"
      aria-label="Scroll down for more"
    >
      <svg
        viewBox="0 0 24 24"
        className="block h-7 w-7 animate-float will-change-transform"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
};

export default ScrollHint;
