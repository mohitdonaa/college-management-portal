import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Students", path: "/students" },
  { name: "Placements", path: "/placements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Career", path: "/career" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-white no-underline hover:no-underline"
        >
          COLLEGE<span className="text-blue-500">PORTAL</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 no-underline !no-underline ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right Action (Student Portal) & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/portal"
            className="no-underline !no-underline text-sm font-semibold border border-blue-500/50 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
          >
            Student Portal
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium no-underline !no-underline transition ${
                  isActive
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-gray-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
