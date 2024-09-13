import React, { useState } from 'react';
import candolimluxfort from '../../assets/candolimluxfort.jpg'; // Background image
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaListUl } from 'react-icons/fa'; // React Icons
import Navbar from '../../Components/Home/Navbar';
import Footer from '../../Components/Home/Footer';
import chatboat from "../../assets/chatboat.png";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '', // General skills
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log('Form data submitted:', formData);
  };

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone= 9582000035`;
    window.open(url, "_blank");
  };

  return (
    <>
    <Navbar/>

    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${candolimluxfort})`, // Background image URL
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex justify-center items-center min-h-screen px-4 py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-transparent p-8 rounded-lg shadow-lg max-w-5xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2"
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Career Application Form
          </h1>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex items-center border-b border-gray-700">
              <FaUser className="text-gray-100 mr-3" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-gray-700">
              <FaEnvelope className="text-gray-100 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center border-b border-gray-700">
              <FaPhone className="text-gray-100 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
                required
              />
            </div>

            {/* Address */}
            <div className="flex items-center border-b border-gray-700">
              <FaMapMarkerAlt className="text-gray-100 mr-3" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
              />
            </div>

            {/* Education */}
            <div className="flex flex-col md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-white">
                Education
              </label>
              <textarea
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="Education Details"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
                rows="2"
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col md:col-span-2">
              <label className="block text-sm font-semibold mb-2 text-white">
                Experience
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Experience Details"
                className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none  focus:ring-blue-500 placeholder-gray-400"
                rows="2"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg mt-6 focus:outline-none  focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

      <Footer/>

      <div className="fixed md:bottom-2 bottom-1 md:right-4 right-2 z-10 cursor-pointer" onClick={handleWhatsAppChat}>
        <img src={chatboat} alt="" className="w-28 md:w-40" />
      </div>
    </>
  );
};

export default CareerForm;
