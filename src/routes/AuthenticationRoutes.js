import { Navigate } from "react-router-dom";
import MinimalLayout from "../layouts/MinimalLayout";
import SignIn from "../pages/Auth/SignIn";

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "*",
      element: <Navigate to="/page-not-found" />,
    },
  ],
};

export default AuthenticationRoutes;
