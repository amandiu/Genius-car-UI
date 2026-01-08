import { useEffect, useState } from "react";
import LiveMap from "../../components/map/LiveMap";
import { getFakeLocation } from "../../utils/fakeLocation";

const MechanicView = () => {
  const [ownerLocation, setOwnerLocation] = useState(getFakeLocation());

  useEffect(() => {
    const interval = setInterval(() => {
      setOwnerLocation(getFakeLocation());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveMap
      title="Car Owner Live Location"
      location={ownerLocation}
    />
  );
};

export default MechanicView;
