import React, { useEffect } from 'react'
import Hero from '../../Components/Project7GangaVillas/Hero'
import Footer from '../../Components/Project7GangaVillas/Footer'
import Navbar from '../../Components/Home/Navbar';

const Project7Gangavillas = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Navbar />
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Project7Gangavillas
