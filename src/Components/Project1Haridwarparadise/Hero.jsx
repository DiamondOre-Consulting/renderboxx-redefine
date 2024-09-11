import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center" id="home"
      style={{
        backgroundImage:
          "url('https://www.haridwarparadise.com/images/slide-8.jpg')",
      }}
    >
      {/* Hero Text */}
      <div className="absolute bottom-10 left-10 text-white">
        <h1 className="text-4xl lg:text-4xl  mb-4 headingp1 " style={{textShadow  : "3px 4px 7px 4px white"}}>
          Discover the grandeur of Haridwar Paradise
        </h1>
        <p className="text-lg lg:text-2xl ">
          Design whispers elegance and tranquility.
        </p>
      </div>
    </div>
  );
};

export default Hero;
