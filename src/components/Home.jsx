import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import rink from '../images/rink.jpg';
import logoWhite from '../images/logowhite.png';
import PosterPopup from './PosterPopup';
import EventIntro from './EventIntro';
import { event2026 as ev } from '../data/event';

const Home = () => {
  return (
    <div>
      <PosterPopup />

      {/* Hero */}
      <div className="relative h-svh min-h-[560px] overflow-hidden bg-navy-deep">
        <img
          src={rink}
          alt="Hockey ends hunger charity hockey game with Aurora Mayor Tom Mrakas"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy/45 to-navy-deep/90" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-16 text-center">
          <img src={logoWhite} alt="Hockey Ends Hunger maple leaf logo" className="mb-6 h-32 md:h-40" />
          <p className="font-display text-xl md:text-2xl font-light uppercase tracking-[0.3em] text-white text-shadow">
            Est. 2023
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-white text-shadow">
            Fighting food insecurity through hockey
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <RouterLink to="/upcoming-events" className="btn-primary">
              {ev.month} {ev.day} Event Details
            </RouterLink>
            <RouterLink to="/about" className="btn-ghost">
              Learn More
            </RouterLink>
          </div>
        </div>

        <button
          onClick={() => document.getElementById('next-event')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-3xl text-white focus:outline-none"
          aria-label="Scroll to next event"
        >
          <svg
            viewBox="0 0 24 24"
            className="block h-8 w-8 animate-float will-change-transform"
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
      </div>

      {/* Next event */}
      <section id="next-event" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <EventIntro showButton />
      </section>
    </div>
  );
};

export default Home;
