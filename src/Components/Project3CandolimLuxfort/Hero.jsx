// Hero.jsx
import React from "react";
import candolimluxfort from "../../assets/candolimluxfort.jpg"; // Ensure correct path
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative h-[60vh] bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `url(${candolimluxfort})`, 
        backgroundAttachment: 'fixed' // This gives the parallax effect
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl text-center font-bold mb-4 headingp1">Candolim Luxfort</h1>
        {/* <p className="text-white text-lg md:text-2xl max-w-md text-center">
        Innovative architecture in luxury living  
        </p> */}
       
        <h1 className="text-sm md:text-xl font-bold text-white headingp1 mt-4 "> <Link to={'/'} className="hover:text-primary">Home </Link> || Candolim Luxfort</h1>
     

      </div>
    </div>
  );
};

export default Hero;
