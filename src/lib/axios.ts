import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://165.227.142.6/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
