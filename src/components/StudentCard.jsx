import React from "react";
import { Link } from "react-router-dom";
export default function StudentCard({ student, onDelete }) {
  return <article className="student-card">
    <div className="avatar">{student.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div>
    <div className="student-info"><Link className="student-name" to={`/students/${student.id}`}>{student.name}</Link><span>{student.course}</span><small>{student.email}</small></div>
    <span className={student.active ? "status active" : "status"}>{student.active ? "Active" : "Inactive"}</span>
    <Link className="detail-link" to={`/students/${student.id}`}>Details ↗</Link>
    <button className="delete-link" onClick={()=>onDelete(student.id)} aria-label={`Delete ${student.name}`}>Delete</button>
  </article>;
}