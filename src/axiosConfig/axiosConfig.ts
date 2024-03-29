import axios from "axios";

const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH;

export const axiosBaseWrap = axios.create({
  baseURL: API_BASE_PATH,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Service-Id": "client",
  },
});
