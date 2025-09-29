// src/lib/axios.ts - БЕЗ ИЗМЕНЕНИЙ
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});
