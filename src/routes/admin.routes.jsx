import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/auth";

export const AdminRoute = () => {
  const { isAdministrator } = useAuth();

  const auth = isAdministrator(); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/" />;
};
