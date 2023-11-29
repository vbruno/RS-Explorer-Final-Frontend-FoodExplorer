import axios from "axios";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import { responseInterceptor } from "./interceptors/ResponseInterceptor";

export const URL_BASE = "http://localhost:3333";

export const api = axios.create({
  baseURL: URL_BASE,
  timeout: 15000,
});

// api.interceptors.request.use();

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);
