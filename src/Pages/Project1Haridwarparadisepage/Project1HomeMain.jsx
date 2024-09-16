import React, { useEffect } from 'react'
import Nav from '../../Components/Project1Haridwarparadise/Nav'
import Hero from '../../Components/Project1Haridwarparadise/Hero'
import About from '../../Components/Project1Haridwarparadise/About'
import FeatureSection from '../../Components/Project1Haridwarparadise/FeatureSection'
import NearByTownShips from '../../Components/Project1Haridwarparadise/NearByTownShips'
import Activity from '../../Components/Project1Haridwarparadise/Activity'
import Conectivity from '../../Components/Project1Haridwarparadise/Conectivity'
import DownloadsHSIPApplication from '../../Components/Project1Haridwarparadise/DownloadsHSIPApplication'
import Gallery from '../../Components/Project1Haridwarparadise/Gallery'
import ContactUs from '../../Components/Project1Haridwarparadise/ContactUs'
import Footer from '../../Components/Project1Haridwarparadise/Footer'

const Project1HomeMain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <FeatureSection/>
      <NearByTownShips/>
      <Activity/>
      <Conectivity/>
      <DownloadsHSIPApplication/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
      
    </div>
  )
}

export default Project1HomeMain
