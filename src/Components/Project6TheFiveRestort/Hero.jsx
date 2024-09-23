import React from "react";
import project5 from '../../assets/project6.jpg';
import { Link } from "react-router-dom";
import fivestar from '../../assets/fivestar.jpg'

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      id="home"
      style={{
        backgroundImage: `url(${fivestar})`,
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
          Coming Soon...
        </h1>

        <div className="  text-white z-20 text-lg md:text-4xl headingp1  font-semibold">
      The Five Star Resort With Leading Brand
      </div>
        {/* <p className="text-lg lg:text-2xl">
          Design whispers elegance and tranquility.
        </p> */}
      </div>

      

      
      <div className="absolute inset-0 flex justify-center items-center">
        {/* <h1 className="text-sm md:text-xl font-bold text-white headingp1 mt-20 z-20"> <Link to={'/'} className="hover:text-primary">Home </Link> || Haridwar Paradise</h1> */}
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
