import axios from "axios";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";

const URL_BASE =
  import.meta.env.MODE === "bkLocal"
    ? `http://localhost:3333`
    : `https://rs-backend-foodexplorer.onrender.com`;

export const api = axios.create({
  baseURL: URL_BASE,
  timeout: 25000,
});

// api.interceptors.request.use();

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);
