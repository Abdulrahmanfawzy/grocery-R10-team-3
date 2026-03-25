import axios, { type AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://grocery.newcinderella.online",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const axiosInstance = axios.create(config);

// Always use the fixed authentication token for every request
const FIXED_TOKEN = localStorage.getItem("token");

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${FIXED_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
