import React, { useState } from "react";
import candolimluxfort from "../../assets/candolimluxfort.jpg"; // Background image
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDollarSign,
} from "react-icons/fa"; // React Icons
import Navbar from "../../Components/Home/Navbar";
import Footer from "../../Components/Home/Footer";
import emailjs from "emailjs-com"; // EmailJS for sending emails
import chatboat from "../../assets/chatboat.png";

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
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
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

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=9582000035`;
    window.open(url, "_blank");
  };

  const closeSuccessPopup = () => {
    setIsSuccess(false); // Close the modal when clicked
  };

  return (
    <>
      <Navbar />

      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${candolimluxfort})`,
          backgroundSize: "cover",
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
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName}</p>
              )}

              {/* Email */}
              <div className="flex items-center border-b border-gray-700">
                <FaEnvelope className="text-gray-100 mr-3" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              {/* Phone Number */}
              <div className="flex items-center border-b border-gray-700">
                <FaPhone className="text-gray-100 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}

              {/* Address */}
              <div className="flex items-center border-b border-gray-700">
                <FaMapMarkerAlt className="text-gray-100 mr-3" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
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
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
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
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  rows="2"
                />
              </div>

              {/* Current Company */}
              <div className="flex items-center border-b border-gray-700">
                <FaBriefcase className="text-gray-100 mr-3" />
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  placeholder="Current Company"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.currentCompany && (
                <p className="text-red-500">{errors.currentCompany}</p>
              )}

              {/* Current Designation */}
              <div className="flex items-center border-b border-gray-700">
                <FaBriefcase className="text-gray-100 mr-3" />
                <input
                  type="text"
                  name="currentDesignation"
                  value={formData.currentDesignation}
                  onChange={handleInputChange}
                  placeholder="Current Designation"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.currentDesignation && (
                <p className="text-red-500">{errors.currentDesignation}</p>
              )}

              {/* Current CTC */}
              <div className="flex items-center border-b border-gray-700">
                <FaDollarSign className="text-gray-100 mr-3" />
                <input
                  type="text"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleInputChange}
                  placeholder="Current CTC"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.currentCTC && (
                <p className="text-red-500">{errors.currentCTC}</p>
              )}

              {/* Expected CTC */}
              <div className="flex items-center border-b border-gray-700">
                <FaDollarSign className="text-gray-100 mr-3" />
                <input
                  type="text"
                  name="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={handleInputChange}
                  placeholder="Expected CTC"
                  className="w-full px-3 py-2 bg-transparent text-white border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 placeholder-gray-400"
                  required
                />
              </div>
              {errors.expectedCTC && (
                <p className="text-red-500">{errors.expectedCTC}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-primary w-full text-white rounded-lg  focus:outline-none focus:ring focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>

          {/* WhatsApp Chat Button */}
          <div className="fixed md:bottom-2 bottom-1 md:right-4 right-2 z-10 cursor-pointer" onClick={handleWhatsAppChat}>
        <img src={chatboat} alt="" className="w-28 md:w-40" />
      </div>

          {/* Success Popup */}
          {isSuccess && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50">
              {/* Modal Content */}
              <div className="bg-white p-6 m-4 md:m-0 rounded-lg shadow-lg flex flex-col justify-center items-center text-center relative">
                {/* Close Icon (SVG) */}
                <svg
                  onClick={closeSuccessPopup} // Attach the close function here
                  title="Close"
                  tabindex="0" // Allows keyboard navigation
                  className="h-6 w-6 cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600" // Positioned at top-right
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                {/* Success Checkmark Icon */}
                <div className="mx-auto flex-shrink-0 flex mb-4 items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-20 sm:w-20">
                  <svg
                    className="h-10 w-10 text-green-600"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                {/* Success Message */}
                <p className="text-gray-700 mb-6 headings text-lg">
                  Thank you for filling out the form. We will connect with you
                  soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CareerForm;
