const StudentRow = ({ student, onUpdate }) => {
  const isPass = student.score >= 40;

  return (
    <tr className="table-row">
      <td>{student.name}</td>
      <td>
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdate(student.id, e.target.value)}
          className="score-input"
        />
      </td>
      <td>
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

// THIS IS THE LINE YOU ARE LIKELY MISSING:
export default StudentRow;