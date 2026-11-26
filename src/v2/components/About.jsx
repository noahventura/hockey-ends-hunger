import React from 'react';
import Picture from './Picture';
import RollingFigure from './RollingFigure';
import SponsorCall from './SponsorCall';
import FitTitle from './FitTitle';
import { MailIcon } from './Icons';
import { photos } from '../data/photos';
import { EMAIL, NFP, totals, fmt } from '../data/event';
import { useReveal } from '../lib/useReveal';

const About = () => {
  useReveal();
  return (
    <>
      <section className="page-head ground-ice" aria-labelledby="page-title">
        <div className="wrap grid12 about__head">
          <div className="about__text">
            <FitTitle lines={['Hockey for the', 'food pantry']} max={170} />
            <p className="lead measure pretty" data-load style={{ '--d': '320ms' }}>
              Hockey Ends Hunger is a local not-for-profit, started in 2023, that brings Aurora together for one night of
              hockey a year and turns it into food for families in need.
            </p>
          </div>
          <figure className="about__photo" data-load="open">
            <Picture photo={photos.faceoff2025} sizes="(min-width: 1024px) 50vw, 100vw" priority />
            <figcaption className="hero__caption">{photos.faceoff2025.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section ground-paper mission" aria-labelledby="mission-title">
        <div className="wrap grid12">
          <div className="mission__text">
            <h2 id="mission-title" className="display h-head" data-reveal>
              Our mission
            </h2>
            <p className="lead pretty" data-reveal style={{ '--i': 1 }}>
              We bring our community together through hockey while making a real impact in the fight against hunger.
            </p>
            <p className="pretty" data-reveal style={{ '--i': 2 }}>
              Each year we put two teams on the ice, invite everyone to watch, and ask each person who comes to bring food
              for the Aurora Food Pantry. Raffle tickets, sponsors and the after party add the dollars.
            </p>
          </div>
          <figure className="mission__photo" data-reveal="shutter">
            <Picture photo={photos.trio2024} sizes="(min-width: 1024px) 45vw, 100vw" />
            <figcaption className="small">{photos.trio2024.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="community ground-navy on-dark" aria-labelledby="community-title">
        <figure className="community__photo" data-reveal="shutter">
          <Picture photo={photos.volunteers2024} sizes="100vw" pos="50% 28%" />
        </figure>
        <div className="wrap community__wrap">
          <div className="community__card" data-reveal style={{ '--i': 1 }}>
            <h2 id="community-title" className="display h-head">
              Our community
            </h2>
            <p className="pretty">
              We bring together players, fans and local businesses to create meaningful change. Every year the game unites
              Aurora and Newmarket in the shared goal of fighting food insecurity and supporting families in need.
            </p>
          </div>
        </div>
      </section>

      <section className="section ground-ice impact" aria-labelledby="impact-title">
        <div className="wrap grid12">
          <div className="impact__figures">
            <h2 id="impact-title" className="display h-head" data-reveal>
              Our impact
            </h2>
            <dl className="impact__list">
              <div data-reveal style={{ '--i': 1 }}>
                <dd className="display">
                  <RollingFigure value={`$${fmt(totals.dollars)}`} />
                </dd>
                <dt>raised for the Aurora Food Pantry in 2024 and 2025</dt>
              </div>
              <div data-reveal style={{ '--i': 2 }}>
                <dd className="display">
                  <RollingFigure value={fmt(totals.pounds)} />
                </dd>
                <dt>pounds of food collected over the same two games</dt>
              </div>
            </dl>
          </div>
          <div className="impact__side">
            <figure className="impact__photo" data-reveal="shutter">
              <Picture photo={photos.foodBins2025} sizes="(min-width: 1024px) 30vw, 100vw" />
              <figcaption className="small">{photos.foodBins2025.caption}</figcaption>
            </figure>
            <p className="pretty" data-reveal>
              Through sport and community spirit we have raised thousands of dollars and collected thousands of pounds of
              food. Together we are proving that hockey can be a force for good in our community.
            </p>
            <p className="small impact__nfp" data-reveal>
              Registered not-for-profit, NFP# {NFP}. All proceeds go to the Aurora Food Pantry.
            </p>
            <a className="btn btn-navy" href={`mailto:${EMAIL}`} data-reveal>
              <MailIcon />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <SponsorCall />
    </>
  );
};

export default About;
