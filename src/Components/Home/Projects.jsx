import React from "react";
import { Link } from "react-router-dom";
import haridwar from "../../assets/haridwar2.png";
import devprayaglogo from "../../assets/devprayaglogo.png";
import haridwarlogo from "../../assets/haridwarlogo.png";
import trishul from "../../assets/trishul.png";
import candolimluxfort from "../../assets/candolimluxfort.jpg";
import project4appark from '../../assets/project4appark.jpg';
import project5 from '../../assets/rishikeshimg.jpg';
import project6 from '../../assets/project6.jpg';
import hardwargate from '../../assets/hridwargate.jpg'
import project7 from '../../assets/ganges.jpg'
import ganga from '../../assets/ganga1.jpg'

// Sample project data with image fitting style
const projects = [
  {
    title: "Haridwar Paradise",
    image: hardwargate,
    link: "/haridwarparadise",
    fit: "cover", // Image fit style
  },
  {
    title: "Candolim Luxfort",
    image: candolimluxfort,
    link: "/Candolimlaxfort",
    fit: "cover", // Image fit style
  },
  {
    title: "AP Park Avenue",
    image: project4appark,
    link: "/apparkavenue",
    fit: "cover", // Image fit style
  },
];

const upcomingProjects = [
  {
    title: "Devprayag Paradise",
    image: devprayaglogo,
    link: "/devprayagparadise",
    fit: "contain", // Image fit style
  },
  {
    title: "Rishikesh Paradise",
    image: project5,
    link: "/rishikeshparadise",
    fit: "cover", // Image fit style
  },
  {
    title: "The Five Star Resort With Leading Brand",
    image: project6,
    link: "thefivestarresort",
    fit: "cover", // Image fit style
  },


  {
    title: "Ganges Villas",
    image: ganga,
    link: "/gangavillas",
    fit: "cover", // Image fit style
  },
];

const Projects = () => {
  return (
    <div id="projects">
      {/* Our Projects */}
      <div className="md:py-20 py-10 flex flex-col justify-between mx-auto items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold text-center headings">
            Our Projects
          </h1>
          {/* <img src={trishul} alt="Separator" className="w-60 md:px-0 px-10" /> */}
          <div className='w-60 h-1 mx-auto bg-black mt-2'></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 mx-10">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden group">
              {/* Image Container with Overlay */}
              <div className="relative h-80">
                {/* Project Image with hover effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 bg-black group-hover:scale-105 object-${project.fit}  `}
                />
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    to={project.link}
                     
                    className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
              {/* Project Title */}
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                  <div className="flex items-center">
                    {/* Animated Line */}
                    <div className="w-1 rounded-md h-0 bg-primary group-hover:mr-4 transition-all duration-500 group-hover:h-10"></div>
                    <p className="headings text-2xl">{project.title}</p>
                  </div>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Projects */}
      <div className="md:py-10 py-10 flex flex-col justify-between mx-auto items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold text-center headings">
            Upcoming Projects
          </h1>
          {/* <img src={trishul} alt="Separator" className="w-60 md:px-0 px-10" /> */}
          <div className='w-60 h-1 mx-auto bg-black mt-2'></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 mx-10">
          {upcomingProjects.map((project, index) => (
            <div key={index} className="relative overflow-hidden group">
              {/* Image Container with Overlay */}
              <div className="relative h-80">
                {/* Project Image with hover effect */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform bg-black duration-500 group-hover:scale-105 object-${project.fit}`}
                />
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link
                    to={project.link}
                     
                    className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    Visit Project
                  </Link>
                </div>
              </div>
              {/* Project Title */}
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
                  <div className="flex items-center">
                    {/* Animated Line */}
                    <div className="w-1 rounded-md h-0 bg-primary group-hover:mr-4 transition-all duration-500 group-hover:h-10"></div>
                    <p className="headings text-2xl">{project.title}</p>
                  </div>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
