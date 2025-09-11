import React from 'react';

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-white">
      {/* Smaller on mobile to keep to one line and reduce the gap */}
      <h1 className="text-3xl md:text-5xl font-bold text-leafs-blue mb-6 md:mb-8 text-center">
        Corporate Sponsors
      </h1>

      {/* Single panel */}
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-2xl hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)] transition-shadow duration-300">
        {/* Why Partner */}
        <section className="space-y-4 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-leafs-blue">Why Partner With Us?</h2>
          <p className="text-leafs-blue/90 text-sm md:text-lg">
            By sponsoring Hockey Ends Hunger, your business will:
          </p>
          <ul className="list-disc pl-6 text-leafs-blue/90 text-sm md:text-lg space-y-2">
            <li>Support families in need right here in your local community</li>
            <li>Be recognized as a community leader</li>
            <li>Gain positive exposure with local community members, families, and fans</li>
            <li>Help us double our impact in 2025</li>
          </ul>
        </section>

        {/* Sponsorship Opportunities */}
        <section className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-leafs-blue">Sponsorship Opportunities</h2>
          <p className="text-leafs-blue/90 text-sm md:text-lg">
            We welcome <span className="font-semibold text-leafs-blue">corporate sponsorships</span> at all levels. Options include:
          </p>
          <ul className="list-disc pl-6 text-leafs-blue/90 text-sm md:text-lg space-y-2">
            <li>
              <span className="font-semibold text-leafs-blue">Event Sponsorships</span> (company logo on posters and event signage)
            </li>
            <li>
              <span className="font-semibold text-leafs-blue">Custom Partnerships</span> tailored to your business goals
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;