import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#242424] shadow-lg fixed w-full z-20 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 hidden md:flex">
          <div className="flex items-center justify-end flex-1 gap-10">
            <RouterLink to="/about" className="text-[#a0a0a0] hover:text-blue-500 font-medium transition duration-200">About Us</RouterLink>
            <RouterLink to="/previous-events" className="text-[#a0a0a0] hover:text-blue-500 font-medium transition duration-200">Previous Events</RouterLink>
          </div>
          <RouterLink to="/" className="flex-shrink-0 mx-10">
            <img src="https://via.placeholder.com/150x50?text=HEH+Logo" alt="Hockey Ends Hunger Logo" className="h-10 transition-transform duration-200 hover:scale-105" />
          </RouterLink>
          <div className="flex items-center justify-start flex-1 gap-10">
            <RouterLink to="/upcoming-events" className="text-[#a0a0a0] hover:text-blue-500 font-medium transition duration-200">Upcoming Events</RouterLink>
            <RouterLink to="/sponsors" className="text-[#a0a0a0] hover:text-blue-500 font-medium transition duration-200">Corporate Sponsors</RouterLink>
          </div>
        </div>
        <div className="flex md:hidden relative items-center justify-center h-16">
          <button onClick={toggleMenu} className="absolute left-4 text-[#a0a0a0] hover:text-blue-500 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <RouterLink to="/" className="mx-auto" onClick={() => setIsOpen(false)}>
            <img src="https://via.placeholder.com/150x50?text=HEH+Logo" alt="Hockey Ends Hunger Logo" className="h-10 transition-transform duration-200 hover:scale-105" />
          </RouterLink>
          {isOpen && (
            <div className="absolute top-16 left-4 bg-[#242424] shadow-lg rounded-lg p-6 flex flex-col gap-4 animate-fadeIn">
              <RouterLink to="/about" onClick={toggleMenu} className="text-[#a0a0a0] hover:text-blue-500 font-medium">About Us</RouterLink>
              <RouterLink to="/previous-events" onClick={toggleMenu} className="text-[#a0a0a0] hover:text-blue-500 font-medium">Previous Events</RouterLink>
              <RouterLink to="/upcoming-events" onClick={toggleMenu} className="text-[#a0a0a0] hover:text-blue-500 font-medium">Upcoming Events</RouterLink>
              <RouterLink to="/sponsors" onClick={toggleMenu} className="text-[#a0a0a0] hover:text-blue-500 font-medium">Corporate Sponsors</RouterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;