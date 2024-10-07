import React from "react";
import { useRoutes } from "react-router-dom";
import UserPage from "../layouts/UserPage";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";

const CustomerRoute = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UserPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default CustomerRoute;
