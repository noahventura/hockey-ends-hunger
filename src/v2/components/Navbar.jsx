import React, { useEffect, useState } from 'react';
import { NavLink, Link as RouterLink, useLocation } from 'react-router-dom';
import logoWhite from '../../images/logowhite.png';
import CalendarMenu from './CalendarMenu';
import Stripe from './Stripe';
import { useOverlay } from '../lib/useOverlay';
import { event2026 as ev, mapLink } from '../data/event';
import { PinIcon } from './Icons';
import { links } from '../data/nav';

const Menu = ({ open, onClose }) => {
  const ref = useOverlay(open, onClose);
  return (
    <div ref={ref} id="site-menu" className="menu on-dark" data-open={open} aria-hidden={!open}>
      <nav aria-label="Main">
        <ul className="menu__links">
          {[{ to: '/', label: 'Home' }, ...links].map((l, i) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                viewTransition
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className={({ isActive }) => `menu__link display ${isActive ? 'active' : ''}`}
                style={{ '--i': i }}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu__foot">
        <Stripe variant="thin" style={{ '--stripe-ink': 'var(--color-paper)', '--stripe-paper': 'var(--color-navy)' }} />
        <p className="lead" style={{ marginTop: 12 }}>
          {ev.dateLong}
          <br />
          5 PM at the {ev.game.place}
        </p>
        {open && (
          <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr' }}>
            <CalendarMenu className="btn btn-red btn-block" label="Calendar" up />
            <a className="btn btn-paper" href={mapLink(`${ev.game.place}, ${ev.game.address}`)} target="_blank" rel="noopener noreferrer">
              <PinIcon />
              Directions
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close the menu when the route changes (back button included)
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="nav on-dark">
        <div className="wrap nav__bar">
          <RouterLink to="/" viewTransition className="nav__logo" aria-label="Hockey Ends Hunger home">
            <img src={logoWhite} alt="" width="40" height="40" />
            <span className="nav__name">Hockey Ends Hunger</span>
          </RouterLink>

          <nav className="nav__links" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} viewTransition className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
            <div className="nav__action">
              <CalendarMenu className="btn btn-red" right />
            </div>
          </nav>

          <button
            type="button"
            className="nav__menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {open ? 'Close' : 'Menu'}
            <span className="nav__burger" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
