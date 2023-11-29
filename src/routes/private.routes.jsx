import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../Hooks/auth";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  const auth = isAuthenticated(); // determine if authorized, from context or however you're doing it

  console.log(auth);
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
