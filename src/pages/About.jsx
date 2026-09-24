import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle
        title="About Our College"
        text="A modern learning environment focused on knowledge and career growth."
      />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border p-8">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-7">
            Our college provides quality education, practical learning and
            professional opportunities for students. This portal makes it
            easier to access important academic information.
          </p>
        </div>

        <div className="bg-gray-950 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-7">
            To provide students with the skills, knowledge and confidence
            needed to build successful careers in a changing world.
          </p>
        </div>
      </div>
    </section>
  );
}