import React from 'react';

const PreviousEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Previous Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#242424] p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Event 1</h3>
          <p className="text-[#a0a0a0]">Description of past event.</p>
        </div>
        <div className="bg-[#242424] p-6 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold text-blue-500 mb-2">Event 2</h3>
          <p className="text-[#a0a0a0]">Description of another past event.</p>
        </div>
        {/* Add more as needed */}
      </div>
    </div>
  );
};

export default PreviousEvents;