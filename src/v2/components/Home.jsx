import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Stripe from './Stripe';
import Edge from './Edge';
import Picture from './Picture';
import GameClock from './GameClock';
import CalendarMenu from './CalendarMenu';
import RollingFigure from './RollingFigure';
import Viewer from './Viewer';
import SponsorCall from './SponsorCall';
import { PosterModal } from './Poster';
import { useViewTransitionState } from '../lib/useViewTransitionState';
import { Slip, SlipGroup, SlipTotal, Row } from './Slip';
import { MailIcon, PinIcon } from './Icons';
import logo from '../../images/logo.png';
import { photos } from '../data/photos';
import { EMAIL, event2026 as ev, mapLink, results, totals, fmt } from '../data/event';
import { useReveal } from '../lib/useReveal';
import { useFitText } from '../lib/useFitText';
import { prefersReducedMotion } from '../lib/useOverlay';

const heroSlides = [photos.groupIce2025, photos.faceoff2025, photos.team2024, photos.mayorFood2025];

// the rink photo: four pictures crossfade slowly, each drifting a little while it holds
const HeroPhoto = () => {
  const [on, setOn] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer;
    const start = () => {
      timer = setInterval(() => setOn((n) => (n + 1) % heroSlides.length), 6500);
    };
    const onVisibility = () => {
      clearInterval(timer);
      if (!document.hidden) start();
    };
    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <figure className="hero__photo" data-load="open">
      {heroSlides.map((p, n) => (
        <div className={`hero__slide ${n === on ? 'is-on' : ''}`} key={n} aria-hidden={n !== on}>
          <Picture photo={p} sizes="(min-width: 1024px) 50vw, 100vw" priority={n === 0} />
        </div>
      ))}
      <GameClock className="clock--board" />
      <figcaption className="hero__caption">{heroSlides[on].caption}</figcaption>
    </figure>
  );
};

const Hero = () => {
  const [posterOpen, setPosterOpen] = useViewTransitionState(false);
  const titleRef = useFitText({ max: 200 });
  return (
    <section className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__inner">
        <HeroPhoto />
        <div className="hero__card">
          <Stripe />
          <div className="hero__body">
            <div className="hero__fit">
              <h1 id="hero-title" ref={titleRef} className="display hero__title">
                <span className="load-line"><span style={{ '--i': 0 }}>Hockey Ends</span></span>
                <span className="load-line"><span style={{ '--i': 1 }}>Hunger</span></span>
              </h1>
              <p className="h-lead hero__when" data-load style={{ '--d': '360ms' }}>
                Charity game and food drive
                <br />
                Saturday, November 28 at 5&nbsp;PM
              </p>
            </div>
            <div className="hero__lower">
            <p className="measure-wide pretty" data-load style={{ '--d': '440ms' }}>
              Our fourth year at the {ev.game.place}, with the after party to follow in Newmarket. Bring a non-perishable
              item; every dollar and every can goes to the Aurora Food Pantry.
            </p>
            <div className="hero__actions" data-load style={{ '--d': '520ms' }}>
              <div className="hero__cta">
                <a href="#the-night" className="btn btn-red">
                  See the schedule
                </a>
                <CalendarMenu className="btn btn-ice" />
              </div>
              <div className="hero__links">
                <button type="button" className="link link-btn" onClick={() => setPosterOpen(true)}>
                  See the poster
                </button>
                <a className="link" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer">
                  Directions to the rink
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {posterOpen && <PosterModal onClose={() => setPosterOpen(false)} showDetailsLink />}
    </section>
  );
};

const Night = () => (
  <section id="the-night" className="section ground-ice night" aria-labelledby="night-title">
    <div className="wrap grid12">
      <div className="night__intro">
        <h2 id="night-title" className="display h-head" data-reveal>
          One night, two stops
        </h2>
        <p className="lead measure pretty" data-reveal style={{ '--i': 1 }}>
          Watch the game in Aurora, then head to Main Street in Newmarket for the after party and the raffle. Everyone is
          welcome at both.
        </p>
        <div className="bring" data-reveal style={{ '--i': 2 }}>
          <h3 className="h-lead">What to bring</h3>
          <ul>
            <li>
              <strong>Non-perishable food</strong> for the food drive. Please check the best-before dates.
            </li>
            <li>
              <strong>Cash</strong> for raffle tickets, sold at the event and drawn at the after party.
            </li>
            <li>
              <strong>Your friends.</strong> More people in the stands means more food on the shelves.
            </li>
          </ul>
        </div>
      </div>

      <Slip className="night__slip" data-reveal="drop" style={{ '--tilt': '-1deg', '--i': 1 }}>
        <p className="slip__title">Game night, {ev.dateShort}</p>
        <SlipGroup heading={`${ev.game.place}, Aurora`}>
          <Row label="Puck drop" value="5:00 PM" />
          <Row label="Final buzzer" value="7:00 PM" />
          <a className="slip__map link small" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer">
            <PinIcon />
            {ev.game.street}
          </a>
        </SlipGroup>
        <SlipGroup heading={`${ev.party.place}, Newmarket`}>
          <Row label="After party" value="7:30 PM" />
          <Row label="Raffle draw" value="At the party" />
          <Row label="Last call" value="Late" />
          <a className="slip__map link small" href={mapLink(`${ev.party.place}, ${ev.party.address}`)} target="_blank" rel="noopener noreferrer">
            <PinIcon />
            {ev.party.street}
          </a>
        </SlipGroup>
        <SlipTotal label="Every dollar and can" value="Aurora Food Pantry" />
      </Slip>
    </div>
  </section>
);

