import React from "react";
import { motion } from "framer-motion";
import trishul from "../../assets/trishul.png";
import ajayjadeja from "../../assets/Awards/ajay jadeja.jpg";
import mahimachadhary from "../../assets/Awards/Mahima Chaudhary.jpg";
import ShilpaAward from "../../assets/Awards/Shilpa Award.jpg";
import UKcm from "../../assets/Awards/UKCM2.jpg";
import susmita from "../../assets/Awards/Susmita award.jpg";
import balkishan from "../../assets/Awards/balkishan.jpeg";


const awards = [
  {
    image: ajayjadeja,
    description:
      "International Quality Award for Excellence in Designing Residential Project",
  },
  {
    image: susmita,
    description: "Excellence Award for Most Promising Product in Real Estate",
  },

  {
    image: ShilpaAward,
    description: "Fastest Growing Real Estate Company in India Residential Project",
  },

  {
    image: mahimachadhary,
    description:
      "Reward and Recognition Through Bollywood Actress Mahima Chaudhry",
  },

  {
    image: UKcm,
    description: "Gaurav Uttarakhand Award by the Chief Minister for the Most Promising Township of Uttarakhand",
  },
  {
    image: balkishan,
    description: "Reward and Recognition Through Mr. Balkishan",
  },
];

const Awards = () => {
  return (
    <div>
     <div className="py-10" id='achievements'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-4 headings">Our Achievements</h2>
          <div className='w-60 h-1 mx-auto bg-black mt-1 mb-4'></div>
          <p className='mb-10 max-w-2xl text-center mx-auto'>
            Founded by a team of professionals in 2006, the Redefine Group has evolved as one of the fastest premium real estate project developers in India.
          </p>
          <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={award.image}
                  alt={award.description}
                  className="w-full h-80 object-cover " 
                  style={{objectFit:"cover" , objectPosition: "top"}}
                />
                <div className="p-6 text-center">
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
