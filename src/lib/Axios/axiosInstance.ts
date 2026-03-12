import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://grocery.newcinderella.online",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "405|QuqMHEAH5Kzm2NVBArKsn2dtV2U6E2d4aL6y4INL11df4d28";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
