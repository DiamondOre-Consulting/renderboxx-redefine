// HeroSection.jsx
import React from "react";
import p3img1 from "../../assets/p4img1.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 parallax-bg">
        <img
          src={p3img1}
          alt="Candolim Luxfort"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold px-4 mb-4 headingp1">
          AP Park Avenue
        </h1>
        <p className="text-white text-lg mb-4">Elegance Meets Excellence</p>
        <hr className="w-24 border-white border-2 mb-6" />
      </div>
    </div>
  );
};

export default HeroSection;
