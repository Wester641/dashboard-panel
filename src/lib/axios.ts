import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.0.32:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
