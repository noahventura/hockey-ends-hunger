import React from 'react';
import { createPortal } from 'react-dom';
import { Link as RouterLink } from 'react-router-dom';
import Picture from './Picture';
import { CloseIcon, ExpandIcon } from './Icons';
import { poster } from '../data/photos';
import { useOverlay } from '../lib/useOverlay';
import { useViewTransitionState } from '../lib/useViewTransitionState';

export const PosterModal = ({ onClose, showDetailsLink = false }) => {
  const ref = useOverlay(true, onClose);
  return createPortal(
    <div ref={ref} className="overlay" role="dialog" aria-modal="true" aria-label="Hockey Ends Hunger 2026 event poster" onClick={onClose}>
      <div className="overlay__bar wrap" onClick={(e) => e.stopPropagation()}>
        <p className="small" style={{ margin: 0 }}>The 2026 poster</p>
        <button type="button" className="overlay__close" onClick={onClose} autoFocus>
          <CloseIcon />
          Close
        </button>
      </div>
      <div className="poster-full">
        <Picture pic={poster.pic} alt={poster.alt} sizes="(min-width: 800px) 800px, 100vw" priority />
        {showDetailsLink && (
          <RouterLink to="/upcoming-events" className="btn btn-red" onClick={onClose}>
            Event details
          </RouterLink>
        )}
      </div>
    </div>,
    document.body,
  );
};

// the poster as a tipped-in print; tap to see it full size
export const PosterThumb = ({ className = '', sizes = '(min-width: 1024px) 34vw, 70vw' }) => {
  const [open, setOpen] = useViewTransitionState(false);
  return (
    <>
      <button type="button" className={`poster-thumb ${className}`} onClick={() => setOpen(true)}>
        <Picture pic={poster.pic} alt={poster.alt} sizes={sizes} style={{ viewTransitionName: open ? 'none' : 'poster' }} />
        <span className="poster-thumb__hint">
          <ExpandIcon />
          See the poster full size
        </span>
      </button>
      {open && <PosterModal onClose={() => setOpen(false)} />}
    </>
  );
};
