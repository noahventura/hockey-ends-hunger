import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Picture from './Picture';
import Viewer from './Viewer';
import RollingFigure from './RollingFigure';
import CalendarMenu from './CalendarMenu';
import FitTitle from './FitTitle';
import { Slip, SlipTotal, Row } from './Slip';
import { ExpandIcon } from './Icons';
import { photos, gallery2024, gallery2025 } from '../data/photos';
import { results, totals, fmt } from '../data/event';
import { useReveal } from '../lib/useReveal';

const years = [
  {
    ...results[0],
    edition: '2nd annual',
    title: 'The 2024 charity game',
    text: 'Thanks to the support of local players, businesses and fans, our second game raised more than $2,200 for the Aurora Food Pantry and finished with an after party and raffle prizes.',
    photos: gallery2024,
  },
  {
    ...results[1],
    edition: '3rd annual',
    title: 'The 2025 charity game',
    text: 'Our biggest year yet. Thanks to the incredible support of our community, the food drive tripled and we hosted our largest after party, with raffle prizes from local businesses.',
    photos: gallery2025,
  },
];

// rows of moments; pointing at, focusing or tapping one brings its photo into the frame
const IndexPreview = ({ items, year }) => {
  const [active, setActive] = useState(0);
  const [viewer, setViewer] = useState(null);

  return (
    <div className="index">
      <div className="index__frame">
        {items.map((p, i) => (
          <div key={i} className={`index__img ${i === active ? 'is-on' : ''}`} aria-hidden={i !== active}>
            <Picture photo={p} sizes="(min-width: 1024px) 52vw, 100vw" />
          </div>
        ))}
        <button type="button" className="index__open btn btn-paper" onClick={() => setViewer(active)}>
          <ExpandIcon />
          Full size
        </button>
      </div>
      <ul className="index__rows" aria-label={`Photos from ${year}`}>
        {items.map((p, i) => (
          <li key={i}>
            <button
              type="button"
              className={`index__row ${i === active ? 'is-on' : ''}`}
              aria-pressed={i === active}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="index__title">{p.title}</span>
              <span className="index__cap">{p.caption}</span>
            </button>
          </li>
        ))}
      </ul>
      {viewer !== null && <Viewer items={items} start={viewer} onClose={() => setViewer(null)} />}
    </div>
  );
};

const Year = ({ y, flip, ground }) => (
  <section className={`section ${ground} year ${flip ? 'year--flip' : ''}`} aria-labelledby={`y${y.year}`}>
    <div className="wrap grid12 year__grid">
      <div className="year__text">
        <p className="display year__num" aria-hidden="true" data-reveal>
          {y.year}
        </p>
        <h2 id={`y${y.year}`} className="h-lead" data-reveal style={{ '--i': 1 }}>
          {y.title}
        </h2>
        <p className="pretty" data-reveal style={{ '--i': 2 }}>
          {y.text}
        </p>
        <Slip className="year__slip" data-reveal style={{ '--i': 3 }}>
          <Row label="Game" value={y.edition} />
          <Row label="Raised for the pantry" value={`$${fmt(y.dollars)}`} />
          <SlipTotal label="Food collected" value={`${fmt(y.pounds)} lbs`} />
        </Slip>
      </div>
      <div className="year__media" data-reveal style={{ '--i': 1 }}>
        <IndexPreview items={y.photos} year={y.year} />
      </div>
    </div>
  </section>
);

const PreviousEvents = () => {
  useReveal();
  return (
    <>
      <section className="page-head ground-ice" aria-labelledby="page-title">
        <div className="wrap grid12 past__head">
          <div className="past__text">
            <FitTitle lines={['Past years']} max={200} />
            <p className="lead measure pretty" data-load style={{ '--d': '300ms' }}>
              What our 2024 and 2025 charity games raised for the Aurora Food Pantry, and what the nights looked like.
            </p>
            <dl className="past__stats" data-load style={{ '--d': '420ms' }}>
              <div>
                <dt>raised</dt>
                <dd className="display">
                  <RollingFigure value={`$${fmt(totals.dollars)}`} />
                </dd>
              </div>
              <div>
                <dt>pounds of food</dt>
                <dd className="display">
                  <RollingFigure value={fmt(totals.pounds)} />
                </dd>
              </div>
            </dl>
          </div>
          <figure className="past__photo" data-load="open">
            <Picture photo={photos.team2024} sizes="(min-width: 1024px) 50vw, 100vw" priority />
            <figcaption className="hero__caption">{photos.team2024.caption}</figcaption>
          </figure>
        </div>
      </section>

      <Year y={years[0]} ground="ground-paper" />
      <Year y={years[1]} ground="ground-navy on-dark" flip />

      <section className="section ground-red on-red next" aria-labelledby="next-title">
        <div className="wrap next__inner">
          <h2 id="next-title" className="display h-display" data-reveal>
            2026 is next
          </h2>
          <p className="lead" data-reveal style={{ '--i': 1 }}>
            Saturday, November 28. Help make our fourth year the biggest one yet.
          </p>
          <div className="next__cta" data-reveal style={{ '--i': 2 }}>
            <RouterLink to="/upcoming-events" viewTransition className="btn btn-paper">
              See the Nov 28 details
            </RouterLink>
            <CalendarMenu className="btn btn-navy" up />
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousEvents;
