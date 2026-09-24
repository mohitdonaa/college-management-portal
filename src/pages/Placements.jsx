import React, { useState } from "react";
import { Building2, MapPin } from "lucide-react";
import SearchBox from "../components/SearchBox";
import SectionTitle from "../components/SectionTitle";

const jobs = [
  { id: 1, company: "TechSoft Nepal", role: "Frontend Developer", location: "Kathmandu", package: "NPR 35K+" },
  { id: 2, company: "CloudByte", role: "Junior React Developer", location: "Butwal", package: "NPR 30K+" },
  { id: 3, company: "Digital Hub", role: "UI/UX Designer", location: "Pokhara", package: "NPR 28K+" },
  { id: 4, company: "CodeWorks", role: "Backend Intern", location: "Lalitpur", package: "NPR 20K+" },
];

export default function Placements() {
  const [search, setSearch] = useState("");

  const filtered = jobs.filter((job) =>
    `${job.company} ${job.role} ${job.location}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle title="Placements" text="Explore companies and career opportunities." />

      <div className="flex justify-center mb-10">
        <SearchBox value={search} onChange={setSearch} placeholder="Search company or job..." />
      </div>

      <div className="row g-4">
        {filtered.map((job) => (
          <div className="col-md-6" key={job.id}>
            <div className="bg-white border rounded-xl p-6 h-100 shadow-sm">
              <div className="flex justify-between gap-4">
                <div>
                  <p className="text-blue-600 font-semibold">{job.company}</p>
                  <h2 className="text-xl font-bold mt-2">{job.role}</h2>
                </div>
                <Building2 className="text-gray-400" />
              </div>
              <div className="flex items-center gap-2 text-gray-500 mt-5">
                <MapPin size={17} /> {job.location}
              </div>
              <p className="font-semibold mt-4">Package: {job.package}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}