import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import contactImage from "../assets/contact.jpg"; // ✅ Import the background image

const Contact = () => {
  const { t, ready } = useTranslation(); // ✅ Initialize i18next
  if (!ready) return null; 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* ✅ Section with Background Image */}
      <div 
        className="relative bg-cover bg-center text-white py-20"
        style={{ backgroundImage: `url(${contactImage})` }} // ✅ Use imported image
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content (Layered on top of the background) */}
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold">{t("contact.title")}</h2>
          <p className="text-lg mt-2">{t("contact.subtitle")}</p>
        </div>
      </div>

      {/* ✅ Contact Section - English & Spanish Support */}
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10 mb-16 text-center">
        {/* Description (Dynamic Language) */}
        <p className="mt-4 text-gray-700">
          {t("contact.description")}
        </p>

        {/* ✅ Contact Details (Fully Translatable) */}
        <div className="mt-6 space-y-4">
          {/* Phone */}
          <div className="flex flex-col items-center text-gray-800">
            <p className="text-lg font-medium">{t("contact.phoneTitle")}</p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 font-medium">{t("contact.spanish")}</p>
              <a href="tel:+13233607836" className="text-blue-600 font-semibold hover:underline">
                📞 +1 (323) 360-7836
              </a> | 
              <a href="tel:+16266257609" className="text-blue-600 font-semibold hover:underline">
                +1 (626) 625-7609
              </a>
              <p className="text-gray-700 font-medium mt-1">{t("contact.english")}</p>
              <a href="tel:+13235902647" className="text-blue-600 font-semibold hover:underline">
                📞 +1 (323) 590-2647
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-gray-800">
            <p className="text-lg font-medium">{t("contact.emailTitle")}</p>
            <a href="mailto:royalcrownroofingservices@gmail.com" className="text-blue-600 font-semibold hover:underline">
              📧 royalcrownroofingservices@gmail.com
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
