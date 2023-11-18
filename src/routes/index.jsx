import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { MainLayout } from "../layout/MainLayout";
import { Home, Dish, SignIn, SignUp, ErrorPage } from "../pages";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [{ path: "/", element: <Home /> }],
//   },
//   { path: "/signIn", element: <SignIn /> },
//   { path: "/signUp", element: <SignUp /> },
// ]);

const auth = 1;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      {auth ? (
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dish />} />
        </Route>
      ) : (
        <Route path="/" element={<SignIn />} />
      )}
      <Route path="/signUp" element={<SignUp />} />
    </Route>
  )
);
