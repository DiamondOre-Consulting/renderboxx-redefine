import React, { useEffect } from 'react'
import Hero from '../../Components/Project4ApParkAvenue/Hero'
import AboutUs from '../../Components/Project4ApParkAvenue/About'
import OurGallary from '../../Components/Project4ApParkAvenue/OurGallary'
import Footer from '../../Components/Project4ApParkAvenue/Footer'
import Navbar from '../../Components/Home/Navbar'
import ChatBoat from '../Home/ChatBoat'

const Project4ApParkAvenue = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <OurGallary/>
      <Footer/>
      <ChatBoat/>
    </div>
  )
}

export default Project4ApParkAvenue
