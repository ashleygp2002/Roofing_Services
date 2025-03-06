import React from "react";
import heroImage from "../assets/hero.jpg";  
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar"; 

const Home = () => {
  return (
    <div className="font-sans">

      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-bold">Discover Top-Notch Roofing Solutions</h2>
        <p className="mt-2 text-gray-600">Professional roofing services tailored to your needs.</p>
        <div className="flex justify-center mt-6">
          <img src={heroImage} alt="Roofing Services" className="rounded-lg shadow-lg w-4/5" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 text-center">
        <h3 className="text-3xl font-semibold">Our Specialized Roofing Services</h3>
        <div className="grid grid-cols-3 gap-6 mt-8 text-lg font-medium">
          <p>✅ Roof Repair</p>
          <p>✅ Roof Installation</p>
          <p>✅ Emergency Roofing</p>
          <p>✅ Gutter Installation</p>
          <p>✅ Roof Inspection</p>
          <p>✅ Maintenance & Cleaning</p>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-gray-100 py-12 text-center">
        <h3 className="text-3xl font-semibold">Recent Projects</h3>
        <div className="flex justify-center gap-6 mt-6">
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <img src={project1} alt="Residential Repair" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">Residential Roof Repair</p>
          </div>
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <img src={project2} alt="Commercial Roof" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">Commercial Roof Installation</p>
          </div>
          <div className="w-64 p-4 bg-white shadow-md rounded-lg">
            <img src={project3} alt="Emergency Roof" className="rounded w-full h-40 object-cover" />
            <p className="mt-2 font-medium">Emergency Roof Fix</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 text-center">
        <h3 className="text-3xl font-semibold">Client Testimonials</h3>
        <div className="flex justify-center gap-6 mt-6">
          <div className="p-6 bg-white shadow rounded-lg w-64">
            <img src={testimonial1} alt="Client 1" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">John Doe</p>
            <p className="text-gray-600">"Great service, highly recommended!"</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg w-64">
            <img src={testimonial2} alt="Client 2" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">Jane Smith</p>
            <p className="text-gray-600">"Professional and excellent quality!"</p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg w-64">
            <img src={testimonial3} alt="Client 3" className="rounded-full w-16 h-16 mx-auto" />
            <p className="font-medium mt-2">Mike Johnson</p>
            <p className="text-gray-600">"Quality work at competitive prices."</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-lg font-semibold">RoyalCrown</p>
        <div className="flex justify-center space-x-6 mt-2">
          <p className="flex items-center">📞 +1 (323) 590-2647</p>
          <p className="flex items-center">📧 royalcrownroofingservices@gmail.com</p>
        </div>
        <p className="mt-4 text-sm">© 2024 RoyalCrown. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
