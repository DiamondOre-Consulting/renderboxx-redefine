import React from "react";
import { Link } from "react-router-dom";
import footervedio from "../../assets/footervedio.mp4";
import logo from "../../assets/redefinelogo.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";


const Footer = () => {
  return (
    <>
    <footer className="relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={footervedio} type="video/mp4" />
        
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 w-full p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
         
          <div className="mb-6 md:mb-0 flex flex-col max-w-sm">
            <h1 className="text-3xl md:text-4xl text-gray-100 mb-4">
              <img src={logo} alt="Redefine Group Logo" className="w-32 md:w-40" />
            </h1>
            <p className="text-gray-100 text-sm md:text-base">
              Redefine Group, founded by Chander Mohan in 2006, transforms
              spaces with innovative ideas, delivering projects across Delhi,
              NCR, Uttarakhand.
            </p>

            <div className="mt-6 md:mt-5 flex justify-start">
          <Link to={'/contactus'}>
            <span className="bg-black rounded-md px-6 py-2 text-gray-100 hover:bg-gray-800">
              Request a CallBack
            </span>
          </Link>
        </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:ml-8">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">
                CONTACT INFORMATION
              </h2>
              <ul className="text-gray-500 font-medium text-sm md:text-base">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline flex items-start text-gray-200"
                  >
                    <svg
                      className="h-6 w-6 text-gray-100 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    B-48A GF, Main Road, Kalka Ji New Delhi – 110019
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline flex text-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-100 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                    +91 9582000035
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline flex text-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-100 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    support@redefinegroup.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="md:ml-2">
              <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">
                FOLLOW US
              </h2>
              <ul className="flex flex-wrap gap-4">
                <li>
                  <a
                    href="https://www.facebook.com/Redefinegroups"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="Facebook" className="w-8 md:w-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@redefinegroup178"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="YouTube" className="w-8 md:w-10" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/chandermohan_rg?igsh=NTJvMmFnMWNud2Nu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} alt="Instagram" className="w-8 md:w-10" />
                  </a>
                </li>
              </ul>
            </div>



            <div className="md:-ml-10">
              <h2 className="mb-6 text-lg font-semibold text-gray-100 uppercase">
              LEGAL
              </h2>
              <ul class="text-gray-100 flex flex-col font-medium">
                <Link to={'/privacy-policy'} class="">
                    <a  class="hover:underline">Privacy Policy</a>
                </Link>
              
                <Link to={'/terms-and-condition'} class="mb-4 mt-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </Link>
            </ul>
            </div>
          </div>
        </div>

   
    
      </div>
    </footer>
    <div className="text-center py-2 bg-black text-white  text-xs md:text-lg">Copyright © 2025 Doon Hatcheries Limited. All rights reserved.</div>
    </>
  );
};

export default Footer;
