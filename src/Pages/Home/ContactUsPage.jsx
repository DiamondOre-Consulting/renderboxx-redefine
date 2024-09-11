import React, { useEffect } from "react";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import aarti from '../../assets/aarti.jpg'; // Background image
import trishul from '../../assets/trishul.png';
import ChatBoat from "./ChatBoat";

const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col "> {/* Full height container */}
        
        {/* Background image section */}
        <div className="relative w-full h-[70vh] md:h-[80vh] bg-gray-900" 
             style={{ backgroundImage: `url(${aarti})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center headings">
              Contact Us
            </h1>
            <img src={trishul} alt="Trishul Icon" className="h-16 md:h-20 mt-4 md:mt-0" />
          </div>
        </div>

        <main className="flex-grow mt-6 px-4 md:px-12 py-10 lg:px-24"> {/* Responsive margins */}
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
              <div className="col-span-6 md:col-span-4 ">
                <form className="space-y-6">
                  <div className="relative z-0 w-full group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="phone"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Phone
                    </label>
                  </div>
                  <div className="relative z-0 w-full group">
                    <textarea
                      name="message"
                      id="message"
                      className="block py-3 px-0 w-full text-sm text-black bg-transparent border-b-2 border-black focus:outline-none focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute text-md text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                    >
                      Your Message
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full">
            <iframe
              className="w-full h-96 w-full mb-10"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14021.334908844325!2d77.23933369831319!3d28.529687102942304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1638ba50b35%3A0x4ecd5ee2a5c81b24!2sDDA%20Flats%20Kalkaji%2C%20Harijan%20Colony%2C%20Block%20B%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1724747481095!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>
        <Footer />
      </div>

      <ChatBoat/>
    </>
  );
};

export default ContactUsPage;
