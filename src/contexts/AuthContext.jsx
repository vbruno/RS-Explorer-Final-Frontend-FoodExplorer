import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { loginService } from "../services/api/login/loginService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    const response = await loginService.login({ email, password });

    if (response instanceof Error) {
      throw new Error("Incorrect email/password combination");
    }

    const { token, user } = response;

    localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
    localStorage.setItem("@FoodExplorer:token", token);

    loginService.setToken(token);

    setData({ token, user });
  }

  function signOut() {
    localStorage.removeItem("@FoodExplorer:user");
    localStorage.removeItem("@FoodExplorer:token");

    setData({});
  }

  function isAuthenticated() {
    const storageUser = localStorage.getItem("@FoodExplorer:user");
    const storageToken = localStorage.getItem("@FoodExplorer:token");

    if (storageToken && storageUser) {
      const decodedToken = jwtDecode(storageToken);

      if (decodedToken.exp * 1000 < Date.now()) {
        signOut();
        return false;
      }

      return true;
    } else {
      return false;
    }
  }

  function isAdministrator() {
    const storageUser = JSON.parse(localStorage.getItem("@FoodExplorer:user"));

    if (storageUser.role === "admin") {
      return true;
    } else {
      return false;
    }
  }

  // async function updateProfile({ user, avatarFile }) {
  //   try {
  //     if (avatarFile) {
  //       const fileUploadForm = new FormData();
  //       fileUploadForm.append("avatar", avatarFile);

  //       const response = await api.patch("/users/avatar", fileUploadForm);

  //       user.avatar = response.data.avatar;
  //     }

  //     await api.put("/users", user);

  //     localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));

  //     setData({ user, token: data.token });

  //     alert("Perfil atualizado com sucesso");
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data);
  //       alert(error.response.data.error);
  //     } else {
  //       alert(
  //         "Erro ao tentar atualizar o seu perfil, tente novamente mais tarde"
  //       );
  //     }
  //   }
  // }

  useEffect(() => {
    const storageUser = localStorage.getItem("@FoodExplorer:user");
    const storageToken = localStorage.getItem("@FoodExplorer:token");

    if (storageToken && storageUser) {
      const decodedToken = jwtDecode(storageToken);

      if (decodedToken.exp * 1000 < Date.now()) {
        signOut();
      } else {
        setData({ token: storageToken, user: JSON.parse(storageUser) });
        loginService.setToken(storageToken);
      }
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        // updateProfile,
        user: data.user,
        isAuthenticated,
        isAdministrator,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
