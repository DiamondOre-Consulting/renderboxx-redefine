import React, { useEffect } from 'react'
import Hero from '../../Components/Project5RishiKeshParadise/Hero'
import Footer from '../../Components/Project5RishiKeshParadise/Footer'

const Project5Rishikexhparadise = () => {


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

export default Project5Rishikexhparadise
