import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import Career from "./pages/Career";
import Portal from "./pages/Portal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="students" element={<Students />} />
        <Route path="placements" element={<Placements />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="career" element={<Career />} />
        <Route path="portal" element={<Portal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}