import React from "react";
import Slider from "react-slick";
import nbt1 from "../../assets/nbt1.jpg";
import nbt2 from "../../assets/nbt2.jpg";
import nbt3 from "../../assets/nbt3.jpg";
import nbt4 from "../../assets/nbt4.jpg";
import nbt5 from "../../assets/nbt5.jpg";
import nbt6 from "../../assets/nbt6.jpg";
import nbt7 from "../../assets/nbt7.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NearByTownShips = () => {
  const features = [
    {
      image: nbt1,
      description: "Baba Ramdev Residence 0.7 kms",
    },
    {
      image: nbt2,
      description: "Patanjali Yogpeeth 1.4 Kms",
    },
    {
      image: nbt3,
      description: "Har-ki-Pauri",
    },
    {
      image: nbt4,
      description: "Mansa Devi Temple",
    },
    {
      image: nbt5,
      description: "Neelkanth Mahadev Temple",
    },
    {
      image: nbt6,
      description: "Ram & Lakshman Jhula",
    },
 
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-16  overflow-hidden">
      <div className="px-0">
        <h1 className="text-center headingp1 text-5xl mb-2">
          Near By Attractions
        </h1>
        <div className="h-1 w-80 bg-p1 mx-auto mb-10"></div>

        <Slider {...sliderSettings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                {/* Image */}
                <img
                  src={feature.image}
                  alt={`Feature ${index + 1}`}
                  className="w-full h-64 object-cover  transition-transform duration-500 ease-in-out hover:grayscale-0 hover:scale-105"
                />
              </div>
              {/* Description Below Image */}
              <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
                {feature.description}
              </h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NearByTownShips;
