import React from "react";
import Slider from "react-slick";
import con1 from "../../assets/con1.jpg";
import con2 from "../../assets/con2.jpg";
import con3 from "../../assets/con3.jpg";
import con4 from "../../assets/con4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Conectivity = () => {
  const features = [
    {
      image: con1,
      description: "Road",
    },
    {
      image: con2,
      description: "Rail – Haridwar Railway Station",
    },
    {
      image: con3,
      description: "Air – Jolly Grant Airport",
    },
    {
      image: con4,
      description: "Projected Metro Service",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <>
      <section className="py-10 bg-gray-50 overflow-hidden">
        <div className="px-0">
          <h1 className="text-center headingp1 text-5xl mb-2">Connectivity</h1>
          <div className="h-1 w-40 bg-p1 mx-auto mb-10"></div>

          {/* Carousel */}
          <Slider {...sliderSettings}>
            {features.map((feature, index) => (
              <div key={index} className="px-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Image */}
                  <img
                    src={feature.image}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:grayscale-0 hover:scale-105"
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
    </>
  );
};

export default Conectivity;
