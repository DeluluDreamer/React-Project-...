import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return <Routes><Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="students" element={<Students />}>
      <Route index element={<Navigate to="all" replace />} />
      <Route path="all" element={<Students />} />
      <Route path="active" element={<Students />} />
    </Route>
    <Route path="students/:studentId" element={<StudentDetails />} />
    <Route path="courses" element={<Courses />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Route></Routes>;
}
