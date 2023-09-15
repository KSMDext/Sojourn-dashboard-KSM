import MinimalLayout from "../layouts/MinimalLayout";
import SignIn from "../pages/Auth/SignIn";

const ErrorRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/page-not-found",

      //   TODO: change to 404 page
      //   Show a 404 page not found here

      element: <SignIn />,
    },
  ],
};

export default ErrorRoutes;













