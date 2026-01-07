// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Services from "../pages/Services";
import Mechanics from "../pages/mechanics/mechanics";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import SingleMechanicDashboard from "../components/dashboard/SingleMechanicDashboard";
import AssignedJobs from "../pages/mechanics/AssignedJobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Landing /> },
      { path: "services", element: <Services /> },
      { path: "mechanics", element: <Mechanics /> },

      // Mechanic dashboard (id param optional)
      {
        path: "mechanics-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["mechanic"]}>
            <SingleMechanicDashboard />
          </ProtectedRoute>
        ),
      },

       {
        path: "jobs",
        element: (
          <ProtectedRoute allowedRoles={["mechanic"]}>
            <AssignedJobs />
          </ProtectedRoute>
        ),
      },

      {
        // Admin dashboard
        path: "admin",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },

      // User dashboard
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
