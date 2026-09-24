import React from "react";

export default function SectionTitle({ title, text }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-500 mt-2">{text}</p>
    </div>
  );
}