import React, { useEffect } from "react";
import aboutimage from "../../assets/aboutimage.jpg";
import Sidebar from "../../Components/Home/Sidebar";
import Footer from "../../Components/Home/Footer";
import media1 from "../../assets/media1.png";
import media2 from "../../assets/media2.png";
import Navbar from "../../Components/Home/Navbar";
import image from "../../assets/haridwar2.png";
import trishul from "../../assets/trishul.png";
import RedefineOwner from "../../assets/RedefineOwner.jpg";
import mediafull from '../../assets/mediafull.jpg';

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative  w-full h-2/3">
          <img
            src={image} // Replace with your image URL
            alt="About Us"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto mt-20 z-10">
            <h1 className="text-white text-5xl md:text-8xl font-bold headings ">
              About us
            </h1>
            <p className="text-gray-100 font-semibold text-sm md:text-2xl text-wrap mt-2">
              DESIGNED FOR LIFE, DRIVEN BY INNOVATION
            </p>
          </div>
        </div>

        <div className="">
          {/* Company profile */}
          <div>
            <p className="text-lg p-4 md:p-8">
              <h1 className="headings text-4xl md:text-6xl">Company Profile</h1>
              <div className=" mb-6">
                <img src={trishul} alt="" className="w-80 md:px-0" />
              </div>
              <p className="text-xl text-justify">
                Over 17 years, Redefine Group has single-mindedly focused on
                innovative ideas. Taking ordinary spaces and transforming them
                into something spectacular. Redefine Group is a leading real
                estate organization based in Delhi and Uttarakhand. It was
                incorporated in the year 2006. The company was founded by Mr.
                Chander Mohan. Chander Mohan is the managing director of the
                company, till date the company has done more than 2 lac sq ft of
                plots and real estate development in Delhi, NCR, Uttarakhand,
                Bhopal, Rajasthan, Vrindavan, Goa, etc. They have delivered 6+
                projects including plots and residential. The company is
                currently executing a 70-acre township in Haridwar named
                Haridwar Paradise and has upcoming projects in Rishikesh and
                Devprayag.
              </p>
            </p>
          </div>

          {/* Media Coverage */}
          <div className="mt-20 p-8">
            <h1 className="headings text-4xl md:text-6xl capitalize">
              Media Coverage
            </h1>
            <div className="mb-6">
              <img src={trishul} alt="" className="w-80 md:px-0" />
            </div>
            <div className="flex md:flex justify-between md:px-20 md:block hidden">
              <div className="  rounded-lg p-2">
                {/* <div className="flex "> 
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <div className="w-5 h-5 bg-black rounded-full ml-2"></div>
                  <div className="w-5 h-5 bg-black rounded-full ml-2"></div>
                </div> */}
                <img src={media1} alt="" className="w-full rounded-lg p-4 border border-2" />
              </div>
              <div className=" rounded-lg p-2">
            
                <img src={media2} alt="" className="w-full rounded-lg  p-4 border border-2" />
              </div>
            </div>

            <img
              src={mediafull}
              alt=""
              className="md:hidden block"
            />
          </div>

          {/* WORDS FROM CHAIRMAN */}
          <div className="mt-10 p-4 md:p-8">
            <h1 className="headings text-5xl md:text-7xl capitalize">
              Sovereignty
            </h1>
            <div className=" mb-10">
              <img src={trishul} alt="" className="w-80 md:px-0" />
            </div>
            <div className="grid md:grid-cols-6 gap-8  items-center">
              <div className="col-span-4 text-justify text-xl text-gray-700">
                <p>
                  Founded by Mr. Chander Mohan, the Redefine Group has a leading
                  presence across real estate, financial services, e-commerce,
                  software, and healthcare.
                </p>
                <p>
                  The Redefine Group strongly believes that it has a pivotal
                  role to play in shaping the lives of ordinary people to
                  transform them into someone extraordinary. Through its various
                  consumer-facing businesses, the Group provides a robust
                  platform to every Indian to realize their potential and lead a
                  lifestyle that everyone desires.
                </p>
                <p>
                  Mr. Chander Mohan, born on 27 May 1984, in Etawah, UP. He is
                  the younger son of the visionary Shri Hotilal and lives with
                  his family in Delhi. Graduated (B.Tech. in Electronics and
                  Communications) BTEC – HIGHER NATIONAL DIPLOMA (HND) In
                  Electrical/Electronic Engineering, U.K. Edxcel
                </p>
              </div>
              <div className="flex flex-col col-span-2 items-center  ">
                <img src={RedefineOwner} alt="" className="w-100 rounded-lg" />
                <p className="font-bold text-2xl mt-8 headings ">
                  Mr. Chander Mohan
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
