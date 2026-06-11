import axios from "axios";

const API = axios.create({
  baseURL: 
  // import.meta.env.PROD ?
   "https://portfolio-backend-05nr.onrender.com/api"
    // : "http://localhost:5000/api",
});

export const fetchProjects = () => API.get("/projects");
export const fetchSkills = () => API.get("/skills");
export const fetchExperience = () => API.get("/experience");
export const sendContact = (data) => API.post("/contact", data);

export default API;