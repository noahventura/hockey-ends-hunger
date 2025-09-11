import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import rink from '../images/rink.jpg';
import logoWhite from '../images/logowhite.png';
import handshake from '../images/handshake.jpg';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[70vh] md:h-[calc(100vh-4rem)] overflow-hidden">
        <img
          src={rink}
          alt="Hockey rink"
          className="w-full h-full object-cover filter brightness-75 transition-transform duration-500 hover:scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-leafs-blue/30 px-4">
          <img
            src={logoWhite}
            alt="Hockey Ends Hunger"
            className="h-28 md:h-32 mb-6 transition-transform duration-200 hover:scale-105"
          />
          {/* Slight nudge on mobile, minimal on desktop */}
          <div className="flex items-center mb-8 translate-x-2 md:translate-x-1">
            <p className="text-2xl font-light text-white text-shadow mr-2 md:mr-3">EST. 2023</p>
            <div className="w-px h-8 md:h-10 bg-white ml-2 md:ml-3 mr-4"></div>
            <RouterLink
              to="/about"
              className="text-2xl font-semibold text-white text-shadow hover:text-leafs-blue/80 transition duration-200"
            >
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Next Event (concise summary aligned with Upcoming Events) */}
      <div id="next-event" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.01]">
            <img
              src={handshake}
              alt="Charity event handshake"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-leafs-blue">
              Next Event: Hockey Game
            </h2>

            <div className="text-base md:text-lg text-leafs-blue/90 leading-relaxed space-y-2">
              <p><span className="font-semibold text-leafs-blue">Date:</span> November 29, 2025</p>
              <p>
                <span className="font-semibold text-leafs-blue">Venue:</span> Stronach Aurora Recreation Complex
                <span className="block">1400 Wellington St E, Aurora, ON L4G 7B6</span>
              </p>
              <p>
                <span className="font-semibold text-leafs-blue">After-Party:</span> TJs Bar and Grill (7:30pm – late)
                <span className="block">17335 Yonge St, Newmarket, ON L3Y 8Z2</span>
              </p>
            </div>

            <a
              href="/upcoming-events"
              className="inline-block bg-leafs-blue text-white font-semibold px-5 py-3 rounded-lg hover:bg-leafs-blue/80 transition duration-200"
            >
              Get Tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;