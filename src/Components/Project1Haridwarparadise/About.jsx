import React from "react";
import haridwar from '../../assets/haridwar.png'

const About = () => {
  return (
    <>
      <div className="md:py-10 py-6 mt-10">
        <div className="flex flex-col md:flex md:flex-row  items-center  px-10">
          <h1 className="headingp1 md:text-9xl text-6xl  " style={{textShadow: "8px 4px 5px 3px gray"}}>Haridwar Paradise</h1>

          <p className="md:ml-6 text-wrap text-justify text-lg md:mt-0 mt-3">
            Haridwar. Nestled in Haridwar’s serene and divine charm, Haridwar
            Paradise offers modern living spaces with top-notch architecture,
            design, and amenities. It seamlessly blends contemporary living with
            spiritual tranquility. Surrounded by lush greenery, it provides easy
            access to major local sites, including the sacred Har Ki Paudi and
            Patanjali Yogapeeth, just a short distance away. Haridwar Paradise
            ensures ultimate comfort and luxury with its gated complex, 2-tier
            security, and eco-friendly systems. Its state-of-the-art clubhouse
            and numerous amenities cater to relaxation and well-being. Haridwar
            Paradise stands as a symbol of honor and serenity amidst its
            picturesque setting.
          </p>
        </div>
      </div>

      <section className="relative overflow-hidden w-full">
        {/* Container for the image */}
        <div className="relative p-10">
          <img
            src={haridwar}
            alt="Zoomable"
            className="w-full h-auto object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
          />
        </div>
      </section>
    </>
  );
};

export default About;
