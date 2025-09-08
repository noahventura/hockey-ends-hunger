import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className="pt-16">
      <div className="relative h-screen overflow-hidden">
        <img 
          src="https://www.sitback.com.au/wp-content/uploads/2024/02/virtue-signalling-chain-reaction-effect-group-people.webp" 
          alt="Hero Image" 
          className="w-full h-full object-cover filter brightness-75 transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <img 
            src="https://via.placeholder.com/150x50?text=HEH+Logo" 
            alt="Logo" 
            className="h-24 mb-4 transition-transform duration-200 hover:scale-105" 
          />
          <div className="flex items-center mb-8">
            <p className="text-xl font-light text-shadow mr-4">EST. 2024</p>
            <div className="w-px h-8 bg-white mx-4"></div>
            <Link 
              to="next-event" 
              smooth={true} 
              duration={500} 
              className="text-xl font-medium text-shadow cursor-pointer hover:text-blue-500 transition duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div id="next-event" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
          <img 
            src="https://www.shutterstock.com/image-photo/high-five-team-food-charity-600nw-2469643817.jpg" 
            alt="Next Event" 
            className="w-full h-auto object-cover" 
          />
        </div>
        <div className="flex-2 text-left md:text-left text-[#f3f4f6]">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Next Event: Charity Hockey Game</h2>
          <p className="text-lg leading-relaxed">Join us for our upcoming charity hockey game on October 15, 2025. All proceeds go towards fighting hunger in our community. Location: Local Arena, Time: 7 PM. Don't miss out!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;