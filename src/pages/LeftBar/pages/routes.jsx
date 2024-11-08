import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../Layout"; // Adjust the path to where your Layout component is
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

// Lazy loaded components
const Home = React.lazy(() => import("../../pages/home/Home"));
const Reels = React.lazy(() => import("../../pages/reels/Reels"));
const Profile = React.lazy(() => import("../../pages/profile/Profile"));

const ProtectedRoute = ({ children }) => {
  const currentUser = true; // Simulated authentication
  return currentUser ? children : <Navigate to="/login" />;
};

// Define all routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "reels",
        element: <Reels />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
