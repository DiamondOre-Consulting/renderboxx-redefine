import React from 'react';
import p3img1 from '../../assets/p3img1.jpeg';
import p3img2 from '../../assets/p3img2.avif';
import p3img3 from '../../assets/p3img3.jpg';
import p3img4 from '../../assets/p3img4.jpeg';
import candolimluxfort from "../../assets/candolimluxfort.jpg"

const OurGallary = () => {
  const images = [p3img1, p3img2, p3img3 , p3img4 , candolimluxfort];

  return (
    <div className="py-10 px-6 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
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
