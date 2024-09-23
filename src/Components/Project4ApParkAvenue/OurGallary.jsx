import React from 'react';
import p3img1 from '../../assets/p4img1.jpg';
import p3img2 from '../../assets/p4img2.jpg';
import p3img3 from '../../assets/p4img3.jpg';
import p4img4 from '../../assets/ap1.jpg';
import p4img5 from '../../assets/ap2.jpg';
import p4img6 from '../../assets/ap3.jpg';
import p4img7 from '../../assets/ap4.jpeg';
import p4img8 from '../../assets/ap5.jpeg';
import p4img9 from '../../assets/p4img9.jpg';
import p4img10 from '../../assets/p4img10.jpg';
// import candolimluxfort from "../../assets/candolimluxfort.jpg"

const OurGallary = () => {
  const images = [ p4img4 , p4img7, p4img5 , p4img6  ];

  return (
    <div className="py-10 px-6 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default OurGallary;
