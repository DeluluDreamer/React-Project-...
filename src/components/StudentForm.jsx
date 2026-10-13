import React, { useEffect, useRef, useState } from "react";
export default function StudentForm({ onAdd, onClose }) {
  const nameRef = useRef(null);
  const [form,setForm] = useState({name:"",course:"React Development",email:"",year:"Year 1"});
  const [error,setError] = useState("");
  useEffect(()=>{nameRef.current?.focus();},[]);
  function submit(e) {
    e.preventDefault();
    if(form.name.trim().length<2) return setError("Enter a name with at least 2 characters.");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Enter a valid email address.");
    onAdd({...form,name:form.name.trim(),id:String(Date.now()),active:true});
  }
  return <div className="overlay" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><form className="modal" onSubmit={submit} noValidate>
    <button type="button" className="close" onClick={onClose}>×</button><p className="kicker">STUDENT DIRECTORY</p><h2>Add a student</h2>
    <label>Full name<input ref={nameRef} value={form.name} onChange={e=>{setForm({...form,name:e.target.value});setError("");}} placeholder="Student name"/></label>
    <label>Email<input value={form.email} onChange={e=>{setForm({...form,email:e.target.value});setError("");}} placeholder="student@example.com"/></label>
    <label>Course<select value={form.course} onChange={e=>setForm({...form,course:e.target.value})}>{["React Development","UI/UX Design","JavaScript Basics","Python Programming"].map(c=><option key={c}>{c}</option>)}</select></label>
    <label>Year<select value={form.year} onChange={e=>setForm({...form,year:e.target.value})}>{["Year 1","Year 2","Year 3","Year 4"].map(y=><option key={y}>{y}</option>)}</select></label>
    {error&&<p className="error">{error}</p>}<button className="btn primary full">Add student</button>
  </form></div>;
}