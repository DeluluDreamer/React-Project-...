import React from "react";
import { Link, useParams } from "react-router-dom";
import useStudents from "../hooks/useStudents";
export default function StudentDetails() {
  const {studentId}=useParams();
  const {students,dispatch}=useStudents();
  const student=students.find(s=>s.id===studentId);
  if(!student)return <div className="empty"><h1>Student not found</h1><Link className="btn primary" to="/students/all">Back to students</Link></div>;
  return <section className="detail-page"><Link to="/students/all" className="back">← Back to directory</Link><article className="profile-card"><div className="avatar big">{student.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div><p className="kicker">STUDENT PROFILE</p><h1>{student.name}</h1><p>{student.course}</p><div className="profile-fields"><div><small>Email address</small><strong>{student.email}</strong></div><div><small>Academic year</small><strong>{student.year}</strong></div><div><small>Status</small><strong>{student.active?"Active":"Inactive"}</strong></div></div><button className="btn primary" onClick={()=>dispatch({type:"UPDATE",student:{...student,active:!student.active}})}>{student.active?"Mark inactive":"Mark active"}</button></article></section>;
}