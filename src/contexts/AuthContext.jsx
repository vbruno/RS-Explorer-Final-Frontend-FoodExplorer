import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import { loginService } from "../services/api/login/loginService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    await loginService.connection().catch((error) => {
      throw alert(error.message);
    });

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

  useEffect(() => {
    const storageUser = localStorage.getItem("@FoodExplorer:user");
    const storageToken = localStorage.getItem("@FoodExplorer:token");

    if (!storageToken || !storageUser) {
      signOut();
    }

    loginService.connection().catch(
      (error) => {
        throw alert(error.message);
      },
      [loginService]
    );

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
        user: data.user,
        isAuthenticated,
        isAdministrator,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
