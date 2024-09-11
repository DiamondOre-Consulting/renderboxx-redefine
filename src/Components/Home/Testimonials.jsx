import React, { useState, useEffect } from "react";

// Sample testimonials data
const testimonials = [
  {
    name: "Ahmed Arafa",
    image: "https://via.placeholder.com/150",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    title: "Project Manager",
  },
  {
    name: "Fatma Mahmoud",
    image: "https://via.placeholder.com/150",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    title: "Assistant Chief",
  },
  {
    name: "Malak Hussien",
    image: "https://via.placeholder.com/150",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    title: "Executive Chairman",
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Depend on currentIndex to reset the interval on index change

  return (
    <div className=" mx-auto pb-10 px-4">
      <h2 className="text-5xl font-bold text-center mb-8 headings">Testimonials</h2>
      <div className="relative flex items-center justify-center ">
        {/* Carousel container */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300"
                  />
                  <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.title}</p>
                  <p className="text-gray-700 mb-4">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 transform -translate-y-1/2 top-1/2 bg-primary text-white rounded-full p-2 focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-primary text-white rounded-full p-2 focus:outline-none"
        >
          &gt;
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4  space-x-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
