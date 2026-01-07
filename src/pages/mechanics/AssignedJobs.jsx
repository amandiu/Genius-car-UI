// src/components/dashboard/AssignedJobs.jsx
import React, { useEffect, useState } from "react";
import {
  FaTools,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const AssignedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulated API
    setJobs([
      {
        id: 1,
        customer: "Rahim Uddin",
        problem: "Car engine overheating",
        location: "Gulshan, Dhaka",
        status: "active",
        assignedAt: "2 hours ago",
      },
      {
        id: 2,
        customer: "Karim Mia",
        problem: "Bike chain issue",
        location: "Dhanmondi, Dhaka",
        status: "pending",
        assignedAt: "Yesterday",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-6 shadow">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <FaTools /> Assigned Jobs
          </h1>
          <p className="text-sm opacity-90">
            Jobs assigned to you by admin
          </p>
        </div>

        {/* Jobs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
            >
              {/* Job Header */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="font-semibold text-slate-800">
                  {job.customer}
                </h2>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full
                  ${
                    job.status === "active"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-amber-100 text-amber-600"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              {/* Details */}
              <p className="text-slate-600 mb-2">{job.problem}</p>

              <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <FaMapMarkerAlt className="text-orange-500" />
                {job.location}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <FaClock className="text-orange-500" />
                Assigned {job.assignedAt}
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-medium">
                  Start Job
                </button>
                <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
                  <FaCheckCircle /> Complete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="text-center text-slate-500 mt-12">
            No jobs assigned yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignedJobs;
