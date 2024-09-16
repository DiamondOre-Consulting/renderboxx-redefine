import React, { useState, useEffect } from 'react';
import haridwarlogo from '../../assets/haridwarlogo.png'

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  
  // Function to change navbar color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        navbar ? 'bg-gray-900 shadow-md opacity-75' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-20 w-auto"
            src={haridwarlogo} // Replace with your logo URL
            alt="Logo"
          />
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-100 hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="#contact" className="text-gray-100 hover:text-gray-300 transition-colors">
            Contact us
          </a>
          {/* <a href="#" className="text-gray-100 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#" className="text-gray-100 hover:text-blue-600 transition-colors">
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
