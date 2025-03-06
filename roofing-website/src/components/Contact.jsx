import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <Navbar />


      <div className="flex flex-col items-center justify-center text-center flex-grow">
        <h2 className="text-4xl font-bold">Get in Touch</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you!</p>

        <div className="mt-6 space-y-6">
          {/* Phone Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-lg font-medium">📞 Call Us</p>
            <p className="text-gray-700">Spanish</p>
            <p className="text-gray-700">+1 (323) 360-7836</p>
            <p className="text-gray-700">+1 (626) 625-7609</p>
            <p className="text-gray-700">English</p>
            <p className="text-gray-700">+1 (323) 590-2647</p>
          </div>

          {/* Email Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-lg font-medium">📧 Email Us</p>
            <p className="text-gray-700">royalcrownroofingservices@gmail.com</p>
          </div>

          {/* Location Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg w-80 text-center">
            <p className="text-lg font-medium">📍 Visit Us</p>
            <p className="text-gray-700">123 Roofing St, City, State</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
