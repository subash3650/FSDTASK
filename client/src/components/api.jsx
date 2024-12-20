import axios from "axios";

const apiUrl = "http://localhost:5000";

export const fetchEmployees = async (setEmployees) => {
  try {
    const response = await axios.get(`${apiUrl}/employees`);
    setEmployees(response.data);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};

export const submitEmployee = async (formData) => {
  return axios.post(`${apiUrl}/employee`, formData);
};

export const deleteEmployee = async (id) => {
  return axios.delete(`${apiUrl}/employee/${id}`);
};
