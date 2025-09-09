import React from 'react';

const PreviousEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      <h1 className="text-5xl font-bold text-leafs-blue mb-8 text-center">Previous Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <img
            src="src\images\group.jpg"
            alt="Event 1 Image"
            className="w-full h-48 sm:h-64 object-cover mb-6 rounded-t-xl"
          />
          <h3 className="text-2xl font-semibold text-leafs-blue mb-2">Event 1</h3>
          <p className="text-leafs-blue/90">Description of past event.</p>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;