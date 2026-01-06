import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { demoUser } from "../data/demoUser"; // optional

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={demoUser} />  {/* Pass user for role-based menu */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
