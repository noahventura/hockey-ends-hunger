import React from 'react';
import group from '../images/group.jpg';

const PreviousEvents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      {/* Smaller on mobile to keep to one line */}
      <h1 className="text-3xl md:text-5xl font-bold text-leafs-blue mb-8 text-center">
        Previous Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <img
            src={group}
            alt="Group at previous event"
            className="w-full h-48 sm:h-64 object-cover mb-6 rounded-t-xl"
            loading="lazy"
          />
          <h3 className="text-2xl font-semibold text-leafs-blue mb-3">Charity Hockey Game</h3>
          <div className="text-leafs-blue/90 text-base leading-relaxed space-y-3">
            <p>In 2024, thanks to the support of local businesses, players, and fans, we proudly:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Raised over $2,200 for the Aurora Food Pantry</li>
              <li>Collected over 550 lbs of food donations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;