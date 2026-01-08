import { useEffect, useRef, useState } from "react";
import { assignedJobsData } from "../../data/assignedJobs";
import {
  FaCheck,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

const ITEMS_PER_PAGE = 5;

const AssignedJobs = () => {
  const [jobs, setJobs] = useState(assignedJobsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [reason, setReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [toast, setToast] = useState("");

  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const closeModal = () => {
    setSelectedJob(null);
    setReason("");
    setOtherReason("");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const updateStatus = (id, status, failureReason = "") => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, status, failureReason } : job
      )
    );
  };

  const handleAccept = (id) => {
    updateStatus(id, "in-progress");
    showToast("Job accepted and now in-progress ✅");
  };

  const submitFailure = () => {
    const finalReason = reason === "Other" ? otherReason : reason;
    updateStatus(selectedJob.id, "failed", finalReason);
    closeModal();
    showToast("Job marked as failed ❌");
  };

  const renderActionButtons = (job) => {
    switch (job.status) {
      case "assigned":
        return (
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
            onClick={() => handleAccept(job.id)}
          >
            <FaCheck /> Accept
          </button>
        );

      case "in-progress":
        return (
          <div className="flex gap-2 justify-center">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              onClick={() => {
                updateStatus(job.id, "completed");
                showToast("Job completed successfully 🎉");
              }}
            >
              <FaCheck /> Complete
            </button>

            <button
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition"
              onClick={() => setSelectedJob(job)}
            >
              <FaExclamationTriangle /> Unable
            </button>
          </div>
        );

      case "failed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-red-100 text-red-700 font-medium rounded-full">
            <FaTimes /> Failed
          </span>
        );

      case "completed":
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 font-medium rounded-full">
            <FaCheck /> Completed
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <section className="p-6 md:p-10 min-h-screen bg-gray-50">
      <div className="justify-center flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Assigned <span className="text-orange-500">Jobs</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          You are currently assigned {jobs.length} jobs. Manage and update their status here.
        </p>  </div>
      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.id} className="border-b">
                <td className="p-3">{job.service}</td>
                <td className="p-3 text-gray-600">{job.customer}</td>
                <td className="p-3 text-gray-600">{job.location}</td>
                <td className="p-3 font-semibold">৳ {job.price}</td>
                <td className="p-3 capitalize">{job.status}</td>
                <td className="p-3 text-center">
                  {renderActionButtons(job)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {currentJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="font-semibold">{job.service}</h3>
            <p className="text-sm text-gray-500">
              {job.customer} • {job.location}
            </p>
            <p className="font-semibold mt-1">৳ {job.price}</p>
            <p className="text-sm mt-1">
              Status: {job.status}
            </p>
            <div className="mt-3 flex gap-2">
              {renderActionButtons(job)}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        {/* Prev Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`px-4 py-2 rounded-full font-semibold transition
      ${currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:scale-105 shadow-md transform"
            }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-full font-semibold transition
        ${currentPage === page
                ? "bg-orange-500 text-white shadow-lg scale-105 transform"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105 transform"
              }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`px-4 py-2 rounded-full font-semibold transition
      ${currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:scale-105 shadow-md transform"
            }`}
        >
          Next
        </button>
      </div>



      {/* FAILURE MODAL */}
      {selectedJob && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaExclamationTriangle className="text-red-500" />
              Unable to Complete Job
            </h2>

            <div className="mt-4 space-y-2">
              {[
                "Parts not available",
                "Problem too complex",
                "Customer not available",
                "Unsafe to perform",
                "Other",
              ].map((opt) => (
                <label key={opt} className="flex gap-2">
                  <input
                    type="radio"
                    name="reason"
                    value={opt}
                    checked={reason === opt}
                    onChange={(e) => setReason(e.target.value)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>

            {reason === "Other" && (
              <textarea
                className="w-full bg-white border rounded mt-3 p-2"
                placeholder="Enter proper reason..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            )}

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                disabled={!reason || (reason === "Other" && !otherReason)}
                onClick={submitFailure}
                className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-4 py-2 rounded">
          {toast}
        </div>
      )}
    </section>
  );
};

export default AssignedJobs;
