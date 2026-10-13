import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Layout() {
  return <div className="app">
    <header className="top"><NavLink to="/" className="brand"><span className="brand-icon">C</span> CampusLite</NavLink>
      <nav>{[["/","Home"],["/students/all","Students"],["/courses","Courses"],["/about","About"],["/contact","Contact"]].map(([to,label])=><NavLink key={to} to={to} end={to==="/"}>{label}</NavLink>)}</nav>
    </header>
    <main className="container"><Outlet /></main>
    <footer>CampusLite Student Portal · A React training project</footer>
  </div>;
}