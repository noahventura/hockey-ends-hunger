// every photo is resized and re-encoded at build time (avif, webp, jpg at four widths)
// so phones download a few hundred KB instead of the 1–5 MB originals
import groupIce2025 from '../../images/2025/group_ice.jpg?w=480;800;1200;1800&format=avif;webp;jpg&as=picture';
import faceoff2025 from '../../images/2025/faceoff_mayor.jpg?w=480;800;1170&format=avif;webp;jpg&as=picture';
import foodBins2025 from '../../images/2025/food_collection.jpg?w=480;800;1200&format=avif;webp;jpg&as=picture';
import foodTable2025 from '../../images/2025/food_collection_2.jpg?w=480;800;1200;1800&format=avif;webp;jpg&as=picture';
import mayorFood2025 from '../../images/2025/mayor_food_collection.jpg?w=480;800;1170&format=avif;webp;jpg&as=picture';
import raffle2025 from '../../images/2025/raffle_prizes.jpg?w=480;800;1200;1800&format=avif;webp;jpg&as=picture';
import team2024 from '../../images/rink.jpg?w=480;800;1200;1800&format=avif;webp;jpg&as=picture';
import trio2024 from '../../images/group.jpg?w=480;800;960&format=avif;webp;jpg&as=picture';
import faceoff2024 from '../../images/handshake.jpg?w=480;800;960&format=avif;webp;jpg&as=picture';
import volunteers2024 from '../../images/charity.jpg?w=480;800;1200;1800&format=avif;webp;jpg&as=picture';
import poster2026 from '../../images/2026/poster.jpg?w=480;800;1093&format=avif;webp;jpg&as=picture';

// `pos` is the object-position that keeps the faces in frame when the photo is cropped
export const photos = {
  groupIce2025: {
    pic: groupIce2025,
    year: '2025',
    title: 'Team photo',
    caption: 'Both teams on the ice after the 2025 game',
    alt: 'Hockey Ends Hunger 2025 players from both teams posing together on the ice after the charity game',
    pos: '50% 55%',
  },
  faceoff2025: {
    pic: faceoff2025,
    year: '2025',
    title: 'Ceremonial faceoff',
    caption: 'Local officials drop the first puck in 2025',
    alt: 'Ceremonial faceoff with local officials and both teams at the 2025 Hockey Ends Hunger game',
    pos: '50% 50%',
  },
  foodBins2025: {
    pic: foodBins2025,
    year: '2025',
    title: 'Delivered',
    caption: 'Three full bins dropped off at the Aurora Food Pantry',
    alt: 'Three volunteers behind wire bins full of donated food at the Aurora Food Pantry warehouse',
    pos: '50% 55%',
  },
  foodTable2025: {
    pic: foodTable2025,
    year: '2025',
    title: 'Food drive table',
    caption: 'Volunteers behind the 2025 donation table',
    alt: 'Volunteers standing behind the 2025 food drive table with boxes and bags of donated food in front of them',
    pos: '50% 40%',
  },
  mayorFood2025: {
    pic: mayorFood2025,
    year: '2025',
    title: 'Food drive',
    caption: 'Bags and boxes of donations collected at the rink',
    alt: 'Two players and a local official holding pucks behind rows of donated groceries in bags and crates',
    pos: '50% 35%',
  },
  raffle2025: {
    pic: raffle2025,
    year: '2025',
    title: 'Raffle prizes',
    caption: 'Prizes from local businesses at the after party',
    alt: 'Table of raffle prizes donated by local businesses, including Maple Leafs tickets and gift baskets',
    pos: '50% 60%',
  },
  team2024: {
    pic: team2024,
    year: '2024',
    title: 'Team photo',
    caption: 'Players, officials and volunteers after the 2024 game',
    alt: 'Hockey Ends Hunger 2024 team photo on the ice with players, a local official and volunteers',
    pos: '50% 50%',
  },
  trio2024: {
    pic: trio2024,
    year: '2024',
    title: 'Before puck drop',
    caption: 'Three players in the Hockey Ends Hunger white jerseys',
    alt: 'Three players in white Hockey Ends Hunger jerseys with blue maple leaf crests in the arena hallway',
    pos: '50% 35%',
  },
  faceoff2024: {
    pic: faceoff2024,
    year: '2024',
    title: 'Ceremonial faceoff',
    caption: 'The first puck of the 2024 game',
    alt: 'Ceremonial faceoff at the 2024 Hockey Ends Hunger game with both teams lined up behind',
    pos: '50% 60%',
  },
  volunteers2024: {
    pic: volunteers2024,
    year: '2024',
    title: 'Food drive table',
    caption: 'Volunteers collecting donations in 2024',
    alt: 'Five Hockey Ends Hunger volunteers in grey hoodies behind the 2024 food drive table',
    pos: '50% 40%',
  },
};

export const poster = {
  pic: poster2026,
  alt: 'Poster for the 4th annual Hockey Ends Hunger food drive, charity game and after party on Saturday, November 28, 2026',
};

export const gallery2025 = ['groupIce2025', 'faceoff2025', 'mayorFood2025', 'foodTable2025', 'foodBins2025', 'raffle2025'].map((k) => photos[k]);
export const gallery2024 = ['faceoff2024', 'team2024', 'trio2024', 'volunteers2024'].map((k) => photos[k]);
