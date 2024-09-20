import React, { useEffect } from 'react'
import Hero from '../../Components/Project6TheFiveRestort/Hero'
import Footer from '../../Components/Project6TheFiveRestort/Footer'
import Navbar from '../../Components/Home/Navbar';
import ChatBoat from '../Home/ChatBoat';

const Project6TheFiveResort = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer/>
      <ChatBoat/>
    </div>
  )
}

export default Project6TheFiveResort
