import axios from "axios";
import URL from "../utils/URL";
const api = axios.create({
  baseURL: URL,
});

export const createAdmin = (formData) => {
  return api.post("/createAdmin", formData);
};

export const isAdminCreated = () => {
  return api.get("/isAdminCreated");
};

export const adminLogin = (formData) => {
  return api.post("/adminLogin", formData);
};

export const addUser = (formData) => {
  return api.post("/addUser", formData);
};
