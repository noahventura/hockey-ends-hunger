import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import rink from '../images/rink.jpg';
import logoWhite from '../images/logowhite.png';
import handshake from '../images/handshake.jpg';
import poster from '../images/poster.png';

const Home = () => {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const hasSeenPoster = localStorage.getItem('hasSeenPoster');
    if (!hasSeenPoster) {
      setShowPoster(true);
      localStorage.setItem('hasSeenPoster', 'true');
    }
  }, []);

  const closePoster = () => setShowPoster(false);

  return (
    <div className="pt-16 relative">
      {/* Poster Popup */}
      {showPoster && (
        <div
          onClick={closePoster}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-lg shadow-2xl overflow-hidden flex items-center justify-center p-2"
          >
            {/* Close Button */}
            <button
              onClick={closePoster}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition"
            >
              ✕
            </button>

            {/* Poster Image */}
            <img
              src={poster}
              alt="Event Poster"
              className="
                w-auto
                h-auto
                max-w-[90vw]
                max-h-[85vh]
                rounded-md
                shadow-lg
                object-contain
              "
            />
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="relative h-[80vh] md:h-[calc(100vh-4rem)] overflow-hidden">
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

        {/* Down Arrow (mobile only) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden animate-bounce">
          <button
            onClick={() =>
              document.getElementById("next-event")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-white text-3xl focus:outline-none"
          >
            ▼
          </button>
        </div>
      </div>

      {/* Next Event */}
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
              Upcoming Event: Hockey Game
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
