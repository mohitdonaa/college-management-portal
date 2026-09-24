import React, { useState } from "react";
import { BookOpen, Clock } from "lucide-react";
import SearchBox from "../components/SearchBox";
import SectionTitle from "../components/SectionTitle";

const courses = [
  { id: 1, name: "BCA", duration: "4 Years", category: "Computer", description: "Computer applications, programming and software development." },
  { id: 2, name: "BBA", duration: "4 Years", category: "Management", description: "Business, management, finance and entrepreneurship." },
  { id: 3, name: "BIT", duration: "4 Years", category: "Computer", description: "Information technology, networking and modern computing." },
  { id: 4, name: "BIM", duration: "4 Years", category: "Management", description: "Information management with business and technology." },
  { id: 5, name: "BBS", duration: "4 Years", category: "Management", description: "Business studies, accounting, economics and management." },
  { id: 6, name: "CSIT", duration: "4 Years", category: "Computer", description: "Computer science, information technology and programming." },
];

export default function Courses() {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((course) =>
    `${course.name} ${course.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle title="Our Courses" text="Explore courses and choose the right path for your career." />

      <div className="flex justify-center mb-10">
        <SearchBox value={search} onChange={setSearch} placeholder="Search course..." />
      </div>

      <div className="row g-4">
        {filtered.map((course) => (
          <div className="col-md-6 col-lg-4" key={course.id}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 h-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                <BookOpen className="text-blue-600" />
              </div>
              <h2 className="text-xl font-bold">{course.name}</h2>
              <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                {course.category}
              </span>
              <p className="text-gray-500 mt-4">{course.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-5">
                <Clock size={16} /> {course.duration}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No course found.</p>
      )}
    </section>
  );
}