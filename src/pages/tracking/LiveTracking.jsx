import { useAuth } from "../../context/AuthContext";
import MechanicView from "./MechanicView";
import OwnerView from "./OwnerView";
import AdminView from "./AdminView";

const LiveTracking = () => {
    const { user } = useAuth();
  // user.role = "mechanic" | "owner" | "admin"

//   👉Add marker animation
//   👉 Add traffic ETA
//   👉 Optimize for 1000 + mechanics

  return (
        <section className="p-6 min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-center">
                Live Tracking
            </h1>

            {user.role === "mechanic" && <MechanicView />}
            {user.role === "owner" && <OwnerView />}
            {user.role === "admin" && <AdminView />}
        </section>
    );
};

export default LiveTracking;
