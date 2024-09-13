import React, { useEffect } from "react";
import Sidebar from "../../Components/Home/Sidebar";
import HeroCarousel from "../../Components/Home/HeroCarousel";
import Stats from "../../Components/Home/Stats";
import AboutusSection from "../../Components/Home/AboutusSection";
import Awards from "../../Components/Home/Awards";
import ContactUs from "../../Components/Home/ContactUs";
import Testimonials from "../../Components/Home/Testimonials";
import Footer from "../../Components/Home/Footer";
import Projects from "../../Components/Home/Projects";
import Navbar from "../../Components/Home/Navbar";
import chatboat from "../../assets/chatboat.png";

const HomeMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone= 9582000035`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="flex   ">
        {/* Sidebar (fixed and narrow on the left) */}
        {/* <Sidebar /> */}
        <Navbar />

        {/* Hero Carousel (flex-grow to occupy remaining space) */}
        <div className="flex-grow ">
          <HeroCarousel />
          <Stats />
          <AboutusSection />
          <Projects />
          <Awards />
          {/* <Testimonials/> */}
          <ContactUs />
          <Footer />

          <div className="fixed md:bottom-2 bottom-1 md:right-4 right-2 z-10 cursor-pointer"onClick={handleWhatsAppChat} >
            <img src={chatboat} alt="" className="w-28 md:w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
