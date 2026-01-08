// src/api/jobs.api.js

// 🔴 TEMP: Dummy jobs (remove when backend ready)
const DUMMY_JOBS = [
  {
    id: "job1",
    service: "Oil Change",
    customer: "Rahim",
    location: "Dhanmondi",
    price: 500,
    status: "assigned",
    mechanicId: "mech001",
  },
  {
    id: "job2",
    service: "Brake Repair",
    customer: "Karim",
    location: "Mirpur",
    price: 1200,
    status: "accepted",
    mechanicId: "mech001",
  },
];

/**
 * 🔹 Get jobs assigned to a mechanic
 * @param {string} mechanicId
 */
export const getMechanicJobs = async (mechanicId) => {
  // 🔹 Later replace with:
  // return axios.get(`/api/jobs/mechanic/${mechanicId}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      const jobs = DUMMY_JOBS.filter(
        (job) => job.mechanicId === mechanicId
      );
      resolve(jobs);
    }, 300); // fake latency
  });
};

/**
 * 🔹 Update job status
 * @param {string} jobId
 * @param {string} status
 */
export const updateJobStatus = async (jobId, status) => {
  // 🔹 Later replace with:
  // return axios.patch(`/api/jobs/${jobId}`, { status });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        jobId,
        status,
      });
    }, 200);
  });
};
