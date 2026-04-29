import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdate }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Marks</th>
            <th>Result Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentRow 
              key={student.id} 
              student={student} 
              onUpdate={onUpdate} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;