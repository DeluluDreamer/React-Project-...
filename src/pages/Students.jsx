import React, { useMemo, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import StudentForm from "../components/StudentForm";
import useStudents from "../hooks/useStudents";
import { useMessage } from "../context/MessageContext";
export default function Students() {
  const {students,dispatch} = useStudents();
  const {notify} = useMessage();
  const [params,setParams] = useSearchParams();
  const location = useLocation();
  const [showForm,setShowForm] = useState(false);
  const activeOnly = location.pathname.endsWith("/active");
  const q = params.get("q") || "";
  const filtered = useMemo(()=>students.filter(s=>(!activeOnly||s.active)&&`${s.name} ${s.course} ${s.email}`.toLowerCase().includes(q.toLowerCase())),[students,activeOnly,q]);
  function add(student){dispatch({type:"ADD",student});setShowForm(false);notify("Student added successfully.");}
  function remove(id){dispatch({type:"DELETE",id});notify("Student removed.");}
  return <section><div className="page-heading"><div><p className="kicker">STUDENT DIRECTORY</p><h1>{activeOnly?"Active students":"Our students"}</h1><p>Browse the learners who make our campus community special.</p></div><button className="btn primary" onClick={()=>setShowForm(true)}>＋ Add student</button></div>
    <div className="tabs"><Link to="/students/all" className={!activeOnly?"selected":""}>All students</Link><Link to="/students/active" className={activeOnly?"selected":""}>Active only</Link></div>
    <input className="search" value={q} onChange={e=>{const next=new URLSearchParams(params);e.target.value?next.set("q",e.target.value):next.delete("q");setParams(next);}} placeholder="Search by name, email or course…"/>
    <div className="student-list">{filtered.map(student=><StudentCard key={student.id} student={student} onDelete={remove}/>)}</div>
    {!filtered.length&&<div className="empty"><h2>No students found</h2><p>Try a different search or add a student.</p></div>}
    {showForm&&<StudentForm onAdd={add} onClose={()=>setShowForm(false)}/>}
  </section>;
}