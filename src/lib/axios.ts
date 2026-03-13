import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://165.227.142.6:8000/api/v1";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
