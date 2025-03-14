// HeroSection.jsx
import React from "react";
import p3img1 from "../../assets/p4img1.jpg";
import { Link } from "react-router-dom";
import dilivered from '../../assets/diliverd.png'

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
      <div className="absolute top-40 right-20">
      <img src={dilivered} alt="" className="w-40"/>
    </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold px-4 mb-4 headingp1">
          AP Park Avenue
        </h1>
        
        {/* <h1 className="text-sm md:text-xl font-bold text-white headingp1"> <Link to={'/'} className="hover:text-primary">Home </Link> || AP Park Avenue</h1> */}
  

        {/* <p className="text-white text-lg mb-4">Elegance Meets Excellence</p> */}
        {/* <hr className="w-24 border-white border-2 mb-6" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
