import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-gray-600 hover:text-indigo-600 bg-gray-100 px-3 py-1 rounded shadow"
      >
        ← Back
      </button>

      {/* Centered Navigation */}
      <nav className="flex-1 flex justify-center space-x-6 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/men" className="hover:text-indigo-600">Men</Link>
        <Link to="/women" className="hover:text-indigo-600">Women</Link>
        <Link to="/kids" className="hover:text-indigo-600">Kids</Link>
        <Link to="/admin" className="hover:text-indigo-600">Admin</Link>
        <Link to="/auth" className="hover:text-indigo-600">Signup/Login</Link>
        <Link to="/about" className="hover:text-indigo-600">About Us</Link>
      </nav>

      {/* Invisible spacer to balance layout */}
      <div className="w-[70px]"></div>
    </header>
  );
};

export default Header;
