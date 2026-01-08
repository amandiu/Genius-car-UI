import { useEffect, useState } from "react";
import LiveMap from "../../components/map/LiveMap";
import { getFakeLocation } from "../../utils/fakeLocation";

const OwnerView = () => {
  const [mechanicLocation, setMechanicLocation] = useState(getFakeLocation());

  useEffect(() => {
    const interval = setInterval(() => {
      setMechanicLocation(getFakeLocation());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LiveMap
      title="Mechanic Live Location"
      location={mechanicLocation}
    />
  );
};

export default OwnerView;
