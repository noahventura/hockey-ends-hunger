import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Picture from './Picture';
import { ChevronLeft, ChevronRight, CloseIcon } from './Icons';
import { useOverlay, prefersReducedMotion } from '../lib/useOverlay';

// full-screen photo viewer: swipe on a phone (native scroll snap), arrow keys or buttons elsewhere
const Viewer = ({ items, start = 0, onClose }) => {
  const ref = useOverlay(true, onClose);
  const track = useRef(null);
  const frame = useRef(0);
  const [index, setIndex] = useState(start);

  useLayoutEffect(() => {
    const t = track.current;
    t.scrollLeft = start * t.clientWidth;
  }, [start]);

  const go = (i) => {
    const t = track.current;
    const next = Math.max(0, Math.min(items.length - 1, i));
    t.scrollTo({ left: next * t.clientWidth, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const t = track.current;
      if (t) setIndex(Math.round(t.scrollLeft / t.clientWidth));
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(index + 1);
    if (e.key === 'ArrowLeft') go(index - 1);
  };

  return createPortal(
    <div ref={ref} className="overlay" role="dialog" aria-modal="true" aria-label="Photo viewer" onKeyDown={onKeyDown}>
      <div className="overlay__bar wrap">
        <p className="small" style={{ margin: 0 }} aria-live="polite">
          Photo {index + 1} of {items.length}
        </p>
        <div className="viewer__nav">
          <button type="button" className="viewer__btn" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous photo">
            <ChevronLeft />
          </button>
          <button type="button" className="viewer__btn" onClick={() => go(index + 1)} disabled={index === items.length - 1} aria-label="Next photo">
            <ChevronRight />
          </button>
          <button type="button" className="overlay__close" onClick={onClose} autoFocus>
            <CloseIcon />
            Close
          </button>
        </div>
      </div>
      <div className="viewer__track" ref={track} onScroll={onScroll}>
        {items.map((p, i) => (
          <figure className="viewer__slide" key={i} aria-hidden={i !== index}>
            <Picture photo={p} sizes="100vw" priority={Math.abs(i - start) < 2} pos="50% 50%" />
            <figcaption>
              <strong>{p.year}.</strong> {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>,
    document.body,
  );
};

export default Viewer;
