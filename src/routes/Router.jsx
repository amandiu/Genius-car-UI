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
// import ServiceDetails from "../pages/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },

      {
        path: "services",
        children: [
          { index: true, element: <Services /> }, // /services
          // { path: ":id", element: <ServiceDetails /> }, // /services/3
        ],
      },

      { path: "booking", element: <Booking /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "mechanic/:id", element: <MechanicProfile /> },
      { path: "admin", element: <AdminDashboard /> },
    ],
  },
]);
