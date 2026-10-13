import React, { createContext, useEffect, useReducer } from "react";
import { initialStudents } from "../data/students";

export const StudentContext = createContext(null);
const KEY = "campuslite-students";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": return [action.student, ...state];
    case "UPDATE": return state.map(s => s.id === action.student.id ? action.student : s);
    case "DELETE": return state.filter(s => s.id !== action.id);
    default: return state;
  }
}
function loadStudents() {
  try { const saved = localStorage.getItem(KEY); return saved ? JSON.parse(saved) : initialStudents; }
  catch { return initialStudents; }
}
export function StudentProvider({ children }) {
  const [students, dispatch] = useReducer(reducer, undefined, loadStudents);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(students)); }, [students]);
  return <StudentContext.Provider value={{ students, dispatch }}>{children}</StudentContext.Provider>;
}