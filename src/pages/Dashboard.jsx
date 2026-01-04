import SummaryCard from "../components/dashboard/SummaryCard";
import StatusCard from "../components/dashboard/StatusCard";
import BookingTable from "../components/dashboard/BookingTable";

const summaryData = [
  { title: "Total Orders", value: 24, color: "orange" },
  { title: "Active Bookings", value: 6, color: "green" },
  { title: "Revenue", value: "$2,340", color: "black" },
];

const statusData = [
  { service: "Engine Repair", status: "In Progress" },
  { service: "Oil Change", status: "Completed" },
  { service: "Battery Service", status: "Pending" },
];

const bookings = [
  { id: 1, service: "Engine Repair", date: "2026-01-05", status: "In Progress" },
  { id: 2, service: "Oil Change", date: "2026-01-07", status: "Completed" },
];

const Dashboard = () => {
  return (
    <div className="px-6 py-12 font-sans text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">User Dashboard</h2>

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        {summaryData.map((item, idx) => (
          <SummaryCard key={idx} title={item.title} value={item.value} color={item.color} />
        ))}
      </div>

      {/* Status Cards */}
      <div className="flex flex-wrap gap-6 mb-12 justify-center">
        {statusData.map((item, idx) => (
          <StatusCard key={idx} service={item.service} status={item.status} />
        ))}
      </div>

      {/* Booking Table */}
      <BookingTable bookings={bookings} />
    </div>
  );
};

export default Dashboard;
