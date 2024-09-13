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
import mediafull from "../../assets/mediafull.jpg";
import chatboat from "../../assets/chatboat.png";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone= 9582000035`;
    window.open(url, "_blank");
  };


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
                <img src={trishul} alt="" className="w-80 md:px-0" />
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
                ambitious 70-acre township that exemplifies its commitment to
                quality and design. Future projects in Rishikesh and Devprayag
                continue to showcase Redefine Group’s vision for integrated
                living spaces.
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
              <img src={trishul} alt="" className="w-80 md:px-0" />
            </div>
            <div className="grid md:grid-cols-6 gap-8 items-center">
              <div className="col-span-4 text-justify text-xl text-gray-700">
                <p>
                  Founded by Mr. Chander Mohan, Redefine Group is a dominant
                  player in the real estate, financial services, and e-commerce
                  sectors.
                </p>
                <p>
                  The Group is committed to empowering individuals to realize
                  their full potential and lead exceptional lives. Through its
                  diverse businesses, Redefine Group offers platforms that
                  impact millions across India.
                </p>
                <p>
                  Mr. Chander Mohan, born on May 27, 1984, in Etawah, UP, is the
                  visionary leader behind Redefine Group. He has extensive
                  experience in sales and distribution, having previously been
                  the No. 1 channel partner of Reliance Life Insurance and head
                  of distribution in 11 states. He was also a core committee
                  member of Reliance Life Insurance. Mr. Mohan holds a B.Tech in
                  Electronics and Communications and a Higher National Diploma
                  (HND) in Electrical/Electronic Engineering from the U.K.
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

      <div className="fixed md:bottom-2 bottom-1 md:right-4 right-2 z-10 cursor-pointer" onClick={handleWhatsAppChat}>
        <img src={chatboat} alt="" className="w-28 md:w-40" />
      </div>
    </>
  );
};

export default AboutUsPage;
