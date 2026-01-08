import { useEffect, useState } from "react";
import { socketService } from "../data/socket.service";
import { useNotification } from "../context/NotificationContext";

export const useJobs = (mechanicId) => {
  const [jobs, setJobs] = useState([]);
  const { notify } = useNotification();

  useEffect(() => {
    socketService.connect(mechanicId);

    socketService.on("new-job", (job) => {
      setJobs(prev => [job, ...prev]);
      notify("New job assigned!");
    });
  }, [mechanicId]);

  const updateStatus = (id, status) => {
    setJobs(prev =>
      prev.map(j => (j.id === id ? { ...j, status } : j))
    );
    socketService.emit("update-job-status", { id, status });
  };

  return { jobs, updateStatus };
};
