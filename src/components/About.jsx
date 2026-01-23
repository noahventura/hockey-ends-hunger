import React, { useState, useEffect, useRef } from 'react';
import faceoffMayor from '../images/2025/faceoff_mayor.jpg';
import foodCollection from '../images/2025/food_collection.jpg';
import charity from '../images/charity.jpg';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const clickTimeout = useRef(null);

  const slides = [
    {
      image: faceoffMayor,
      alt: "Hockey faceoff ceremony with local mayor at Hockey Ends Hunger 2025 charity event",
      title: "Our Mission",
      description: "Established in 2023, Hockey Ends Hunger is a local not-for-profit dedicated to bringing our community together through hockey while making a real impact in the fight against hunger. We strive to make a positive impact on those in need."
    },
    {
      image: foodCollection,
      alt: "Community members collecting and organizing food donations for local families in need",
      title: "Our Community",
      description: "We bring together players, fans, and local businesses to create meaningful change. Every year, our charity hockey events unite the community in the shared goal of fighting food insecurity and supporting families in need.",
      zoom: true
    },
    {
      image: charity,
      alt: "Hockey Ends Hunger volunteers and supporters working together to fight hunger",
      title: "Our Impact",
      description: "Through the power of sport and community spirit, we've raised thousands of dollars and collected thousands of pounds of food donations. Together, we're proving that hockey can be a force for positive change in our community."
    }
  ];

  // Preload all images on mount
  useEffect(() => {
    const imagePromises = slides.map((slide) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Still set to true even on error to show content
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
    };
  }, []);

  const handleSlideChange = (newSlide) => {
    // Debounce rapid clicks
    if (clickTimeout.current) return;

    setCurrentSlide(newSlide);

    clickTimeout.current = setTimeout(() => {
      clickTimeout.current = null;
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-16 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-leafs-blue mb-4 md:mb-4 text-center">
        About Us
      </h1>

      <div className="w-full md:max-w-3xl mx-auto">
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-[0_10px_20px_rgba(0,32,91,0.2)]">
          <div className="-mx-4 md:-mx-6 -mt-4 md:-mt-6 mb-4 overflow-hidden rounded-t-xl bg-white relative group h-[50vh] md:h-[55vh] flex items-center justify-center">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={slide.alt}
                loading="eager"
                className={`absolute inset-0 w-full h-full object-cover select-none transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={
                  slide.zoom
                    ? { transform: 'scale(1.15)', objectPosition: '30% center' }
                    : {}
                }
              />
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200 z-20"
              aria-label="Previous slide"
            >
              <span className="text-2xl md:text-3xl">‹</span>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-200 z-20"
              aria-label="Next slide"
            >
              <span className="text-2xl md:text-3xl">›</span>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2 md:space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-leafs-blue">
              {slides[currentSlide].title}
            </h2>
            <p className="text-sm md:text-base text-leafs-blue/90 leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;