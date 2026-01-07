import { useState } from "react";
import RatingStars from "../mechanics/RatingStars";
import { mechanicsData } from "../../data/mechanics.data";

const sampleJobs = [
  { id: 1, customer: "Ali Rahman", service: "Brake Repair", status: "pending" },
  { id: 2, customer: "Sara Khan", service: "AC Service", status: "in-progress" },
  { id: 3, customer: "Rahim Ali", service: "Oil Change", status: "completed" },
];

const MechanicDashboard = () => {
  const [jobs, setJobs] = useState(sampleJobs);

  const earnings = {
    today: 2000,
    month: 15000,
    total: 75000,
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Mechanic Dashboard</h1>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(earnings).map(([key, value]) => (
          <div
            key={key}
            className="bg-white shadow rounded-lg p-6 text-center"
          >
            <h2 className="text-xl font-semibold capitalize">{key}</h2>
            <p className="text-2xl font-bold">৳{value}</p>
          </div>
        ))}
      </div>

      {/* Assigned Jobs */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Assigned Jobs</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td>{idx + 1}</td>
                <td>{job.customer}</td>
                <td>{job.service}</td>
                <td
                  className={`px-2 py-1 rounded text-white text-sm ${
                    job.status === "pending"
                      ? "bg-yellow-500"
                      : job.status === "in-progress"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                >
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reviews */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {mechanicsData[0].reviews.length > 0 ? (
          <div className="flex flex-col gap-4">
            {mechanicsData[0].reviews.map((r, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded shadow">
                <p className="mb-1">"{r.comment}"</p>
                <span className="font-semibold">{r.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default MechanicDashboard;
