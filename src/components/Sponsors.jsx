import React from 'react';

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      <h1 className="text-5xl font-bold text-leafs-blue mb-8 text-center">Corporate Sponsors</h1>
      <p className="text-lg text-leafs-blue/90 mb-8 text-center">Thank you to our sponsors:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-2xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <img
            src="https://via.placeholder.com/150?text=Sponsor+1"
            alt="Sponsor 1"
            className="mx-auto mb-4 w-full max-w-[150px] h-auto"
          />
          <p className="text-leafs-blue font-medium">Sponsor 1</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-2xl text-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <img
            src="https://via.placeholder.com/150?text=Sponsor+2"
            alt="Sponsor 2"
            className="mx-auto mb-4 w-full max-w-[150px] h-auto"
          />
          <p className="text-leafs-blue font-medium">Sponsor 2</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;