import React from "react";
import project5 from '../../assets/rishikesh.jpeg';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      id="home"
      style={{
        backgroundImage: `url(${project5})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Hero Text */}
      <div className="absolute flex flex-col justify-center items-center text-center inset-0 text-white z-20">
        <h1
          className="text-3xl md:text-4xl font-bold lg:text-7xl mb-4 headingp1 blink-text"
          style={{ textShadow: "3px 4px 7px 4px white", letterSpacing: '30px' }}
        >
          Coming Soon...
        </h1>

        {/* Centered "Rishikesh Paradise" below "Coming Soon" */}
        <h2 className="text-lg headingp1 md:text-2xl lg:text-4xl font-semibold mt-4">
          Rishikesh Paradise
        </h2>
        <p className="text-2xl md:text-4xl headingp1 mt-3">Upcoming township on National Highway</p>
      </div>

      {/* Blinking text animation */}
      <style jsx>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .blink-text {
          animation: blink 0.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
