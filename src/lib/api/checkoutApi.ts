import axios from "axios";

const api = axios.create({
  baseURL: "https://grocery.newcinderella.online/api",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  try {
    const persisted = localStorage.getItem("persist:login");
    if (persisted) {
      const parsed = JSON.parse(persisted);
      const token = parsed.token?.replace(/"/g, "");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (e) {
    console.error("Failed to read token from persist:login", e);
  }
  return config;
});

export default api;
