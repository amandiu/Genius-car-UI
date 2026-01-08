const LiveMap = ({ title, location }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>

      <div className="h-48 flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-center">
          <p className="text-sm">Latitude: {location.lat.toFixed(5)}</p>
          <p className="text-sm">Longitude: {location.lng.toFixed(5)}</p>
          <p className="text-xs text-gray-500 mt-2">
            (Live map placeholder)
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;
