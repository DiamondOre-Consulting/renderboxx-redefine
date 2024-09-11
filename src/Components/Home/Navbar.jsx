import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/redefinelogo.png"; // Update this with the logo as per your design
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa"; // Social media icons

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenuTimer, setSubmenuTimer] = useState(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

    // Scroll to section
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    
  useEffect(() => {
    if (location.hash === "#projects") {
      scrollToSection("projects");
    } else if (location.hash === "#achievements") {
      scrollToSection("achievements");
    }
  }, [location]);


  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleMouseEnter = () => {
    if (submenuTimer) clearTimeout(submenuTimer);
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setShowSubmenu(false);
    }, 300);
    setSubmenuTimer(timer);
  };

  const handleNavigateWithSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };
  

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        navbar ? "bg-gray-900 shadow-md opacity-75" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img className="h-20 w-auto" src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-xl font-bold space-x-8">
          <Link
            to={"/"}
            className="text-gray-100 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to={"/aboutus"}
            className="text-gray-100 hover:text-primary transition-colors"
          >
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className="text-gray-100 hover:text-primary transition-colors cursor-pointer"
              onClick={() => handleNavigateWithSection("projects")}
            >
              Projects
            </span>
            {showSubmenu && (
              <div className="absolute top-full mt-2 w-60 bg-black rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100 border-t-2 border-primary">
                <Link
                  to={"/haridwarparadise"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  Haridwar Paradise
                </Link>
                <Link
                  to={"/devprayagparadise"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  Devprayag Paradise
                </Link>

                <Link
                  to={"/Candolimlaxfort"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  Candolim Luxfort
                </Link>
                <Link
                  to={"/apparkavenue"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  AP Park Avenue
                </Link>
                <Link
                  to={"/rishikeshparadise"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  Rishikesh Paradise
                </Link>


                <Link
                  to={"/thefiveresort"}
                  target="_blank"
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-700 hover:text-primary transition-all duration-200"
                >
                  The Five Resort
                </Link>
              
              </div>
            )}
          </div>

          <span
            className="text-gray-100 hover:text-primary transition-colors cursor-pointer"
            onClick={() => handleNavigateWithSection("achievements")}
          >
            Achievements
          </span>
          <Link
            to={"/contactus"}
            className="text-gray-100 hover:text-primary transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-100 focus:outline-none"
          >
            {showMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 h-full w-64  bg-black z-40 transform transition-transform duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img src={logo} alt="" className="px-6 mt-10" />
        <div className="p-4 mt-4 ">
          <Link
            to={"/"}
            className="block px-4 py-2 text-gray-100 hover:bg-gray-700 border border-l-4 border-yellow-500 border-r-0 border-b-0 border-t-0"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to={"/aboutus"}
            className="block px-4 py-2 text-gray-100 hover:bg-gray-700"
            onClick={() => setShowMenu(false)}
          >
            About Us
          </Link>
          <span
            className="block px-4 py-2 text-gray-100 hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setShowMenu(false);
              handleNavigateWithSection("projects");
            }}
          >
            Projects
          </span>
          <span
            className="block px-4 py-2 text-gray-100 hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setShowMenu(false);
              handleNavigateWithSection("achievements");
            }}
          >
            Achievements
          </span>
          <Link
            to={"/contactus"}
            className="block px-4 py-2 text-gray-100 hover:bg-gray-700"
            onClick={() => setShowMenu(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/Redefinegroups" target="_blank">
            <FaFacebookF className="text-gray-100 text-3xl hover:text-primary" />
          </a>
          <a href="https://www.youtube.com/@redefinegroup178" target="_blank">
            <FaYoutube className="text-gray-100 hover:text-primary text-3xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
