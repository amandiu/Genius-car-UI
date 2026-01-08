import { useEffect, useState } from "react";
import LiveMap from "../../components/map/LiveMap";
import { getFakeLocation } from "../../utils/fakeLocation";

const AdminView = () => {
  const [mechanicLocation, setMechanicLocation] = useState(getFakeLocation());
  const [ownerLocation, setOwnerLocation] = useState(getFakeLocation());

  useEffect(() => {
    const interval = setInterval(() => {
      setMechanicLocation(getFakeLocation());
      setOwnerLocation(getFakeLocation());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <LiveMap
        title="Mechanic Live Location"
        location={mechanicLocation}
      />
      <LiveMap
        title="Car Owner Live Location"
        location={ownerLocation}
      />
    </div>
  );
};

export default AdminView;
