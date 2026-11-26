import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Edge from './Edge';
import Stripe from './Stripe';
import Picture from './Picture';
import { links } from '../data/nav';
import { photos } from '../data/photos';
import { EMAIL, NFP, event2026 as ev, mapLink } from '../data/event';
import { useFitText } from '../lib/useFitText';

// the back of the postcard, then the name across the full width
const Footer = () => {
  const nameRef = useFitText();
  return (
    <footer className="site-footer ground-navy on-dark">
      <Stripe variant="hem" style={{ '--stripe-ink': 'var(--color-navy)', '--stripe-paper': 'var(--color-paper)' }} />
      <div className="wrap footer__inner">
        <div className="postcard" data-reveal>
          <Edge kind="scallop-lg" flip />
          <div className="postcard__body">
            <div className="postcard__message">
              <h2 className="display h-head">See you at the rink</h2>
              <p className="lead">
                {ev.dateLong}. Bring a friend and something for the food drive.
              </p>
              <nav className="postcard__nav" aria-label="Footer">
                <RouterLink to="/" viewTransition className="link">Home</RouterLink>
                {links.map((l) => (
                  <RouterLink key={l.to} to={l.to} viewTransition className="link">
                    {l.label}
                  </RouterLink>
                ))}
              </nav>
            </div>
            <div className="postcard__address">
              <div className="postcard__stamp" aria-hidden="true">
                <Picture photo={photos.trio2024} alt="" sizes="96px" />
              </div>
              <ul>
                <li>
                  <a className="link" href={`mailto:${EMAIL}`}>
                    {EMAIL.split('@')[0]}@<wbr />
                    {EMAIL.split('@')[1]}
                  </a>
                </li>
                <li>
                  <a className="link" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer">
                    {ev.game.place}
                  </a>
                  <span>{ev.game.street}, Aurora</span>
                </li>
                <li>
                  <a className="link" href={mapLink(`${ev.party.place}, ${ev.party.address}`)} target="_blank" rel="noopener noreferrer">
                    {ev.party.place}
                  </a>
                  <span>{ev.party.street}, Newmarket</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="postcard__foot">
            <p className="postcard__imprint small">
              © {new Date().getFullYear()} Hockey Ends Hunger. Not-for-profit NFP# {NFP}. All proceeds support the Aurora Food Pantry.
            </p>
          </div>
        </div>
      </div>
      <div className="wrap footer__name" aria-hidden="true">
        <span ref={nameRef} className="display">Hockey Ends Hunger</span>
      </div>
    </footer>
  );
};

export default Footer;
