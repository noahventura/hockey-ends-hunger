import React from 'react';
import Picture from './Picture';
import SponsorCall from './SponsorCall';
import FitTitle from './FitTitle';
import { MailIcon } from './Icons';
import { photos } from '../data/photos';
import { sponsors2025, sponsorMail } from '../data/event';
import { useReveal } from '../lib/useReveal';

const reasons = [
  'Support families in need right here in your local community.',
  'Be recognized as a community leader.',
  'Reach local families, players and fans at the game and the after party.',
  'Help us double our impact in 2026.',
];

const Sponsors = () => {
  useReveal();
  return (
    <>
      <section className="page-head ground-ice" aria-labelledby="page-title">
        <div className="wrap grid12 sponsor__head">
          <div className="sponsor__text">
            <FitTitle lines={['Sponsor Hockey', 'Ends Hunger']} max={170} />
            <p className="lead measure pretty" data-load style={{ '--d': '320ms' }}>
              Put your business behind the 2026 game, in front of the players, families and fans who fill the rink and the
              after party.
            </p>
            <a className="btn btn-red" href={sponsorMail} data-load style={{ '--d': '420ms' }}>
              <MailIcon />
              Email us about sponsoring
            </a>
          </div>
          <figure className="sponsor__photo" data-load="open">
            <Picture photo={photos.raffle2025} sizes="(min-width: 1024px) 50vw, 100vw" priority />
            <figcaption className="hero__caption">{photos.raffle2025.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section ground-navy on-dark boards" aria-labelledby="boards-title">
        <div className="wrap">
          <h2 id="boards-title" className="display h-head" data-reveal>
            Thank you, 2025 sponsors
          </h2>
          <p className="lead boards__note" data-reveal style={{ '--i': 1 }}>
            These businesses put their names on our boards last year.
          </p>
          <ul className="boards__rail" data-reveal style={{ '--i': 2 }}>
            {sponsors2025.map((name) => (
              <li className="board" key={name}>
                <span className="board__name display">{name}</span>
                <span className="board__kick" aria-hidden="true" />
              </li>
            ))}
          </ul>
          <div className="boards__photos">
            <figure data-reveal="shutter">
              <Picture photo={photos.foodTable2025} sizes="(min-width: 1024px) 50vw, 100vw" pos="0% 40%" />
              <figcaption className="small">The 2025 sponsor banner beside the food drive table</figcaption>
            </figure>
            <figure data-reveal="shutter" style={{ '--i': 1 }}>
              <Picture photo={photos.mayorFood2025} sizes="(min-width: 1024px) 50vw, 100vw" pos="0% 35%" />
              <figcaption className="small">The same banner behind the 2025 food drive collection</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section ground-paper partner" aria-labelledby="partner-title">
        <div className="wrap grid12">
          <div className="partner__why">
            <h2 id="partner-title" className="display h-head" data-reveal>
              Why partner with us
            </h2>
            <ul className="partner__list">
              {reasons.map((r, i) => (
                <li key={r} className="lead" data-reveal style={{ '--i': i + 1 }}>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="partner__options">
            <h3 className="h-lead" data-reveal>
              Ways to sponsor
            </h3>
            <div className="option tone-0" data-reveal style={{ '--i': 1 }}>
              <p className="display option__name">Event sponsorship</p>
              <p>Your company logo on our posters and event signage.</p>
            </div>
            <div className="option tone-1" data-reveal style={{ '--i': 2 }}>
              <p className="display option__name">Custom partnership</p>
              <p>A partnership built around your business goals. Tell us what you have in mind.</p>
            </div>
            <figure className="partner__photo" data-reveal="shutter" style={{ '--i': 3 }}>
              <Picture photo={photos.groupIce2025} sizes="(min-width: 1024px) 40vw, 100vw" />
              <figcaption className="small">{photos.groupIce2025.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <SponsorCall
        heading="Let's talk"
        text="Tell us about your business and we will build something that works for you."
        showMore={false}
      />
    </>
  );
};

export default Sponsors;
