import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust path if needed

const Navbar = () => {
  return (

    <header className="bg-white shadow-md p-3 flex justify-between items-center">
    <Link to="/">
      <img src={logo} alt="RoofPro Logo" className="w-32 h-auto cursor-pointer" />
      </Link>
      <div className="flex space-x-4">
        <button className="px-4 py-2 border rounded-md">
          <Link to="/">Home</Link>
        </button>
        <button className="px-4 py-2 border rounded-md">Services</button>
        <button className="px-4 py-2 border rounded-md">Projects</button>
        <button className="px-4 py-2 border rounded-md">
          <Link to="/contact">Contact</Link>
        </button>
        <Link to="/quote" className="px-4 py-2 bg-black text-white rounded-md">Get a Quote</Link>
      </div>
    </header>
  );
};

export default Navbar;
