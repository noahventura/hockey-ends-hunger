import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { MailIcon } from './Icons';
import { sponsors2025, sponsorMail } from '../data/event';

// the reply card: a printed card lying on a red field, cropped by the section's edge
const SponsorCall = ({ heading = 'Backed by local business', text, showMore = true }) => (
  <section className="section ground-red on-red reply" aria-labelledby="reply-title">
    <div className="wrap grid12 reply__grid">
      <div className="reply__thanks">
        <h2 id="reply-title" className="display h-head" data-reveal>
          {heading}
        </h2>
        {text ? (
          <p className="lead" data-reveal style={{ '--i': 1 }}>
            {text}
          </p>
        ) : (
          <div data-reveal style={{ '--i': 1 }}>
            <p className="lead">Thank you to our 2025 sponsors.</p>
            <ul className="reply__names">
              {sponsors2025.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="reply__card" data-reveal="drop" style={{ '--tilt': '2deg', '--i': 1 }}>
        <h3 className="display h-head">Sponsor the 2026 game</h3>
        <p>Put your logo on our posters and event signage, or build a partnership around your business goals.</p>
        <a className="btn btn-navy btn-block" href={sponsorMail}>
          <MailIcon />
          Email us about sponsoring
        </a>
        {showMore && (
          <RouterLink to="/sponsors" viewTransition className="link">
            What sponsors get
          </RouterLink>
        )}
      </div>
    </div>
  </section>
);

export default SponsorCall;
