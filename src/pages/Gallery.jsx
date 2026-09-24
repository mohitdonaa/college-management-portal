import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import SectionTitle from "../components/SectionTitle";

const images = [
  { id: 1, title: "College Building", category: "Campus", url: "https://picsum.photos/seed/college1/800/500" },
  { id: 2, title: "Welcome Program", category: "Events", url: "https://picsum.photos/seed/college2/800/500" },
  { id: 3, title: "Sports Week", category: "Sports", url: "https://picsum.photos/seed/college3/800/500" },
  { id: 4, title: "Computer Lab", category: "Campus", url: "https://picsum.photos/seed/college4/800/500" },
  { id: 5, title: "Graduation Day", category: "Events", url: "https://picsum.photos/seed/college5/800/500" },
  { id: 6, title: "Student Activities", category: "Activities", url: "https://picsum.photos/seed/college6/800/500" },
];

export default function Gallery() {
  const [search, setSearch] = useState("");

  const filtered = images.filter((image) =>
    `${image.title} ${image.category}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle title="Gallery" text="A collection of college memories and activities." />

      <div className="flex justify-center mb-10">
        <SearchBox value={search} onChange={setSearch} placeholder="Search gallery..." />
      </div>

      <div className="row g-4">
        {filtered.map((image) => (
          <div className="col-md-6 col-lg-4" key={image.id}>
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <img src={image.url} alt={image.title} className="w-full h-52 object-cover" />
              <div className="p-5">
                <h2 className="font-bold text-lg">{image.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}