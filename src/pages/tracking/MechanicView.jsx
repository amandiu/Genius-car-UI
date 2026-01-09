import LiveMap from "../../components/map/LiveMap";

const MechanicView = () => {
  const mechanicLocation = [
    {
      id: 1,
      name: "You",
      status: "On the way",
      position: { lat: 28.6145, lng: 77.2105 },
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Live Location</h2>
      <LiveMap markers={mechanicLocation} />
    </div>
  );
};

export default MechanicView;
