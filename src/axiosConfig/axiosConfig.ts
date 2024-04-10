import axios from "axios";
import { VITE_API_BASE_PATH } from "../constants/envs";

const API_BASE_PATH = VITE_API_BASE_PATH;

export const axiosBaseWrap = axios.create({
  baseURL: API_BASE_PATH,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Service-Id": "client",
  },
});
