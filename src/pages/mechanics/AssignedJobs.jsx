// src/pages/mechanics/AssignedJobs.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Jobs from "../../components/jobs/Jobs";

const AssignedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy backend jobs (API-ready)
  const dummyJobs = [
    {
      id: "job1",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job2",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job3",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job4",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job5",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job6",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    }, {
      id: "job7",
      service: "Engine Repair",
      customer: "Rahim",
      location: "Dhanmondi",
      price: 2500,
      status: "in-progress",
      mechanicId: "mech001",
    },
  ];

  useEffect(() => {
    if (!user?.id) return;

    setTimeout(() => {
      const myJobs = dummyJobs.filter(job => job.mechanicId === user.id);
      setJobs(myJobs);
      setLoading(false);
    }, 500);
  }, [user]);

  const updateStatus = (id, status, reason = "") => {
    setJobs(prev =>
      prev.map(job =>
        job.id === id
          ? { ...job, status, failureReason: reason }
          : job
      )
    );
  };

  /* =======================
     ⏳ Loading Skeleton
  ======================== */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  /* =======================
     📭 Empty State
  ======================== */
  if (jobs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-2xl shadow text-center max-w-md">
          <h2 className="text-2xl font-bold text-gray-700">
            No Assigned Jobs
          </h2>
          <p className="text-gray-500 mt-3">
            You don’t have any active jobs right now.  
            New jobs will appear here once assigned.
          </p>
        </div>
      </div>
    );
  }

  /* =======================
     📋 Main Content
  ======================== */
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Assigned Jobs
          </h1>
          <p className="text-gray-600 mt-2">
            Track, manage and update your assigned service jobs efficiently.
          </p>
        </div>

        {/* Jobs Section */}
        <div className="bg-white rounded-2xl shadow p-4 md:p-6">
          <Jobs jobs={jobs} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default AssignedJobs;
