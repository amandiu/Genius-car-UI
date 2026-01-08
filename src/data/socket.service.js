// Toggle this when backend is ready
const USE_REAL_SOCKET = false;

let listeners = {};

export const socketService = {
  connect(mechanicId) {
    console.log("Socket connected as:", mechanicId);

    // 🔥 MOCK: simulate new job every 20 sec
    if (!USE_REAL_SOCKET) {
      setInterval(() => {
        const job = {
          id: "job-" + Date.now(),
          service: "Emergency Repair",
          customer: "New Customer",
          location: "Banani",
          price: 1500,
          status: "assigned",
          mechanicId,
        };
        listeners["new-job"]?.forEach(cb => cb(job));
      }, 20000);
    }
  },

  on(event, callback) {
    listeners[event] = listeners[event] || [];
    listeners[event].push(callback);
  },

  emit(event, payload) {
    console.log("emit:", event, payload);

    // Backend ready হলে এখানেই socket.emit যাবে
  },
};
