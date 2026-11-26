import React from 'react';
import { useNow, phaseAt, untilPuckDrop } from '../lib/useNow';
import { event2026 as ev, mapLink } from '../data/event';

const pad = (n) => String(n).padStart(2, '0'); // taste-skill-ignore: clock digits
const unit = (n, one, many) => (n === 1 ? one : many);

const live = {
  game: {
    title: 'Game on',
    text: `At the ${ev.game.place} until 7 PM. Bring something for the food drive.`,
    where: ev.game,
  },
  party: {
    title: 'After party on',
    text: `At ${ev.party.place}, ${ev.party.street}, Newmarket. Raffle tickets are cash only.`,
    where: ev.party,
  },
  after: {
    title: 'Thank you',
    text: 'Thanks to everyone who came out for our fourth year. The totals for the Aurora Food Pantry are coming soon.',
  },
};

// the arena scoreboard, counting down to puck drop; once the night starts it says where to go
const GameClock = ({ className = '' }) => {
  const now = useNow();
  const phase = phaseAt(now);

  if (phase !== 'before') {
    const s = live[phase];
    return (
      <div className={`clock clock-live ${className}`} role="status">
        <p className="clock__label">
          <span className="clock__lamp" aria-hidden="true" />
          {phase === 'after' ? 'Final buzzer' : 'Happening now'}
        </p>
        <p className="display clock__title">{s.title}</p>
        <p>{s.text}</p>
        {s.where && (
          <p>
            <a className="link" href={mapLink(`${s.where.place}, ${s.where.address}`)} target="_blank" rel="noopener noreferrer">
              Directions to {s.where.place}
            </a>
          </p>
        )}
      </div>
    );
  }

  const { days, hours, minutes, seconds } = untilPuckDrop(now);
  const cells = [
    [days, unit(days, 'day', 'days')],
    [hours, unit(hours, 'hour', 'hours')],
    [minutes, 'min'],
    [seconds, 'sec'],
  ];

  return (
    <div className={`clock ${className}`} role="group" aria-label="Countdown to puck drop">
      <p className="sr-only">
        {days} {unit(days, 'day', 'days')}, {hours} {unit(hours, 'hour', 'hours')} and {minutes}{' '}
        {unit(minutes, 'minute', 'minutes')} until puck drop at 5 PM on {ev.dateLong}.
      </p>
      <div className="clock__cells" aria-hidden="true">
        {cells.map(([n, label], c) => (
          <div className="clock__cell" key={c}>
            <span className="clock__num">
              {pad(n)
                .split('')
                .map((d, i) => (
                  // keyed on the digit, so only a digit that changes rolls in
                  <span className="clock__digit" key={`${i}-${d}`}>
                    {d}
                  </span>
                ))}
            </span>
            <span className="clock__unit">{label}</span>
          </div>
        ))}
      </div>
      <p className="clock__label" aria-hidden="true">
        <span className="clock__lamp" />
        until puck drop, 5 PM Saturday
      </p>
    </div>
  );
};

// one line for the phone dock
export const CompactClock = () => {
  const now = useNow();
  const phase = phaseAt(now);
  if (phase === 'game') return <span>Game on now</span>;
  if (phase === 'party') return <span>After party on now</span>;
  if (phase === 'after') return <span>Thanks for coming</span>;
  const { days, hours, minutes, seconds } = untilPuckDrop(now);
  return (
    <span aria-label={`${days} days ${hours} hours until puck drop`}>
      Puck drop in {days > 0 && `${days}d `}
      {pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </span>
  );
};

export default GameClock;
