import React from "react";
import { useTranslation } from "react-i18next"; // ✅ Import i18n hook
import heroImage from "../assets/hero2.jpg";  
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
import Navbar from "./Navbar"; 
import Footer from "./Footer";

const Home = () => {
  const { t, ready } = useTranslation(); // ✅ Initialize i18next
  if (!ready) return null;

  return (
    <div className="font-sans">
      {/* ✅ Navbar (No need to pass language props) */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-bold">{t("hero.title")}</h2>
        <p className="mt-2 text-gray-600">{t("hero.subtitle")}</p>
        <div className="flex justify-center mt-6">
          <img src={heroImage} alt="Roofing Services" className="rounded-lg shadow-lg w-4/5" />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 text-white bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">

        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-6">
          <h3 className="text-4xl font-bold text-white-500">{t("services.title")}</h3>
          <p className="text-lg text-gray-300 mt-2">{t("services.subtitle")}</p>

          {/* Service Steps - Translatable */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            {[
              { title: t("services.roofInspection"), desc: t("services.roofInspectionDesc"), icon: "🏠" },
              { title: t("services.freeEstimate"), desc: t("services.freeEstimateDesc"), icon: "📋" },
              { title: t("services.repairInstall"), desc: t("services.repairInstallDesc"), icon: "🛠️" },
              { title: t("services.finalInspection"), desc: t("services.finalInspectionDesc"), icon: "✅" }
            ].map((step, index) => (
              <div key={index} className="relative bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="absolute -top-5 bg-green-500 text-white text-lg font-bold w-7 h-7 flex items-center justify-center rounded-full">
                  {index + 1}
                </div>
                {/* Icon */}
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-4xl text-white">
                  {step.icon}
                </div>
                {/* Title */}
                <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
                {/* Description */}
                <p className="text-gray-200 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Recent Projects */}
      <section className="bg-gray-100 py-12 text-center">
        <h3 className="text-3xl font-semibold">{t("projects.recentProjects")}</h3>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <div className="w-80 p-6 bg-white shadow-md rounded-lg mx-auto">
            <img src={project1} alt="Residential Repair" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">{t("projects.residentialRoof")}</p>
          </div>
          <div className="w-80 p-6 bg-white shadow-md rounded-lg mx-auto">
            <img src={project2} alt="Commercial Roof" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">{t("projects.commercialRoof")}</p>
          </div>
          <div className="w-80 p-6 bg-white shadow-md rounded-lg mx-auto">
            <img src={project3} alt="Emergency Roof" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">{t("projects.emergencyRoof")}</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 text-center">
        <h3 className="text-3xl font-semibold">{t("testimonials.title")}</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded-lg w-80 mx-auto">
            <img src={testimonial1} alt="Client 1" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">Sergio Dominguez</p>
            <p className="text-gray-600">{t("testimonials.review1")}</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg w-80 mx-auto">
            <img src={testimonial2} alt="Client 2" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">Stuart Smith</p>
            <p className="text-gray-600">{t("testimonials.review2")}</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg w-80 mx-auto">
            <img src={testimonial3} alt="Client 3" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">Jake Johnson</p>
            <p className="text-gray-600">{t("testimonials.review3")}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

