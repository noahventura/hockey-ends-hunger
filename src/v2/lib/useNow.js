import { useEffect, useState } from 'react';
import { event2026 as ev } from '../data/event';

// ticks once a second, lined up with the wall clock, and stops while the tab is hidden
export function useNow() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    let timer;
    const tick = () => {
      setNow(Date.now());
      timer = setTimeout(tick, 1000 - (Date.now() % 1000));
    };
    const onVisibility = () => {
      clearTimeout(timer);
      if (!document.hidden) tick();
    };
    tick();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return now;
}

const t = (iso) => new Date(iso).getTime();

// where the night is at a given moment
export function phaseAt(now) {
  if (now < t(ev.game.start)) return 'before';
  if (now < t(ev.game.end)) return 'game';
  if (now < t(ev.party.end)) return 'party';
  return 'after';
}

export function untilPuckDrop(now) {
  const ms = Math.max(0, t(ev.game.start) - now);
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}
