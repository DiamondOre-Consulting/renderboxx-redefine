import React, { useEffect } from 'react'
import Hero from '../../Components/Project3CandolimLuxfort/Hero'
import AboutUs from '../../Components/Project3CandolimLuxfort/About'
import OurGallary from '../../Components/Project3CandolimLuxfort/OurGallary'
import Footer from '../../Components/Project3CandolimLuxfort/Footer'
import Navbar from '../../Components/Home/Navbar'

const Project3HomeMain = () => {

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
    </div>
  )
}

export default Project3HomeMain
