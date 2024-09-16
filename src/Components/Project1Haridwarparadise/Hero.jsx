import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center" 
      id="home"
      style={{
        backgroundImage: "url('https://www.haridwarparadise.com/images/slide-8.jpg')",
      }}
    >
      {/* Center the "Home" text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-sm md:text-xl font-bold text-white headingp1"> <Link to={'/'} className="hover:text-primary">Home </Link> || Haridwar Paradise</h1>
      </div>

      {/* Project name and description at the bottom */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl lg:text-4xl mb-4 headingp1" style={{ textShadow: "3px 4px 7px 4px white" }}>
          Discover the grandeur of Haridwar Paradise
        </h1>
        <p className="text-lg lg:text-2xl">
          Design whispers elegance and tranquility.
        </p>
      </div>
    </div>
  );
};

export default Hero;
