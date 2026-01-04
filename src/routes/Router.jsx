import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Landing from "../pages/Landing";
import Booking from "../pages/Booking";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import MechanicProfile from "../pages/MechanicProfile";
import AdminDashboard from "../pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/booking", element: <Booking /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/mechanic/:id", element: <MechanicProfile /> },
      { path: "/admin", element: <AdminDashboard /> },
    ],
  },
]);
