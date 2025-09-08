import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#242424] p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Charity Hockey Game</h3>
          <p className="text-[#a0a0a0]">Date: October 15, 2025</p>
          <p className="text-[#a0a0a0]">Location: Local Arena</p>
          <p className="text-[#a0a0a0]">Description: Join us for a fun-filled game to support the cause.</p>
        </div>
        {/* Add more events as needed */}
      </div>
    </div>
  );
};

export default UpcomingEvents;