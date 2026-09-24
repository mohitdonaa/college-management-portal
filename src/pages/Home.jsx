import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BriefcaseBusiness, BookOpen } from "lucide-react";

const stats = [
  { title: "Students", value: "2,500+", icon: Users },
  { title: "Courses", value: "25+", icon: BookOpen },
  { title: "Teachers", value: "120+", icon: GraduationCap },
  { title: "Placements", value: "850+", icon: BriefcaseBusiness },
];

export default function Home() {
  return (
    <>
      <section className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold mb-3">WELCOME TO COLLEGE PORTAL</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learn. Grow. <span className="text-blue-500">Succeed.</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl leading-7">
              A clean and simple platform for students, courses, placements,
              college information and career opportunities.
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="/courses" className="bg-blue-600 hover:bg-blue-700 text-white no-underline px-6 py-3 rounded-lg">
                Explore Courses
              </Link>
              <Link to="/portal" className="border border-gray-600 hover:border-blue-500 text-white no-underline px-6 py-3 rounded-lg">
                Student Portal
              </Link>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <GraduationCap size={70} className="text-blue-500 mb-6" />
            <h2 className="text-2xl font-bold">Build Your Future</h2>
            <p className="text-gray-400 mt-3">
              Manage your academic journey and discover opportunities from one place.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ title, value, icon: Icon }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <Icon className="text-blue-600" />
              <h2 className="text-3xl font-bold mt-4">{value}</h2>
              <p className="text-gray-500 mt-1">{title}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}