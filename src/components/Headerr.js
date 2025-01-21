//import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./finallogo.png";

export const Headerr = () => {
  return (
    <header>
      <nav className="font-serif z-50 relative bg-Bluee shadow-md px-4 py-3">
        <div className="max-w-screen-xl z-50 flex items-center justify-between mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-12" alt="PlanOrama Logo" />
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-blue-600 tracking-wide">
                Plan<span className="text-blue-800">O</span>rama
              </span>
              <span className="text-sm font-medium text-gray-600">
                Explore. Plan. Live.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className=" md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/faqs"
              className={({ isActive }) =>
                `text-base font-medium ${
                  isActive ? "text-blue-700" : "text-gray-700"
                } hover:text-blue-600 transition duration-300`
              }
            >
              FAQs
            </NavLink>
          </div>

          {/* Profile Icon */}
          <div className="flex items-center space-x-4">
            <NavLink to="/mydashboard" className="text-gray-700 hover:text-blue-600 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
