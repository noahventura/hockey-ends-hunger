export const EMAIL = 'hockeyendshunger@gmail.com';

export const event2026 = {
  title: 'Hockey Ends Hunger',
  subtitle: 'Food Drive, Charity Game and After Party',
  dateLong: 'Saturday, November 28, 2026',
  month: 'Nov',
  day: '28',
  year: '2026',
  game: {
    name: 'Charity Game',
    time: '5:00 PM – 7:00 PM',
    place: 'Aurora Recreation Complex',
    address: '1400 Wellington Street East, Aurora, ON L4G 7B5',
  },
  party: {
    name: 'After Party',
    time: '7:30 PM – late',
    place: 'The George Whiskey Lounge',
    address: '238 Main St, Newmarket, ON L3Y 3Z5',
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

export const sponsors2025 = [
  'Volpe Acorn Real Estate Team',
  'EngA',
  'The Aurora Rotary Club',
  'Mercato on Main',
  "TJ's Bar and Grill",
];
