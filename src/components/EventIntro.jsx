import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import poster from '../images/2026/poster.jpg';
import { PosterModal } from './PosterPopup';
import { event2026 as ev } from '../data/event';

// poster plus headline, shared by the home page and the upcoming events page
const EventIntro = ({ showButton = false }) => {
  const [open, setOpen] = useState(false);

  return (
  <div className="grid items-center gap-8 md:gap-10 md:grid-cols-5">
    {/* poster sits under the text on phones so the date shows first */}
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Enlarge the poster"
      className="order-2 md:order-1 md:col-span-2 mx-auto block w-full max-w-[15rem] md:max-w-sm cursor-zoom-in"
    >
      <img
        src={poster}
        alt={`Poster for the Hockey Ends Hunger event on ${ev.dateLong}`}
        className="w-full rounded-2xl shadow-[0_14px_40px_rgba(0,32,91,0.25)]"
        loading="lazy"
      />
      <span className="mt-2 block text-center text-sm text-navy/70 md:hidden">Tap to enlarge</span>
    </button>

    <div className="order-1 md:order-2 md:col-span-3 space-y-3 md:space-y-5 text-center md:text-left">
      <p className="eyebrow">Next event</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-tight">
        {ev.subtitle}
      </h2>
      <p className="text-lg md:text-xl font-semibold">{ev.dateLong}</p>
      {showButton && (
        <RouterLink to="/upcoming-events" className="btn-navy">
          Full details
        </RouterLink>
      )}
    </div>
    {open && <PosterModal onClose={() => setOpen(false)} showDetailsLink={showButton} />}
  </div>
  );
};

export default EventIntro;
