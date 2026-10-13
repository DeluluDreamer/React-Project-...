import { useContext, useMemo } from "react";
import { StudentContext } from "../context/StudentContext";
export default function useStudents() {
  const context = useContext(StudentContext);
  if (!context) throw new Error("useStudents must be used inside StudentProvider");
  const { students, dispatch } = context;
  const stats = useMemo(() => ({
    total: students.length,
    active: students.filter(s => s.active).length,
    courses: new Set(students.map(s => s.course)).size
  }), [students]);
  return { students, dispatch, stats };
}