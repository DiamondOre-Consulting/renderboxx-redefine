// src/components/Sidebar.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/redefinelogo.png";
import icon1 from "../../assets/1.png";
import icon2 from "../../assets/2.png";
import icon3 from "../../assets/3.png";
import icon4 from "../../assets/4.png";
import icon5 from '../../assets/5.png';

const Sidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="fixed left-0 top-0 h-full z-10 w-[90px] bg-[#1A1A1A] px-4 text-white flex flex-col justify-between items-center py-4">
      <div className="flex flex-col justify-between items-center">
        <button className="  " onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center space-y-8 mb-6">
        <img src={icon1} alt="" className="  " />
        <img src={icon2} alt="" className="w-full h-full -rotate-90" />
        <img src={icon3} alt="" className="" />
        <img src={icon4} alt="" className="" />
      </div>

      <div className="relative  bottom-4">
        {/* <img src={logo} alt="logoimage of redefinegroup"  className="w-full z-60 h-auto -rotate-90 "/> */}
        <div className="text-4xl font-bold transform mb-4 -rotate-90 tracking-wider headings">
          RE<span className="text-primary font-extrabold ml-1 mr-1">D</span>
          EFINE <span className="">GROUP</span>
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-80 bg-[#222222] text-white shadow-lg z-50"
          >
            <div className=" flex">
              <div className="flex flex-col  w-full py-10 z-10">
                <img src={logo} alt="" className="px-6" />

                {/* <div className="text-5xl flex flex-col text-center  font-extrabold mb-4 headings">
                  <p>REDEFINE</p>
                  <p className="text-md ">GROUP</p>
                </div> */}
                <div className="flex flex-col justify-between items-center">
                <ul className="space-y-4 text-center mt-10 md:text-2xl text-md">
                  <Link to={"/"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group  cursor-pointer">
                      Home
                    </li>
                  </Link>

                  <Link to={"/aboutus"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      About Us
                    </li>
                  </Link>

                  <a className="" href="#projects">
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Projects
                    </li>
                  </a>

                  <a href="#achievements">
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Achievements
                    </li>
                  </a>

                  <Link to={"/contactus"}>
                    <li className="hover:bg-primary p-2 group-hover:text-gray-800 group mt-4 cursor-pointer">
                      Contact Us
                    </li>
                  </Link>
                </ul>

                <div className="absolute bottom-6">
                <ul className="text-gray-500 font-medium">
                <div className="flex flex-wrap space-x-4">
                  <a
                    href="https://www.facebook.com/Redefinegroups"
                    target="_blank"
                    className="bg-gray-600 p-2 hover:bg-blue-600 group rounded-full"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="h-8 w-8 font-bold text-gray-400 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.youtube.com/@redefinegroup178"
                    target="_blank"
                    className="bg-gray-600 p-2 hover:bg-red-600 group rounded-full"
                    rel="noopener noreferrer"
                  >

                    <svg
                      className="h-8 w-8 font-bold text-gray-400 group-hover:text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </ul>
                </div>
                </div>

              </div>

              <div className="w-[90px] px-4 h-screen py-4 justify-between items-center bg-[#1A1A1A] flex flex-col">
                
                <button className=" " onClick={toggleDrawer}>
                  {/* Menu Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="flex flex-col items-center space-y-8 mb-6 mt-10">
                  <img src={icon1} alt="" className=" w-full h-full" />
                  <img src={icon2} alt="" className="" />
                  <img src={icon3} alt="" className="" />
                  <img src={icon4} alt="" className="" />
                </div>

                <div className="relative mt-auto  mb-10">
                  {/* <img
                    src={logo}
                    alt=""
                    className="w-auto h-auto transform -rotate-90"
                  /> */}
                  <div className="text-4xl font-bold transform  -rotate-90 headings tracking-wider">
                    RE
                    <span className="text-primary font-extrabold ml-1 mr-1">
                      D
                    </span>
                    EFINE <span className="">GROUP</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
