import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CalendarMenu from './CalendarMenu';
import { CompactClock } from './GameClock';
import { PinIcon } from './Icons';
import { event2026 as ev, mapLink } from '../data/event';

// phones only: past the first screen, scrolling back up brings up the date, the clock and two
// thumb-sized actions, the way Safari's toolbar returns; scrolling on to read puts it away so it
// never sits over what you are reading. It steps aside for the footer, which carries the same details.
const MobileDock = () => {
  const { pathname } = useLocation();
  const [past, setPast] = useState(false);
  const [up, setUp] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setPast(y > window.innerHeight * 0.65);
      // a few pixels of hysteresis so a trembling thumb does not flicker it
      if (Math.abs(y - last) > 8) {
        setUp(y < last);
        last = y;
      }
    };
    setUp(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setAtFooter(e.isIntersecting));
    io.observe(footer);
    return () => io.disconnect();
  }, [pathname]);

  const show = past && up && !atFooter;

  return (
    <div className="dock on-dark" data-show={show} aria-hidden={!show} inert={show ? undefined : ''}>
      <p className="dock__when" style={{ margin: 0 }}>
        <strong>{ev.dateShort}, 5 PM</strong>
        <CompactClock />
      </p>
      <div className="dock__actions">
        <a className="btn btn-paper" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer" aria-label="Directions to the rink">
          <PinIcon />
          <span className="sr-only">Directions</span>
        </a>
        <CalendarMenu className="btn btn-red" label="Calendar" up right />
      </div>
    </div>
  );
};

export default MobileDock;
