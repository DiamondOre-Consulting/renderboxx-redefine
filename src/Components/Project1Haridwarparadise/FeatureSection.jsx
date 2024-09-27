import React, { useEffect, useState } from "react";
import f1 from "../../assets/ni5.jpeg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/ni4.jpeg";
import f5 from "../../assets/ni6.jpeg";
import f6 from "../../assets/haridwargallery/35.jpg";
import f7 from "../../assets/pool.jpeg";
import f8 from "../../assets/f8.jpg";
import f9 from "../../assets/f9.jpg";
import f10 from "../../assets/f10.jpg";
import f11 from "../../assets/f11.jpg";
import f12 from "../../assets/haridwargallery/ni19.jpeg";
import f13 from "../../assets/haridwargallery/g5.jpeg";
import f14 from "../../assets/f14.jpg";
import f15 from "../../assets/f15.jpg";
import f16 from "../../assets/f16.jpg";
import f17 from "../../assets/f17.jpg";
import trishul from '../../assets/trishul.png'
import wideroads from '../../assets/haridwargallery/4.jpg'
import park from '../../assets/ni2.jpeg'
import garden from '../../assets/haridwargallery/g1.jpeg'
import hardwargate from '../../assets/hridwargate.jpg'
import ni30 from '../../assets/haridwargallery/ni38.jpeg';
import ni36 from '../../assets/haridwargallery/ni36.jpeg';
import mph from '../../assets/haridwargallery/mph.jpeg';

// Array of feature objects
const features1 = [
  { image: f1, description: "24 x 7 Security through CCTV Camera" },
  { image: ni30 },
  { image: f3, description: "Water Fountain" },
  { image: f4, description: "Street Lights" },
  { image: ni36, description: "Clearly demarked plots" },
  { image: hardwargate, description: "Farm Houses" },
  { image: f7, description: "Swimming Pool" },
  { image: f17, description: "Neighbour" },
 
];

const features2 = [
  { image: f9, description: "Indoor Games" },
  { image: f10, description: "Spa and Gymnasium" },
  { image: f11, description: "Yoga Hall" },
  { image: f12, description: "Meditation Centre" },
  { image: mph, description: "Multipurpose Hall" },
  { image: park, description: "Central Park with Kids Play Area" },
  { image: garden, description: "Lots of open spaces and greenery" },
  { image: f16, description: "Temple" },
 
];

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [circleRadius, setCircleRadius] = useState(220);
  const [imageSize, setImageSize] = useState(150);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        setCircleRadius(120);
        setImageSize(80);
      } else if (windowWidth < 1024) {
        setCircleRadius(170);
        setImageSize(100);
      } else {
        setCircleRadius(220);
        setImageSize(150);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFeatureClick = (feature) => setSelectedFeature(feature);
  const closeFeatureModal = () => setSelectedFeature(null);

  const renderFeatureImages = (features) =>
    features.map((feature, index) => {
      const angle = (index / features.length) * 360;
      const x = circleRadius + circleRadius * Math.cos((angle * Math.PI) / 180) - imageSize / 2;
      const y = circleRadius + circleRadius * Math.sin((angle * Math.PI) / 180) - imageSize / 2;

      return (
        <div
          key={index}
          className="absolute rounded-full overflow-hidden  border-2 hover:shadow-xl md:border-4 border-white cursor-pointer"
          style={{
            width: `${imageSize}px`,
            height: `${imageSize}px`,
            top: `${y}px`,
            left: `${x}px`,
            transform: 'rotate(0deg)' ,
            transition: "transform 0.3s ease-in-out",
          }}
          onClick={() => handleFeatureClick(feature)}
        >
          <img
            src={feature.image}
            alt={`Feature ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      );
    });

  return (
    <section className="py-16 px-4 md:px-24 flex flex-col md:flex-row items-center h-auto md:h-screen max-w-screen-xl mx-auto">
    {/* First Circle */}
    <div className="relative flex justify-center items-center">
      <div className="absolute z-20 text-2xl md:text-4xl font-bold headingp1">Township</div>
      <div
        className="relative group"
        style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
      >
        <div className="absolute inset-0 flex justify-center  items-center">
          {renderFeatureImages(features1)}
        </div>
      </div>
    </div>
  
    <img src={trishul} alt="Trishul Icon" style={{visibility : "hidden"}} className="-rotate-90 w-60 md:block hidden" />
  
    {/* Second Circle */}
    <div className="relative flex justify-center items-center mt-40 md:mt-0">
      <div className="absolute z-20 text-2xl md:text-4xl font-bold headingp1">Amenities</div>
      <div
        className="relative group"
        style={{ width: `${circleRadius * 2}px`, height: `${circleRadius * 2}px` }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          {renderFeatureImages(features2)}
        </div>
      </div>
    </div>
  
    {/* Expanded View Modal */}
    {selectedFeature && (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-30" onClick={closeFeatureModal}>
        <div className="relative p-8 bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-3xl font-bold text-gray-800" onClick={closeFeatureModal}>
            &times;
          </button>
          <img
            src={selectedFeature.image}
            alt="Selected Feature"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full"
          />
          <p className="text-center text-lg font-semibold mt-4">{selectedFeature.description}</p>
        </div>
      </div>
    )}
  </section>
  
  );
};

export default FeatureSection;
