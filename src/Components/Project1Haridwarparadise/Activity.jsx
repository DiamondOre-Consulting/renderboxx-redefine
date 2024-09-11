import React from "react";
import Slider from "react-slick";
import act1 from "../../assets/act1.jpg";
import act2 from "../../assets/act2.jpg";
import act3 from "../../assets/act3.jpg";
import act4 from "../../assets/act4.jpg";
import act5 from "../../assets/act5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Activity = () => {
  const activities = [
    {
      image: act1,
      description: "Crystal World Water Park",
    },
    {
      image: act2,
      description: "Rajaji National Park",
    },
    {
      image: act3,
      description: "Rafting",
    },
    {
      image: act4,
      description: "Camping",
    },
    {
      image: act5,
      description: "Bungee Jumping",
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
    <>
      <section className="py-10 overflow-hidden">
        <div className="px-0">
          <h1 className="text-center headingp1 text-5xl mb-2">Activities</h1>
          <div className="h-1 w-40 bg-p1 mx-auto mb-10"></div>

          {/* Carousel */}
          <Slider {...sliderSettings}>
            {activities.map((activity, index) => (
              <div key={index} className="px-4">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  {/* Image */}
                  <img
                    src={activity.image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-64 object-cover  transition-transform duration-500 ease-in-out hover:grayscale-0 hover:scale-105"
                  />
                </div>
                {/* Description Below Image */}
                <h3 className="text-center mt-4 text-lg font-semibold text-gray-800">
                  {activity.description}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Activity;
