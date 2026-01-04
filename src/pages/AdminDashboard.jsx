import SummaryCard from "../components/dashboard/SummaryCard";

const summaryData = [
  { title: "Total Orders", value: 50, color: "orange" },
  { title: "Revenue", value: "$5,200", color: "black" },
  { title: "Active Bookings", value: 8, color: "green" },
];

const AdminDashboard = () => {
  return (
    <div className="px-6 py-12 font-sans text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {summaryData.map((item, idx) => (
          <SummaryCard key={idx} title={item.title} value={item.value} color={item.color} />
        ))}
      </div>

      {/* Inventory / Orders Table (simplified) */}
      <div className="mt-12 overflow-x-auto bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">101</td>
              <td className="px-4 py-2">Engine Repair</td>
              <td className="px-4 py-2">Ali Rahman</td>
              <td className="px-4 py-2">In Progress</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">102</td>
              <td className="px-4 py-2">Oil Change</td>
              <td className="px-4 py-2">Sara Khan</td>
              <td className="px-4 py-2">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
