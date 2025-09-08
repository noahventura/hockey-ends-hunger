import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-4xl font-bold text-blue-500 mb-8 text-center">About Us</h1>
      <div className="bg-[#242424] p-8 rounded-xl shadow-xl transition-shadow duration-300 hover:shadow-2xl">
        <p className="text-lg leading-relaxed text-[#f3f4f6]">Hockey Ends Hunger is a non-profit organization dedicated to using the power of hockey to combat hunger. We organize events, raise funds, and partner with communities to provide meals and support to those in need.</p>
      </div>
    </div>
  );
};

export default About;