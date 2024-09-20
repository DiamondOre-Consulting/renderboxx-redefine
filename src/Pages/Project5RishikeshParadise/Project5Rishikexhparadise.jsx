import React, { useEffect } from 'react'
import Hero from '../../Components/Project5RishiKeshParadise/Hero'
import Footer from '../../Components/Project5RishiKeshParadise/Footer'
import Navbar from '../../Components/Home/Navbar';
import ChatBoat from '../Home/ChatBoat';

const Project5Rishikexhparadise = () => {


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

export default Project5Rishikexhparadise
