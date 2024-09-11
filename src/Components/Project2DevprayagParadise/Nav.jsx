import React, { useEffect, useState } from 'react'
import devprayaglogo from '../../assets/devprayaglogo.png'

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
      navbar ? '' : 'bg-transparent'
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-60">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="h-52 w-auto"
          src={devprayaglogo} // Replace with your logo URL
          alt="Logo"
        />
      </div>
      {/* Navigation Links */}
    
    </div>
  </nav>
  )
}

export default Nav
