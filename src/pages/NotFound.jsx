import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){return <div className="empty"><h1>Page not found</h1><p>Let's get you back to CampusLite.</p><Link className="btn primary" to="/">Go home</Link></div>}