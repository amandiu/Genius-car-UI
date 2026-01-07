import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useAuth } from "../context/AuthContext"; // AuthContext import

const MainLayout = () => {
  const { user } = useAuth(); // get current user from context

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />  {/* Pass user from context */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
