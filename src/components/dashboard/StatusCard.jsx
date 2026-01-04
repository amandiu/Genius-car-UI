const statusColors = {
  "In Progress": "bg-orange-500",
  Completed: "bg-green-500",
  Pending: "bg-gray-400",
};

const StatusCard = ({ service, status }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 w-64 text-center hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-2">{service}</h3>
      <span className={`px-3 py-1 rounded text-white ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default StatusCard;
