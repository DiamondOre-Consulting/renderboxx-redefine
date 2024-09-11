import React from "react";
import { Link } from "react-router-dom";
import aarti from '../../assets/aarti.jpg'

const ContactUs = () => {
  return (
    <div>
      <div className="relative h-[300px] mb-10">
        <div className="relative w-full h-full">
          <img
            src={aarti}
            alt="About Us"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center mt-12">
            <h1
              className="text-2xl text-center md:text-5xl headings text-gray-100 text-wrap capitalize"
              style={{ textShadow: "4px 5px 7px gray" }}
            >
              Your next architectural masterpiece Awaits
            </h1>
            <Link
              to={"/contactus"}
              className="mt-6 px-8 py-2  bg-primary text-lg font-semibold uppercase"
            >
              contactus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
