import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Landing from "../pages/Landing";
import Booking from "../pages/Booking";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import MechanicProfile from "../pages/MechanicProfile";
import AdminDashboard from "../pages/AdminDashboard";
import Services from "../pages/Services";
import Mechanics from "../pages/mechanics/mechanics";
import MechanicsDashboard from "../pages/mechanics/MechanicsDashboard";
import ErrorPage from "../pages/ErrorPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import { demoUser } from "../data/demoUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Public routes
      { index: true, element: <Landing /> },
      { path: "services", element: <Services /> },
      { path: "booking", element: <Booking /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "mechanics", element: <Mechanics /> },
      { path: "mechanic/:id", element: <MechanicProfile /> },

      // Protected routes
      {
        path: "dashboard",
        element: (
          <ProtectedRoute
            allowedRoles={["user", "mechanic", "admin"]}
            user={demoUser}
          >
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "mechanics-dashboard",
        element: (
          <ProtectedRoute allowedRoles={["mechanic"]} user={demoUser}>
            <MechanicsDashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "admin",
        element: (
          <ProtectedRoute allowedRoles={["admin"]} user={demoUser}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
