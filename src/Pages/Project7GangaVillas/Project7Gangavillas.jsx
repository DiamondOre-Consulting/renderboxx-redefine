import React, { useEffect } from 'react'
import Hero from '../../Components/Project7GangaVillas/Hero'
import Footer from '../../Components/Project7GangaVillas/Footer'

const Project7Gangavillas = () => {


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

export default Project7Gangavillas
