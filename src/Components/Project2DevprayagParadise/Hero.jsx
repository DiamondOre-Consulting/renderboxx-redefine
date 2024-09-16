import React from "react";
import devprayaghero from '../../assets/devprayaghero.jpeg';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      id="home"
      style={{
        backgroundImage: `url(${devprayaghero})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Hero Text */}
      <div className="absolute flex flex-col justify-center items-center text-center inset-0 text-white z-20">
        <h1
          className=" text-3xl md:text-4xl font-bold lg:text-7xl mb-4 headingp1 text-center blink-text"
          style={{ textShadow: "3px 4px 7px 4px white", letterSpacing: "30px" }}
        >
          Coming Soon!!!
        </h1>

       
        {/* <h1 className="text-sm md:text-xl font-bold text-white headingp1"> <Link to={'/'} className="hover:text-primary">Home </Link> || Devprayag Paradise</h1> */}
     

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
