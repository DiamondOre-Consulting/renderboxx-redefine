import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeMain from "./Pages/Home/HomeMain"
import React from "react"
import AboutUsPage from "./Pages/Home/AboutUsPage"
import ContactUsPage from "./Pages/Home/ContactUsPage"
import Project1HomeMain from "./Pages/Project1Haridwarparadisepage/Project1HomeMain"
import Project2HomeMain from "./Pages/Project2Devprayagparadisepage/Project2HomeMain"
import Project3HomeMain from "./Pages/Project3CandolimLuxfortPage/Project3HomeMain"
import Project4ApParkAvenue from "./Pages/Project4ApParkAvenue/Project4ApParkAvenue"
import Project5Rishikexhparadise from "./Pages/Project5RishikeshParadise/Project5Rishikexhparadise"
import Project6TheFiveResort from "./Pages/Project6TheFiveResort/Project6TheFiveResort"
import CareerForm from "./Pages/Home/CarrerForm"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={  <HomeMain/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path="/carrer" element={<CareerForm/>}/>
          <Route path="/haridwarparadise" element={<Project1HomeMain/>}/>
          <Route path="/devprayagparadise" element={<Project2HomeMain/>}/>
          <Route path="/Candolimlaxfort" element={<Project3HomeMain/>}/>
          <Route path="/apparkavenue" element={<Project4ApParkAvenue/>}/>
          <Route path="/rishikeshparadise" element={<Project5Rishikexhparadise/>}/>
          <Route path="/thefiveresort" element={<Project6TheFiveResort/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
