import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logoWhite from '../images/logowhite.png';
import { EMAIL } from '../data/event';

const Footer = () => (
  <footer className="bg-navy-deep text-white">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <RouterLink to="/" aria-label="Hockey Ends Hunger home">
        <img src={logoWhite} alt="Hockey Ends Hunger logo" className="h-14" />
      </RouterLink>
      <div className="space-y-1 text-sm text-white/80">
        <p>
          Contact:{' '}
          <a href={`mailto:${EMAIL}`} className="font-semibold text-white underline underline-offset-4 hover:text-rush">
            {EMAIL}
          </a>
        </p>
        <p>Not for profit NFP# 1001322988. Proceeds support the Aurora Food Pantry.</p>
        <p>© {new Date().getFullYear()} Hockey Ends Hunger</p>
      </div>
    </div>
  </footer>
);

export default Footer;
