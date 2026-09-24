import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-white text-xl font-bold">COLLEGE<span className="text-blue-500">PORTAL</span></h2>
          <p className="mt-3 text-sm leading-6">
            A simple college management and student portal project built with React.
          </p>
        </div>

       <div>
  <h3 className="text-white font-semibold mb-3">Quick Links</h3>

  <Link
    to="/courses"
    className="block text-sm text-gray-400 hover:text-white mb-2 no-underline"
  >
    Courses
  </Link>

  <Link
    to="/students"
    className="block text-sm text-gray-400 hover:text-white mb-2 no-underline"
  >
    Students
  </Link>

  <Link
    to="/placements"
    className="block text-sm text-gray-400 hover:text-white mb-2 no-underline"
  >
    Placements
  </Link>

  <Link
    to="/career"
    className="block text-sm text-gray-400 hover:text-white no-underline"
  >
    Career
  </Link>
</div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Butwal, Nepal</p>
          <p className="text-sm">info@collegeportal.com</p>
          <p className="text-sm">+977 9800000000</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © 2026 College Portal. All Rights Reserved.
      </div>
    </footer>
  );
}