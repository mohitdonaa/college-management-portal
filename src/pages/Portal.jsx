import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, CalendarCheck, FileText, Bell } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const items = [
  { title: "My Courses", text: "View your enrolled courses.", icon: BookOpen },
  { title: "Attendance", text: "Check your attendance record.", icon: CalendarCheck },
  { title: "Results", text: "View your academic results.", icon: FileText },
  { title: "Notices", text: "Read latest college notices.", icon: Bell },
];

export default function Portal() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle title="Student Portal" text="Your academic information in one place." />

      <div className="bg-gray-950 text-white rounded-2xl p-8 mb-8">
        <p className="text-blue-400 font-semibold">WELCOME BACK</p>
        <h2 className="text-3xl font-bold mt-2">Student Dashboard</h2>
        <p className="text-gray-400 mt-2">Manage your courses, attendance, results and notices.</p>
      </div>

      <div className="row g-4">
        {items.map(({ title, text, icon: Icon }) => (
          <div className="col-md-6 col-lg-3" key={title}>
            <div className="bg-white border rounded-xl p-6 h-100 shadow-sm">
              <Icon className="text-blue-600" size={28} />
              <h3 className="font-bold text-lg mt-5">{title}</h3>
              <p className="text-gray-500 text-sm mt-2">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/students" className="text-blue-600 no-underline font-semibold">
          View Student Directory →
        </Link>
      </div>
    </section>
  );
}