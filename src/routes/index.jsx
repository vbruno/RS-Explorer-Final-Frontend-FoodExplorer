import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainLayout } from "../layout/MainLayout";

import {
  Home,
  Dish,
  FormDish,
  OrderAndPay,
  SignIn,
  SignUp,
  ErrorPage,
} from "../pages";
import { PrivateRoute } from "./private.routes";
import { AdminRoute } from "./admin.routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dish" element={<Dish />} />
          <Route path="/ordersAndPay" element={<OrderAndPay />} />
          <Route path="/" element={<AdminRoute />}>
            <Route path="/newDish" element={<FormDish />} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Route>
  )
);
