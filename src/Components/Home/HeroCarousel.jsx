import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import v1 from '../../assets/hero/6.mp4'
import { Link } from "react-router-dom";

const headings = [
  "We Bulid Together",
  "Join Our Journey",
   "Experience Innovation"
  
];

const HeroCarousel = () => {
  const [currentHeading, setCurrentHeading] = useState(0);

  // Function to handle the heading change
  const handleNextHeading = () => {
    setCurrentHeading((prev) => (prev + 1) % headings.length);
  };

  // Automatically change headings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextHeading();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={v1} // Replace with your video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Heading with Animated Transition */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-5xl md:text-7xl font-bold text-center px-4">
        <AnimatePresence>
          <motion.div
            key={currentHeading} // Animate presence based on the current heading index
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.75 }}
            className="absolute"
          >
            <h1 className="headings capitlized">{headings[currentHeading]}</h1>
          </motion.div>
        </AnimatePresence>

        {/* Static Subheading */}
        <Link to={'/aboutus'}className="bg-primary rounded-md px-10 py-2 text-gray-100 text-lg mt-40">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default HeroCarousel;
