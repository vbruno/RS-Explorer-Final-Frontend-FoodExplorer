import { createContext, useContext, useState, useEffect } from "react";

import { loginService } from "../services/api/login/loginService";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await loginService.login({ email, password });

      const { token, user } = response;

      localStorage.setItem("@FoodExplorer:user", JSON.stringify(user));
      localStorage.setItem("@FoodExplorer:token", token);

      loginService.setToken(token);

      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("Erro ao realizar login, tente novamente mais tarde");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@RocketNotes:user");
    localStorage.removeItem("@RocketNotes:token");

    setData({});
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

  //     localStorage.setItem("@RocketNotes:user", JSON.stringify(user));

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
    const storageUser = localStorage.getItem("@RocketNotes:user");
    const storageToken = localStorage.getItem("@RocketNotes:token");

    if (storageToken && storageUser) {
      // api.defaults.headers["Authorization"] = `Bearer ${storageToken}`;
      loginService.setToken(storageToken);
      setData({ token: storageToken, user: JSON.parse(storageUser) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        // updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
