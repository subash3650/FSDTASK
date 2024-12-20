import React, { useState, useEffect } from "react";
// import EmployeeList from "./EmployeeList";
import InputField from "./InputField";
import { fetchEmployees, submitEmployee, deleteEmployee } from "./api";
import "./form.css";

function Form() {
  const day=new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    email: "",
    phoneNumber: "",
    department: "",
    dateOfJoining: "",
    role: "",
  });

  const [error, setErrors] = useState({});
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees(setEmployees);
  }, []);

  const onchange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  const validate = (name, value) => {
    let tempErrors = { ...error };
    switch (name) {
      case "employeeId":
        if (!value || value.length > 10) {
          tempErrors.employeeId = "Valid Employee ID is required.";
        } else {
          delete tempErrors.employeeId;
        }
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) {
          tempErrors.email = "Valid Email is required.";
        } else {
          delete tempErrors.email;
        }
        break;
      case "phoneNumber":
        if (!/^\d{10}$/.test(value)) {
          tempErrors.phoneNumber = "Valid 10-digit phone number is required.";
        } else {
          delete tempErrors.phoneNumber;
        }
        break;
      case "department":
        if (!value) {
          tempErrors.department = "Department is required.";
        } else {
          delete tempErrors.department;
        }
        break;
      case "dateOfJoining":
        if (!value || new Date(value) > new Date()) {
          tempErrors.dateOfJoining = "Valid date is required.";
        } else {
          delete tempErrors.dateOfJoining;
        }
        break;
      case "role":
        if (!value) {
          tempErrors.role = "Role is required.";
        } else {
          delete tempErrors.role;
        }
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const onsubmithandler = async (e) => {
    e.preventDefault();
    if (Object.keys(error).length > 0) return;

    try {
      const res = await submitEmployee(form);
      alert(res.data.message);
      setForm({
        name: "",
        employeeId: "",
        email: "",
        phoneNumber: "",
        department: "",
        dateOfJoining: "",
        role: "",
      });
      fetchEmployees(setEmployees);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Submission failed!";
      alert(errorMessage);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const res = await deleteEmployee(id);
  //     alert(res.data.message);
  //     fetchEmployees(setEmployees);
  //   } catch (err) {
  //     const errorMessage = err.response?.data?.message || "Deletion failed!";
  //     alert(errorMessage);
  //   }
  // };

  return (
    <div className="form">
      <h1 className="text-bold text-white">Give your Details</h1>
      <form onSubmit={onsubmithandler}>
        <InputField
          name="name"
          value={form.name}
          onchange={onchange}
          error={error.name}
          placeholder="Name"
        />
        <InputField
          name="employeeId"
          value={form.employeeId}
          onchange={onchange}
          error={error.employeeId}
          placeholder="Employee ID"
        />
        <InputField
          name="email"
          value={form.email}
          onchange={onchange}
          error={error.email}
          placeholder="Email"
        />
        <InputField
          name="phoneNumber"
          value={form.phoneNumber}
          onchange={onchange}
          error={error.phoneNumber}
          placeholder="Phone Number"
        />

        <select
          name="department"
          value={form.department}
          onChange={onchange}
        >
          <option value="">Select Department</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
        </select>
        {error.department && <p className="error">{error.department}</p>}

        <input
          name="dateOfJoining"
          type="date"
          max={day}
          value={form.dateOfJoining}
          onChange={onchange}
        />
        {error.dateOfJoining && <p className="error">{error.dateOfJoining}</p>}

        <InputField
          name="role"
          value={form.role}
          onchange={onchange}
          error={error.role}
          placeholder="Role"
        />

        <button type="submit" disabled={Object.keys(error).length > 0}>
          Submit
        </button>
        <button
          type="reset"
          onClick={() =>
            setForm({
              name: "",
              employeeId: "",
              email: "",
              phoneNumber: "",
              department: "",
              dateOfJoining: "",
              role: "",
            })
          }
        >
          Reset
        </button>
      </form>

      {/* <h2 className="text-white">Employee Data</h2>
      <EmployeeList employees={employees} onDelete={handleDelete} /> */}
    </div>
  );
}

export default Form;
