import React, { useEffect } from 'react'
import Nav from '../../Components/Project2DevprayagParadise/Nav'
import Hero from '../../Components/Project2DevprayagParadise/Hero'
import Footer from '../../Components/Project2DevprayagParadise/Footer'
import ChatBoat from '../Home/ChatBoat'

const Project2HomeMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
    <div className='h-screen'>
        <Nav/>
        <Hero/>
        <Footer/>

        </div>
        <ChatBoat/>
    </>
  )
}

export default Project2HomeMain
