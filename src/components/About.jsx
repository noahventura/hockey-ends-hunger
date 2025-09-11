import React from 'react';
import charityImg from '../images/charity.jpg';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      {/* Smaller on mobile so it's one line; tighter spacing above the box */}
      <h1 className="text-3xl md:text-5xl font-bold text-leafs-blue mb-6 md:mb-8 text-center">
        About Us
      </h1>

      {/* Reduce entire box width on desktop only */}
      <div className="w-full md:max-w-3xl mx-auto">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          {/* Full-bleed wrapper; image scales without clipping */}
          <div className="-mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 overflow-hidden rounded-t-xl bg-white">
            <img
              src={charityImg}
              alt="About Hockey Ends Hunger"
              loading="lazy"
              className="block w-full h-auto max-h-[60vh] md:max-h-[65vh] object-contain select-none"
            />
          </div>

          <p className="text-base md:text-lg text-leafs-blue/90 leading-relaxed max-w-3xl mx-auto">
            Established in 2023, Hockey Ends Hunger is a local not-for-profit dedicated to bringing
            our community together through hockey while making a real impact in the fight against
            hunger. We strive to make a positive impact on those in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;