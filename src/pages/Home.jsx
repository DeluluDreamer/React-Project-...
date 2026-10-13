import React from "react";
import { Link } from "react-router-dom";
import useStudents from "../hooks/useStudents";
export default function Home() {
  const { students, stats } = useStudents();
  return <>
    <section className="hero"><div><p className="kicker">WELCOME TO CAMPUSLITE</p><h1>Your learning journey,<br/><span>all in one place.</span></h1><p className="hero-text">A simple student portal to explore courses, meet learners, and keep your academic community connected.</p><Link className="btn primary" to="/students/all">Explore students →</Link></div><div className="hero-art"><div className="art-circle">🎓</div><span className="bubble b1">📚 Learn</span><span className="bubble b2">✨ Grow</span></div></section>
    <section className="stats">{[[stats.total,"Registered students"],[stats.active,"Active students"],[stats.courses,"Courses available"]].map(([n,label])=><article key={label}><strong>{n}</strong><span>{label}</span></article>)}</section>
    <section className="section-title"><div><p className="kicker">OUR COMMUNITY</p><h2>Meet a few students</h2></div><Link to="/students/all" className="detail-link">View directory →</Link></section>
    <div className="mini-grid">{students.slice(0,3).map(s=><article className="mini-card" key={s.id}><div className="avatar">{s.name.split(" ").map(p=>p[0]).slice(0,2).join("")}</div><h3>{s.name}</h3><p>{s.course}</p><span className={s.active?"status active":"status"}>{s.active?"Active":"Inactive"}</span></article>)}</div>
  </>;
}