import { useState } from 'react';
import Header from './Components/Header';
import AddStudentForm from './Components/AddStudentForm';
import StudentTable from './Components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: parseInt(score)
    };
    setStudents([...students, newStudent]);
  };

  const updateStudent = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: parseInt(newScore) } : student
    ));
  };

  return (
    <div className="app">
      <Header title="Student Scoreboard" />
      <AddStudentForm onAdd={addStudent} />
      <StudentTable students={students} onUpdate={updateStudent} />
    </div>
  );
}

export default App;