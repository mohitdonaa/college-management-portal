import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Eye, Plus, X } from "lucide-react";
import SearchBox from "../components/SearchBox";
import SectionTitle from "../components/SectionTitle";

const initialStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    roll: "BCA-001",
    course: "BCA",
    semester: "4th",
    status: "Active",
    email: "aarav@gmail.com",
    phone: "9800000001",
    address: "Butwal, Nepal",
  },
  {
    id: 2,
    name: "Sita Thapa",
    roll: "BCA-002",
    course: "BCA",
    semester: "4th",
    status: "Active",
    email: "sita@gmail.com",
    phone: "9800000002",
    address: "Pokhara, Nepal",
  },
  {
    id: 3,
    name: "Rohan KC",
    roll: "BBA-014",
    course: "BBA",
    semester: "6th",
    status: "Active",
    email: "rohan@gmail.com",
    phone: "9800000003",
    address: "Kathmandu, Nepal",
  },
  {
    id: 4,
    name: "Anisha Gurung",
    roll: "BIT-021",
    course: "BIT",
    semester: "2nd",
    status: "Active",
    email: "anisha@gmail.com",
    phone: "9800000004",
    address: "Dharan, Nepal",
  },
  {
    id: 5,
    name: "Bibek Adhikari",
    roll: "CSIT-031",
    course: "CSIT",
    semester: "8th",
    status: "Graduated",
    email: "bibek@gmail.com",
    phone: "9800000005",
    address: "Butwal, Nepal",
  },
  {
    id: 6,
    name: "Nisha Rai",
    roll: "BIM-011",
    course: "BIM",
    semester: "5th",
    status: "Active",
    email: "nisha@gmail.com",
    phone: "9800000006",
    address: "Biratnagar, Nepal",
  },
];

export default function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    course: "",
    semester: "",
    status: "Active",
    email: "",
    phone: "",
    address: "",
  });

  const filtered = students.filter((student) =>
    `${student.name} ${student.roll} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...formData, id: editId }
            : student
        )
      );
    } else {
      const newStudent = {
        ...formData,
        id: Date.now(),
      };

      setStudents([...students, newStudent]);
    }

    setFormData({
      name: "",
      roll: "",
      course: "",
      semester: "",
      status: "Active",
      email: "",
      phone: "",
      address: "",
    });

    setEditId(null);
    setShowForm(false);
  };

  const handleEdit = (student) => {
    setFormData(student);
    setEditId(student.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };
  const closeForm = () => {
    setShowForm(false);
    setEditId(null);

    setFormData({
      name: "",
      roll: "",
      course: "",
      semester: "",
      status: "Active",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <SectionTitle
        title="Students"
        text="Manage and view student information."
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

        <SearchBox
          value={search}
          onChange={setSearch}
          placeholder="Search student..."
        />

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
        >
          <Plus size={18} />
          Add Student
        </button>

      </div>

      {showForm && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">
              {editId ? "Edit Student" : "Add Student"}
            </h2>

            <button
              onClick={closeForm}
              className="text-gray-500 hover:text-black"
            >
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Student Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter student name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Roll Number</label>
                <input
                  type="text"
                  name="roll"
                  value={formData.roll}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Example: BCA-007"
                  required
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Course</label>

                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BIT">BIT</option>
                  <option value="BIM">BIM</option>
                  <option value="BBS">BBS</option>
                  <option value="CSIT">CSIT</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Semester</label>

                <select
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Select Semester</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Active">Active</option>
                  <option value="Graduated">Graduated</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label">Email</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="student@gmail.com"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Phone</label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="98XXXXXXXX"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Address</label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Butwal, Nepal"
                />
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                {editId ? "Update Student" : "Add Student"}
              </button>

              <button
                type="button"
                onClick={closeForm}
                className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      )}

      <div className="table-responsive bg-white rounded-xl border shadow-sm">

        <table className="table mb-0 align-middle">

          <thead>
            <tr>
              <th className="px-4 py-4">Name</th>
              <th>Roll No.</th>
              <th>Course</th>
              <th>Semester</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {filtered.map((student) => (

              <tr key={student.id}>

                <td className="px-4 py-4 font-semibold">
                  {student.name}
                </td>

                <td>{student.roll}</td>

                <td>{student.course}</td>

                <td>{student.semester}</td>

                <td>
                  <span
                    className={`badge ${
                      student.status === "Active"
                        ? "text-bg-success"
                        : "text-bg-secondary"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td>

                  <div className="flex items-center gap-2">

                    {/* Profile */}
                    <Link
                      to={`/students/${student.id}`}
                      className="btn btn-sm btn-outline-primary"
                      title="View Profile"
                    >
                      <Eye size={16} />
                    </Link>

                    {/* Edit */}
                    <button
                      onClick={() => handleEdit(student)}
                      className="btn btn-sm btn-outline-warning"
                      title="Edit Student"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(student.id)}
                      className="btn btn-sm btn-outline-danger"
                      title="Delete Student"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No student found.
          </p>
        )}

      </div>

    </section>
  );
}
