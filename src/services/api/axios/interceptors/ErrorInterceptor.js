export function errorInterceptor(error) {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Sem conexão com a internet"));
  }

  if (error.response?.status === 401) {
    // logout
  }

  return Promise.reject(error);
}
