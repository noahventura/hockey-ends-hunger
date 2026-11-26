export const EMAIL = 'hockeyendshunger@gmail.com';
export const NFP = '1001322988';

export const event2026 = {
  title: 'Hockey Ends Hunger',
  subtitle: 'Food Drive, Charity Game and After Party',
  edition: 'fourth',
  dateLong: 'Saturday, November 28, 2026',
  dateShort: 'Sat, Nov 28',
  month: 'Nov',
  day: '28',
  year: '2026',
  game: {
    name: 'Charity Game',
    time: '5:00 PM – 7:00 PM',
    place: 'Aurora Recreation Complex',
    street: '1400 Wellington Street East',
    city: 'Aurora',
    address: '1400 Wellington Street East, Aurora, ON L4G 7B5',
    // Toronto is on EST (UTC-5) in late November
    start: '2026-11-28T17:00:00-05:00',
    end: '2026-11-28T19:00:00-05:00',
  },
  party: {
    name: 'After Party',
    time: '7:30 PM – late',
    place: 'The George Whiskey Lounge',
    street: '238 Main Street',
    city: 'Newmarket',
    address: '238 Main St, Newmarket, ON L3Y 3Z5',
    start: '2026-11-28T19:30:00-05:00',
    // "late" has no fixed end; calendars need one
    end: '2026-11-29T01:00:00-05:00',
  },
  notes: [
    'Everyone is welcome at the charity game and the after party. Bring your friends.',
    'Please bring non-perishable food items as a donation.',
    'Raffle prizes will be drawn at the after party. Tickets are cash only, sold at the event.',
    'All proceeds go to the Aurora Food Pantry.',
  ],
};

export const mapLink = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const sponsorMail = `mailto:${EMAIL}?subject=${encodeURIComponent('Sponsoring Hockey Ends Hunger 2026')}&body=${encodeURIComponent('Hi Hockey Ends Hunger team,\n\nWe would like to talk about sponsoring the 2026 game.\n\nBusiness name:\nContact:\n')}`;

export const sponsors2025 = [
  'VolpeAlcorn Real Estate Team',
  'EngA',
  'The Aurora Rotary Club',
  'Mercato on Main',
  "TJ's Bar and Grill",
];

// the published totals are "over" amounts, so these are floors
export const results = [
  { year: '2024', dollars: 2200, pounds: 550 },
  { year: '2025', dollars: 4200, pounds: 1661 },
];

export const totals = results.reduce(
  (t, r) => ({ dollars: t.dollars + r.dollars, pounds: t.pounds + r.pounds }),
  { dollars: 0, pounds: 0 },
);

export const fmt = (n) => n.toLocaleString('en-CA');
