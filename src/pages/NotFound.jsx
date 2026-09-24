import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-gray-500 mt-3">Page not found.</p>
      <Link to="/" className="mt-6 bg-blue-600 text-white no-underline px-5 py-3 rounded-lg">
        Go Home
      </Link>
    </div>
  );
}