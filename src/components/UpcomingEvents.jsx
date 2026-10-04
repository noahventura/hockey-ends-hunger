import React from 'react';
import EventIntro from './EventIntro';
import EventCards from './EventCards';
import ScrollHint from './ScrollHint';
import { event2026 as ev } from '../data/event';

const UpcomingEvents = () => {
  return (
    <div className="page">
      <ScrollHint />
      <h1 className="page-title mb-8 md:mb-12">Upcoming Events</h1>

      <EventIntro />

      <div className="mt-12">
        <EventCards />
      </div>

      <div className="card mt-8 p-6 md:p-8">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">Good to know</h3>
        <ul className="mt-4 space-y-3 text-base md:text-lg text-navy/90">
          {ev.notes.map((n) => (
            <li key={n} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rush" aria-hidden="true" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;
