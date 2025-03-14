import React, { useEffect } from "react";
import aboutimage from "../../assets/aboutimage.jpg";
import Sidebar from "../../Components/Home/Sidebar";
import Footer from "../../Components/Home/Footer";
import media1 from "../../assets/media1.png";
import media2 from "../../assets/media2.png";
import Navbar from "../../Components/Home/Navbar";
import image from "../../assets/aboutusimg.png";
import trishul from "../../assets/trishul.png";
import RedefineOwner from "../../assets/RedefineOwner.jpg";
import mediafull from "../../assets/mediafull.jpg";
import ChatBoat from "./ChatBoat";   

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=9582000035`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="relative">
      <div className="relative  w-full h-screen">
          <img
            src={image} // Replace with your image URL
            alt="About Us"
            className="w-full h-full object-fit position-bottom"
            
            style={{"objectPosition": "15% 100%"}}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto mt-20 z-10">
            <h1 className="text-white text-5xl md:text-8xl font-bold headings">
              About us
            </h1>
            <p className="text-gray-100 font-semibold text-sm md:text-2xl text-wrap mt-2">
              DESIGNED FOR LIFE, DRIVEN BY INNOVATION
            </p>
          </div>
        </div>

        <div>
          {/* Company profile */}
          <div>
            <p className="text-lg p-4 md:p-8">
              <h1 className="headings text-4xl md:text-6xl">Company Profile</h1>
              <div className=" mb-6">
              <div className="w-80 h-1 bg-black mt-2"></div>
                {/* <img src={trishul} alt="" className="w-80 md:px-0" /> */}
              </div>
              <p className="text-xl text-justify">
                Over 17 years, Redefine Group has focused on creating
                extraordinary spaces, transforming the ordinary into the
                spectacular. Based in Delhi and Uttarakhand, Redefine Group is a
                leader in real estate development and innovation. Established in
                2006 by Mr. Chander Mohan, the company has delivered over
                200,000 sq. ft. of real estate projects, including residential
                and plotted developments across Delhi NCR, Uttarakhand, Goa, and
                Bhopal.
                <br />
                <br />
                The Group’s landmark project, *Haridwar Paradise*, is an
                ambitious township that exemplifies its commitment to quality
                and design. Future projects in Rishikesh and Devprayag continue
                to showcase Redefine Group’s vision for integrated living
                spaces.
              </p>
            </p>
          </div>

          {/* Media Coverage */}
          <div className="mt-20 p-8">
            <h1 className="headings text-4xl md:text-6xl capitalize">
              Media Coverage
            </h1>
            <div className="mb-6">
            <div className="w-60 md:w-80 h-1 bg-black mt-2"></div>
              {/* <img src={trishul} alt="" className="w-80 md:px-0" /> */}
            </div>
            <div className="flex md:flex justify-between md:px-20 md:block hidden">
              <div className="rounded-lg p-2">
                <img
                  src={media1}
                  alt=""
                  className="w-full rounded-lg p-4 border border-2"
                />
              </div>
              <div className="rounded-lg p-2">
                <img
                  src={media2}
                  alt=""
                  className="w-full rounded-lg p-4 border border-2"
                />
              </div>
            </div>
            <img src={mediafull} alt="" className="md:hidden block" />
          </div>

          {/* Words from Chairman */}
          <div className="mt-10 p-4 md:p-8">
            <h1 className="headings text-5xl md:text-7xl capitalize">
              Sovereignty
            </h1>
            <div className="mb-10">
              {/* <img src={trishul} alt="" className="w-80 md:px-0" /> */}
              <div className="w-60 md:w-80 h-1 bg-black mt-2"></div>
            </div>
            <div className="grid md:grid-cols-6 gap-8 items-center">
              <div className="col-span-4 text-justify text-xl text-gray-700">
                <p>
                  Founded by Mr. Chander Mohan, Redefine Group is a leading
                  player in real estate, financial services, and e-commerce.
                </p>
                <p>
                  The Group is dedicated to empowering individuals to achieve
                  their full potential and lead outstanding lives. Through its
                  diverse portfolio, Redefine Group impacts millions across
                  India.
                </p>
                <p>
                Mr. Chander Mohan, born on May 27, 1984. He is the
                  visionary leader behind Redefine Group. With a B.Tech in
                  Electronics and Communications and a Higher National Diploma
                  in Electrical/Electronic Engineering from the U.K., he has
                  extensive experience in sales and distribution. He was
                  formerly the No. 1 channel partner of
                  Reliance , overseeing distribution
                  across 11 states.
                </p>
              </div>

              <div className="flex flex-col col-span-2 items-center">
                <img src={RedefineOwner} alt="" className="w-100 rounded-lg" />
                <p className="font-bold text-2xl mt-8 headings">
                  Mr. Chander Mohan
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

   
     
     <ChatBoat/>
     
    </>
  );
};

export default AboutUsPage;
