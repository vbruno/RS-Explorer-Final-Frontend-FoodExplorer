import axios from "axios";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";

// const port = 3333;
// const URL_BASE = `http://192.168.50.134:${port}`;
const URL_BASE = `https://rs-backend-foodexplorer.onrender.com`;

export const api = axios.create({
  baseURL: URL_BASE,
  timeout: 25000,
});

// api.interceptors.request.use();

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);
