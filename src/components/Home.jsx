import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="pt-16">
      <div className="relative h-[70vh] md:h-[calc(100vh-4rem)] overflow-hidden">
        <img
          src="src\images\rink.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover filter brightness-75 transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-leafs-blue/30">
          <img
            src="src\images\logowhite.png"
            alt="Logo"
            className="h-32 mb-6 transition-transform duration-200 hover:scale-105"
          />
          <div className="flex items-center mb-8">
            <p className="text-2xl font-light text-white text-shadow mr-4">EST. 2024</p>
            <div className="w-px h-10 bg-white mx-4"></div>
            <Link
              to="next-event"
              smooth={true}
              duration={500}
              className="text-2xl font-semibold text-white text-shadow cursor-pointer hover:text-leafs-blue/80 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div
        id="next-event"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-8 bg-white"
      >
        <div className="flex-1 overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
          <img
            src="src\images\handshake.jpg"
            alt="Next Event"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex-2 text-left md:text-left">
          <h2 className="text-4xl font-bold text-leafs-blue mb-4">
            Next Event: Charity Hockey Game
          </h2>
          <p className="text-lg text-leafs-blue/90 leading-relaxed">
            Join us for our upcoming charity hockey game on October 15, 2025. All proceeds go
            towards fighting hunger in our community. Location: Local Arena, Time: 7 PM. Don't miss
            out!
          </p>
          <a
            href="/upcoming-events"
            className="mt-4 inline-block bg-leafs-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-leafs-blue/80 transition duration-200"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;