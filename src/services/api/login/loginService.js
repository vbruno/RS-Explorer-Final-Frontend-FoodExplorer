import { api } from "../axios/axiosConfig";

async function login({ email, password }) {
  try {
    const response = await api.post("/sessions", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return new Error(
      error.response.data.message || "Erro a fazer login no sistema"
    );
  }
}

async function logout() {
  try {
    api.defaults.headers.Authorization = null;
  } catch (error) {
    console.error(error);
    return new Error(
      error.response.data.message || "Erro ao fazer logout no sistema"
    );
  }
}

async function setToken(token) {
  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } catch (error) {
    return new Error(
      error.response.data.message || "Erro ao inserir token no sistema"
    );
  }
}

async function register({ name, email, password }) {
  try {
    const response = await api.post("/users/register", {
      name,
      email,
      password,
    });

    response.data;
  } catch (error) {
    if (error.response.data.message === "User already exists") {
      return new Error("Usuário já existe");
    }
    return new Error(
      error.response.data.message || "Erro ao registrar usuário"
    );
  }
}
export const loginService = {
  login,
  logout,
  setToken,
  register,
};
