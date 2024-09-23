import React, { useEffect, useState } from "react";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import aarti from "../../assets/contactusimg.jpg"; // Background image
import trishul from "../../assets/trishul.png";
import chatboat from "../../assets/chatboat.png";
import emailjs from "emailjs-com";
import ChatBoat from "./ChatBoat";
import contactus from "../../assets/contactusimg2.png";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=9582000035`;
    window.open(url, "_blank");
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const { name, email, phone, message } = formData;
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .send(
          "YOUR_SERVICE_ID", // replace with EmailJS service ID
          "YOUR_TEMPLATE_ID", // replace with EmailJS template ID
          formData,
          "YOUR_USER_ID" // replace with EmailJS user ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSuccess(true);
            setIsError(false);
            setFormData({ name: "", email: "", phone: "", message: "" });
          },
          (error) => {
            console.error("FAILED...", error);
            setIsError(true);
            setIsSuccess(false);
          }
        );
    }
  };

  // Close success popup
  const closeSuccessPopup = () => setIsSuccess(false);
  const closeErrorPopup = () => setIsError(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col ">
        {/* Background image section */}
        <div
          className="relative w-full h-[70vh] md:h-[80vh] bg-gray-900"
          style={{
            backgroundImage: `url(${contactus})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            objectPosition: "15% 100%",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center headings">
              Contact Us
            </h1>
            <p className="text-gray-100 text-md md:text-2xl mt-4">
              We’re here to help you build your dream. Reach out to us today!
            </p>
            {/* <img
              src={trishul}
              alt="Trishul Icon"
              className="h-16 md:h-20 mt-4 md:mt-0"
            /> */}
          </div>
        </div>

        <main className="flex-grow mt-6 px-4 md:px-12 py-10 lg:px-24">
          <div className="relative mb-12">
            <div className="grid md:grid-cols-6 gap-6">
              <div className="col-span-6 md:col-span-2 flex flex-col space-y-8">
                <h1 className="uppercase text-4xl lg:text-5xl text-black">
                  Contact Us
                </h1>
                <p className="text-black text-lg font-semibold">
                  B-48A GF, Main Road, Kalka Ji
                  <br /> New Delhi – 110019
                </p>
                <p className="text-black text-lg font-semibold">
                  Tel: +91 9582000035
                  <br /> Email: support@redefinegroup.com
                </p>
              </div>

              {/* Form Section */}
              <div className="col-span-6 md:col-span-4">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Email
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>

                  <div className="relative z-0 w-full group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Phone
                    </label>
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>

                  <div className="relative z-0 w-full group">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Your Message
                    </label>
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-primary  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="w-full">
            <iframe
              className="w-full h-96 w-full mb-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55937.09738247632!2d77.21595685!3d28.6254239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f6b5af183f%3A0xe16153a7d7bce66c!2sISKCON%20Temple%20Delhi!5e0!3m2!1sen!2sin!4v1638545874697!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </main>
        <Footer />

        <ChatBoat />

        {/* Success/Failure Popup */}
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

        {isError && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-red-500 text-xl mb-4">
                Failed to send message. Try again.
              </h2>
              <button
                onClick={closeErrorPopup}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUsPage;
