import React from 'react'
import { motion } from 'framer-motion';
import trishul from  '../../assets/trishul.png'
const awards = [
    {
      image: 'https://redefinegroup.com/images/ajay-jadeja.jpg',
      description: 'International Quality Award for Excellence in Designing Residential Project',
    },
    {
      image: 'https://redefinegroup.com/images/shilpa-shetty.jpg',
      description: 'IFastest Growing Real Estate Company in India Residential Project',
    },
    {
      image: 'https://redefinegroup.com/images/sushmita-sen.jpg',
      description: 'Excellence Award for Most Promising Product in Real Estate.',
    },
  ];
const Awards = () => {
  return (
    <div>
        <div className="py-10 " id='achievements'>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4 headings">Our Achievements</h2>
        
        <p className='mb-10 max-w-2xl text-center mx-auto'>Founded by a team of few professionals in 2006, the Redefine Group has evolved as one of the fastest premium real estate project developers in India.</p>
        <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each item
              whileHover={{ scale: 1.05 }} // Animation on hover
            >
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-68 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

   
    </div>
  )
}

export default Awards
