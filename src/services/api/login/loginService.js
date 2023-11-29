import { api } from "../axios/axiosConfig";

async function login({ email, password }) {
  try {
    const response = await api.post("/sessions", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return new Error(error.message || "Erro ao listar os registros");
  }
}

async function setToken(token) {
  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    console.error(error);
    return new Error(error.message || "Erro ao listar os registros");
  }
}

export const loginService = {
  login,
  setToken,
};
