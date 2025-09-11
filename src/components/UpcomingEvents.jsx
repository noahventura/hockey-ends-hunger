import React from 'react';
import arenaMap from '../images/arena-map.jpg';
import afterPartyMap from '../images/afterparty-map.jpg';

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      {/* Smaller on mobile to keep on one line */}
      <h1 className="text-3xl md:text-5xl font-bold text-leafs-blue mb-8 text-center">
        Upcoming Events
      </h1>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)] transition-shadow duration-300">
        {/* Use tighter vertical gap on mobile so info->map spacing matches for both pairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-min gap-y-4 md:gap-8 gap-x-8 items-start">
          {/* Row 1, Col 1: Hockey Game */}
          <section className="space-y-3 md:col-start-1 md:row-start-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-leafs-blue">Hockey Game</h3>
            <div className="text-leafs-blue/90 text-base md:text-lg leading-relaxed space-y-2">
              <p><span className="font-semibold text-leafs-blue">Date:</span> November 29, 2025</p>
              <p>
                <span className="font-semibold text-leafs-blue">Location:</span> Stronach Aurora Recreation Complex
                <span className="block">1400 Wellington St E, Aurora, ON L4G 7B6</span>
              </p>
            </div>
          </section>

          {/* Row 1, Col 2: Arena map (header hidden on mobile) */}
          <div className="space-y-3 md:col-start-2 md:row-start-1 mb-10 md:mb-0">
            <h4 className="hidden md:block text-sm font-semibold uppercase tracking-wide text-leafs-blue/80 pl-2 sm:pl-3">
              Event Locations
            </h4>
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <div className="px-3 pt-3 pb-2">
                <p className="text-sm font-semibold text-leafs-blue">Arena</p>
              </div>
              <img
                src={arenaMap}
                alt="Map to Stronach Aurora Recreation Complex, 1400 Wellington St E, Aurora"
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Row 2, Col 1: After Party (aligns with second map on desktop) */}
          <section className="space-y-3 md:col-start-1 md:row-start-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-leafs-blue">After Party</h3>
            <div className="text-leafs-blue/90 text-base md:text-lg leading-relaxed space-y-2">
              <p><span className="font-semibold text-leafs-blue">Time:</span> 7:30pm – late</p>
              <p>
                <span className="font-semibold text-leafs-blue">Location:</span> TJs Bar and Grill
                <span className="block">17335 Yonge St, Newmarket, ON L3Y 8Z2</span>
              </p>
            </div>

            {/* Keep button desktop-only so mobile spacing mirrors the Arena pair */}
            <a
              href="/upcoming-events"
              className="hidden md:inline-block bg-leafs-blue text-white font-semibold px-5 py-3 rounded-lg hover:bg-leafs-blue/80 transition duration-200"
            >
              Get Tickets
            </a>
          </section>

          {/* Row 2, Col 2: After-Party map */}
          <div className="space-y-3 md:col-start-2 md:row-start-2">
            <div className="rounded-lg shadow-md overflow-hidden bg-white">
              <div className="px-3 pt-3 pb-2">
                <p className="text-sm font-semibold text-leafs-blue">After-Party</p>
              </div>
              <img
                src={afterPartyMap}
                alt="Map to TJs Bar and Grill, 17335 Yonge St, Newmarket"
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Mobile-only: place the button after maps to avoid adding extra space between info and map */}
          <div className="md:hidden">
            <a
              href="/upcoming-events"
              className="mt-4 inline-block bg-leafs-blue text-white font-semibold px-5 py-3 rounded-lg hover:bg-leafs-blue/80 transition duration-200"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;