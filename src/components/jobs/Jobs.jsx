// // src/components/jobs/Jobs.jsx
// import { useEffect, useRef, useState } from "react";

// const Jobs = ({ jobs, updateStatus }) => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [reason, setReason] = useState("");
//   const [otherReason, setOtherReason] = useState("");
//   const [toast, setToast] = useState("");

//   const modalRef = useRef(null);

//   /* ======================
//      Escape key closes modal
//   ====================== */
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   const closeModal = () => {
//     setSelectedJob(null);
//     setReason("");
//     setOtherReason("");
//   };

//   const showToast = (msg) => {
//     setToast(msg);
//     setTimeout(() => setToast(""), 2500);
//   };

//   const submitFailure = () => {
//     const finalReason = reason === "Other" ? otherReason : reason;
//     updateStatus(selectedJob.id, "failed", finalReason);
//     closeModal();
//     showToast("Job marked as failed successfully");
//   };

//   return (
//     <>
//       {/* ======================
//           DESKTOP / TABLE VIEW
//       ====================== */}
//       <div className="hidden md:block">
//         <table className="w-full border rounded-lg overflow-hidden">
//           <thead className="bg-gray-100 text-left">
//             <tr>
//               <th className="p-3">Service</th>
//               <th className="p-3">Customer</th>
//               <th className="p-3">Location</th>
//               <th className="p-3">Price</th>
//               <th className="p-3">Status</th>
//               <th className="p-3 text-center">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <tr key={job.id} className="border-t">
//                 <td className="p-3">{job.service}</td>
//                 <td className="p-3">{job.customer}</td>
//                 <td className="p-3">{job.location}</td>
//                 <td className="p-3">৳ {job.price}</td>
//                 <td className="p-3 capitalize">{job.status}</td>
//                 <td className="p-3 text-center space-x-2">
//                   {job.status === "assigned" && (
//                     <button
//                       className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//                       onClick={() => {
//                         updateStatus(job.id, "accepted");
//                         showToast("Job accepted successfully");
//                       }}
//                     >
//                       Accept
//                     </button>
//                   )}

//                   {job.status === "accepted" && (
//                     <button
//                       className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600"
//                       onClick={() => {
//                         updateStatus(job.id, "in-progress");
//                         showToast("Job started");
//                       }}
//                     >
//                       Start
//                     </button>
//                   )}

//                   {job.status === "in-progress" && (
//                     <>
//                       <button
//                         className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                         onClick={() => {
//                           updateStatus(job.id, "completed");
//                           showToast("Job completed successfully");
//                         }}
//                       >
//                         Complete
//                       </button>
//                       <button
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                         onClick={() => setSelectedJob(job)}
//                       >
//                         Unable
//                       </button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* ======================
//           MOBILE / CARD VIEW
//       ====================== */}
//       <div className="md:hidden space-y-4">
//         {jobs.map((job) => (
//           <div key={job.id} className="border rounded-xl p-4 shadow-sm">
//             <h3 className="font-semibold text-lg">{job.service}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               Customer: {job.customer}
//             </p>
//             <p className="text-sm text-gray-600 mt-1">
//               Location: {job.location}
//             </p>
//             <p className="text-gray-700 font-medium mt-1">
//               ৳ {job.price}
//             </p>
//             <p className="text-sm mt-1">
//               Status: <span className="capitalize">{job.status}</span>
//             </p>

//             {job.status === "assigned" && (
//               <button
//                 className="mt-3 w-full bg-blue-500 text-white py-2 rounded"
//                 onClick={() => {
//                   updateStatus(job.id, "accepted");
//                   showToast("Job accepted successfully");
//                 }}
//               >
//                 Accept Job
//               </button>
//             )}

//             {job.status === "accepted" && (
//               <button
//                 className="mt-3 w-full bg-orange-500 text-white py-2 rounded"
//                 onClick={() => {
//                   updateStatus(job.id, "in-progress");
//                   showToast("Job started");
//                 }}
//               >
//                 Start Job
//               </button>
//             )}

//             {job.status === "in-progress" && (
//               <div className="flex gap-2 mt-3">
//                 <button
//                   className="flex-1 bg-green-500 text-white py-2 rounded"
//                   onClick={() => {
//                     updateStatus(job.id, "completed");
//                     showToast("Job completed successfully");
//                   }}
//                 >
//                   Complete
//                 </button>
//                 <button
//                   className="flex-1 bg-red-500 text-white py-2 rounded"
//                   onClick={() => setSelectedJob(job)}
//                 >
//                   Unable
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* ======================
//           FAILURE MODAL
//       ====================== */}
//       {selectedJob && (
//         <section
//           className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 animate-fadeIn"
//           onClick={closeModal}
//         >
//           <div
//             ref={modalRef}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 animate-slideUp"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               Unable to Complete Job
//             </h2>
//             <p className="text-sm text-gray-500 mt-1">
//               কেন কাজটি সম্পন্ন করা যায়নি? (Select a reason below)
//             </p>

//             {/* Radio Options */}
//             <div className="mt-4 space-y-3">
//               {[
//                 { value: "Required parts are not available", label: "Parts পাওয়া যায়নি (Required parts unavailable)" },
//                 { value: "The problem is more complex than expected", label: "সমস্যাটি খুব জটিল (Too complex)" },
//                 { value: "The customer was not available", label: "Customer উপস্থিত ছিলেন না" },
//                 { value: "The job is unsafe to perform", label: "কাজটি করা নিরাপদ নয়" },
//                 { value: "Other", label: "Other (অন্যান্য কারণ)" },
//               ].map((opt) => (
//                 <label key={opt.value} className="flex items-start gap-2 cursor-pointer">
//                   <input
//                     type="radio"
//                     name="reason"
//                     value={opt.value}
//                     checked={reason === opt.value}
//                     onChange={(e) => setReason(e.target.value)}
//                     className="mt-1"
//                   />
//                   <span className="text-sm text-gray-700">{opt.label}</span>
//                 </label>
//               ))}
//             </div>

//             {/* Other textarea */}
//             {reason === "Other" && (
//               <textarea
//                 rows="3"
//                 className="w-full mt-4 border bg-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
//                 placeholder="অনুগ্রহ করে কারণটি লিখুন..."
//                 value={otherReason}
//                 onChange={(e) => setOtherReason(e.target.value)}
//               />
//             )}

//             {/* Actions */}
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={!reason || (reason === "Other" && !otherReason)}
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
//                 onClick={submitFailure}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ======================
//           TOAST NOTIFICATION
//       ====================== */}
//       {toast && (
//         <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow animate-fadeIn">
//           {toast}
//         </div>
//       )}
//     </>
//   );
// };

// export default Jobs;


// src/components/jobs/Jobs.jsx
// import { useState } from "react";

// const Jobs = ({ jobs, updateStatus }) => {
//   const [selectedReason, setSelectedReason] = useState("");
//   const [showReasonInput, setShowReasonInput] = useState(null); // job id

//   const handleAccept = (id) => updateStatus(id, "accepted");
//   const handleStart = (id) => updateStatus(id, "in-progress");
//   const handleComplete = (id) => updateStatus(id, "completed");
//   const handleReject = (id) => setShowReasonInput(id);

//   const handleSubmitReason = (id) => {
//     if (!selectedReason) return alert("Please provide a reason!");
//     updateStatus(id, "rejected", selectedReason);
//     setShowReasonInput(null);
//     setSelectedReason("");
//   };

//   return (
//     <div className="space-y-6">
//       {jobs.map(job => (
//         <div key={job.id} className="border rounded-xl p-4 shadow-sm bg-gray-50">
//           <h3 className="text-xl font-semibold">{job.service}</h3>
//           <p><strong>Customer:</strong> {job.customer}</p>
//           <p><strong>Location:</strong> {job.location}</p>
//           <p><strong>Price:</strong> ${job.price}</p>
//           <p>
//             <strong>Status:</strong>{" "}
//             <span className={`font-bold ${
//               job.status === "completed" ? "text-green-600" :
//               job.status === "in-progress" ? "text-blue-600" :
//               job.status === "rejected" ? "text-red-600" :
//               "text-yellow-600"
//             }`}>
//               {job.status}
//             </span>
//           </p>

//           {job.status !== "completed" && job.status !== "rejected" && (
//             <div className="mt-3 flex flex-wrap gap-2">
//               {job.status === "in-progress" ? (
//                 <button
//                   onClick={() => handleComplete(job.id)}
//                   className="bg-green-600 text-white px-3 py-1 rounded"
//                 >
//                   Complete
//                 </button>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => handleAccept(job.id)}
//                     className="bg-blue-600 text-white px-3 py-1 rounded"
//                   >
//                     Accept
//                   </button>
//                   <button
//                     onClick={() => handleReject(job.id)}
//                     className="bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Reject
//                   </button>
//                 </>
//               )}
//             </div>
//           )}

//           {showReasonInput === job.id && (
//             <div className="mt-3">
//               <input
//                 type="text"
//                 placeholder="Reason for rejection"
//                 value={selectedReason}
//                 onChange={(e) => setSelectedReason(e.target.value)}
//                 className="border px-3 py-2 rounded w-full md:w-1/2"
//               />
//               <button
//                 onClick={() => handleSubmitReason(job.id)}
//                 className="ml-2 bg-red-600 text-white px-3 py-2 rounded"
//               >
//                 Submit
//               </button>
//             </div>
//           )}

//           {job.failureReason && (
//             <p className="mt-2 text-red-600">
//               Rejection Reason: {job.failureReason}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Jobs;


import { useEffect, useRef, useState } from "react";

const Jobs = ({ jobs, updateStatus }) => {
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

  const closeModal = () => {
    setSelectedJob(null);
    setReason("");
    setOtherReason("");
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const submitFailure = () => {
    const finalReason = reason === "Other" ? otherReason : reason;
    updateStatus(selectedJob.id, "failed", finalReason);
    closeModal();
    showToast("Job marked as failed successfully");
  };

  return (
    <section className="w-full">
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Service</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-3">{job.service}</td>
                <td className="p-3 capitalize">{job.status}</td>
                <td className="p-3 text-center space-x-2">
                  {job.status === "in-progress" && (
                    <>
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => {
                          updateStatus(job.id, "completed");
                          showToast("Job completed successfully");
                        }}
                      >
                        Complete
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => setSelectedJob(job)}
                      >
                        Unable
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-lg">{job.service}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Status: <span className="capitalize">{job.status}</span>
            </p>

            {job.status === "in-progress" && (
              <div className="flex gap-2 mt-3">
                <button
                  className="flex-1 bg-green-500 text-white py-2 rounded"
                  onClick={() => {
                    updateStatus(job.id, "completed");
                    showToast("Job completed successfully");
                  }}
                >
                  Complete
                </button>
                <button
                  className="flex-1 bg-red-500 text-white py-2 rounded"
                  onClick={() => setSelectedJob(job)}
                >
                  Unable
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= FAILURE MODAL ================= */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 animate-slideUp"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Unable to Complete Job
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              কেন কাজটি সম্পন্ন করা যায়নি? (Select a reason)
            </p>

            <div className="mt-4 space-y-3">
              {[
                {
                  value: "Required parts are not available",
                  label: "Parts পাওয়া যায়নি",
                },
                {
                  value: "The problem is more complex than expected",
                  label: "সমস্যাটি খুব জটিল",
                },
                {
                  value: "The customer was not available",
                  label: "Customer উপস্থিত ছিলেন না",
                },
                {
                  value: "The job is unsafe to perform",
                  label: "কাজটি করা নিরাপদ নয়",
                },
                {
                  value: "Other",
                  label: "Other (অন্যান্য কারণ)",
                },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-start gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={opt.value}
                    checked={reason === opt.value}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>

            {reason === "Other" && (
              <textarea
                rows="3"
                className="w-full mt-4 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                placeholder="অনুগ্রহ করে কারণটি লিখুন..."
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            )}

            <div className="flex justify-end gap-3 mt-6">
              <button
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                disabled={!reason || (reason === "Other" && !otherReason)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
                onClick={submitFailure}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= TOAST ================= */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow animate-fadeIn">
          {toast}
        </div>
      )}
    </section>
  );
};

export default Jobs;
