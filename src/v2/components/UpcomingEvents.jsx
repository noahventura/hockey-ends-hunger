import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Edge from './Edge';
import Picture from './Picture';
import GameClock from './GameClock';
import FitTitle from './FitTitle';
import CalendarMenu from './CalendarMenu';
import { PosterThumb } from './Poster';
import { Row } from './Slip';
import { PinIcon } from './Icons';
import { photos } from '../data/photos';
import { EMAIL, event2026 as ev, mapLink, results, fmt } from '../data/event';
import { useReveal } from '../lib/useReveal';

const last = results[results.length - 1];

const Group = ({ heading, children, where }) => (
  <div className="sheet-group">
    <h3 className="h-lead">{heading}</h3>
    {children}
    {where && (
      <a className="btn btn-ice sheet-group__btn" href={mapLink(`${where.place}, ${where.address}`)} target="_blank" rel="noopener noreferrer">
        <PinIcon />
        {where === ev.game ? 'Directions to the rink' : 'Directions to the party'}
      </a>
    )}
  </div>
);

const UpcomingEvents = () => {
  useReveal();
  return (
    <>
      <section className="page-head ground-ice" aria-labelledby="page-title">
        <div className="wrap grid12 upcoming__head">
          <div className="upcoming__text">
            <FitTitle lines={['November 28']} max={210} />
            <p className="lead measure pretty" data-load style={{ '--d': '300ms' }}>
              Charity game at 5 PM in Aurora, after party at 7:30 in Newmarket. Everyone is welcome.
            </p>
            <div className="upcoming__clock" data-load style={{ '--d': '420ms' }}>
              <GameClock />
              <div className="hero__cta">
                <CalendarMenu />
                <a className="btn btn-navy" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer">
                  <PinIcon />
                  Directions to the rink
                </a>
              </div>
            </div>
          </div>
          <div className="upcoming__poster" data-load style={{ '--d': '200ms' }}>
            <PosterThumb />
          </div>
        </div>
      </section>

      <section className="section ground-navy on-dark details" aria-labelledby="details-title">
        <div className="wrap">
          <div className="card-sheet" data-reveal>
            <Edge kind="scallop" flip />
            <div className="card-sheet__body">
              <h2 id="details-title" className="display h-head">
                Game night details
              </h2>
              <p className="card-sheet__note">Everything on the poster, in one place.</p>

              <Group heading="The charity game" where={ev.game}>
                <Row label="When" value={`${ev.dateShort}, 5:00 – 7:00 PM`} />
                <Row label="Where" value={ev.game.place} />
                <Row label="Address" value={`${ev.game.street}, Aurora`} />
                <Row label="Who" value="Everyone is welcome" />
              </Group>

              <Group heading="The after party" where={ev.party}>
                <Row label="When" value="7:30 PM until late" />
                <Row label="Where" value={ev.party.place} />
                <Row label="Address" value={`${ev.party.street}, Newmarket`} />
                <Row label="Raffle" value="Drawn at the party" />
              </Group>

              <Group heading="Good to know">
                <Row label="Food drive" value="Non-perishables" note="Please bring non-perishable food as a donation, and check the best-before dates." />
                <Row label="Raffle tickets" value="Cash only" note="Sold at the event. Prizes are drawn at the after party." />
                <Row label="Bring your friends" value="All welcome" />
                <Row label="Proceeds" value="Aurora Food Pantry" note="Every dollar raised and every can collected." />
              </Group>

              <p className="card-sheet__close">
                Questions? Email{' '}
                <a className="link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
            </div>
            <Edge kind="scallop" />
          </div>
        </div>
      </section>

      <section className="section ground-paper lastyear" aria-labelledby="lastyear-title">
        <div className="wrap grid12">
          <figure className="lastyear__main" data-reveal="shutter">
            <Picture photo={photos.groupIce2025} sizes="(min-width: 1024px) 58vw, 100vw" />
          </figure>
          <div className="lastyear__text">
            <h2 id="lastyear-title" className="display h-head" data-reveal>
              Last year: {fmt(last.pounds)} lbs
            </h2>
            <p className="pretty" data-reveal style={{ '--i': 1 }}>
              The 2025 game raised ${fmt(last.dollars)} and filled three wire bins at the Aurora Food Pantry. This year we
              want to beat it.
            </p>
            <div className="lastyear__pair" data-reveal style={{ '--i': 2 }}>
              <Picture photo={photos.foodTable2025} sizes="(min-width: 1024px) 16vw, 45vw" />
              <Picture photo={photos.raffle2025} sizes="(min-width: 1024px) 16vw, 45vw" />
            </div>
            <RouterLink to="/previous-events" viewTransition className="link" data-reveal style={{ '--i': 3 }}>
              See every past year
            </RouterLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
