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
