import { event2026 as ev } from '../data/event';

// served from /public with a text/calendar type, so iOS and macOS open it straight in Calendar
export const ICS_URL = '/hockey-ends-hunger-2026.ics';

const utc = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');

export const googleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Hockey Ends Hunger charity game',
    dates: `${utc(ev.game.start)}/${utc(ev.game.end)}`,
    location: `${ev.game.place}, ${ev.game.address}`,
    details: `Bring a non-perishable food item. After party from 7:30 PM at ${ev.party.place}, ${ev.party.address}. All proceeds go to the Aurora Food Pantry.`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
};
