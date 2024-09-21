import React from "react";
import { Link } from "react-router-dom";
import v1 from '../../assets/vedio3.mp4';
import dilivered from '../../assets/diliverd.png'

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" id="home">
    {/* Video Background */}
    <video
      className="absolute inset-0 w-full h-full object-cover" // Ensure the video covers the entire screen
      src={v1}
      autoPlay
      loop
      muted // Mute the video by default
    />
      {/* Center the "Home" text */}
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-sm md:text-xl font-bold text-white headingp1"> <Link to={'/'} className="hover:text-primary">Home </Link> || Haridwar Paradise</h1>
      </div> */}
    <div className="absolute top-60 right-40">
      <img src={dilivered} alt="" className="w-40"/>
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