const Numbers = () => (
  <section className="section ground-navy on-dark numbers" aria-labelledby="numbers-title">
    <div className="wrap grid12">
      <div className="numbers__left">
        <div>
          <h2 id="numbers-title" className="display h-head" data-reveal>
            Every year, more food
          </h2>
          <p className="measure numbers__note pretty" data-reveal style={{ '--i': 1 }}>
            What the 2024 and 2025 games collected for the Aurora Food Pantry. The 2025 game brought in three times the
            food of the year before.
          </p>
        </div>
        <p className="numbers__total">
          <span className="display numbers__figure">
            <RollingFigure value={fmt(totals.pounds)} />
          </span>
          <span className="lead">pounds of food in two years, and more than ${fmt(totals.dollars)} raised</span>
        </p>
      </div>

      <Slip className="numbers__slip" data-reveal="drop" style={{ '--tilt': '1deg', '--i': 1 }}>
        <p className="slip__title">Donations to the Aurora Food Pantry</p>
        {results.map((r) => (
          <SlipGroup key={r.year} heading={`${r.year} charity game`}>
            <Row label="Raised" value={`$${fmt(r.dollars)}`} />
            <Row label="Food collected" value={`${fmt(r.pounds)} lbs`} />
          </SlipGroup>
        ))}
        <SlipGroup heading="Two-year total">
          <Row label="Raised" value={`$${fmt(totals.dollars)}`} />
        </SlipGroup>
        <SlipTotal label="Food collected" value={`${fmt(totals.pounds)} lbs`} />
        <p className="slip__foot small">
          Each year raised a little over these amounts. The 2026 game is counted on November 28.
        </p>
      </Slip>
    </div>
  </section>
);

const tiles = [
  photos.groupIce2025,
  photos.faceoff2025,
  photos.mayorFood2025,
  photos.foodBins2025,
  photos.team2024,
  photos.raffle2025,
  photos.trio2024,
  photos.volunteers2024,
];

const Gallery = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="section ground-paper gallery" aria-labelledby="gallery-title">
      <div className="wrap">
        <div className="gallery__head">
          <h2 id="gallery-title" className="display h-head" data-reveal>
            From the ice
          </h2>
          <RouterLink to="/previous-events" viewTransition className="link" data-reveal style={{ '--i': 1 }}>
            Every photo from 2024 and 2025
          </RouterLink>
        </div>
        <ul className="tiles">
          {tiles.map((p, i) => (
            <li key={i} className="tile" data-reveal style={{ '--i': i % 4 }}>
              <button type="button" className="tile__btn" onClick={() => setOpen(i)} aria-label={`Open photo: ${p.caption}`}>
                <span className="tile__photo">
                  <Picture photo={p} sizes="(min-width: 1024px) 24vw, 50vw" />
                </span>
                <span className={`tile__strip tone-${i % 4}`}>
                  <span className="tile__row">
                    <strong>{p.year}</strong>
                    <span>{p.title}</span>
                  </span>
                  <span className="tile__cap">{p.caption}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && <Viewer items={tiles} start={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

const Letter = () => (
  <section className="section ground-ice letter" aria-labelledby="letter-title">
    <div className="wrap letter__stage">
      <figure className="plate plate--left" data-reveal="drop" style={{ '--tilt': '-4deg' }}>
        <Picture photo={photos.volunteers2024} sizes="(min-width: 1200px) 22vw, 60vw" />
        <figcaption className="small">{photos.volunteers2024.caption}</figcaption>
      </figure>

      <article className="letter__sheet" data-reveal>
        <div className="sheet">
          <img src={logo} className="letter__crest" alt="" width="56" height="65" />
          <h2 id="letter-title" className="display h-head">
            Why we play
          </h2>
          <div className="prose letter__body">
            <p>
              We started Hockey Ends Hunger in 2023 with a simple plan: get our friends on the ice, fill the stands, and turn
              one night of hockey into <mark>food on the shelves of our local pantry</mark>.
            </p>
            <p>
              Every year the players, fans and businesses of Aurora and Newmarket have shown up bigger. In 2025 that meant
              $4,200 and 1,661 pounds of food for the Aurora Food Pantry, almost twice the money and three times the food of
              the year before.
            </p>
            <p>
              This is our fourth year. Come watch, bring a bag of groceries, stay for the after party and buy a few raffle
              tickets. All of it goes to families who need it, right here at home.
            </p>
          </div>
          <p className="letter__sign">
            The Hockey Ends Hunger team
            <span className="small">Aurora, Ontario</span>
          </p>
        </div>
        <div className="stub">
          <Edge kind="perf" color="var(--color-ice)" />
          <div className="stub__body">
            <p>Questions, or want to help out on the night?</p>
            <a className="btn btn-navy" href={`mailto:${EMAIL}`}>
              <MailIcon />
              Email us
            </a>
          </div>
        </div>
        <Edge kind="scallop" />
      </article>

      <figure className="plate plate--right" data-reveal="drop" style={{ '--tilt': '3deg', '--i': 2 }}>
        <Picture photo={photos.foodBins2025} sizes="(min-width: 1200px) 22vw, 60vw" />
        <figcaption className="small">{photos.foodBins2025.caption}</figcaption>
      </figure>
    </div>
  </section>
);

const Home = () => {
  useReveal();
  return (
    <>
      <Hero />
      <Night />
      <Numbers />
      <Gallery />
      <Letter />
      <SponsorCall />
    </>
  );
};

export default Home;
