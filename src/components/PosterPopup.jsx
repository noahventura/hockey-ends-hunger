import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import poster from '../images/2026/poster.jpg';

// new key for 2026, so visitors who closed the 2025 popup see this one
const STORAGE_KEY = 'hasSeenPoster2026';

// the overlay itself, controlled by the parent
export const PosterModal = ({ onClose, showDetailsLink = true }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const close = onClose;

  return (
    <div
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Hockey Ends Hunger 2026 event poster"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/80 backdrop-blur-sm p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full flex-col items-center gap-3 animate-pop-in"
      >
        <button
          onClick={close}
          autoFocus
          aria-label="Close poster"
          className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy text-lg font-bold shadow-lg hover:bg-rush hover:text-white transition"
        >
          ✕
        </button>
        <img
          src={poster}
          alt="Poster for the 4th annual Hockey Ends Hunger food drive, charity game and after party on Saturday, November 28, 2026"
          className="max-h-[78vh] max-w-[92vw] w-auto h-auto rounded-2xl shadow-2xl object-contain bg-white"
        />
        {showDetailsLink && (
          <RouterLink to="/upcoming-events" onClick={close} className="btn-primary">
            Event details
          </RouterLink>
        )}
      </div>
    </div>
  );
};

// shows the poster once, on the visitor's first visit
const PosterPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setShow(true);
        localStorage.setItem(STORAGE_KEY, 'true');
      }
    } catch {
      // storage blocked (private mode), skip the popup
    }
  }, []);

  if (!show) return null;
  return <PosterModal onClose={() => setShow(false)} />;
};

export default PosterPopup;
