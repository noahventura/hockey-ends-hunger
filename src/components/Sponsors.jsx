import React from 'react';

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">Corporate Sponsors</h1>
      <p className="text-lg mb-8 text-center text-[#a0a0a0]">Thank you to our sponsors:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#242424] p-6 rounded-xl shadow-xl text-center transition-transform duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/150?text=Sponsor+1" alt="Sponsor 1" className="mx-auto mb-4" />
          <p className="text-[#a0a0a0] font-medium">Sponsor 1</p>
        </div>
        <div className="bg-[#242424] p-6 rounded-xl shadow-xl text-center transition-transform duration-300 hover:scale-105">
          <img src="https://via.placeholder.com/150?text=Sponsor+2" alt="Sponsor 2" className="mx-auto mb-4" />
          <p className="text-[#a0a0a0] font-medium">Sponsor 2</p>
        </div>
        {/* Add more as needed */}
      </div>
    </div>
  );
};

export default Sponsors;