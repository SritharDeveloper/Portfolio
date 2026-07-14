import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-05nr.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export const fetchProjects = async () => {
  const response = await API.get("/projects");
  return response.data;
};

export const fetchSkills = async () => {
  const response = await API.get("/skills");
  return response.data;
};

export const fetchExperience = async () => {
  const response = await API.get("/experience");
  return response.data;
};

export const sendContact = async (data) => {
  const response = await API.post("/contact", data);
  return response.data;
};

export default API;
