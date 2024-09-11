import React from "react";
import project5 from '../../assets/project6.jpg';

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
          className=" text-3xl md:text-4xl font-bold lg:text-7xl mb-4 headingp1 text-center  blink-text"
          style={{ textShadow: "3px 4px 7px 4px white"  , letterSpacing : '30px' } }
        >
          Coming Soon..
        </h1>
        {/* <p className="text-lg lg:text-2xl">
          Design whispers elegance and tranquility.
        </p> */}
      </div>

      <div className="absolute top-6 left-8 text-white z-20 text-lg md:text-4xl headingp1  font-semibold">
        The Five Resort
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
