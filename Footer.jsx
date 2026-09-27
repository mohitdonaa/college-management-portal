import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center w-full items-center bg-gray-950 text-gray-400 ">
      <div className="w-full px-50 py-5 grid grid-cols-3">
        <div className="flex flex-col ">
          <h2 className="text-white text-xl font-bold">COLLEGE<span className="text-blue-500">PORTAL</span></h2>
          <p className="w-2/3 text-sm leading-6">
            A simple college management and student portal project built with React.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold text-xl">Quick Links</p>

          <Link
            to="/courses"
            className="block text-sm text-white opacity-70 !no-underline hover:!text-[#2B7FFF] transition-all duration-200"          >
            Courses
          </Link>

          <Link
            to="/students"
            className="block text-sm text-white opacity-70 !no-underline hover:!text-[#2B7FFF] transition-all duration-200"          >
            Students
          </Link>

          <Link
            to="/placements"
            className="block text-sm text-white opacity-70 !no-underline hover:!text-[#2B7FFF] transition-all duration-200"
          >
            Placements
          </Link>

          <Link to="/career"
            className="block text-sm text-white opacity-70 !no-underline hover:!text-[#2B7FFF] transition-all duration-200"
          >
            Career
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold text-xl flex ">Contact</p>
          <div className="flex flex-col">
            <p className="text-sm text-white opacity-70">Butwal, Nepal</p>
            <p className="text-sm text-white opacity-70">info@collegeportal.com</p>
            <p className="text-sm text-white opacity-70">+977 9800000000</p>
          </div>

        </div>
      </div>

      <div className="w-3/4 border-t border-gray-800 text-center py-4 text-sm">
        © 2026 College Portal. All Rights Reserved.
      </div>
    </footer>
  );
}