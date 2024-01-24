import axios from "axios";

// CREATE AXIOS INSTANCE
const api = axios.create({
  baseURL: "https://mycampusmate-be.fly.dev",
});

// INTERCEPT REQUEST, BEFORE SENDING THE REQUEST, ADD TOKEN HEADER FIRST IF TOKEN EXIST
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
