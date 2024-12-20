import React from "react";

function EmployeeList({ employees, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Department</th>
          <th>Date of Joining</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.employeeId}>
            <td>{emp.name}</td>
            <td>{emp.employeeId}</td>
            <td>{emp.email}</td>
            <td>{emp.phoneNumber}</td>
            <td>{emp.department}</td>
            <td>{emp.dateOfJoining.split("T")[0]}</td>
            <td>{emp.role}</td>
            <td>
              <button onClick={() => onDelete(emp.employeeId)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;
