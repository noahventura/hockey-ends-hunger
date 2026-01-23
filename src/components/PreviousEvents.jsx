import React, { useState } from 'react';
import group2024 from '../images/group.jpg';
import handshake from '../images/handshake.jpg';
import charity from '../images/charity.jpg';
import rink from '../images/rink.jpg';
import faceoffMayor from '../images/2025/faceoff_mayor.jpg';
import foodCollection2 from '../images/2025/food_collection_2.jpg';
import groupIce2025 from '../images/2025/group_ice.jpg';
import rafflePrizes from '../images/2025/raffle_prizes.jpg';

const PreviousEvents = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [currentImage2025, setCurrentImage2025] = useState(0);
  const [currentImage2024, setCurrentImage2024] = useState(0);

  const images2025 = [
    { src: groupIce2025, alt: "Hockey Ends Hunger 2025 participants posing together on ice after charity game" },
    { src: faceoffMayor, alt: "Hockey faceoff ceremony with local mayor at Hockey Ends Hunger 2025 charity event" },
    { src: foodCollection2, alt: "Volunteers organizing food donations collected during 2025 charity event" },
    { src: rafflePrizes, alt: "Display of raffle prizes donated by local businesses for 2025 fundraiser" }
  ];

  const images2024 = [
    { src: group2024, alt: "Hockey Ends Hunger 2024 team photo with all participants and volunteers after successful charity event" },
    { src: handshake, alt: "Community partnership handshake at Hockey Ends Hunger 2024 event" },
    { src: charity, alt: "Hockey Ends Hunger 2024 charity volunteers working together" },
    { src: rink, alt: "Hockey rink during 2024 charity game event" }
  ];

  const nextImage2025 = () => {
    setCurrentImage2025((prev) => (prev + 1) % images2025.length);
  };

  const prevImage2025 = () => {
    setCurrentImage2025((prev) => (prev - 1 + images2025.length) % images2025.length);
  };

  const nextImage2024 = () => {
    setCurrentImage2024((prev) => (prev + 1) % images2024.length);
  };

  const prevImage2024 = () => {
    setCurrentImage2024((prev) => (prev - 1 + images2024.length) % images2024.length);
  };

  const events = [
    {
      year: "2025",
      images: images2025,
      alt: "2025 Charity Hockey Game",
      title: "2025 Charity Hockey Game",
      description: "Our biggest year yet! Thanks to the incredible support of our community:",
      achievements: [
        "Raised over $4,200 for the Aurora Food Pantry",
        "Collected over 1,661 lbs of food donations",
        "Hosted our largest after-party with amazing raffle prizes"
      ]
    },
    {
      year: "2024",
      images: images2024,
      alt: "2024 Charity Hockey Game",
      title: "2024 Charity Hockey Game",
      description: "Thanks to the support of local players, businesses and fans, we proudly:",
      achievements: [
        "Raised over $2,200 for the Aurora Food Pantry",
        "Collected over 550 lbs of food donations",
        "Hosted an after-party with amazing raffle prizes"
      ]
    }
  ];

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-16 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-leafs-blue mb-4 md:mb-4 text-center">
        Previous Events
      </h1>

      <div className="relative max-w-3xl mx-auto">
        {/* Navigation Arrows - Desktop only - Hidden when carousel has arrows */}
        <button
          onClick={prevEvent}
          className="hidden lg:flex absolute -left-16 bg-black hover:bg-black/80 text-white rounded-full w-12 h-12 items-center justify-center transition-all duration-200 z-10"
          style={{ top: '260px' }}
          aria-label="Previous event"
        >
          <span className="text-3xl">‹</span>
        </button>

        <button
          onClick={nextEvent}
          className="hidden lg:flex absolute -right-16 bg-black hover:bg-black/80 text-white rounded-full w-12 h-12 items-center justify-center transition-all duration-200 z-10"
          style={{ top: '260px' }}
          aria-label="Next event"
        >
          <span className="text-3xl">›</span>
        </button>

        {/* Event Card */}
        <div className="bg-white p-6 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <div className="overflow-hidden rounded-xl mb-5 relative">
            {currentEvent === 0 ? (
              <>
                <img
                  src={images2025[currentImage2025].src}
                  alt={images2025[currentImage2025].alt}
                  className="w-full h-64 md:h-96 object-cover scale-[1.15] md:scale-100"
                  style={
                    currentImage2025 === 2 || currentImage2025 === 3
                      ? { objectPosition: 'center 40%' }
                      : {}
                  }
                  loading="lazy"
                />
                {/* Carousel arrows for 2025 */}
                <button
                  onClick={prevImage2025}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-20"
                  aria-label="Previous image"
                >
                  <span className="text-2xl">‹</span>
                </button>
                <button
                  onClick={nextImage2025}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-20"
                  aria-label="Next image"
                >
                  <span className="text-2xl">›</span>
                </button>
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images2025.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage2025(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImage2025 ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                <img
                  src={images2024[currentImage2024].src}
                  alt={images2024[currentImage2024].alt}
                  className="w-full h-64 md:h-96 object-cover scale-110 md:scale-100"
                  style={
                    currentImage2024 === 0
                      ? { objectPosition: 'center 35%' }
                      : currentImage2024 === 1 || currentImage2024 === 3
                      ? { objectPosition: 'center 60%' }
                      : currentImage2024 === 2
                      ? { objectPosition: 'center 45%' }
                      : {}
                  }
                  loading="lazy"
                />
                {/* Carousel arrows for 2024 */}
                <button
                  onClick={prevImage2024}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-20"
                  aria-label="Previous image"
                >
                  <span className="text-2xl">‹</span>
                </button>
                <button
                  onClick={nextImage2024}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-20"
                  aria-label="Next image"
                >
                  <span className="text-2xl">›</span>
                </button>
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images2024.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage2024(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImage2024 ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <h3 className="text-2xl font-semibold text-leafs-blue mb-3">
            {events[currentEvent].title}
          </h3>
          <div className="text-leafs-blue/90 text-base leading-relaxed space-y-2">
            <p>{events[currentEvent].description}</p>
            <ul className="list-disc pl-5 space-y-1">
              {events[currentEvent].achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Event Indicators - Desktop */}
          <div className="hidden lg:flex justify-center gap-2 mt-4">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentEvent ? 'bg-leafs-blue w-6' : 'bg-leafs-blue/30'
                }`}
                aria-label={`Go to ${events[index].year} event`}
              />
            ))}
          </div>

          {/* Mobile Navigation - Text buttons */}
          <div className="lg:hidden mt-4">
            <div className="flex justify-center gap-3 mb-4">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentEvent ? 'bg-leafs-blue w-6' : 'bg-leafs-blue/30'
                  }`}
                  aria-label={`Go to ${events[index].year} event`}
                />
              ))}
            </div>
            <div className="flex justify-center">
              {currentEvent === 0 ? (
                <button
                  onClick={nextEvent}
                  style={{ backgroundColor: '#00205B' }}
                  className="w-full text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:opacity-80"
                >
                  ← Previous (2024)
                </button>
              ) : (
                <button
                  onClick={prevEvent}
                  style={{ backgroundColor: '#00205B' }}
                  className="w-full text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:opacity-80"
                >
                  Next → (2025)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousEvents;
