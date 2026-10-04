import React from 'react';
import { event2026 as ev, mapLink } from '../data/event';

const Block = ({ data, accent }) => (
  <div className="card overflow-hidden">
    <div className={`${accent} px-6 py-3`}>
      <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-wider text-white">
        {data.name}
      </h3>
    </div>
    <dl className="p-6 space-y-4 text-base md:text-lg">
      <div>
        <dt className="eyebrow !text-xs">When</dt>
        <dd className="font-semibold">{ev.dateLong}</dd>
        <dd className="text-navy/80">{data.time}</dd>
      </div>
      <div>
        <dt className="eyebrow !text-xs">Where</dt>
        <dd className="font-semibold">{data.place}</dd>
        <dd className="text-navy/80">{data.address}</dd>
      </div>
      <a
        href={mapLink(`${data.place}, ${data.address}`)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-display text-sm font-semibold uppercase tracking-wider text-rush underline underline-offset-4 hover:text-navy"
      >
        Get directions
      </a>
    </dl>
  </div>
);

const EventCards = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <Block data={ev.game} accent="bg-navy" />
    <Block data={ev.party} accent="bg-rush" />
  </div>
);

export default EventCards;
