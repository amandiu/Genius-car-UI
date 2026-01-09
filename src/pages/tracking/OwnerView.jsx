import LiveMap from "../maps/LiveMap";

const OwnerView = () => {
  const mechanic = [
    {
      id: 1,
      name: "Mechanic - Rahul",
      status: "Arriving in 8 mins",
      position: { lat: 28.6122, lng: 77.2084 },
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Track Mechanic</h2>
      <LiveMap markers={mechanic} />
    </div>
  );
};

export default OwnerView;
