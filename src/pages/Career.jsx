import React, { useState } from "react";
import { Briefcase, MapPin } from "lucide-react";
import SearchBox from "../components/SearchBox";
import SectionTitle from "../components/SectionTitle";

const careers = [
  { id: 1, title: "Frontend Developer Intern", company: "ABC Technologies", location: "Kathmandu", type: "Internship" },
  { id: 2, title: "Graphic Designer", company: "Creative Nepal", location: "Butwal", type: "Full Time" },
  { id: 3, title: "MERN Stack Intern", company: "Web Solutions", location: "Remote", type: "Internship" },
  { id: 4, title: "Digital Marketing Assistant", company: "Media House", location: "Pokhara", type: "Full Time" },
];

export default function Career() {
  const [search, setSearch] = useState("");

  const filtered = careers.filter((career) =>
    `${career.title} ${career.company} ${career.location}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle title="Career Opportunities" text="Find internships and jobs for students and graduates." />

      <div className="flex justify-center mb-10">
        <SearchBox value={search} onChange={setSearch} placeholder="Search career..." />
      </div>

      <div className="row g-4">
        {filtered.map((career) => (
          <div className="col-md-6" key={career.id}>
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-blue-600" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">{career.title}</h2>
                  <p className="text-blue-600">{career.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-5">
                <MapPin size={17} /> {career.location}
              </div>
              <span className="inline-block mt-4 px-3 py-1 bg-gray-100 rounded-full text-xs">
                {career.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}