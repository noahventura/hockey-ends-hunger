import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      <h1 className="text-5xl font-bold text-leafs-blue mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <h3 className="text-2xl font-semibold text-leafs-blue mb-2">Charity Hockey Game</h3>
          <p className="text-leafs-blue/90">Date: October 15, 2025</p>
          <p className="text-leafs-blue/90">Location: Local Arena</p>
          <p className="text-leafs-blue/90">
            Description: Join us for a fun-filled game to support the cause.
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

export default UpcomingEvents;