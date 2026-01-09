import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { AuthProvider } from "./context/AuthContext";
import { LoadScript } from "@react-google-maps/api";
import "./index.css";

const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoadScript googleMapsApiKey={GOOGLE_MAPS_KEY}>

    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>

  </LoadScript>

);











// import { useEffect, useRef, useState } from "react";

// const Jobs = ({ jobs, updateStatus }) => {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [reason, setReason] = useState("");
//   const [otherReason, setOtherReason] = useState("");
//   const [toast, setToast] = useState("");

//   const modalRef = useRef(null);

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
//     <section className="w-full">
//       {/* ================= DESKTOP TABLE ================= */}
//       <div className="hidden md:block">
//         <table className="w-full border rounded-lg overflow-hidden">
//           <thead className="bg-gray-100 text-left">
//             <tr>
//               <th className="p-3">Service</th>
//               <th className="p-3">Status</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {jobs.map((job) => (
//               <tr key={job.id} className="border-t">
//                 <td className="p-3">{job.service}</td>
//                 <td className="p-3 capitalize">{job.status}</td>
//                 <td className="p-3 text-center space-x-2">
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

//       {/* ================= MOBILE CARDS ================= */}
//       <div className="md:hidden space-y-4">
//         {jobs.map((job) => (
//           <div key={job.id} className="border rounded-xl p-4 shadow-sm">
//             <h3 className="font-semibold text-lg">{job.service}</h3>
//             <p className="text-sm text-gray-600 mt-1">
//               Status: <span className="capitalize">{job.status}</span>
//             </p>

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

//       {/* ================= FAILURE MODAL ================= */}
//       {selectedJob && (
//         <div
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
//               কেন কাজটি সম্পন্ন করা যায়নি? (Select a reason)
//             </p>

//             <div className="mt-4 space-y-3">
//               {[
//                 {
//                   value: "Required parts are not available",
//                   label: "Parts পাওয়া যায়নি",
//                 },
//                 {
//                   value: "The problem is more complex than expected",
//                   label: "সমস্যাটি খুব জটিল",
//                 },
//                 {
//                   value: "The customer was not available",
//                   label: "Customer উপস্থিত ছিলেন না",
//                 },
//                 {
//                   value: "The job is unsafe to perform",
//                   label: "কাজটি করা নিরাপদ নয়",
//                 },
//                 {
//                   value: "Other",
//                   label: "Other (অন্যান্য কারণ)",
//                 },
//               ].map((opt) => (
//                 <label
//                   key={opt.value}
//                   className="flex items-start gap-2 cursor-pointer"
//                 >
//                   <input
//                     type="radio"
//                     name="reason"
//                     value={opt.value}
//                     checked={reason === opt.value}
//                     onChange={(e) => setReason(e.target.value)}
//                     className="mt-1"
//                   />
//                   <span className="text-sm text-gray-700">
//                     {opt.label}
//                   </span>
//                 </label>
//               ))}
//             </div>

//             {reason === "Other" && (
//               <textarea
//                 rows="3"
//                 className="w-full mt-4 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
//                 placeholder="অনুগ্রহ করে কারণটি লিখুন..."
//                 value={otherReason}
//                 onChange={(e) => setOtherReason(e.target.value)}
//               />
//             )}

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
//         </div>
//       )}

//       {/* ================= TOAST ================= */}
//       {toast && (
//         <div className="fixed bottom-5 right-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow animate-fadeIn">
//           {toast}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Jobs;
