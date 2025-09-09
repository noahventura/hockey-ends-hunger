import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-xl fixed w-full z-20 top-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="flex items-center justify-between h-16 hidden md:flex">
          <div className="flex items-center justify-end flex-1 gap-12">
            <RouterLink to="/about" className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg transition duration-200">About Us</RouterLink>
            <RouterLink to="/previous-events" className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg transition duration-200">Previous Events</RouterLink>
          </div>
          <RouterLink to="/" className="flex-shrink-0 mx-12">
            <img src={logo} alt="Hockey Ends Hunger Logo" className="h-12 transition-transform duration-200 hover:scale-105" />
          </RouterLink>
          <div className="flex items-center justify-start flex-1 gap-12">
            <RouterLink to="/upcoming-events" className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg transition duration-200">Upcoming Events</RouterLink>
            <RouterLink to="/sponsors" className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg transition duration-200">Corporate Sponsors</RouterLink>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden relative items-center justify-center h-16">
          <button onClick={toggleMenu} className="absolute left-4 text-leafs-blue hover:text-leafs-blue/80 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <RouterLink to="/" className="mx-auto" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Hockey Ends Hunger Logo" className="h-12 transition-transform duration-200 hover:scale-105" />
          </RouterLink>
          {isOpen && (
            <div className="absolute top-16 left-4 bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 animate-fadeIn">
              <RouterLink to="/about" onClick={toggleMenu} className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg">About Us</RouterLink>
              <RouterLink to="/previous-events" onClick={toggleMenu} className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg">Previous Events</RouterLink>
              <RouterLink to="/upcoming-events" onClick={toggleMenu} className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg">Upcoming Events</RouterLink>
              <RouterLink to="/sponsors" onClick={toggleMenu} className="text-leafs-blue hover:text-leafs-blue/80 font-semibold text-lg">Corporate Sponsors</RouterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;