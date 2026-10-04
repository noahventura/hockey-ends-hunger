import React, { useState } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

const links = [
  { to: '/about', label: 'About Us' },
  { to: '/previous-events', label: 'Previous Events' },
  { to: '/upcoming-events', label: 'Upcoming Events' },
  { to: '/sponsors', label: 'Corporate Sponsors' },
];

const linkClass = ({ isActive }) =>
  `font-display text-base uppercase tracking-wider font-semibold py-1 border-b-2 transition duration-200 ${
    isActive ? 'border-rush text-navy' : 'border-transparent text-navy/70 hover:text-navy hover:border-navy/30'
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-frost">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <RouterLink to="/" onClick={close} aria-label="Hockey Ends Hunger home" className="shrink-0">
            <img src={logo} alt="Hockey Ends Hunger Logo" className="h-11 transition-transform duration-200 hover:scale-105" />
          </RouterLink>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy text-2xl p-2 -mr-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-frost bg-white animate-fade-in">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            {[{ to: '/', label: 'Home' }, ...links].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={close}
                className={({ isActive }) =>
                  `font-display text-lg uppercase tracking-wider font-semibold py-3 border-b border-frost last:border-0 ${
                    isActive ? 'text-rush' : 'text-navy'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
