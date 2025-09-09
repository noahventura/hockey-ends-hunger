import React from 'react';
import charityImg from '../images/charity.jpg';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      <h1 className="text-5xl font-bold text-leafs-blue mb-8 text-center">About Us</h1>

      <div className="bg-white p-8 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
        {/* Full-bleed image inside the card to avoid awkward side padding */}
        <div className="-mx-8 -mt-8 mb-6 overflow-hidden rounded-t-xl">
          <img
            src={charityImg}
            alt="About Hockey Ends Hunger"
            loading="lazy"
            className="block w-full h-auto select-none"
          />
        </div>

        <p className="text-lg text-leafs-blue/90 leading-relaxed">
          Hockey Ends Hunger is a non-profit organization dedicated to using the power of hockey to
          combat hunger. We organize events, raise funds, and partner with communities to provide
          meals and support to those in need.
        </p>
      </div>
    </div>
  );
};

export default About;