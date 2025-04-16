import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsHouseDoor,
  BsChatDots,
  BsPersonCircle,
  BsBoxArrowRight
} from "react-icons/bs";
import { logout } from "../services/auth";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      alert("Logged out successfully!");
      navigate("/login");
    } else {
      alert("Logout failed. Try again.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="bg-black w-40 h-screen border-r border-gray-700 flex flex-col px-4 py-6 fixed top-0 left-0 hidden md:flex">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 mb-12">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-white font-semibold text-2xl tracking-wide">BLIXs</span>
        </Link>

        {/* Navigation Links */}
        <Link to="/" 
          type="button"
          className="flex items-center text-white hover:text-gray-300 mb-6 space-x-3 text-base"
        >
          <BsHouseDoor className="text-xl" />
          <span>Home</span>
        </Link>

        <Link to="/direct/inbox"
          type="button"
          className="flex items-center text-white hover:text-gray-300 mb-6 space-x-3 text-base"
        >
          <BsChatDots className="text-xl" />
          <span>Messages</span>
        </Link>

        <Link to="/user"
          type="button"
          className="flex items-center text-white hover:text-gray-300 mb-6 space-x-3 text-base"
        >
          <BsPersonCircle className="text-xl" />
          <span>Profile</span>
        </Link>

        <Link type="button"
          onClick={handleLogout}
          className="flex items-center text-white hover:text-gray-300 mb-6 space-x-3 text-base"
        >
          <BsBoxArrowRight className="text-xl" />
          <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
