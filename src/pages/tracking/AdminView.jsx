import LiveMap from "../maps/LiveMap";

const AdminView = () => {
  const allMechanics = [
    {
      id: 1,
      name: "Mechanic A",
      status: "Available",
      position: { lat: 28.6111, lng: 77.2061 },
    },
    {
      id: 2,
      name: "Mechanic B",
      status: "On Job",
      position: { lat: 28.6168, lng: 77.2123 },
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">All Mechanics Live</h2>
      <LiveMap markers={allMechanics} />
    </div>
  );
};

export default AdminView;
