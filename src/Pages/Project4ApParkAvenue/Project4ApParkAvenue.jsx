import React, { useEffect } from 'react'
import Hero from '../../Components/Project4ApParkAvenue/Hero'
import AboutUs from '../../Components/Project4ApParkAvenue/About'
import OurGallary from '../../Components/Project4ApParkAvenue/OurGallary'
import Footer from '../../Components/Project4ApParkAvenue/Footer'

const Project4ApParkAvenue = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Hero/>
      <AboutUs/>
      <OurGallary/>
      <Footer/>
    </div>
  )
}

export default Project4ApParkAvenue
