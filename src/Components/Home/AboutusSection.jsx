import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import aboutusimage from "../../assets/aboutusimage.png";
import trishul from "../../assets/trishul.png";

const AboutusSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="md:py-20 py-10 flex flex-col justify-between items-center mx-auto">
          {/* Heading and Icon */}
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold text-center headings">
              About US
            </h1>
            <img src={trishul} alt="" className="w-60 md:px-0 px-10" />
          </div>

          {/* Responsive Flex Container for Stats */}
          <div className="grid md:grid-cols-9 grid-cols-1 gap-8 md:mt-10 mt-6 px-4 md:px-10 mx-auto">
            {/* About Text */}
            <div className="md:col-span-9 text-center flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-lg md:text-2xl  text-center  text-justify leading-relaxed">
                Redefine Group, founded in 2006 by Chander Mohan, is a leading
                real estate organization based in Delhi and Uttarakhand.
                Specializing in innovative ideas and transforming spaces, the
                company has developed over 2 lakh sq ft of plots and real estate
                across Delhi, NCR, Uttarakhand, Bhopal, and Goa. With six
                completed projects, they are currently developing a township,
                "Haridwar Paradise," in Haridwar and have upcoming projects in
                Rishikesh and Devprayag, continuing to expand their
                presence and expertise.
              </p>
              <Link
                to={"/aboutus"}
                className="bg-primary mt-8 text-white text-lg md:text-xl px-6 py-3 mx-auto rounded-md"
              >
                Know More
              </Link>
            </div>

            {/* About Image */}
            {/* <div className="md:col-span-4">
              <img className="w-full rounded-lg shadow-md" src={aboutusimage} alt="About Us" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutusSection;
