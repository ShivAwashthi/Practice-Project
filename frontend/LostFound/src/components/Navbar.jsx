// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-8 h-16 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">
        Lost & Found
      </h1>

      <div className="flex gap-6 text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>

        <Link
          to="/lost-found"
          className="hover:text-blue-600 transition"
        >
          Lost and Found
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;