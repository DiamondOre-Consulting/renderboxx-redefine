import React, { useEffect, useState } from "react";
import candolimluxfort from "../../assets/candolimluxfort.jpg"; // Background image
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
  FaGraduationCap,
} from "react-icons/fa"; // Icons
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import emailjs from "emailjs-com"; // EmailJS for sending emails
import ChatBoat from "./ChatBoat";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    currentCompany: "",
    currentDesignation: "",
    currentCTC: "",
    expectedCTC: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.fullName) errors.fullName = "Full name is required";
    if (!formData.email || !emailRegex.test(formData.email))
      errors.email = "Please enter a valid email";
    if (!formData.phone || !phoneRegex.test(formData.phone))
      errors.phone = "Phone number must be exactly 10 digits";
    if (!formData.currentCompany)
      errors.currentCompany = "Current company is required";
    if (!formData.currentDesignation)
      errors.currentDesignation = "Current designation is required";
    if (!formData.currentCTC) errors.currentCTC = "Current CTC is required";
    if (!formData.expectedCTC) errors.expectedCTC = "Expected CTC is required";
    if (!formData.experience) errors.experience = "Experience is required";

    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Send the form data via emailjs
      emailjs
        .send(
          "service_7k8qn4q", // Service ID
          "template_1212ofg", // Template ID
          formData,
          "E0pH1PYatztI0_QKs" // Public key
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSuccess(true);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );

      // Clear form after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        education: "",
        experience: "",
        currentCompany: "",
        currentDesignation: "",
        currentCTC: "",
        expectedCTC: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const closeSuccessPopup = () => {
    setIsSuccess(false); // Close the modal when clicked
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${candolimluxfort})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative p-6 sm:p-10 bg-gray-800 bg-opacity-40 rounded-lg mt-[90px] shadow-lg max-w-5xl w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-white mb-8">
            Career Application Form
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <div className="flex items-center border-b border-gray-500">
              <FaUser className="text-gray-300 mr-3" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}

            <div className="flex items-center border-b border-gray-500">
              <FaEnvelope className="text-gray-300 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <div className="flex items-center border-b border-gray-500">
              <FaPhone className="text-gray-300 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

            <div className="flex items-center border-b border-gray-500">
              <FaMapMarkerAlt className="text-gray-300 mr-3" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border-b border-gray-500">
              <FaGraduationCap className="text-gray-300 mr-3" />
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="Education"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
              />
            </div>

            <div className="flex items-center border-b border-gray-500">
              <FaBriefcase className="text-gray-300 mr-3" />
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Experience (in years)"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.experience && (
              <p className="text-red-500">{errors.experience}</p>
            )}

            <div className="flex items-center border-b border-gray-500">
              <FaBriefcase className="text-gray-300 mr-3" />
              <input
                type="text"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={handleInputChange}
                placeholder="Current Company"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.currentCompany && (
              <p className="text-red-500 col-span-1 sm:col-span-2">
                {errors.currentCompany}
              </p>
            )}

            <div className="flex items-center border-b border-gray-500">
              <FaBriefcase className="text-gray-300 mr-3" />
              <input
                type="text"
                name="currentDesignation"
                value={formData.currentDesignation}
                onChange={handleInputChange}
                placeholder="Current Designation"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.currentDesignation && (
              <p className="text-red-500 col-span-1 sm:col-span-2">
                {errors.currentDesignation}
              </p>
            )}

            <div className="flex items-center border-b border-gray-500">
              <FaDollarSign className="text-gray-300 mr-3" />
              <input
                type="text"
                name="currentCTC"
                value={formData.currentCTC}
                onChange={handleInputChange}
                placeholder="Current CTC"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.currentCTC && (
              <p className="text-red-500 col-span-1 sm:col-span-2">
                {errors.currentCTC}
              </p>
            )}

            <div className="flex items-center border-b border-gray-500">
              <FaDollarSign className="text-gray-300 mr-3" />
              <input
                type="text"
                name="expectedCTC"
                value={formData.expectedCTC}
                onChange={handleInputChange}
                placeholder="Expected CTC"
                className="w-full px-4 py-2 bg-transparent text-white border-none focus:outline-none placeholder-gray-400"
                required
              />
            </div>
            {errors.expectedCTC && (
              <p className="text-red-500 col-span-1 sm:col-span-2">
                {errors.expectedCTC}
              </p>
            )}

            <div className="col-span-2">
              <button
                type="submit"
                className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded-full w-full"
              >
                Submit Application
              </button>
            </div>
          </form>

          {/* Success Popup Modal */}
          {isSuccess && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl text-gray-800 font-bold mb-4">
                  Application Submitted!
                </h2>
                <p>Your form has been successfully submitted. We'll get back to you soon!</p>
                <button
                  onClick={closeSuccessPopup}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatBoat />
      <Footer />
    </>
  );
};

export default CareerForm;
