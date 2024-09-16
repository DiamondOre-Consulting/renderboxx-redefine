import React, { useEffect } from 'react'
import Hero from '../../Components/Project5RishiKeshParadise/Hero'
import Footer from '../../Components/Project5RishiKeshParadise/Footer'
import Navbar from '../../Components/Home/Navbar';

const Project5Rishikexhparadise = () => {


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

export default Project5Rishikexhparadise
