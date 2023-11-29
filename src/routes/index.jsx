import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainLayout } from "../layout/MainLayout";

import { Home, Dish, SignIn, SignUp, ErrorPage } from "../pages";
import { PrivateRoute } from "./private.routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dish" element={<Dish />} />
        </Route>
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Route>
  )
);
