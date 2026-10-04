import React from 'react';
import ScrollHint from './ScrollHint';
import { EMAIL, sponsors2025 } from '../data/event';

const Sponsors = () => {
  return (
    <div className="page">
      <ScrollHint />
      <h1 className="page-title">Corporate Sponsors</h1>

      <div className="mx-auto mt-8 md:mt-12 max-w-3xl space-y-5 md:space-y-8">
        <section className="card p-5 md:p-10 space-y-3 md:space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Our 2025 Sponsors
          </h2>
          <p className="text-base md:text-lg text-navy/90">
            Thank you to everyone who backed our 2025 event.
          </p>
          <ul className="list-disc pl-6 space-y-1 md:space-y-2 text-base md:text-lg font-semibold marker:text-rush">
            {sponsors2025.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        <section className="card p-5 md:p-10 space-y-3 md:space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Why Partner With Us?
          </h2>
          <p className="text-base md:text-lg text-navy/90">By sponsoring Hockey Ends Hunger, your business will:</p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-navy/90 marker:text-rush">
            <li>Support families in need right here in your local community</li>
            <li>Be recognized as a community leader</li>
            <li>Gain positive exposure with local community members, families, and fans</li>
            <li>Help us double our impact in 2026</li>
          </ul>
        </section>

        <section className="card p-5 md:p-10 space-y-3 md:space-y-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Sponsorship Opportunities
          </h2>
          <p className="text-base md:text-lg text-navy/90">
            We welcome <span className="font-semibold">corporate sponsorships</span> at all levels. Options include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-navy/90 marker:text-rush">
            <li>
              <span className="font-semibold">Event Sponsorships</span> (company logo on posters and event signage)
            </li>
            <li>
              <span className="font-semibold">Custom Partnerships</span> tailored to your business goals
            </li>
          </ul>
          <p className="pt-2 text-base md:text-lg">
            Reach out to{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-rush underline underline-offset-4 hover:text-navy break-all"
            >
              {EMAIL}
            </a>{' '}
            to learn more.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
