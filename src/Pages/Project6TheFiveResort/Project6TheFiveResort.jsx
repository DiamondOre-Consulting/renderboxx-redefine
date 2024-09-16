import React, { useEffect } from 'react'
import Hero from '../../Components/Project6TheFiveRestort/Hero'
import Footer from '../../Components/Project6TheFiveRestort/Footer'

const Project6TheFiveResort = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Project6TheFiveResort
